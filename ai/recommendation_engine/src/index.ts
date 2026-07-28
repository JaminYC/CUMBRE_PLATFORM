import type {
  AdaptiveGuidance,
  KnowledgeGraphInsight,
  LearningPath,
  LearningSession,
  MasteryEstimate,
  NextBestAction,
  Recommendation,
  RetrievedContextBundle,
  TutorTurn
} from "@cumbre/types";

export const moduleName = "recommendation_engine";

export interface RecommendationEngineInput {
  learnerUserId: string;
  learningPath?: LearningPath | null;
  sessions: LearningSession[];
  estimatedMastery: MasteryEstimate;
  adaptiveGuidance: AdaptiveGuidance[];
  recentTutorTurns: TutorTurn[];
  graphInsight?: KnowledgeGraphInsight | null;
  stalledLessonId?: string;
  stalledTopicId?: string;
  nextLessonId?: string;
  shouldAskTutor: boolean;
  retrievedContext?: RetrievedContextBundle;
}

export interface RecommendationEngineOutput {
  recommendations: Recommendation[];
  nextBestAction: NextBestAction;
}

export function describeModule(): string {
  return "Produce siguientes acciones y recomendaciones explicables a partir de señales de aprendizaje adaptativo.";
}

export function generateRecommendations(
  input: RecommendationEngineInput
): RecommendationEngineOutput {
  const now = new Date().toISOString();
  const recentSession = input.sessions[0];
  const topRetrievedContext = input.retrievedContext?.items[0];
  const recommendations: Recommendation[] = [];

  if (
    input.graphInsight?.recommendedReviewConcept &&
    (input.graphInsight.recommendedReviewLessonId ||
      input.graphInsight.recommendedReviewTopicId)
  ) {
    const reviewLessonId = input.graphInsight.recommendedReviewLessonId;
    const reviewTopicId =
      input.graphInsight.recommendedReviewTopicId ?? recentSession?.topicId;

    recommendations.push({
      id: `recommendation-${input.graphInsight.recommendedReviewConcept.id}-concept-review`,
      createdAt: now,
      updatedAt: now,
      recipientUserId: input.learnerUserId,
      recommendationType: "review",
      priority: "high",
      title: `Revisar concepto prerequisito: ${input.graphInsight.recommendedReviewConcept.title}`,
      summary: "El grafo de conocimiento apunta a un concepto prerrequisito que conviene estabilizar antes de avanzar.",
      rationale:
        [
          input.graphInsight.explanation.at(-1) ??
            "La cobertura de conceptos prerrequisito sugiere un desvío de repaso.",
          topRetrievedContext
            ? `Soporte recuperado: ${topRetrievedContext.title}.`
            : ""
        ]
          .filter(Boolean)
          .join(" "),
      targetEntityType: reviewLessonId ? "lesson" : "topic",
      targetEntityId: reviewLessonId ?? reviewTopicId,
      actionLabel: reviewLessonId ? "Abrir lección de repaso" : "Abrir tema de repaso",
      actionUrl:
        reviewLessonId && reviewTopicId
          ? buildLessonUrl(reviewTopicId, reviewLessonId)
          : reviewTopicId
            ? `/topics/${reviewTopicId}`
            : undefined
    });
  }

  if (input.stalledLessonId) {
    recommendations.push({
      id: `recommendation-${input.stalledLessonId}-revisit`,
      createdAt: now,
      updatedAt: now,
      recipientUserId: input.learnerUserId,
      recommendationType: "review",
      priority: "high",
      title: "Volver a la lección con dificultad reciente",
      summary: "Hay múltiples intentos incompletos en la misma lección. Repasarla ahora debería reducir la fricción.",
      rationale: [
        "Los reinicios repetidos sin completar indican que la lección todavía necesita refuerzo.",
        topRetrievedContext ? `Soporte recuperado: ${topRetrievedContext.rationale}` : ""
      ]
        .filter(Boolean)
        .join(" "),
      targetEntityType: "lesson",
      targetEntityId: input.stalledLessonId,
      actionLabel: "Revisar leccion",
      actionUrl: buildLessonUrl(recentSession?.topicId, input.stalledLessonId)
    });
  }

  if (input.stalledTopicId) {
    recommendations.push({
      id: `recommendation-${input.stalledTopicId}-topic-review`,
      createdAt: now,
      updatedAt: now,
      recipientUserId: input.learnerUserId,
      recommendationType: "review",
      priority: "medium",
      title: "Revisar el tema prerrequisito",
      summary: "Repasar el tema debería estabilizar la secuencia de lecciones antes de seguir avanzando.",
      rationale: [
        "El bajo impulso en una lección suele apuntar a brechas del tema, no solo al ritmo.",
        topRetrievedContext ? `Soporte recuperado: ${topRetrievedContext.title}.` : ""
      ]
        .filter(Boolean)
        .join(" "),
      targetEntityType: "topic",
      targetEntityId: input.stalledTopicId,
      actionLabel: "Abrir tema",
      actionUrl: `/topics/${input.stalledTopicId}`
    });
  }

  if (input.shouldAskTutor && recentSession?.lessonId) {
    recommendations.push({
      id: `recommendation-${recentSession.lessonId}-tutor`,
      createdAt: now,
      updatedAt: now,
      recipientUserId: input.learnerUserId,
      recommendationType: "tutor_prompt",
      priority: "medium",
      title: "Pedir una aclaración al tutor",
      summary: "Un intercambio breve con el tutor puede destrabar el siguiente paso sin salir del flujo de la lección.",
      rationale: [
        "El uso reciente del tutor y la fricción actual sugieren que una aclaración sigue siendo valiosa.",
        topRetrievedContext ? `Soporte recuperado: ${topRetrievedContext.rationale}` : ""
      ]
        .filter(Boolean)
        .join(" "),
      targetEntityType: "lesson",
      targetEntityId: recentSession.lessonId,
      actionLabel: "Abrir tutor",
      actionUrl: buildLessonUrl(recentSession.topicId, recentSession.lessonId)
    });
  }

  if (
    input.estimatedMastery.score >= 0.72 &&
    input.nextLessonId &&
    input.nextLessonId !== recentSession?.lessonId
  ) {
    recommendations.push({
      id: `recommendation-${input.nextLessonId}-advance`,
      createdAt: now,
      updatedAt: now,
      recipientUserId: input.learnerUserId,
      recommendationType: "lesson",
      priority: "medium",
      title: "Avanzar a la siguiente lección",
      summary: "Tu trabajo reciente sugiere que ya puedes seguir avanzando por la ruta actual.",
      rationale: [
        "Las señales de progreso y dominio ya son suficientes para continuar la secuencia.",
        topRetrievedContext ? `Soporte recuperado: ${topRetrievedContext.title}.` : ""
      ]
        .filter(Boolean)
        .join(" "),
      targetEntityType: "lesson",
      targetEntityId: input.nextLessonId,
      actionLabel: "Continuar ruta",
      actionUrl: recentSession?.topicId
        ? buildLessonUrl(recentSession.topicId, input.nextLessonId)
        : undefined
    });
  }

  if (!recommendations.length && input.learningPath) {
    recommendations.push({
      id: `recommendation-${input.learningPath.id}-continue`,
      createdAt: now,
      updatedAt: now,
      recipientUserId: input.learnerUserId,
      recommendationType: "learning_path",
      priority: "medium",
      title: "Continuar tu ruta de aprendizaje actual",
      summary: "Mantente en la ruta actual y sigue construyendo progreso estable.",
      rationale: [
        "La mezcla actual de señales es lo bastante estable para seguir sin un desvío de repaso.",
        topRetrievedContext ? `Soporte recuperado: ${topRetrievedContext.title}.` : ""
      ]
        .filter(Boolean)
        .join(" "),
      targetEntityType: "learning_path",
      targetEntityId: input.learningPath.id,
      actionLabel: "Abrir ruta",
      actionUrl: `/learning-path/${input.learningPath.id}`
    });
  }

  const nextBestAction = selectNextBestAction(input, recommendations);

  return {
    recommendations,
    nextBestAction
  };
}

