"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  ErrorPanel,
  LoadingPanel,
  QuickAction
} from "@/components/ui";
import { KnowledgeInsightPanel } from "@/features/knowledge/knowledge-insight-panel";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useRequireSession } from "@/hooks/use-require-session";
import { studentAppConfig } from "@/lib/env";
import {
  fetchLesson,
  fetchLessonKnowledge,
  fetchTopic,
  startStudentLearningSession
} from "@/services/client/student-api";
import { LessonTutorPanel } from "@/features/tutor/lesson-tutor-panel";
import type { CreateLearningSessionResponse } from "@cumbre/schemas";

export function LessonDetailView({
  topicId,
  lessonId
}: {
  topicId: string;
  lessonId: string;
}) {
  const auth = useRequireSession();
  const session = auth.session;
  const lessonState = useAsyncResource(
    async () => {
      const [lessonResponse, topicResponse, lessonKnowledgeResponse] = await Promise.all([
        fetchLesson(topicId, lessonId),
        fetchTopic(topicId),
        fetchLessonKnowledge(lessonId)
      ]);

      return {
        lesson: lessonResponse.lesson,
        topic: topicResponse.topic,
        lessonKnowledge: lessonKnowledgeResponse.insight
      };
    },
    [topicId, lessonId]
  );

  const mostrandoCarga = lessonState.isLoading;
  const [sessionResponse, setSessionResponse] =
    useState<CreateLearningSessionResponse | null>(null);
  const [sessionError, setSessionError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    auth.patchSession({
      lastTopicId: topicId,
      lastLessonId: lessonId
    });
  }, [lessonId, topicId]);

  async function onStartSession() {
    if (!session) {
      return;
    }

    setSessionError(null);
    setIsStarting(true);

    try {
      const response = await startStudentLearningSession({
        learnerUserId: session.userId,
        learningPathId:
          session.defaultLearningPathId ?? studentAppConfig.defaultLearningPathId,
        lessonId,
        topicId,
        initiatedBy: "student",
        difficultyLevel: "intermediate"
      });

      setSessionResponse(response);
      auth.patchSession({
        defaultLearningPathId:
          session.defaultLearningPathId ?? studentAppConfig.defaultLearningPathId,
        lastTopicId: topicId,
        lastLessonId: lessonId,
        activeLearningSessionId: response.session.id
      });
    } catch (error) {
      setSessionError(
        error instanceof Error ? error.message : "No fue posible iniciar la sesión de aprendizaje."
      );
    } finally {
      setIsStarting(false);
    }
  }

  if (!auth.isHydrated || !session) {
    return (
      <AppShell title="Lección">
        <LoadingPanel
          message="Preparando detalle de la lección..."
          detail="Restaurando tu contexto de aprendizaje antes de abrir el contenido."
        />
      </AppShell>
    );
  }

  if (mostrandoCarga) {
    return (
      <AppShell title="Lección">
        <LoadingPanel
          message="Cargando detalle de la lección..."
          detail="Recuperando la lección desde content_service y preparando el flujo de inicio de sesión."
        />
      </AppShell>
    );
  }

  if (lessonState.error || !lessonState.data) {
    return (
      <AppShell title="Lección">
        <ErrorPanel
          message={lessonState.error ?? "No fue posible cargar el detalle de la lección."}
          onRetry={lessonState.reload}
        />
      </AppShell>
    );
  }

  const { lesson, topic, lessonKnowledge } = lessonState.data;

  return (
    <AppShell
      title={lesson.title}
      description={lesson.summary ?? "Vista de lección con disparador real de sesión de aprendizaje."}
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        {
          label: "Ruta de aprendizaje",
          href: `/learning-path/${session.defaultLearningPathId}`
        },
        { label: topic.title, href: `/topics/${topicId}` },
        { label: lesson.title }
      ]}
      headerActions={
        <Link className="button button--ghost" href={`/topics/${topicId}`}>
          Volver al tema
        </Link>
      }
    >
      <div className="page-grid">
        <ContentCard title="Detalles de la lección" subtitle="Conectado a content_service" accent="mint">
          <ul className="detail-list">
            <li>
              <strong>Tipo de lección:</strong> {lesson.lessonType}
            </li>
            <li>
              <strong>Dificultad:</strong> {lesson.difficultyLevel ?? "intermediate"}
            </li>
            <li>
              <strong>Duracion:</strong> {lesson.estimatedDurationMinutes ?? 0} minutos
            </li>
            <li>
              <strong>Objetivos:</strong>{" "}
              {lesson.learningObjectiveIds?.join(", ") || "Sin objetivos listados"}
            </li>
          </ul>
        </ContentCard>

        <ContentCard
          title="Iniciar una sesión de aprendizaje"
          subtitle="Este flujo crea una sesión persistida real en learning_service."
          accent="sun"
        >
          <button
            className="button"
            data-testid="student-start-session"
            onClick={onStartSession}
            disabled={isStarting}
          >
            {isStarting ? "Iniciando..." : "Iniciar sesion"}
          </button>
          {sessionError ? <p className="field-error">{sessionError}</p> : null}
          {sessionResponse ? (
            <div className="success-callout">
              <p>
                La sesion <strong>{sessionResponse.session.id}</strong> se inicio correctamente.
              </p>
              <p>
                Estado actual: {sessionResponse.session.status} con{" "}
                {Math.round(sessionResponse.session.progressPercent)}% de progreso.
              </p>
              <Link className="button button--ghost" href="/progress">
                Abrir progreso
              </Link>
              <Link className="button button--ghost" href={`/topics/${topicId}`}>
                Volver al tema
              </Link>
            </div>
          ) : null}
        </ContentCard>
      </div>

      <LessonTutorPanel
        learnerUserId={session.userId}
        learningPathId={session.defaultLearningPathId}
        topicId={topicId}
        topicTitle={topic.title}
        lessonId={lessonId}
        lessonTitle={lesson.title}
        lessonSummary={lesson.summary}
      />

      <KnowledgeInsightPanel insight={lessonKnowledge} accent="sand" />

      <ContentCard
        title="Después de esta lección"
        subtitle="Mantiene el recorrido conectado en lugar de dejar al estudiante en un punto muerto."
        accent="sand"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Volver al tema"
            description="Comparar esta lección con las otras lecciones disponibles en el mismo tema."
            href={`/topics/${topicId}`}
          />
          <QuickAction
            title="Abrir progreso"
            description="Inspeccionar la sesión una vez iniciada y persistida."
            href="/progress"
          />
          <QuickAction
            title="Volver a la ruta"
            description="Reconectar la lección con la secuencia general de aprendizaje."
            href={`/learning-path/${session.defaultLearningPathId}`}
          />
        </div>
      </ContentCard>
    </AppShell>
  );
}
