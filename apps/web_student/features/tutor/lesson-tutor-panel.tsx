"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel
} from "@/components/ui";
import { useAuthSession } from "@/features/auth/auth-session";
import {
  fetchTutorConversation,
  requestLessonTutorResponse,
  startStudentTutorSession,
  streamLessonTutorResponse
} from "@/services/client/student-api";
import type {
  CreateTutorInteractionResponse,
  GetTutorSessionResponse
} from "@cumbre/schemas";
import type {
  RetrievedContextItem,
  TutorAction,
  TutorContextSnippet,
  TutorResponseType,
  TutorTurn
} from "@cumbre/types";

interface TutorStreamEvent {
  type: "session" | "delta" | "done" | "error";
  payload: Record<string, unknown>;
}

const responseTypeLabels: Record<TutorResponseType, string> = {
  explanation: "Explicacion",
  summary: "Resumen",
  hint: "Pista",
  answer: "Respuesta"
};

const responseTypeClasses: Record<TutorResponseType, string> = {
  explanation: "tutor-message--explanation",
  summary: "tutor-message--summary",
  hint: "tutor-message--hint",
  answer: "tutor-message--answer"
};

const retrievalSourceLabels: Record<string, string> = {
  lesson: "Leccion",
  topic: "Tema",
  learning_path: "Ruta",
  related_lesson: "Leccion relacionada",
  content_item: "Recurso",
  concept: "Concepto",
  graph_explanation: "Grafo",
  adaptive_signal: "Adaptativo",
  progress_signal: "Progreso",
  tutor_memory: "Conversacion"
};

