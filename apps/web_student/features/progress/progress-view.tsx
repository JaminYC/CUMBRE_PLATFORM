"use client";

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
import { AdaptiveStudySection } from "@/features/adaptive/adaptive-study-section";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import { useRequireSession } from "@/hooks/use-require-session";
import { fetchLearningProgress } from "@/services/client/student-api";

export function ProgressView() {
  const auth = useRequireSession();
  const session = auth.session;
  const progressState = useAsyncResource(
    async () => {
      if (!session) {
        throw new Error("No hay una sesion de estudiante disponible.");
      }

      return fetchLearningProgress(session.userId, session.defaultLearningPathId);
    },
    [session?.userId, session?.defaultLearningPathId]
  );

  /* Minimo visible: sin esto, cuando los datos llegan rapido el
     indicador parpadea y se lee como un fallo de dibujo. */
  const mostrandoCarga = useCargaMinima(progressState.isLoading);

  if (!auth.isHydrated || !session) {
    return (
      <LoadingPanel
        message="Preparando vista de progreso..."
        detail="Restaurando la sesion del estudiante antes de leer sus datos de progreso."
      />
    );
  }

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando progreso desde learning_service..."
        detail="Leyendo sesiones, senales de dominio y recomendaciones."
      />
    );
  }

  if (progressState.error || !progressState.data) {
    return (
      <ErrorPanel
        message={progressState.error ?? "No fue posible cargar el progreso."}
        onRetry={progressState.reload}
      />
    );
  }

  const progress = progressState.data;
  const resumeHref =
    session.lastTopicId && session.lastLessonId
      ? `/topics/${session.lastTopicId}/lessons/${session.lastLessonId}`
      : `/learning-path/${session.defaultLearningPathId}`;
  const latestSession = progress.sessions[0] ?? null;
  const masteryLabel = progress.estimatedMastery
    ? `${progress.estimatedMastery.level} al ${Math.round(progress.estimatedMastery.score * 100)}%`
    : "Dominio todavia en formacion";

  return (
    <AppShell
      title="Progreso"
      description="Vista compacta del progreso del estudiante con sesiones, dominio, recomendaciones y la siguiente mejor accion."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Progreso" }
      ]}
      headerActions={
        <Link className="button" href={resumeHref}>
          Retomar aprendizaje
        </Link>
      }
    >
      <div className="page-grid">
        <ContentCard title="Puntaje de progreso" subtitle="Promedio de avance por sesion" accent="mint">
          <p className="emphasis-number">{Math.round(progress.progressPercent)}%</p>
          <ProgressBar value={progress.progressPercent} />
        </ContentCard>

        <ContentCard
          title="Resumen adaptativo"
          subtitle="Vista concisa del nivel de dominio, impulso reciente y lo que el sistema considera que sigue."
          accent="sun"
        >
          <ul className="detail-list">
            <li>
              <strong>Dominio estimado:</strong> {masteryLabel}
            </li>
            <li>
              <strong>Ultima sesion:</strong> {latestSession?.status ?? "Todavia sin sesiones"}
            </li>
            <li>
              <strong>Siguiente paso recomendado:</strong>{" "}
              {progress.nextBestAction?.title ?? "Continuar ruta actual"}
            </li>
          </ul>
          <div className="card-actions">
            <Link
              className="button"
              href={progress.nextBestAction?.actionUrl ?? resumeHref}
            >
              {progress.nextBestAction?.actionLabel ?? "Retomar aprendizaje"}
            </Link>
          </div>
        </ContentCard>
      </div>

      <AdaptiveStudySection progress={progress} fallbackHref={resumeHref} />

      <ContentCard
        title="Acciones rapidas"
        subtitle="Usa el progreso como centro de control y vuelve directo al siguiente paso."
        accent="sand"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Retomar aprendizaje"
            description="Volver a la ultima leccion abierta o a la ruta actual."
            href={progress.nextBestAction?.actionUrl ?? resumeHref}
          />
          <QuickAction
            title="Abrir inicio"
            description="Volver a tu resumen principal y accesos rapidos."
            href="/dashboard"
          />
          <QuickAction
            title="Ruta actual"
            description="Inspeccionar la secuencia de la ruta y sus temas vinculados."
            href={`/learning-path/${session.defaultLearningPathId}`}
          />
        </div>
      </ContentCard>

      <ContentCard
        title="Historial de sesiones"
        subtitle="Sesiones persistidas creadas desde el flujo de aprendizaje"
        accent="sand"
      >
        {progress.sessions.length ? (
          <ul className="detail-list">
            {progress.sessions.map((sessionItem) => (
              <li key={sessionItem.id}>
                <strong>{sessionItem.status}</strong> - leccion {sessionItem.lessonId ?? "n/d"} -{" "}
                {Math.round(sessionItem.progressPercent)}%
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Todavia no hay sesiones de aprendizaje."
            description="Comienza desde el detalle de una leccion para crear la primera sesion persistida."
            actionLabel="Ir a la ruta de aprendizaje"
            actionHref={`/learning-path/${session.defaultLearningPathId}`}
          />
        )}
      </ContentCard>

      <ContentCard
        title="Estados de dominio"
        subtitle="Senales ya expuestas por learning_service"
        accent="mint"
      >
        {progress.masteryStates.length ? (
          <ul className="detail-list">
            {progress.masteryStates.map((masteryState) => (
              <li key={masteryState.id}>
                <strong>{masteryState.subjectType}</strong> {masteryState.subjectId} -{" "}
                {masteryState.level} - {Math.round(masteryState.score * 100)}%
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Todavia no hay senales de dominio registradas."
            description="Los datos de dominio apareceran despues de capturar mas actividad de aprendizaje."
            actionLabel="Retomar aprendizaje"
            actionHref={resumeHref}
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
