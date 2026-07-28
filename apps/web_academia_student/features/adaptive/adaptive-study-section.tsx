"use client";

import Link from "next/link";
import type { GetLearningProgressResponse } from "@cumbre/schemas";
import {
  ContentCard,
  EmptyState,
  ProgressBar
} from "@/components/ui";

export function AdaptiveStudySection({
  progress,
  fallbackHref
}: {
  progress: GetLearningProgressResponse;
  fallbackHref: string;
}) {
  const mastery = progress.estimatedMastery;
  const nextAction = progress.nextBestAction;
  const guidance = progress.adaptiveGuidance ?? [];
  const nextActionHref = nextAction?.actionUrl ?? fallbackHref;

  return (
    <>
      <div className="page-grid">
        <ContentCard
          title="Siguiente mejor accion"
          subtitle="Una recomendación unica y explicable sobre lo que el estudiante deberia hacer ahora."
          accent="sun"
        >
          {nextAction ? (
            <>
              <p className="auth-card__eyebrow">{formatActionType(nextAction.actionType)}</p>
              <h4>{nextAction.title}</h4>
              {nextAction.summary ? <p className="muted-copy">{nextAction.summary}</p> : null}
              <ul className="detail-list">
                <li>
                  <strong>Por que ahora:</strong> {nextAction.rationale}
                </li>
                <li>
                  <strong>Confianza:</strong> {Math.round(nextAction.confidence * 100)}%
                </li>
              </ul>
              <div className="card-actions">
                <Link className="button" href={nextActionHref}>
                  {nextAction.actionLabel ?? "Seguir siguiente paso"}
                </Link>
                <Link className="button button--ghost" href="/progress">
                  Revisar progreso
                </Link>
              </div>
            </>
          ) : (
            <EmptyState
              title="Todavía no hay una siguiente acción."
              description="La capa adaptativa necesita más señales de progreso antes de elegir un siguiente paso más fuerte."
              actionLabel="Continuar aprendiendo"
              actionHref={fallbackHref}
            />
          )}
        </ContentCard>

        <ContentCard
          title="Dominio estimado"
          subtitle="Se calcula con tus sesiones, tu dominio por tema y tu actividad con el tutor."
          accent="mint"
        >
          {mastery ? (
            <>
              <p className="emphasis-number">{Math.round(mastery.score * 100)}%</p>
              <ProgressBar value={mastery.score * 100} />
              <ul className="detail-list">
                <li>
                  <strong>Nivel:</strong> {formatMasteryLevel(mastery.level)}
                </li>
                <li>
                  <strong>Confianza:</strong> {Math.round(mastery.confidence * 100)}%
                </li>
                <li>
                  <strong>Dificultad recomendada:</strong>{" "}
                  {mastery.recommendedDifficulty ?? "intermediate"}
                </li>
                <li>
                  <strong>Explicacion:</strong> {mastery.rationale}
                </li>
              </ul>
            </>
          ) : (
            <EmptyState
              title="Todavía no hay estimación de dominio."
              description="La estimación aparece cuando el estudiante ya tiene suficiente actividad persistida."
              actionLabel="Retomar aprendizaje"
              actionHref={fallbackHref}
            />
          )}
        </ContentCard>
      </div>

      <ContentCard
        title="Qué te conviene repasar"
        subtitle="Cada tarjeta te dice qué hacer y por qué."
        accent="sand"
      >
        {guidance.length || progress.recommendations.length ? (
          <div className="tile-grid">
            {guidance.map((item, index) => (
              <article className="tile" key={`${item.title}-${index}`}>
                <p className="auth-card__eyebrow">Guía</p>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
                <p className="muted-copy">{item.rationale}</p>
              </article>
            ))}
            {progress.recommendations.map((recommendation) =>
              recommendation.actionUrl ? (
                <Link className="tile" href={recommendation.actionUrl} key={recommendation.id}>
                  <p className="auth-card__eyebrow">
                    {formatRecommendationType(recommendation.recommendationType)}
                  </p>
                  <h4>{recommendation.title}</h4>
                  <p>{recommendation.summary ?? "Sigue este paso de estudio recomendado."}</p>
                  {recommendation.rationale ? (
                    <p className="muted-copy">{recommendation.rationale}</p>
                  ) : null}
                </Link>
              ) : (
                <article className="tile" key={recommendation.id}>
                  <p className="auth-card__eyebrow">
                    {formatRecommendationType(recommendation.recommendationType)}
                  </p>
                  <h4>{recommendation.title}</h4>
                  <p>{recommendation.summary ?? "Sigue este paso de estudio recomendado."}</p>
                  {recommendation.rationale ? (
                    <p className="muted-copy">{recommendation.rationale}</p>
                  ) : null}
                </article>
              )
            )}
          </div>
        ) : (
          <EmptyState
            title="Todavía no hay guía adaptativa."
            description="Continua el flujo de aprendizaje para que la plataforma identifique patrones de repaso, continuidad y apoyo del tutor."
            actionLabel="Retomar aprendizaje"
            actionHref={fallbackHref}
          />
        )}
      </ContentCard>
    </>
  );
}

function formatMasteryLevel(level: string) {
  return level.replaceAll("_", " ");
}

function formatActionType(actionType: string) {
  return actionType.replaceAll("_", " ");
}

function formatRecommendationType(recommendationType: string) {
  return recommendationType.replaceAll("_", " ");
}
