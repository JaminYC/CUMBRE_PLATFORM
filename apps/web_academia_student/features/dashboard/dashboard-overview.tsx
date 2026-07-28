"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { EmptyState, ErrorPanel, LoadingPanel } from "@/components/ui";
import { useRequireSession } from "@/hooks/use-require-session";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import {
  fetchCurrentStudent,
  fetchLearningPath,
  fetchLearningProgress,
  fetchTopics
} from "@/services/client/student-api";

/* El motor adaptativo devuelve el nivel en inglés; acá se traduce. */
const NIVELES: Record<string, string> = {
  emerging: "En desarrollo",
  developing: "En progreso",
  proficient: "Sólido",
  advanced: "Avanzado",
  mastered: "Dominado"
};

function IconoFlecha() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconoLibro() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

  /* Mínimo visible: sin esto, cuando los datos llegan rápido el
     indicador parpadea y el logo no alcanza a armarse. */
  const mostrandoCarga = useCargaMinima(dashboard.isLoading);

  useEffect(() => {
    if (!dashboard.data) return;
    auth.patchSession({
      defaultLearningPathId: dashboard.data.learningPath.learningPath.id
    });
  }, [dashboard.data?.learningPath.learningPath.id]);

  if (!auth.isHydrated || !session) {
    return (
      <LoadingPanel
        message="Preparando tu espacio..."
        detail="Restaurando sesión y reconectando con los servicios."
      />
    );
  }

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando tu ruta..."
        detail="Recuperando avance y contenido."
      />
    );
  }

  if (dashboard.error || !dashboard.data) {
    return (
      <ErrorPanel
        message={dashboard.error ?? "No fue posible cargar tu espacio."}
        onRetry={dashboard.reload}
      />
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

  const avance = Math.round(progress.progressPercent);
  const yaEmpezo = avance > 0 || Boolean(session.lastLessonId);
  const nivelCrudo = progress.estimatedMastery?.level ?? "";
  const nivel = NIVELES[nivelCrudo] ?? null;

  /* Solo el primer nombre: "Hola, Valeria" se lee mejor que el nombre completo. */
  const primerNombre = student.user.displayName.split(" ")[0];

  return (
    <AppShell
      title={`Hola, ${primerNombre}`}
      description={
        yaEmpezo
          ? "Esto es lo que sigue en tu ruta."
          : "Tu ruta está lista. Empecemos."
      }
      breadcrumbs={[{ label: "Inicio" }]}
    >
      {/* ── La acción principal. Una sola, imposible de confundir. ── */}
      <section className="hoy">
        <p className="hoy__eyebrow">
          {yaEmpezo ? "Continúa donde quedaste" : "Tu primer paso"}
        </p>
        {/* El motor devuelve titulos genericos ("Continuar la ruta actual").
            Si el alumno todavia no empezo, el tema concreto dice mas. */}
        <h2 className="hoy__titulo">
          {yaEmpezo
            ? (progress.nextBestAction?.title ?? nextTopic?.title ?? "Tu ruta de estudio")
            : (nextTopic?.title ?? learningPath.learningPath.title)}
        </h2>
        {nextTopic?.summary ? (
          <p className="hoy__detalle">{nextTopic.summary}</p>
        ) : null}
        <Link className="hoy__btn" href={adaptiveHref}>
          {progress.nextBestAction?.actionLabel ?? (yaEmpezo ? "Continuar" : "Empezar")}
          <IconoFlecha />
        </Link>
      </section>

      {/* ── Avance: una franja, no tres tarjetas clínicas. ── */}
      <section className="avance">
        <div className="avance__head">
          <div>
            <p className="avance__eyebrow">Tu ruta</p>
            <h3 className="avance__titulo">{learningPath.learningPath.title}</h3>
          </div>
          <p className="avance__pct">
            {avance}
            <span>%</span>
          </p>
        </div>

        <div
          className="avance__pista"
          role="progressbar"
          aria-valuenow={avance}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Avance de ${learningPath.learningPath.title}`}
        >
          <span className="avance__barra" style={{ width: `${avance}%` }} />
        </div>

        <div className="avance__pie">
          <span>
            {topics.items.length} {topics.items.length === 1 ? "tema" : "temas"}
          </span>
          {nivel ? <span>Nivel: {nivel}</span> : null}
          <Link href="/progress">Ver mi avance</Link>
        </div>
      </section>

      {/* ── Temas ── */}
      {topics.items.length > 0 ? (
        <section className="temas">
          <h3 className="temas__titulo">Temas de tu ruta</h3>
          <div className="temas__grid">
            {topics.items.map((topic) => (
              <Link key={topic.id} href={`/topics/${topic.id}`} className="tema">
                <span className="tema__icono" aria-hidden="true">
                  <IconoLibro />
                </span>
                <h4>{topic.title}</h4>
                {topic.summary ? <p>{topic.summary}</p> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <EmptyState
          title="Todavía no hay temas publicados."
          description="Cuando la academia publique temas van a aparecer acá."
          actionLabel="Recargar"
          onAction={dashboard.reload}
        />
      )}
    </AppShell>
  );
}
