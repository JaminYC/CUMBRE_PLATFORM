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
  QuickAction,
  StatCard
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

function ProgressIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function MasteryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TopicsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function DashboardOverview() {
  const auth = useRequireSession();
  const session = auth.session;
  const dashboard = useAsyncResource(
    async () => {
      if (!session) {
        throw new Error("Necesitas una sesión activa para cargar el panel.");
      }

      const [student, learningPath, progress, topics] = await Promise.all([
        fetchCurrentStudent(session.userId),
        fetchLearningPath(session.defaultLearningPathId),
        fetchLearningProgress(session.userId, session.defaultLearningPathId),
        fetchTopics()
      ]);

      return { student, learningPath, progress, topics };
    },
    [session?.userId, session?.defaultLearningPathId]
  );

  const mostrandoCarga = dashboard.isLoading;

  useEffect(() => {
    if (!dashboard.data) return;
    auth.patchSession({
      defaultLearningPathId: dashboard.data.learningPath.learningPath.id
    });
  }, [dashboard.data?.learningPath.learningPath.id]);

  if (!auth.isHydrated || !session) {
    return (
      <AppShell title="Inicio">
        <LoadingPanel
          message="Preparando tu espacio de estudiante..."
          detail="Restaurando sesión y reconectando con los servicios."
        />
      </AppShell>
    );
  }

  if (mostrandoCarga) {
    return (
      <AppShell title="Inicio">
        <LoadingPanel
          message="Cargando el panel..."
          detail="Recuperando ruta de aprendizaje, progreso y contenido."
        />
      </AppShell>
    );
  }

  if (dashboard.error || !dashboard.data) {
    return (
      <AppShell title="Inicio">
        <ErrorPanel
          message={dashboard.error ?? "No fue posible cargar el panel del estudiante."}
          onRetry={dashboard.reload}
        />
      </AppShell>
    );
  }

  const { student, learningPath, progress, topics } = dashboard.data;
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
  const masteryValue = progress.estimatedMastery
    ? `${Math.round(progress.estimatedMastery.score * 100)}%`
    : "—";

  return (
    <AppShell
      title={`Bienvenido, ${student.user.displayName}`}
      description="Tu ruta de aprendizaje adaptativo."
      breadcrumbs={[{ label: "Inicio" }]}
    >
      {progress.nextBestAction ? (
        <div className="continue-banner">
          <div className="continue-banner__text">
            <span className="continue-banner__eyebrow">Siguiente paso recomendado</span>
            <p className="continue-banner__title">{progress.nextBestAction.title}</p>
          </div>
          <Link className="button" href={adaptiveHref}>
            {progress.nextBestAction.actionLabel ?? "Continuar"}
          </Link>
        </div>
      ) : null}

      <section className="stat-grid">
        <StatCard
          label="Progreso actual"
          value={`${Math.round(progress.progressPercent)}%`}
          accent="primary"
          icon={<ProgressIcon />}
        />
        <StatCard
          label="Dominio estimado"
          value={masteryValue}
          accent="secondary"
          icon={<MasteryIcon />}
        />
        <StatCard
          label="Temas disponibles"
          value={String(topics.items.length)}
          accent="success"
          icon={<TopicsIcon />}
        />
      </section>

      <ContentCard
        title={learningPath.learningPath.title}
        subtitle={learningPath.learningPath.summary}
        accent="mint"
      >
        <ProgressBar value={progress.progressPercent} />
        <div className="card-actions">
          <Link className="button" href={`/learning-path/${learningPath.learningPath.id}`}>
            Abrir ruta
          </Link>
          <Link className="button button--ghost" href="/progress">
            Ver progreso
          </Link>
        </div>
      </ContentCard>

      <AdaptiveStudySection progress={progress} fallbackHref={resumeLessonHref} />

      {topics.items.length > 0 ? (
        <ContentCard title="Explorar temas" accent="sun">
          <div className="topics-row">
            {topics.items.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`} className="topic-card">
                <h4>{topic.title}</h4>
                {topic.summary ? <p>{topic.summary}</p> : null}
              </Link>
            ))}
          </div>
        </ContentCard>
      ) : (
        <EmptyState
          title="Todavía no hay temas disponibles."
          description="Cuando se publiquen temas apareceran aquí como primer paso hacia las lecciones."
          actionLabel="Recargar"
          onAction={dashboard.reload}
        />
      )}

      <ContentCard title="Acciones rapidas" accent="sand">
        <div className="quick-actions-grid">
          <QuickAction
            title="Abrir ruta actual"
            description="Revisar secuencia, temas vinculados y progreso."
            href={`/learning-path/${learningPath.learningPath.id}`}
          />
          <QuickAction
            title="Revisar progreso"
            description="Dominio estimado, sesiones y recomendaciones."
            href="/progress"
          />
          <QuickAction
            title="Espacio de aula"
            description="Aulas unidas, módulos y sesiones en vivo."
            href="/classroom"
          />
          <QuickAction
            title={progress.nextBestAction ? "Siguiente paso" : "Retomar leccion"}
            description={
              progress.nextBestAction?.rationale ?? "Continuar desde donde lo dejaste."
            }
            href={adaptiveHref}
          />
        </div>
      </ContentCard>
    </AppShell>
  );
}
