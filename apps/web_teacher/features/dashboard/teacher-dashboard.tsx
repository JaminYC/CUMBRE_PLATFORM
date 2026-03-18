"use client";

import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel,
  MetricCard,
  QuickAction
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { teacherAppConfig } from "@/lib/env";
import { fetchTeacherOverview } from "@/services/client/teacher-api";

export function TeacherDashboard() {
  const resource = useAsyncResource(
    () => fetchTeacherOverview(teacherAppConfig.defaultLearningPathId),
    []
  );

  if (resource.isLoading) {
    return (
      <LoadingPanel
        message="Cargando resumen docente..."
        detail="Recuperando resumenes de estudiantes, guia adaptativa, uso del tutor y senales de dificultad con prerequisitos."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar el resumen docente."}
        onRetry={resource.reload}
      />
    );
  }

  const overview = resource.data.overview;

  return (
    <AppShell
      title="Panel docente"
      description="Visibilidad operativa sobre avance del estudiante, siguientes acciones, uso del tutor y necesidades de repaso basadas en el grafo."
      breadcrumbs={[{ label: "Panel docente" }]}
    >
      <section className="dashboard-grid">
        <MetricCard
          label="Estudiantes monitoreados"
          value={String(overview.totalLearners)}
          helper={`${overview.activeLearners} activos actualmente`}
        />
        <MetricCard
          label="Progreso promedio"
          value={`${Math.round(overview.averageProgressPercent)}%`}
          helper="Sobre la ruta actualmente observada"
        />
        <MetricCard
          label="Requieren repaso"
          value={String(overview.learnersNeedingReview)}
          helper={`${Math.round(overview.averageTutorUsageCount)} turnos promedio del tutor`}
        />
      </section>

      <ContentCard
        title="Lectura rapida docente"
        subtitle="Esta primera version es analitica: destaca quien necesita intervencion y por que."
        accent="sun"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Salidas adaptativas"
            description="Inspeccionar siguiente mejor accion y guia por estudiante."
            href="#learner-summaries"
          />
          <QuickAction
            title="Uso del tutor"
            description="Ver que estudiantes dependen mas del apoyo del tutor."
            href="#learner-summaries"
          />
          <QuickAction
            title="Dificultad con prerequisitos"
            description="Identificar brechas conceptuales detectadas por el grafo de conocimiento."
            href="#learner-summaries"
          />
          <QuickAction
            title="Estudio de autoria"
            description="Crear lecciones, mapear conceptos y curar contenido instruccional."
            href="/authoring"
          />
          <QuickAction
            title="Aulas"
            description="Crear aulas, importar listas y programar sesiones en vivo."
            href="/classrooms"
          />
          <QuickAction
            title="Constructor de modulos"
            description="Generar modulos y cuestionarios desde materiales cargados."
            href="/module-builder"
          />
        </div>
      </ContentCard>

      <ContentCard
        title="Resumenes de estudiantes"
        subtitle="Cada tarjeta combina progreso, dominio, siguiente accion, uso del tutor y senales de repaso con apoyo del grafo."
        accent="mint"
      >
        {overview.learnerSummaries.length ? (
          <div className="tile-grid" id="learner-summaries">
            {overview.learnerSummaries.map((summary) => (
              <article className="tile tile--dense" key={summary.learnerUserId}>
                <p className="auth-card__eyebrow">Estudiante</p>
                <h4>{summary.learnerUserId}</h4>
                <ul className="detail-list">
                  <li>
                    <strong>Progreso:</strong> {Math.round(summary.progressPercent)}%
                  </li>
                  <li>
                    <strong>Sesion reciente:</strong> {summary.recentSessionStatus ?? "ninguna"}
                  </li>
                  <li>
                    <strong>Dominio:</strong> {summary.estimatedMastery?.level ?? "pendiente"}
                  </li>
                  <li>
                    <strong>Siguiente paso:</strong> {summary.nextBestAction?.title ?? "Continuar"}
                  </li>
                  <li>
                    <strong>Uso del tutor:</strong> {summary.tutorUsageCount}
                  </li>
                  <li>
                    <strong>Dificultad con prerequisitos:</strong>{" "}
                    {summary.strugglingConcept?.title ?? "Sin concepto marcado"}
                  </li>
                </ul>
                {summary.adaptiveGuidance?.[0] ? (
                  <p className="muted-copy">{summary.adaptiveGuidance[0].summary}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavia no hay datos de estudiantes."
            description="Cuando existan sesiones de aprendizaje, este panel agregara senales de seguimiento docente."
          />
        )}
      </ContentCard>

      <ContentCard
        title="Patrones de dificultad conceptual"
        subtitle="Los conceptos mas frecuentemente vinculados a estudiantes que necesitan repaso."
        accent="sand"
      >
        {overview.conceptStruggles.length ? (
          <div className="tile-grid">
            {overview.conceptStruggles.map((entry) => (
              <article className="tile tile--dense" key={entry.concept.id}>
                <p className="auth-card__eyebrow">Concepto</p>
                <h4>{entry.concept.title}</h4>
                <ul className="detail-list">
                  <li>
                    <strong>Estudiantes:</strong> {entry.learnerCount}
                  </li>
                  <li>
                    <strong>Uso del tutor:</strong> {entry.tutorUsageCount}
                  </li>
                  <li>
                    <strong>Recs. de repaso:</strong> {entry.recommendationCount}
                  </li>
                </ul>
                {entry.concept.summary ? <p className="muted-copy">{entry.concept.summary}</p> : null}
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavia no hay senales de dificultad conceptual."
            description="Cuando aparezcan necesidades de repaso apoyadas por el grafo, los conceptos con mayor friccion apareceran aqui."
          />
        )}
      </ContentCard>

      <div className="dashboard-grid">
        <ContentCard
          title="Tendencia de uso del tutor"
          subtitle="Lectura operativa simple sobre cuanta ayuda de aclaracion se esta usando."
          accent="mint"
        >
          <ul className="detail-list">
            {overview.tutorUsageTrends.map((trend) => (
              <li key={trend.label}>
                <strong>{trend.label}:</strong> {trend.value}
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard
          title="Tendencia de recomendaciones"
          subtitle="Lo que el sistema adaptativo esta pidiendo con mas frecuencia a los estudiantes."
          accent="sun"
        >
          <ul className="detail-list">
            {overview.recommendationTrends.length ? (
              overview.recommendationTrends.map((trend) => (
                <li key={trend.recommendationType}>
                  <strong>{trend.recommendationType}:</strong> {trend.count}
                </li>
              ))
            ) : (
              <li>Todavia no hay tendencias de recomendaciones adaptativas.</li>
            )}
          </ul>
        </ContentCard>
      </div>
    </AppShell>
  );
}