function selectNextBestAction(
  input: RecommendationEngineInput,
  recommendations: Recommendation[]
): NextBestAction {
  const primaryRecommendation = recommendations[0];

  if (primaryRecommendation?.id.includes("-concept-review")) {
    return {
      actionType: "review_prerequisite_topic",
      title: primaryRecommendation.title,
      summary: primaryRecommendation.summary,
      rationale:
        primaryRecommendation.rationale ??
        "Conviene revisar un concepto prerrequisito antes de avanzar.",
      confidence: 0.84,
      targetEntityType: primaryRecommendation.targetEntityType,
      targetEntityId: primaryRecommendation.targetEntityId,
      actionLabel: primaryRecommendation.actionLabel,
      actionUrl: primaryRecommendation.actionUrl
    };
  }

  if (primaryRecommendation?.targetEntityType === "lesson" && input.stalledLessonId) {
    return {
      actionType: "revisit_struggled_lesson",
      title: primaryRecommendation.title,
      summary: primaryRecommendation.summary,
      rationale: primaryRecommendation.rationale ?? "Las sesiones recientes muestran dificultad repetida en la misma lección.",
      confidence: 0.82,
      targetEntityType: "lesson",
      targetEntityId: input.stalledLessonId,
      actionLabel: primaryRecommendation.actionLabel,
      actionUrl: primaryRecommendation.actionUrl
    };
  }

  if (primaryRecommendation?.targetEntityType === "topic" && input.stalledTopicId) {
    return {
      actionType: "review_prerequisite_topic",
      title: primaryRecommendation.title,
      summary: primaryRecommendation.summary,
      rationale: primaryRecommendation.rationale ?? "El repaso del tema debería estabilizar la secuencia actual.",
      confidence: 0.76,
      targetEntityType: "topic",
      targetEntityId: input.stalledTopicId,
      actionLabel: primaryRecommendation.actionLabel,
      actionUrl: primaryRecommendation.actionUrl
    };
  }

  if (primaryRecommendation?.recommendationType === "tutor_prompt") {
    return {
      actionType: "ask_tutor_for_clarification",
      title: primaryRecommendation.title,
      summary: primaryRecommendation.summary,
      rationale: primaryRecommendation.rationale ?? "La aclaración del tutor es ahora mismo la via más rápida para destrabar.",
      confidence: 0.7,
      targetEntityType: primaryRecommendation.targetEntityType,
      targetEntityId: primaryRecommendation.targetEntityId,
      actionLabel: primaryRecommendation.actionLabel,
      actionUrl: primaryRecommendation.actionUrl
    };
  }

  if (primaryRecommendation?.targetEntityId === input.nextLessonId && input.nextLessonId) {
    return {
      actionType: "advance_to_next_lesson",
      title: primaryRecommendation.title,
      summary: primaryRecommendation.summary,
      rationale: primaryRecommendation.rationale ?? "El progreso reciente indica preparación para la siguiente lección.",
      confidence: 0.74,
      targetEntityType: "lesson",
      targetEntityId: input.nextLessonId,
      actionLabel: primaryRecommendation.actionLabel,
      actionUrl: primaryRecommendation.actionUrl
    };
  }

  return {
    actionType: "continue_current_path",
    title: "Continuar la ruta de aprendizaje actual",
    summary: input.adaptiveGuidance[0]?.summary ?? "Mantente en la ruta actual y conserva el impulso.",
    rationale: input.adaptiveGuidance[0]?.rationale ?? "Las señales actuales no exigen un desvío por ahora.",
    confidence: 0.66,
    targetEntityType: input.learningPath ? "learning_path" : undefined,
    targetEntityId: input.learningPath?.id,
    actionLabel: input.learningPath ? "Abrir ruta" : "Continuar aprendizaje",
    actionUrl: input.learningPath ? `/learning-path/${input.learningPath.id}` : undefined
  };
}

function buildLessonUrl(topicId: string | undefined, lessonId: string) {
  return topicId ? `/topics/${topicId}/lessons/${lessonId}` : undefined;
}
