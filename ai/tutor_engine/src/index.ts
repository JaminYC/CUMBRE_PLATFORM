import type {
  CreateTutorInteractionRequest,
  CreateTutorInteractionResponse,
  GetTutorSessionRequest,
  GetTutorSessionResponse,
  StartTutorSessionRequest,
  StartTutorSessionResponse
} from "@cumbre/schemas";
import {
  buildFallbackGenerationMetadata,
  generateJsonObject
} from "@cumbre/llm-runtime";
import {
  assembleTutorPrompt,
  retrieveTutorContext,
  toTutorContextSnippets,
  toTutorReferences
} from "@cumbre/retrieval-engine";
import type {
  AdaptiveGuidance,
  ContentItem,
  KnowledgeGraphInsight,
  LearningPath,
  Lesson,
  NextBestAction,
  RetrievedContextBundle,
  Topic,
  TutorAction,
  TutorContextSnippet,
  TutorReference,
  TutorReply,
  TutorResponseType,
  TutorTurn
} from "@cumbre/types";
import { createPrismaClient } from "./repositories/prisma-client";
import { TutorSessionRepository } from "./repositories/tutor-session-repository";

export const moduleName = "tutor_engine";

interface TutorGroundingContext {
  lesson: Lesson;
  topic: Topic;
  learningPath?: LearningPath;
  relatedLessons?: Lesson[];
  contentItems?: ContentItem[];
  graphInsight?: KnowledgeGraphInsight;
  adaptiveContext?: {
    nextBestAction?: NextBestAction;
    adaptiveGuidance?: AdaptiveGuidance[];
    progressPercent?: number;
  };
}

export interface TutorStreamEvent {
  type: "session" | "delta" | "done" | "error";
  payload: Record<string, unknown>;
}

export interface ListRecentTutorTurnsRequest {
  learnerUserId: string;
  learningPathId?: string;
  lessonId?: string;
  topicId?: string;
  limit?: number;
}

const tutorRepository = new TutorSessionRepository(createPrismaClient());

export function describeModule(): string {
  return "Provee comportamiento de tutor persistente y contextualizado en la leccion, con continuidad de conversacion y salida lista para streaming.";
}

export async function startTutorSession(
  request: StartTutorSessionRequest,
  context: TutorGroundingContext
): Promise<StartTutorSessionResponse> {
  const tutorSession = await tutorRepository.createSession({
    learnerUserId: request.learnerUserId,
    status: "active",
    tutorMode: request.tutorMode ?? "guided",
    learningPathId: request.learningPathId,
    lessonId: request.lessonId ?? context.lesson.id,
    topicIds: [request.topicId ?? context.topic.id],
    goalSummary:
      request.goalSummary ??
      `Apoyar al estudiante en ${context.lesson.title} dentro de ${context.topic.title}.`,
    metadata: {
      tags: ["phase-6-5", "lesson-grounded", "persisted"],
      attributes: {
        lessonTitle: context.lesson.title,
        topicTitle: context.topic.title,
        learningPathTitle: context.learningPath?.title ?? "",
        relatedLessonCount: context.relatedLessons?.length ?? 0
      }
    }
  });

  return {
    tutorSession
  };
}

export async function getTutorSession(
  request: GetTutorSessionRequest
): Promise<GetTutorSessionResponse> {
  return tutorRepository.findConversation(request);
}

export async function listRecentTutorTurns(
  request: ListRecentTutorTurnsRequest
): Promise<TutorTurn[]> {
  return tutorRepository.listRecentTurns(request);
}

