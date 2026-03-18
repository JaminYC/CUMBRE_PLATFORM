import type {
  AdaptiveGuidance,
  DifficultyLevel,
  KnowledgeGraphInsight,
  KnowledgeNode,
  LearningPath,
  LearningSession,
  MasteryEstimate,
  MasteryLevel,
  MasteryState,
  RetrievedContextBundle,
  TutorTurn
} from "@cumbre/types";

export const moduleName = "adaptive_engine";

export interface AdaptiveEngineInput {
  learnerUserId: string;
  learningPath?: LearningPath | null;
  sessions: LearningSession[];
  masteryStates: MasteryState[];
  recentTutorTurns: TutorTurn[];
  graphInsight?: KnowledgeGraphInsight | null;
  retrievedContext?: RetrievedContextBundle;
}

export interface AdaptiveEngineOutput {
  estimatedMastery: MasteryEstimate;
  adaptiveGuidance: AdaptiveGuidance[];
  stalledLessonId?: string;
  stalledTopicId?: string;
  nextLessonId?: string;
  shouldAskTutor: boolean;
  recommendedReviewConcept?: KnowledgeNode;
  reviewTopicId?: string;
  reviewLessonId?: string;
}

export function describeModule(): string {
  return "Calcula dominio explicable y guia adaptativa de estudio a partir de sesiones, registros de dominio y actividad del tutor.";
}

export function evaluateAdaptiveState(
  input: AdaptiveEngineInput
): AdaptiveEngineOutput {
  const recentSessions = input.sessions.slice(0, 5);
  const masteryAverage =
    input.masteryStates.length > 0
      ? input.masteryStates.reduce((sum, state) => sum + state.score, 0) /
        input.masteryStates.length
      : 0.55;
  const completedSessions = input.sessions.filter(
    (session) => session.status === "completed"
  );
  const incompleteSessions = input.sessions.filter(
    (session) => session.status !== "completed"
  );
  const recentProgressAverage =
    recentSessions.length > 0
      ? recentSessions.reduce((sum, session) => sum + session.progressPercent, 0) /
        recentSessions.length /
        100
      : 0.45;
  const tutorHelpCount = input.recentTutorTurns.filter(
    (turn) => turn.actor === "tutor"
  ).length;
  const graphPenalty =
    input.graphInsight?.prerequisiteConcepts.length && tutorHelpCount >= 1 ? 0.05 : 0;
  const stalledLesson = detectStalledLesson(input.sessions);
  const stalledPenalty = stalledLesson ? 0.12 : 0;
  const tutorPenalty = tutorHelpCount >= 3 ? 0.08 : tutorHelpCount >= 1 ? 0.03 : 0;
  const completionBoost = completedSessions.length > 0 ? 0.08 : 0;
  const progressBoost = recentProgressAverage >= 0.75 ? 0.08 : recentProgressAverage >= 0.55 ? 0.03 : 0;
  const retrievalBoost =
    input.retrievedContext?.items.some((item) => item.sourceType === "progress_signal")
      ? 0.02
      : 0;
  const estimatedScore = clamp(
    masteryAverage +
      completionBoost +
      retrievalBoost +
      progressBoost -
      stalledPenalty -
      tutorPenalty -
      graphPenalty,
    0.1,
    0.95
  );
  const level = scoreToMasteryLevel(estimatedScore);
  const confidence = clamp(
    0.45 +
      Math.min(input.sessions.length, 4) * 0.08 +
      Math.min(input.masteryStates.length, 3) * 0.07,
    0.45,
    0.92
  );
  const contributingSignals = [
    `${completedSessions.length} sesiones completadas`,
    `${incompleteSessions.length} sesiones incompletas o activas`,
    `${input.masteryStates.length} registros de dominio`,
    `${tutorHelpCount} respuestas recientes del tutor`
  ];
  const recommendedReviewConcept = input.graphInsight?.recommendedReviewConcept;

  if (input.graphInsight) {
    contributingSignals.push(
      `${input.graphInsight.prerequisiteConcepts.length} conceptos prerequisito desde el grafo de conocimiento`
    );
  }

  if (input.retrievedContext?.items.length) {
    contributingSignals.push(
      `${input.retrievedContext.items.length} elementos de contexto priorizados por recuperacion apoyando la estimacion actual`
    );
  }

  const estimatedMastery: MasteryEstimate = {
    learnerUserId: input.learnerUserId,
    learningPathId: input.learningPath?.id,
    score: round(estimatedScore),
    level,
    confidence: round(confidence),
    rationale: recommendedReviewConcept
      ? `El grafo sugiere que ${recommendedReviewConcept.title} es el prerequisito faltante detras de la friccion actual.`
      : stalledLesson
        ? "El estudiante muestra friccion repetida en la misma leccion y necesita refuerzo antes de avanzar."
        : tutorHelpCount >= 3
          ? "El uso frecuente del tutor indica busqueda activa de ayuda y friccion conceptual parcial."
          : completedSessions.length > 0
            ? "El trabajo completado recientemente y el progreso de sesiones sugieren un avance estable."
            : "La estimacion se basa en senales tempranas de aprendizaje todavia limitadas.",
    contributingSignals,
    recommendedDifficulty: suggestDifficulty(estimatedScore)
  };

  const adaptiveGuidance: AdaptiveGuidance[] = [
    {
      title: "Study guidance",
      
      summary:
        recommendedReviewConcept
          ? `Revisa ${recommendedReviewConcept.title} antes de profundizar en la secuencia actual de lecciones.`
          : stalledLesson
            ? "Baja el ritmo y repasa la leccion con mas dificultad antes de seguir."
            : recentProgressAverage >= 0.7
            ? "Mantén el ritmo actual y extiende ese mismo patron de aprendizaje a la siguiente leccion."
              : "Usa ciclos de estudio mas cortos y enfocados, confirmando comprension en cada paso.",
      rationale:
        recommendedReviewConcept
          ? input.graphInsight?.explanation.at(-1) ??
            "Los prerequisitos conceptuales indican un patron de repaso antes de avanzar."
          : input.retrievedContext?.items[0]
            ? `${input.retrievedContext.items[0].rationale} ${input.retrievedContext.explanation[0] ?? ""}`.trim()
          : tutorHelpCount >= 3
            ? "La actividad del tutor muestra que el estudiante se beneficia de aclaraciones extra."
            : "El progreso de sesiones y los registros de dominio son la base principal de esta guia.",
      relatedEntityType: recommendedReviewConcept
        ? "topic"
        : stalledLesson?.topicId
          ? "topic"
          : input.learningPath
            ? "learning_path"
            : undefined,
      relatedEntityId:
        input.graphInsight?.recommendedReviewTopicId ??
        stalledLesson?.topicId ??
        input.learningPath?.id
    }
  ];

  if (recommendedReviewConcept) {
    adaptiveGuidance.push({
      title: "Senal de prerequisito faltante",
      summary: `${recommendedReviewConcept.title} parece ser el concepto que conviene repasar antes de seguir avanzando.`,
      rationale:
        input.graphInsight?.explanation.at(-1) ??
        "Los prerequisitos del grafo apuntan a una brecha conceptual.",
      relatedEntityType: "topic",
      relatedEntityId: input.graphInsight?.recommendedReviewTopicId
    });
  }

  if (tutorHelpCount >= 2) {
    adaptiveGuidance.push({
      title: "Senal de apoyo del tutor",
      summary: "Las interacciones recientes con el tutor sugieren que el estudiante deberia mantener ayuda cercana.",
      rationale: "El estudiante ha necesitado multiples respuestas del tutor en la ventana de estudio reciente.",
      relatedEntityType: stalledLesson?.lessonId ? "lesson" : undefined,
      relatedEntityId: stalledLesson?.lessonId
    });
  }

  return {
    estimatedMastery,
    adaptiveGuidance,
    stalledLessonId: stalledLesson?.lessonId ?? input.graphInsight?.lessonId,
    stalledTopicId:
      stalledLesson?.topicId ??
      input.graphInsight?.recommendedReviewTopicId ??
      input.graphInsight?.topicId,
    nextLessonId: determineNextLessonId(input.learningPath, recentSessions[0]?.lessonId),
    shouldAskTutor:
      tutorHelpCount >= 2 || Boolean(stalledLesson) || Boolean(recommendedReviewConcept),
    recommendedReviewConcept,
    reviewTopicId: input.graphInsight?.recommendedReviewTopicId,
    reviewLessonId: input.graphInsight?.recommendedReviewLessonId
  };
}

