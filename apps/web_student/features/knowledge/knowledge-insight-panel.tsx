"use client";

import Link from "next/link";
import type { KnowledgeGraphInsight } from "@cumbre/types";
import { ContentCard, EmptyState } from "@/components/ui";

export function KnowledgeInsightPanel({
  insight,
  accent = "sand"
}: {
  insight: KnowledgeGraphInsight;
  accent?: "mint" | "sun" | "sand";
}) {
  const reviewHref = resolveReviewHref(insight);

  return (
    <>
      <div className="page-grid">
        <ContentCard
          title="Insight de prerrequisitos"
          subtitle="Una alerta basada en el grafo sobre lo que sostiene esta lección o tema."
          accent={accent}
        >
          {insight.prerequisiteConcepts.length || insight.recommendedReviewConcept ? (
            <>
              {insight.recommendedReviewConcept ? (
                <div className="success-callout">
                  <p>
                    Revisa <strong>{insight.recommendedReviewConcept.title}</strong> antes de
                    avanzar mas.
                  </p>
                  <p>
                    {insight.recommendedReviewConcept.summary ??
                      "Este concepto parece ser el prerrequisito faltante más probable."}
                  </p>
                  {reviewHref ? (
                    <div className="card-actions">
                      <Link className="button button--ghost" href={reviewHref}>
                        Revisar antes de avanzar
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : null}
              <ul className="detail-list">
                {insight.prerequisiteConcepts.map((concept) => (
                  <li key={concept.id}>
                    <strong>{concept.title}</strong> -{" "}
                    {concept.summary ?? "Concepto prerequisito"}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <EmptyState
              title="No hay alerta de prerrequisitos en este momento."
              description="Este ancla no expone actualmente presión de conceptos prerrequisito."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Fragmento de mapa conceptual"
          subtitle="Una explicación compacta de como esta unidad se conecta con conceptos cercanos."
          accent="mint"
        >
          <ul className="detail-list">
            {insight.explanation.map((item, index) => (
              <li key={`${insight.anchorEntityId}-explanation-${index}`}>{item}</li>
            ))}
          </ul>
        </ContentCard>
      </div>

      <ContentCard
        title="Conceptos relacionados"
        subtitle="Estos enlaces vuelven más explicable la ruta de aprendizaje sin exigir una visualización completa del grafo."
        accent="sun"
      >
        {insight.coveredConcepts.length || insight.relatedConcepts.length ? (
          <div className="tile-grid">
            {insight.coveredConcepts.map((concept) => (
              <article className="tile" key={concept.id}>
                <p className="auth-card__eyebrow">Cubierto aqui</p>
                <h4>{concept.title}</h4>
                <p>{concept.summary ?? "Concepto reforzado por esta unidad de aprendizaje."}</p>
              </article>
            ))}
            {insight.relatedConcepts.map((concept) => (
              <article className="tile" key={concept.id}>
                <p className="auth-card__eyebrow">Concepto relacionado</p>
                <h4>{concept.title}</h4>
                <p>{concept.summary ?? "Concepto conectado desde el grafo."}</p>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No hay conceptos relacionados disponibles."
            description="El grafo de conocimiento mostrará aquí conceptos conectados cuando esten mapeados."
          />
        )}
      </ContentCard>
    </>
  );
}

function resolveReviewHref(insight: KnowledgeGraphInsight) {
  if (insight.recommendedReviewLessonId && insight.recommendedReviewTopicId) {
    return `/topics/${insight.recommendedReviewTopicId}/lessons/${insight.recommendedReviewLessonId}`;
  }

  if (insight.recommendedReviewTopicId) {
    return `/topics/${insight.recommendedReviewTopicId}`;
  }

  return undefined;
}