export async function createTutorInteraction(
  request: CreateTutorInteractionRequest,
  context: TutorGroundingContext
): Promise<CreateTutorInteractionResponse> {
  const conversation = await ensureTutorSession(request, context);
  const retrievedContext = retrieveTutorContext({
    action: request.action,
    prompt: request.prompt,
    lesson: context.lesson,
    topic: context.topic,
    learningPath: context.learningPath,
    relatedLessons: context.relatedLessons,
    contentItems: context.contentItems,
    graphInsight: context.graphInsight,
    recentTutorTurns: conversation.turns,
    adaptiveContext: context.adaptiveContext
  });
  const promptAssembly = assembleTutorPrompt({
    action: request.action,
    prompt: request.prompt,
    lesson: context.lesson,
    topic: context.topic,
    learningPath: context.learningPath,
    retrievedContext
  });
  const learnerTurn = buildLearnerTurn(
    request,
    context,
    conversation.tutorSession.id,
    retrievedContext
  );
  const reply = await buildTutorReply(
    request.action,
    request.prompt,
    context,
    retrievedContext,
    promptAssembly
  );
  const tutorTurn = buildTutorTurn(
    reply,
    request,
    context,
    conversation.tutorSession.id,
    retrievedContext
  );

  return tutorRepository.persistInteraction({
    tutorSessionId: conversation.tutorSession.id,
    learnerTurn,
    tutorTurn
  });
}

export async function* streamTutorInteraction(
  request: CreateTutorInteractionRequest,
  context: TutorGroundingContext
): AsyncGenerator<TutorStreamEvent> {
  const persistedInteraction = await createTutorInteraction(request, context);

  yield {
    type: "session",
    payload: {
      tutorSessionId: persistedInteraction.tutorSession.id,
      tutorTurnId: persistedInteraction.tutorTurn.id,
      responseType: persistedInteraction.reply.responseType,
      title: persistedInteraction.reply.title
    }
  };

  for (const chunk of chunkText(persistedInteraction.reply.answer)) {
    yield {
      type: "delta",
      payload: {
        content: chunk
      }
    };
  }

  yield {
    type: "done",
    payload: {
      interaction: persistedInteraction
    }
  };
}

async function ensureTutorSession(
  request: CreateTutorInteractionRequest,
  context: TutorGroundingContext
): Promise<{ tutorSession: StartTutorSessionResponse["tutorSession"]; turns: TutorTurn[] }> {
  const existingConversation = await tutorRepository.findConversation({
    learnerUserId: request.learnerUserId,
    lessonId: request.lessonId,
    topicId: request.topicId,
    tutorSessionId: request.tutorSessionId
  });

  if (existingConversation.tutorSession) {
    return {
      tutorSession: existingConversation.tutorSession,
      turns: existingConversation.turns
    };
  }

  const { tutorSession } = await startTutorSession(
    {
      learnerUserId: request.learnerUserId,
      learningPathId: request.learningPathId,
      lessonId: request.lessonId,
      topicId: request.topicId,
      tutorMode: "guided",
      goalSummary: `Help the learner progress through ${context.lesson.title}.`
    },
    context
  );

  return {
    tutorSession,
    turns: []
  };
}

async function buildTutorReply(
  action: TutorAction,
  prompt: string | undefined,
  context: TutorGroundingContext,
  retrievedContext: RetrievedContextBundle,
  promptAssembly: ReturnType<typeof assembleTutorPrompt>
) : Promise<TutorReply> {
  const fallbackReply = buildFallbackTutorReply(
    action,
    prompt,
    context,
    retrievedContext,
    promptAssembly
  );
  const llmResult = await generateJsonObject<{
    title?: string;
    summary?: string;
    answer?: string;
    suggestedPrompts?: string[];
    nextSteps?: string[];
  }>({
    taskName: `tutor_engine:${action}`,
    grounding: retrievedContext,
    systemInstructions: [
      buildTutorGoalInstruction(action),
      "Devuelve JSON con las claves: title, summary, answer, suggestedPrompts, nextSteps.",
      "Mantén la respuesta concisa, educativa y bien anclada en el contexto recuperado.",
      "Si aparecen prerequisitos en el contexto recuperado, menciónalos de forma explicita.",
      "Responde en espanol."
    ],
    userInstruction: [
      `Accion del estudiante: ${action}`,
      `Pregunta o accion del estudiante: ${resolveLearnerPrompt({ action, prompt } as CreateTutorInteractionRequest)}`,
      "Contexto ensamblado para el prompt:",
      ...promptAssembly.contextOutline,
      "Reglas de contextualizacion:",
      ...promptAssembly.groundingRules
    ].join("\n"),
    parse: (value) =>
      (value ?? {}) as {
        title?: string;
        summary?: string;
        answer?: string;
        suggestedPrompts?: string[];
        nextSteps?: string[];
      }
  });

  if (!llmResult.ok) {
    return {
      ...fallbackReply,
      generationMetadata: buildFallbackGenerationMetadata({
        grounding: retrievedContext,
        error: llmResult.error
      })
    };
  }

  return {
    ...fallbackReply,
    title: normalizeOptionalText(llmResult.data.title) || fallbackReply.title,
    summary: normalizeOptionalText(llmResult.data.summary) || fallbackReply.summary,
    answer: normalizeOptionalText(llmResult.data.answer) || fallbackReply.answer,
    suggestedPrompts: normalizePromptList(
      llmResult.data.suggestedPrompts,
      fallbackReply.suggestedPrompts
    ),
    nextSteps: normalizePromptList(llmResult.data.nextSteps, fallbackReply.nextSteps),
    generationMetadata: llmResult.metadata
  };
}