export function LessonTutorPanel({
  learnerUserId,
  learningPathId,
  topicId,
  topicTitle,
  lessonId,
  lessonTitle,
  lessonSummary
}: {
  learnerUserId: string;
  learningPathId?: string;
  topicId: string;
  topicTitle: string;
  lessonId: string;
  lessonTitle: string;
  lessonSummary?: string;
}) {
  const auth = useAuthSession();
  const lessonKey = `${topicId}:${lessonId}`;
  const persistedTutorSessionId = auth.session?.tutorSessionByLesson?.[lessonKey];
  const [isOpen, setIsOpen] = useState(Boolean(persistedTutorSessionId));
  const [isBootstrapping, setIsBootstrapping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHydratingConversation, setIsHydratingConversation] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [panelError, setPanelError] = useState<string | null>(null);
  const [tutorSessionId, setTutorSessionId] = useState<string | null>(
    persistedTutorSessionId ?? null
  );
  const [draft, setDraft] = useState("");
  const [conversationLoaded, setConversationLoaded] = useState(false);
  const [lastAction, setLastAction] = useState<{
    action: TutorAction;
    prompt?: string;
    useStreaming?: boolean;
  } | null>(null);
  const [transcript, setTranscript] = useState<TutorTurn[]>([]);

  const hasPersistedConversation = transcript.length > 0 || Boolean(tutorSessionId);
  const transcriptSummary = useMemo(() => {
    const tutorTurns = transcript.filter((entry) => entry.actor === "tutor");
    return tutorTurns.at(-1);
  }, [transcript]);

  useEffect(() => {
    if (!persistedTutorSessionId || conversationLoaded) {
      return;
    }

    void hydrateConversation({
      preferredTutorSessionId: persistedTutorSessionId,
      autoOpen: true
    });
  }, [persistedTutorSessionId, conversationLoaded]);

  async function openTutorPanel() {
    setIsOpen(true);
    setPanelError(null);

    if (conversationLoaded) {
      return;
    }

    await hydrateConversation({
      preferredTutorSessionId: tutorSessionId ?? persistedTutorSessionId ?? undefined,
      autoOpen: true
    });
  }

  async function hydrateConversation({
    preferredTutorSessionId,
    autoOpen
  }: {
    preferredTutorSessionId?: string;
    autoOpen?: boolean;
  }) {
    setIsHydratingConversation(true);

    try {
      const response = await fetchTutorConversation({
        learnerUserId,
        lessonId,
        topicId,
        tutorSessionId: preferredTutorSessionId
      });

      applyHydratedConversation(response);
      setConversationLoaded(true);

      if (autoOpen && (response.tutorSession || response.turns.length)) {
        setIsOpen(true);
      }
    } catch (error) {
      setPanelError(
        error instanceof Error ? error.message : "No fue posible restaurar la sesion del tutor."
      );
    } finally {
      setIsHydratingConversation(false);
    }
  }

  async function ensureTutorSession() {
    if (tutorSessionId) {
      return tutorSessionId;
    }

    setIsBootstrapping(true);

    try {
      const response = await startStudentTutorSession({
        learnerUserId,
        learningPathId,
        lessonId,
        topicId,
        tutorMode: "guided",
        goalSummary: `Apoyar al estudiante en ${lessonTitle}.`
      });

      rememberTutorSession(response.tutorSession.id);
      return response.tutorSession.id;
    } finally {
      setIsBootstrapping(false);
    }
  }

  async function submitTutorPrompt(
    action: TutorAction,
    prompt?: string,
    useStreaming = false
  ) {
    const normalizedPrompt = prompt?.trim();

    if (action === "ask_question" && !normalizedPrompt) {
      setPanelError("Escribe una pregunta antes de enviarla al tutor.");
      return;
    }

    setPanelError(null);
    setIsSubmitting(true);
    setIsStreaming(useStreaming);
    setLastAction({
      action,
      prompt: normalizedPrompt,
      useStreaming
    });

    try {
      const activeTutorSessionId = await ensureTutorSession();

      if (useStreaming) {
        await streamTutorResponse(action, normalizedPrompt, activeTutorSessionId);
      } else {
        const response = await requestLessonTutorResponse({
          learnerUserId,
          tutorSessionId: activeTutorSessionId,
          learningPathId,
          lessonId,
          topicId,
          action,
          prompt: normalizedPrompt
        });

        applyInteractionResponse(response);
      }

      setDraft("");
    } catch (error) {
      setPanelError(
        error instanceof Error ? error.message : "No fue posible obtener una respuesta del tutor."
      );
    } finally {
      setIsSubmitting(false);
      setIsStreaming(false);
    }
  }

  async function streamTutorResponse(
    action: TutorAction,
    prompt: string | undefined,
    activeTutorSessionId: string
  ) {
    const optimisticLearnerTurn = buildOptimisticLearnerTurn(action, prompt, activeTutorSessionId);
    const optimisticTutorTurnId = `streaming-${Date.now()}`;
    const now = new Date().toISOString();

    setTranscript((currentTranscript) => [
      ...currentTranscript,
      optimisticLearnerTurn,
      {
        id: optimisticTutorTurnId,
        createdAt: now,
        updatedAt: now,
        tutorSessionId: activeTutorSessionId,
        actor: "tutor",
        action,
        responseType: mapActionToResponseType(action),
        title: "Tutor is responding",
        content: "",
        lessonId,
        topicId
      }
    ]);

    let finalInteraction: CreateTutorInteractionResponse | null = null;

    await streamLessonTutorResponse<TutorStreamEvent>(
      {
        learnerUserId,
        tutorSessionId: activeTutorSessionId,
        learningPathId,
        lessonId,
        topicId,
        action,
        prompt
      },
      (event) => {
        if (event.type === "session") {
          const streamedTutorSessionId = String(event.payload.tutorSessionId ?? activeTutorSessionId);
          rememberTutorSession(streamedTutorSessionId);
          return;
        }

        if (event.type === "delta") {
          const delta = String(event.payload.content ?? "");
          setTranscript((currentTranscript) =>
            currentTranscript.map((entry) =>
              entry.id === optimisticTutorTurnId
                ? {
                    ...entry,
                    content: `${entry.content}${delta}`.trimStart()
                  }
                : entry
            )
          );
          return;
        }

        if (event.type === "done") {
          finalInteraction = event.payload.interaction as CreateTutorInteractionResponse;
          return;
        }

        if (event.type === "error") {
          throw new Error(String(event.payload.message ?? "Fallo el streaming del tutor."));
        }
      }
    );

    if (!finalInteraction) {
      return;
    }

    const completedInteraction: CreateTutorInteractionResponse = finalInteraction;

    setTranscript((currentTranscript) => {
      const withoutOptimisticEntries = currentTranscript.filter(
        (entry) => entry.id !== optimisticLearnerTurn.id && entry.id !== optimisticTutorTurnId
      );

      return [
        ...withoutOptimisticEntries,
        completedInteraction.learnerTurn,
        completedInteraction.tutorTurn
      ];
    });

    rememberTutorSession(completedInteraction.tutorSession.id);
  }

  function applyInteractionResponse(response: CreateTutorInteractionResponse) {
    rememberTutorSession(response.tutorSession.id);
    setTranscript((currentTranscript) => [
      ...currentTranscript,
      response.learnerTurn,
      response.tutorTurn
    ]);
  }

  function applyHydratedConversation(response: GetTutorSessionResponse) {
    setTutorSessionId(response.tutorSession?.id ?? null);
    setTranscript(response.turns);

    if (response.tutorSession?.id) {
      rememberTutorSession(response.tutorSession.id);
    }
  }

  function rememberTutorSession(nextTutorSessionId: string) {
    setTutorSessionId(nextTutorSessionId);
    auth.patchSession({
      tutorSessionByLesson: {
        ...(auth.session?.tutorSessionByLesson ?? {}),
        [lessonKey]: nextTutorSessionId
      }
    });
  }

  return (
    <ContentCard
      title="Tutor IA de la leccion"
      subtitle={`Contextualizado en ${lessonTitle} y ${topicTitle}.`}
      accent="mint"
    >
      {!isOpen ? (
        <EmptyState
          title={hasPersistedConversation ? "Retoma tu sesion con el tutor." : "Abre el tutor cuando necesites apoyo."}
          description={
            hasPersistedConversation
              ? "Tu sesion del tutor esta persistida y lista para continuar desde el ultimo intercambio."
              : lessonSummary ??
                "Pide explicaciones, resumenes, pistas o una respuesta libre basada en la leccion actual."
          }
          actionLabel={hasPersistedConversation ? "Retomar tutor" : "Abrir tutor"}
          actionTestId="student-open-tutor"
          onAction={() => {
            void openTutorPanel();
          }}
        />
      ) : null}

      {isOpen && (isBootstrapping || isHydratingConversation) ? (
        <LoadingPanel
          message="Preparando el tutor..."
          detail={
            isHydratingConversation
              ? "Restaurando la conversacion persistida para esta leccion."
              : "Creando una sesion del tutor contextualizada para este tema y leccion."
          }
        />
      ) : null}

      {isOpen && !isBootstrapping && !isHydratingConversation ? (
        <>
          <div className="tutor-panel__header">
            <div className="tutor-panel__intro">
              <p className="muted-copy">
                El tutor mantiene continuidad entre recargas y usa contexto de leccion,
                tema y ruta para cada respuesta.
              </p>
              {transcriptSummary ? (
                <div className="tutor-summary-card">
                  <p className="tutor-summary-card__eyebrow">
                    {responseTypeLabels[transcriptSummary.responseType ?? "answer"]}
                  </p>
                  <strong>{transcriptSummary.title ?? "Ultima respuesta del tutor"}</strong>
                  {transcriptSummary.summary ? <p>{transcriptSummary.summary}</p> : null}
                </div>
              ) : null}
            </div>
            <div className="tutor-panel__actions">
              <button
                className="button button--ghost"
                onClick={() => void submitTutorPrompt("explain_concept")}
                type="button"
                disabled={isSubmitting}
              >
                Explicar este concepto
              </button>
              <button
                className="button button--ghost"
                onClick={() => void submitTutorPrompt("summarize_lesson")}
                type="button"
                disabled={isSubmitting}
              >
                Resumir esta leccion
              </button>
              <button
                className="button button--ghost"
                onClick={() => void submitTutorPrompt("give_hint")}
                type="button"
                disabled={isSubmitting}
              >
                Darme una pista
              </button>
            </div>
          </div>

          <form
            className="tutor-panel__composer"
            onSubmit={(event) => {
              event.preventDefault();
              void submitTutorPrompt("ask_question", draft, true);
            }}
          >
            <label className="field">
              <span>Preguntar al tutor</span>
              <input
                data-testid="student-tutor-input"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Que parte de esta leccion deberia entender primero?"
              />
            </label>
            <button
              className="button"
              data-testid="student-tutor-send"
              type="submit"
              disabled={isSubmitting}
            >
              {isStreaming ? "Transmitiendo..." : isSubmitting ? "Pensando..." : "Enviar pregunta"}
            </button>
          </form>

          {panelError ? (
            <ErrorPanel
              message={panelError}
              onRetry={
                lastAction
                  ? () =>
                      void submitTutorPrompt(
                        lastAction.action,
                        lastAction.prompt,
                        lastAction.useStreaming
                      )
                  : undefined
              }
            />
          ) : null}

          {!transcript.length && !isSubmitting ? (
            <EmptyState
              title="El tutor esta listo."
              description="Comienza con un resumen, pide una pista o escribe una pregunta libre para obtener la primera respuesta contextualizada."
            />
          ) : null}

          {transcript.length ? (
            <div className="tutor-thread" data-testid="student-tutor-thread">
              {transcript.map((entry) => (
                <article
                  key={entry.id}
                  className={[
                    "tutor-message",
                    entry.actor === "tutor"
                      ? "tutor-message--tutor"
                      : "tutor-message--learner",
                    entry.actor === "tutor" && entry.responseType
                      ? responseTypeClasses[entry.responseType]
                      : ""
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="tutor-message__heading">
                    <p className="tutor-message__eyebrow">
                      {entry.actor === "tutor" ? "Tutor" : "Estudiante"}
                    </p>
                    {entry.actor === "tutor" ? (
                      <span className="tutor-chip">
                        {responseTypeLabels[entry.responseType ?? "answer"]}
                      </span>
                    ) : null}
                  </div>
                  {entry.title ? <h4>{entry.title}</h4> : null}
                  {entry.summary ? <p className="muted-copy">{entry.summary}</p> : null}
                  <p>{entry.content}</p>
                  {entry.retrievalContext?.items.length ? (
                    <div className="tutor-retrieval-panel">
                      <p className="tutor-message__eyebrow">Contexto recuperado</p>
                      {entry.retrievalContext.explanation.length ? (
                        <ul className="detail-list">
                          {entry.retrievalContext.explanation.map((line) => (
                            <li key={`${entry.id}-${line}`}>{line}</li>
                          ))}
                        </ul>
                      ) : null}
                      <div className="tutor-context-grid">
                        {entry.retrievalContext.items.map((item) => (
                          <TutorRetrievalCard key={`${entry.id}-${item.id}`} item={item} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {entry.contextSnippets?.length ? (
                    <div className="tutor-context-grid">
                      {entry.contextSnippets.map((snippet) => (
                        <TutorContextCard key={`${entry.id}-${snippet.id}`} snippet={snippet} />
                      ))}
                    </div>
                  ) : null}
                  {entry.references?.length ? (
                    <ul className="tutor-message__references">
                      {entry.references.map((reference) => (
                        <li key={`${entry.id}-${reference.entityType}-${reference.entityId}`}>
                          <strong>{reference.entityType}</strong>: {reference.label}
                          {reference.excerpt ? ` - ${reference.excerpt}` : ""}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {entry.nextSteps?.length ? (
                    <div className="tutor-next-steps">
                      <p className="tutor-message__eyebrow">Siguientes pasos</p>
                      <ul className="detail-list">
                        {entry.nextSteps.map((nextStep) => (
                          <li key={`${entry.id}-${nextStep}`}>{nextStep}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {entry.suggestedPrompts?.length ? (
                    <div className="tutor-message__prompts">
                      {entry.suggestedPrompts.map((suggestedPrompt) => (
                        <button
                          key={`${entry.id}-${suggestedPrompt}`}
                          className="button button--ghost"
                          type="button"
                          onClick={() =>
                            void submitTutorPrompt("ask_question", suggestedPrompt, true)
                          }
                          disabled={isSubmitting}
                        >
                          {suggestedPrompt}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}

          {isSubmitting ? (
            <LoadingPanel
              message={
                isStreaming
                  ? "El tutor esta transmitiendo una respuesta contextualizada..."
                  : "El tutor esta preparando una respuesta contextualizada..."
              }
              detail="Usando el contexto actual de leccion, tema y ruta de aprendizaje."
            />
          ) : null}
        </>
      ) : null}
    </ContentCard>
  );
}

function mapActionToResponseType(action: TutorAction): TutorResponseType {
  if (action === "summarize_lesson") {
    return "summary";
  }

  if (action === "give_hint") {
    return "hint";
  }

  if (action === "ask_question") {
    return "answer";
  }

  return "explanation";
}

function buildOptimisticLearnerTurn(
  action: TutorAction,
  prompt: string | undefined,
  tutorSessionId: string
): TutorTurn {
  const now = new Date().toISOString();

  return {
    id: `optimistic-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
    tutorSessionId,
    actor: "learner",
    action,
    content:
      prompt ??
      (action === "summarize_lesson"
        ? "Resume esta leccion."
        : action === "give_hint"
          ? "Dame una pista."
          : action === "ask_question"
            ? "Tengo una pregunta."
            : "Explica este concepto.")
  };
}

function TutorContextCard({ snippet }: { snippet: TutorContextSnippet }) {
  return (
    <article className="tutor-context-card">
      <p className="tutor-message__eyebrow">{snippet.snippetType.replaceAll("_", " ")}</p>
      <strong>{snippet.title}</strong>
      <p>{snippet.content}</p>
    </article>
  );
}

function TutorRetrievalCard({ item }: { item: RetrievedContextItem }) {
  return (
    <article className="tutor-context-card tutor-context-card--retrieval">
      <p className="tutor-message__eyebrow">
        {retrievalSourceLabels[item.sourceType] ?? item.sourceType.replaceAll("_", " ")}
      </p>
      <strong>{item.title}</strong>
      <p>{item.content}</p>
      <p className="muted-copy">{item.rationale}</p>
    </article>
  );
}
