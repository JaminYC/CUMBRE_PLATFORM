"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel,
  MetricCard,
  ProgressBar,
  QuickAction
} from "@/components/ui";
import { AdaptiveStudySection } from "@/features/adaptive/adaptive-study-section";
import { useRequireSession } from "@/hooks/use-require-session";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  fetchCurrentStudent,
  fetchLearningPath,
  fetchLearningProgress,
  fetchTopics
} from "@/services/client/student-api";

export function DashboardOverview() {
  const auth = useRequireSession();
  const session = auth.session;
  const dashboard = useAsyncResource(
    async () => {
      if (!session) {
        throw new Error("Necesitas una sesion activa para cargar el panel.");
      }

      const [student, learningPath, progress, topics] = await Promise.all([
        fetchCurrentStudent(session.userId),
        fetchLearningPath(session.defaultLearningPathId),
        fetchLearningProgress(session.userId, session.defaultLearningPathId),
        fetchTopics()
      ]);

      return {
        student,
        learningPath,
        progress,
        topics
      };
    },
    [session?.userId, session?.defaultLearningPathId]
  );

  useEffect(() => {
    if (!dashboard.data) {
      return;
    }

    auth.patchSession({
      defaultLearningPathId: dashboard.data.learningPath.learningPath.id
    });
  }, [dashboard.data?.learningPath.learningPath.id]);

  if (!auth.isHydrated || !session) {
    return (
      <LoadingPanel
        message="Preparando tu espacio de estudiante..."
        detail="Restaurando la sesion y reconectando con los servicios de la plataforma."
      />
    );
  }

  if (dashboard.isLoading) {
    return (
      <LoadingPanel
        message="Cargando el panel desde los servicios conectados..."
        detail="Recuperando identidad, ruta de aprendizaje, progreso y metadatos de contenido."
      />
    );
  }

  if (dashboard.error || !dashboard.data) {
    return (
      <ErrorPanel
        message={dashboard.error ?? "No fue posible cargar el panel del estudiante."}
        onRetry={dashboard.reload}
      />
    );
  }

  const { student, learningPath, progress, topics } = dashboard.data;
  const firstProfile = student.profiles[0];
  const activeSession =
    progress.sessions.find((sessionItem) => sessionItem.status === "active") ??
    progress.sessions[0] ??
    null;
  const nextTopic =
    topics.items.find((topic) => learningPath.learningPath.topicIds?.includes(topic.id)) ??
    topics.items[0] ??
    null;
  const resumeLessonHref =
    session.lastTopicId && session.lastLessonId
      ? `/topics/${session.lastTopicId}/lessons/${session.lastLessonId}`
      : nextTopic
        ? `/topics/${nextTopic.id}`
        : `/learning-path/${learningPath.learningPath.id}`;
  const adaptiveHref = progress.nextBestAction?.actionUrl ?? resumeLessonHref;
  const masteryLabel = progress.estimatedMastery
    ? `${Math.round(progress.estimatedMastery.score * 100)}%`
    : "Pendiente";
  const nextActionLabel = progress.nextBestAction?.title ?? "Continuar ruta actual";

  return (
    <AppShell
      title={`Bienvenido de nuevo, ${student.user.displayName}`}
      description="Resumen enfocado de la ruta actual, el impulso reciente y lo que conviene estudiar despues."
      breadcrumbs={[{ label: "Inicio" }]}
      headerActions={
        adaptiveHref ? (
          <Link className="button" href={adaptiveHref}>
            {progress.nextBestAction?.actionLabel ?? "Continuar con el tema"}
          </Link>
        ) : undefined
      }
    >
      <section className="dashboard-grid">
        <MetricCard
          label="Progreso actual"
          value={`${Math.round(progress.progressPercent)}%`}
          helper={
            activeSession
              ? `Ultima sesion ${activeSession.status} en la leccion ${activeSession.lessonId ?? "pendiente"}`
              : "Todavia no hay sesiones de aprendizaje registradas"
          }
        />
        <MetricCard
          label="Dominio estimado"
          value={masteryLabel}
          helper={
            progress.estimatedMastery
              ? `${progress.estimatedMastery.level} con ${Math.round(progress.estimatedMastery.confidence * 100)}% de confianza`
              : "Esperando senales de aprendizaje mas solidas"
          }
        />
        <MetricCard
          label="Siguiente mejor accion"
          value={`${Math.round((progress.nextBestAction?.confidence ?? 0.66) * 100)}%`}
          helper={nextActionLabel}
        />
      </section>

      <div className="page-grid">
        <ContentCard
          title={learningPath.learningPath.title}
          subtitle={learningPath.learningPath.summary}
          accent="mint"
        >
          <p className="muted-copy">
            Audiencia: {learningPath.learningPath.audienceRoles?.join(", ") || "student"}
          </p>
          <ProgressBar value={progress.progressPercent} />
          <div className="card-actions">
            <Link
              className="button"
              href={`/learning-path/${learningPath.learningPath.id}`}
            >
              Abrir ruta de aprendizaje
            </Link>
            <Link className="button button--ghost" href="/progress">
              Ver progreso completo
            </Link>
          </div>
        </ContentCard>

        <ContentCard
          title="Continuar tu recorrido"
          subtitle="El panel ahora funciona como un espacio real de estudio con impulso adaptativo, no como una portada muerta."
          accent="sun"
        >
          <ul className="detail-list">
            <li>
              <strong>Ruta actual:</strong> {learningPath.learningPath.title}
            </li>
            <li>
              <strong>Leccion reciente:</strong> {session.lastLessonId ?? "Todavia no abierta"}
            </li>
            <li>
              <strong>Sesion activa:</strong> {activeSession?.id ?? "Sin sesion activa"}
            </li>
            <li>
              <strong>Siguiente paso adaptativo:</strong> {nextActionLabel}
            </li>
          </ul>
          <div className="card-actions">
            <Link className="button" href={adaptiveHref}>
              {progress.nextBestAction?.actionLabel ??
                (session.lastLessonId ? "Retomar leccion" : "Iniciar siguiente paso")}
            </Link>
            <Link className="button button--ghost" href="/progress">
              Revisar progreso
            </Link>
          </div>
        </ContentCard>

        <ContentCard
          title="Perfil del estudiante"
          subtitle={firstProfile?.headline ?? "Identidad de plataforma sincronizada desde auth_service"}
          accent="sand"
        >
          <ul className="detail-list">
            <li>
              <strong>Rol:</strong> {student.user.primaryRole}
            </li>
            <li>
              <strong>Correo:</strong> {student.user.email ?? "No proporcionado"}
            </li>
            <li>
              <strong>Idioma:</strong> {student.user.preferredLanguage ?? "es"}
            </li>
            <li>
              <strong>Zona horaria:</strong> {student.user.timezone ?? "America/Lima"}
            </li>
          </ul>
        </ContentCard>
      </div>

      <AdaptiveStudySection progress={progress} fallbackHref={resumeLessonHref} />

      <ContentCard
        title="Acciones rapidas"
        subtitle="Atajos estables para el recorrido principal del estudiante."
        accent="sand"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Abrir ruta actual"
            description="Revisar secuencia, temas vinculados y progreso de la ruta."
            href={`/learning-path/${learningPath.learningPath.id}`}
          />
          <QuickAction
            title="Revisar progreso"
            description="Inspeccionar dominio estimado, logica de siguiente accion, sesiones y recomendaciones."
            href="/progress"
          />
          <QuickAction
            title="Espacio de aula"
            description="Acceder a aulas unidas, modulos publicados por docentes y enlaces de sesiones en vivo."
            href="/classroom"
          />
          <QuickAction
            title={progress.nextBestAction ? "Seguir siguiente paso" : session.lastLessonId ? "Retomar ultima leccion" : "Explorar temas"}
            description={
              progress.nextBestAction
                ? "Usa la capa adaptativa para entrar directo en la accion mas util."
                : session.lastLessonId
                  ? "Volver a la ultima leccion visitada antes del refresco."
                  : "Pasar del panel al flujo de contenido."
            }
            href={adaptiveHref}
          />
        </div>
      </ContentCard>

      <ContentCard
        title="Explorar temas"
        subtitle="Los datos de temas vienen de content_service y conducen al flujo de detalle de leccion."
        accent="sun"
      >
        {topics.items.length ? (
          <div className="tile-grid">
            {topics.items.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`} className="tile">
                <h4>{topic.title}</h4>
                <p>{topic.summary ?? "Abre el tema para ver las lecciones disponibles."}</p>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavia no hay temas disponibles."
            description="Cuando content_service publique temas, apareceran aqui como primer paso hacia las lecciones."
            actionLabel="Recargar panel"
            onAction={dashboard.reload}
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