function buildFallbackTutorReply(
  action: TutorAction,
  prompt: string | undefined,
  context: TutorGroundingContext,
  retrievedContext: RetrievedContextBundle,
  promptAssembly: ReturnType<typeof assembleTutorPrompt>
): TutorReply {
  const references = buildReferences(context, retrievedContext);
  const contextSnippets = buildContextSnippets(context, retrievedContext);
  const lessonObjectives =
    context.lesson.learningObjectiveIds?.length
      ? context.lesson.learningObjectiveIds.join(", ")
      : "the main lesson objective";
  const lessonSummary =
    context.lesson.summary ??
    `${context.lesson.title} belongs to ${context.topic.title} and focuses on ${lessonObjectives}.`;
  const prerequisiteSummary = context.graphInsight?.prerequisiteConcepts.length
    ? `Key prerequisites include ${context.graphInsight.prerequisiteConcepts
        .map((concept) => concept.title)
        .join(", ")}.`
    : "";
  const nextSteps = buildNextSteps(context, retrievedContext);
  const retrievalSummary = buildRetrievalSummary(retrievedContext);
  const continuitySummary =
    promptAssembly.continuitySummary &&
    `Continuity signal: ${promptAssembly.continuitySummary}`;

  if (action === "summarize_lesson") {
    return {
      responseType: "summary",
      title: "Resumen de la leccion",
      summary: `Un resumen compacto de ${context.lesson.title}.`,
      answer: [
        `${context.lesson.title} forma parte de ${context.topic.title}.`,
        lessonSummary,
        prerequisiteSummary,
        retrievalSummary,
        `Primero enfocate en ${lessonObjectives}; luego conecta la idea con la ruta de aprendizaje${context.learningPath ? ` ${context.learningPath.title}` : ""}.`,
        continuitySummary
      ]
        .filter(Boolean)
        .join(" "),
      suggestedPrompts: [
        "Explica el concepto mas dificil de aqui",
        "Dame una pista para el primer paso",
        "Que deberia recordar despues de esta leccion?"
      ],
      nextSteps,
      references,
      contextSnippets,
      retrievalContext: retrievedContext
    };
  }

  if (action === "give_hint") {
    return {
      responseType: "hint",
      title: "Pista",
      summary: "Un empujon que mantiene al estudiante avanzando sin revelar toda la respuesta.",
      answer: [
        `Empieza por la meta de la leccion: ${lessonObjectives}.`,
        `Usa el resumen del tema como ancla: ${context.topic.summary ?? context.topic.title}.`,
        prerequisiteSummary,
        retrievalSummary,
        "Intenta explicar la idea con tus propias palabras antes de buscar una solucion completa.",
        continuitySummary
      ]
        .filter(Boolean)
        .join(" "),
      suggestedPrompts: [
        "Puedes hacer esa pista mas simple?",
        "Que error comun deberia evitar?",
        "Me das un ejemplo en vez de eso?"
      ],
      nextSteps,
      references,
      contextSnippets,
      retrievalContext: retrievedContext
    };
  }

  if (action === "ask_question") {
    const groundedPrompt = prompt?.trim() || "the current lesson";

    return {
      responseType: "answer",
      title: "Respuesta contextualizada",
      summary: `Respuesta a la pregunta del estudiante en el contexto de ${context.lesson.title}.`,
      answer: buildQuestionAnswer(
        groundedPrompt,
        context,
        lessonObjectives,
        lessonSummary,
        retrievedContext,
        promptAssembly
      ),
      suggestedPrompts: [
        "Resume esto con lenguaje mas simple",
        "Como se conecta esto con el tema?",
        "Dame una pista en vez de la respuesta completa"
      ],
      nextSteps,
      references,
      contextSnippets,
      retrievalContext: retrievedContext
    };
  }

  return {
    responseType: "explanation",
    title: "Explicacion del concepto",
    summary: `Una explicacion contextualizada en la leccion para ${context.lesson.title}.`,
    answer: [
      `Piensa en ${context.lesson.title} como una pieza enfocada dentro de ${context.topic.title}.`,
      lessonSummary,
      prerequisiteSummary,
      retrievalSummary,
      `La clave es conectar el concepto con ${lessonObjectives} y luego aplicarlo a un ejemplo pequeno de la leccion.`,
      continuitySummary
    ]
      .filter(Boolean)
      .join(" "),
    suggestedPrompts: [
      "Resume esta leccion",
      "Dame una pista",
      "Haz una pregunta de seguimiento"
    ],
    nextSteps,
    references,
    contextSnippets,
    retrievalContext: retrievedContext
  };
}

