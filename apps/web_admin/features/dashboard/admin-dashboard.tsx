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
import { useCargaMinima } from "@/hooks/use-carga-minima";
import { fetchAdminOverview } from "@/services/client/admin-api";

export function AdminDashboard() {
  const resource = useAsyncResource(() => fetchAdminOverview(), []);

  /* Minimo visible: sin esto, cuando los datos llegan rapido el
     indicador parpadea y se lee como un fallo de dibujo. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando resumen administrativo..."
        detail="Recuperando estructura de contenido, conteo de conceptos y senales de integridad del grafo."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar el resumen administrativo."}
        onRetry={resource.reload}
      />
    );
  }

  const overview = resource.data.overview;

  return (
    <AppShell
      title="Panel administrativo"
      description="Visibilidad operativa sobre temas, lecciones, enlaces conceptuales e integridad del grafo."
      breadcrumbs={[{ label: "Panel administrativo" }]}
      headerActions={
        <button className="button button--ghost" type="button" onClick={resource.reload}>
          Recargar resumen
        </button>
      }
    >
      <section className="dashboard-grid">
        <MetricCard label="Temas" value={String(overview.totalTopics)} helper="Registros de temas publicados" />
        <MetricCard label="Lecciones" value={String(overview.totalLessons)} helper="Registros estructurados de lecciones" />
        <MetricCard label="Grafo conceptual" value={`${overview.totalConcepts}/${overview.totalEdges}`} helper="Nodos de concepto / relaciones del grafo" />
      </section>

      <ContentCard
        title="Lectura rapida administrativa"
        subtitle="Esta primera version se enfoca en visibilidad, chequeos de enlaces y topologia de contenido antes que en autoria completa."
        accent="sun"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Estructura de contenido"
            description="Inspeccionar cuantas lecciones y conceptos tiene cada tema."
            href="#topic-summaries"
          />
          <QuickAction
            title="Problemas de integridad"
            description="Revisar lecciones huerfanas, temas vacios y brechas de enlace en el grafo."
            href="#integrity-issues"
          />
          <QuickAction
            title="Base del grafo"
            description="Revisar si la cobertura conceptual esta presente y conectada."
            href="#integrity-issues"
          />
          <QuickAction
            title="Espacio de gestion"
            description="Crear temas, corregir problemas e inspeccionar relaciones del grafo con detalle."
            href="/management"
          />
        </div>
      </ContentCard>

      <ContentCard
        title="Resumenes de temas"
        subtitle="Vista de alto nivel sobre temas, lecciones y conceptos mapeados."
        accent="mint"
      >
        {overview.topicSummaries.length ? (
          <div className="tile-grid" id="topic-summaries">
            {overview.topicSummaries.map((summary) => (
              <article className="tile tile--dense" key={summary.topic.id}>
                <p className="auth-card__eyebrow">Tema</p>
                <h4>{summary.topic.title}</h4>
                <ul className="detail-list">
                  <li>
                    <strong>Lecciones:</strong> {summary.lessonCount}
                  </li>
                  <li>
                    <strong>Conceptos:</strong> {summary.conceptCount}
                  </li>
                  <li>
                    <strong>Temas prerequisito:</strong>{" "}
                    {summary.prerequisiteTopicIds.join(", ") || "Ninguno"}
                  </li>
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavia no hay estructura de contenido."
            description="Los resumenes de temas apareceran cuando content_service publique temas y lecciones."
          />
        )}
      </ContentCard>

      <ContentCard
        title="Problemas de integridad"
        subtitle="Alertas de grafo y enlaces de contenido que ayudan al seguimiento operativo antes de una autoria completa."
        accent="sand"
      >
        {overview.integrityIssues.length ? (
          <ul className="detail-list" id="integrity-issues">
            {overview.integrityIssues.map((issue, index) => (
              <li key={`${issue.issueType}-${issue.entityId ?? index}`}>
                <strong>{issue.severity}:</strong> {issue.message}
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No se detectaron problemas de integridad."
            description="El grafo actual de contenido se ve estructuralmente saludable en este nivel base."
          />
        )}
      </ContentCard>

      <ContentCard
        title="Brechas de cobertura"
        subtitle="Senales de autoria y cobertura del grafo que todavia necesitan atencion."
        accent="mint"
      >
        {overview.coverageGaps.length ? (
          <ul className="detail-list">
            {overview.coverageGaps.map((gap) => (
              <li key={`${gap.gapType}-${gap.entityId ?? gap.message}`}>
                <strong>{gap.gapType}:</strong> {gap.message}
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No se detectaron brechas de cobertura."
            description="La cobertura de temas y el enlace conceptual cumplen actualmente los chequeos base."
          />
        )}
      </ContentCard>
    </AppShell>
  );

}