function detectStalledLesson(sessions: LearningSession[]) {
  const lessonAttempts = new Map<string, { attempts: number; latest?: LearningSession }>();

  for (const session of sessions) {
    if (!session.lessonId) {
      continue;
    }

    const currentValue = lessonAttempts.get(session.lessonId) ?? {
      attempts: 0,
      latest: undefined
    };

    lessonAttempts.set(session.lessonId, {
      attempts: currentValue.attempts + 1,
      latest: currentValue.latest ?? session
    });
  }

  for (const [lessonId, value] of lessonAttempts.entries()) {
    const latestSession = value.latest;

    if (
      value.attempts >= 2 &&
      latestSession &&
      latestSession.status !== "completed" &&
      latestSession.progressPercent < 70
    ) {
      return {
        lessonId,
        topicId: latestSession.topicId
      };
    }
  }

  return null;
}

function determineNextLessonId(
  learningPath: LearningPath | null | undefined,
  currentLessonId?: string
) {
  const lessonIds = learningPath?.lessonIds;

  if (!lessonIds?.length) {
    return undefined;
  }

  if (!currentLessonId) {
    return lessonIds[0];
  }

  const currentIndex = lessonIds.indexOf(currentLessonId);

  if (currentIndex === -1) {
    return lessonIds[0];
  }

  return lessonIds[currentIndex + 1] ?? lessonIds[currentIndex];
}

function scoreToMasteryLevel(score: number): MasteryLevel {
  if (score >= 0.82) {
    return "proficient";
  }

  if (score >= 0.64) {
    return "developing";
  }

  if (score >= 0.45) {
    return "emerging";
  }

  return "not_started";
}

function suggestDifficulty(score: number): DifficultyLevel {
  if (score >= 0.82) {
    return "advanced";
  }

  if (score >= 0.64) {
    return "intermediate";
  }

  return "beginner";
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