function buildTutorGoalInstruction(action: TutorAction) {
  if (action === "summarize_lesson") {
    return "Resume la leccion con fuerte apoyo en el contexto y lenguaje instruccional claro.";
  }

  if (action === "give_hint") {
    return "Da una pista util sin resolver por completo la tarea.";
  }

  if (action === "ask_question") {
    return "Responde la pregunta del estudiante de forma directa, pero mantente anclado al contexto recuperado.";
  }

  return "Explica el concepto de forma clara y concreta usando el contexto recuperado de la leccion.";
}

function buildQuestionAnswer(
  prompt: string,
  context: TutorGroundingContext,
  lessonObjectives: string,
  lessonSummary: string,
  retrievedContext: RetrievedContextBundle,
  promptAssembly: ReturnType<typeof assembleTutorPrompt>
) {
  const normalizedPrompt = prompt.toLowerCase();
  const prerequisiteSummary = context.graphInsight?.prerequisiteConcepts.length
    ? `Relevant prerequisites include ${context.graphInsight.prerequisiteConcepts
        .map((concept) => concept.title)
        .join(", ")}.`
    : "";
  const retrievalSummary = buildRetrievalSummary(retrievedContext);
  const continuitySummary =
    promptAssembly.continuitySummary &&
    `This also connects to the recent conversation: ${promptAssembly.continuitySummary}`;

  if (normalizedPrompt.includes("objective")) {
    return [
      `The lesson objectives center on ${lessonObjectives}. Use that as the success check for your work in ${context.lesson.title}.`,
      retrievalSummary
    ]
      .filter(Boolean)
      .join(" ");
  }

  if (normalizedPrompt.includes("summary") || normalizedPrompt.includes("what is this")) {
    return `${context.lesson.title} can be understood this way: ${lessonSummary} ${retrievalSummary}`.trim();
  }

  if (normalizedPrompt.includes("time") || normalizedPrompt.includes("long")) {
    return `Plan around ${context.lesson.estimatedDurationMinutes ?? 20} minutes for ${context.lesson.title}, but prioritize understanding the main concept before speed.`;
  }

  if (normalizedPrompt.includes("skill")) {
    return `This lesson is most related to these skill anchors: ${context.lesson.skillIds?.join(", ") || context.topic.skillIds?.join(", ") || context.topic.title}.`;
  }

  if (normalizedPrompt.includes("next")) {
    return [
      `After ${context.lesson.title}, keep the thread of ${context.topic.title} in mind and compare this lesson against the next practice step or related lesson in the topic.`,
      retrievalSummary
    ]
      .filter(Boolean)
      .join(" ");
  }

  if (normalizedPrompt.includes("prerequisite") || normalizedPrompt.includes("before")) {
    return context.graphInsight?.prerequisiteConcepts.length
      ? `Before going deeper, review ${context.graphInsight.prerequisiteConcepts
          .map((concept) => concept.title)
          .join(", ")}. Those concepts support the lesson's main reasoning path.`
      : `This lesson does not currently expose explicit prerequisite concepts, so stay anchored on ${lessonObjectives}.`;
  }

  return [
    `Your question was: "${prompt}".`,
    `Staying grounded in ${context.lesson.title}, start from this lesson summary: ${lessonSummary}`,
    prerequisiteSummary,
    retrievalSummary,
    continuitySummary,
    `If you still feel blocked, ask for a hint or a shorter summary focused on ${lessonObjectives}.`
  ]
    .filter(Boolean)
    .join(" ");
}

