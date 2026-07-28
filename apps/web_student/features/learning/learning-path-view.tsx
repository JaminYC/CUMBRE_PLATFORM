"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel,
  ProgressBar,
  QuickAction
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import { useRequireSession } from "@/hooks/use-require-session";
import {
  fetchLearningPath,
  fetchLearningProgress,
  fetchTopics
} from "@/services/client/student-api";

export function LearningPathView({ learningPathId }: { learningPathId: string }) {
  const auth = useRequireSession();
  const session = auth.session;
  const resource = useAsyncResource(
    async () => {
      if (!session) {
        throw new Error("Se requiere una sesión de estudiante.");
      }

      const [path, progress, topics] = await Promise.all([
        fetchLearningPath(learningPathId),
        fetchLearningProgress(session.userId, learningPathId),
        fetchTopics()
      ]);

      return {
        path,
        progress,
        topics
      };
    },
    [learningPathId, session?.userId]
  );

  /* Minimo visible: sin esto, cuando los datos llegan rapido el
     indicador parpadea y se lee como un fallo de dibujo. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  useEffect(() => {
    if (!resource.data) {
      return;
    }

    auth.patchSession({
      defaultLearningPathId: resource.data.path.learningPath.id
    });
  }, [resource.data?.path.learningPath.id]);

  if (!auth.isHydrated || !session) {
    return (
      <LoadingPanel
        message="Preparando ruta de aprendizaje..."
        detail="Restaurando la sesión del estudiante antes de cargar los datos de la ruta."
      />
    );
  }

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando tu ruta de aprendizaje..."
        detail="Recuperando estructura de ruta, progreso y temas vinculados."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar la ruta de aprendizaje."}
        onRetry={resource.reload}
      />
    );
  }

  const { path, progress, topics } = resource.data;
  const linkedTopics = topics.items.filter((topic) =>
    path.learningPath.topicIds?.includes(topic.id)
  );
  const recentSession = progress.sessions.find((sessionItem) => sessionItem.status === "active") ??
    progress.sessions[0] ??
    null;
  const resumeLessonHref =
    session.lastTopicId && session.lastLessonId
      ? `/topics/${session.lastTopicId}/lessons/${session.lastLessonId}`
      : linkedTopics[0]
        ? `/topics/${linkedTopics[0].id}`
        : "/progress";

  return (
    <AppShell
      title={path.learningPath.title}
      description="Vista del estudiante con la ruta actual, temas vinculados, historial de sesiones y recomendaciones."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Ruta de aprendizaje" }
      ]}
      headerActions={
        linkedTopics[0] ? (
          <Link className="button" href={`/topics/${linkedTopics[0].id}`}>
            Abrir primer tema
          </Link>
        ) : undefined
      }
    >
      <div className="page-grid">
        <ContentCard
          title="Resumen de la ruta"
          subtitle={path.learningPath.summary}
          accent="mint"
        >
          <ProgressBar value={progress.progressPercent} />
          <ul className="detail-list">
            <li>
              <strong>Dificultad:</strong>{" "}
              {path.learningPath.difficultyLevel ?? "intermediate"}
            </li>
            <li>
              <strong>Duracion estimada:</strong>{" "}
              {path.learningPath.estimatedDurationMinutes ?? 0} minutes
            </li>
            <li>
              <strong>Secuencia:</strong>{" "}
              {path.learningPath.sequencingStrategy ?? "adaptive"}
            </li>
          </ul>
        </ContentCard>

        <ContentCard
          title="Resumen de progreso"
          subtitle="Sesiones de aprendizaje y recomendaciones actuales"
          accent="sun"
        >
          <p className="emphasis-number">{Math.round(progress.progressPercent)}%</p>
          <p className="muted-copy">
            {progress.sessions.length} sesiones y{" "}
            {progress.recommendations.length} recomendaciones registradas hasta ahora.
          </p>
          <Link className="button button--ghost" href="/progress">
            Abrir vista de progreso
          </Link>
        </ContentCard>
      </div>

      <ContentCard
        title="Mantener el avance"
        subtitle="Haz de esta pagina un puente hacia el contenido y la actividad de sesiones."
        accent="sand"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Retomar aprendizaje"
            description={
              recentSession
                ? `Continuar desde ${recentSession.lessonId ?? "tu ultima leccion"}`
                : "Volver a la secuencia actual."
            }
            href={resumeLessonHref}
          />
          <QuickAction
            title="Abrir progreso"
            description="Revisar señales de dominio y recomendaciones de aprendizaje."
            href="/progress"
          />
          <QuickAction
            title="Volver al inicio"
            description="Regresar a tu espacio principal y accesos rapidos."
            href="/dashboard"
          />
        </div>
      </ContentCard>

      <ContentCard
        title="Temas en esta ruta"
        subtitle="Usa los temas como capa principal de navegación hacia las lecciones y el inicio de sesiones."
      >
        {linkedTopics.length ? (
          <div className="tile-grid">
            {linkedTopics.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`} className="tile">
                <h4>{topic.title}</h4>
                <p>{topic.summary ?? "Abre el tema para revisar sus lecciones."}</p>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Esta ruta todavía no tiene temas vinculados."
            description="La secuencia de contenido aparecerá aquí cuando se asocien temas a la ruta."
            actionLabel="Recargar ruta"
            onAction={resource.reload}
          />
        )}
      </ContentCard>

      <ContentCard
        title="Sesiones recientes"
        subtitle="Sesiones persistidas desde learning_service"
        accent="sand"
      >
        {progress.sessions.length ? (
          <ul className="detail-list">
            {progress.sessions.map((sessionItem) => (
              <li key={sessionItem.id}>
                <strong>{sessionItem.status}</strong> - Leccion{" "}
                {sessionItem.lessonId ?? "sin asignar"} -{" "}
                {Math.round(sessionItem.progressPercent)}%
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Todavía no hay sesiones iniciadas."
            description="Abre un tema y una lección para crear la primera sesión de aprendizaje de esta ruta."
            actionLabel={linkedTopics[0] ? "Abrir primer tema" : "Ir al inicio"}
            actionHref={linkedTopics[0] ? `/topics/${linkedTopics[0].id}` : "/dashboard"}
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