function resolveLearnerPrompt(request: CreateTutorInteractionRequest) {
  if (request.prompt?.trim()) {
    return request.prompt.trim();
  }

  if (request.action === "summarize_lesson") {
    return "Summarize this lesson.";
  }

  if (request.action === "give_hint") {
    return "Give me a hint.";
  }

  if (request.action === "ask_question") {
    return "I have a question about this lesson.";
  }

  return "Explain this concept.";
}

/**
 * `values` sale de la respuesta del modelo, asi que su tipo es una promesa
 * que nadie firmo: puede llegar un texto suelto, un objeto o nada.
 *
 * Antes se confiaba en la anotacion y se llamaba `.filter` directamente. Con
 * una respuesta de forma inesperada eso lanza "(values ?? []).filter is not a
 * function" y tumba la interaccion entera —cuando lo correcto es quedarse sin
 * sugerencias y responder igual—. Se veia recien ahora porque en produccion
 * el tutor fallaba antes de llegar hasta aqui.
 *
 * Cada elemento ya se comprobaba uno por uno; faltaba comprobar el envase.
 */
function normalizePromptList(
  values: unknown,
  fallbackValues: string[] | undefined
) {
  const normalizedValues = (Array.isArray(values) ? values : [])
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean)
    .slice(0, 5);

  if (normalizedValues.length) {
    return normalizedValues;
  }

  return fallbackValues;
}

function normalizeOptionalText(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined;
}

function buildReferences(
  context: TutorGroundingContext,
  retrievedContext: RetrievedContextBundle
): TutorReference[] {
  const references: TutorReference[] = [
    {
      entityType: "topic",
      entityId: context.topic.id,
      label: context.topic.title,
      excerpt: context.topic.summary
    },
    {
      entityType: "lesson",
      entityId: context.lesson.id,
      label: context.lesson.title,
      excerpt: context.lesson.summary
    }
  ];

  if (context.learningPath) {
    references.push({
      entityType: "learning_path",
      entityId: context.learningPath.id,
      label: context.learningPath.title,
      excerpt: context.learningPath.summary
    });
  }

  for (const concept of context.graphInsight?.prerequisiteConcepts.slice(0, 2) ?? []) {
    references.push({
      entityType: "concept",
      entityId: concept.id,
      label: concept.title,
      excerpt: concept.summary
    });
  }

  for (const reference of toTutorReferences(retrievedContext)) {
    if (
      references.some(
        (existingReference) =>
          existingReference.entityType === reference.entityType &&
          existingReference.entityId === reference.entityId
      )
    ) {
      continue;
    }

    references.push(reference);
  }

  return references.slice(0, 6);
}

function buildContextSnippets(
  context: TutorGroundingContext,
  retrievedContext: RetrievedContextBundle
): TutorContextSnippet[] {
  const essentialSnippets: TutorContextSnippet[] = [
    {
      id: `${context.lesson.id}-summary`,
      snippetType: "lesson_summary",
      title: "Lesson summary",
      content:
        context.lesson.summary ??
        `A focused lesson inside ${context.topic.title}.`,
      entityType: "lesson",
      entityId: context.lesson.id
    },
    {
      id: `${context.topic.id}-summary`,
      snippetType: "topic_summary",
      title: "Topic context",
      content:
        context.topic.summary ??
        `${context.topic.title} frames the lesson context.`,
      entityType: "topic",
      entityId: context.topic.id
    }
  ];
  return [...essentialSnippets, ...toTutorContextSnippets(retrievedContext)].slice(0, 6);
}

function buildNextSteps(
  context: TutorGroundingContext,
  retrievedContext: RetrievedContextBundle
) {
  const firstRelatedLesson = context.relatedLessons?.find(
    (candidateLesson) => candidateLesson.id !== context.lesson.id
  );
  const nextSteps = [
    `Restate the main idea of ${context.lesson.title} in your own words.`,
    `Check how this lesson connects back to ${context.topic.title}.`
  ];

  if (firstRelatedLesson) {
    nextSteps.push(
      `Compare this lesson with ${firstRelatedLesson.title} to reinforce the topic sequence.`
    );
  }

  if (context.learningPath) {
    nextSteps.push(`Return to ${context.learningPath.title} to see where this lesson fits in the path.`);
  }

  if (context.graphInsight?.recommendedReviewConcept) {
    nextSteps.push(
      `Review ${context.graphInsight.recommendedReviewConcept.title} if the lesson still feels unstable.`
    );
  }

  if (context.adaptiveContext?.nextBestAction?.actionLabel) {
    nextSteps.push(
      `${context.adaptiveContext.nextBestAction.actionLabel}: ${context.adaptiveContext.nextBestAction.title}.`
    );
  }

  const contentSupport = retrievedContext.items.find(
    (item) => item.sourceType === "content_item"
  );

  if (contentSupport) {
    nextSteps.push(`Review ${contentSupport.title} if you want one more grounded example before moving on.`);
  }

  return nextSteps;
}

function buildLearnerTurn(
  request: CreateTutorInteractionRequest,
  context: TutorGroundingContext,
  tutorSessionId: string,
  retrievedContext: RetrievedContextBundle
): Omit<TutorTurn, "id" | "createdAt" | "updatedAt"> {
  return {
    tutorSessionId,
    actor: "learner",
    action: request.action,
    content: resolveLearnerPrompt(request),
    lessonId: context.lesson.id,
    topicId: context.topic.id,
    references: buildReferences(context, retrievedContext),
    contextSnippets: buildContextSnippets(context, retrievedContext),
    retrievalContext: retrievedContext
  };
}

function buildTutorTurn(
  reply: TutorReply,
  request: CreateTutorInteractionRequest,
  context: TutorGroundingContext,
  tutorSessionId: string,
  retrievedContext: RetrievedContextBundle
): Omit<TutorTurn, "id" | "createdAt" | "updatedAt"> {
  return {
    tutorSessionId,
    actor: "tutor",
    action: request.action,
    responseType: reply.responseType,
    title: reply.title,
    summary: reply.summary,
    content: reply.answer,
    lessonId: context.lesson.id,
    topicId: context.topic.id,
    suggestedPrompts: reply.suggestedPrompts,
    nextSteps: reply.nextSteps,
    references: reply.references,
    contextSnippets: reply.contextSnippets,
    retrievalContext: retrievedContext,
    metadata: {
      tags: [`response:${reply.responseType}`],
      attributes: {
        generationMode: reply.generationMetadata?.mode ?? "fallback",
        generationProvider: reply.generationMetadata?.provider ?? "openai_compatible",
        generationModel: reply.generationMetadata?.model ?? "",
        generationErrorCode: reply.generationMetadata?.error?.code ?? ""
      }
    }
  };
}

function buildRetrievalSummary(retrievedContext: RetrievedContextBundle) {
  const topRetrievedItems = retrievedContext.items.slice(0, 3);

  if (!topRetrievedItems.length) {
    return "";
  }

  return `Grounding retrieved: ${topRetrievedItems
    .map((item) => `${item.title} (${item.sourceType})`)
    .join(", ")}.`;
}

function* chunkText(text: string, chunkSize = 48) {
  const tokens = text.split(" ");
  let buffer = "";

  for (const token of tokens) {
    const candidateBuffer = buffer ? `${buffer} ${token}` : token;

    if (candidateBuffer.length >= chunkSize) {
      yield `${candidateBuffer} `;
      buffer = "";
      continue;
    }

    buffer = candidateBuffer;
  }

  if (buffer) {
    yield buffer;
  }
}
