import type {
  AdaptiveGuidance,
  KnowledgeGraphInsight,
  LearningPath,
  LearningSession,
  MasteryEstimate,
  MasteryState,
  NextBestAction,
  RetrievedContextBundle,
  TutorTurn
} from "@cumbre/types";
import { rankCandidates, type RetrievalCandidate } from "./ranking.js";

export interface AdaptiveRetrievalInput {
  learningPath?: LearningPath | null;
  sessions: LearningSession[];
  masteryStates: MasteryState[];
  recentTutorTurns: TutorTurn[];
  graphInsight?: KnowledgeGraphInsight | null;
  estimatedMastery?: MasteryEstimate;
  adaptiveGuidance?: AdaptiveGuidance[];
  nextBestAction?: NextBestAction;
}

export function retrieveAdaptiveContext(
  input: AdaptiveRetrievalInput
): RetrievedContextBundle {
  const latestSession = input.sessions[0];
  const latestMastery = input.masteryStates[0];
  const tutorReplyCount = input.recentTutorTurns.filter(
    (turn) => turn.actor === "tutor"
  ).length;
  const candidates: RetrievalCandidate[] = [];

  if (input.learningPath) {
    candidates.push({
      id: `${input.learningPath.id}-path`,
      sourceType: "learning_path" as const,
      title: input.learningPath.title,
      content:
        input.learningPath.summary ??
        `${input.learningPath.title} is the active learning path in view.`,
      rationale: "The active learning path anchors the adaptive decision to the current sequence.",
      entityType: "learning_path" as const,
      entityId: input.learningPath.id,
      tags: input.learningPath.skillIds,
      sourceWeight: 0.7
    });
  }

  if (latestSession) {
    candidates.push({
      id: `${latestSession.id}-session`,
      sourceType: "progress_signal" as const,
      title: "Recent learning session",
      content: `The latest session is ${latestSession.status} at ${Math.round(latestSession.progressPercent)}% progress for lesson ${latestSession.lessonId ?? "unknown"}.`,
      rationale: "Recent session status is one of the strongest short-term momentum signals.",
      entityType: "lesson" as const,
      entityId: latestSession.lessonId,
      sourceWeight: latestSession.status === "completed" ? 0.72 : 0.78
    });
  }

  if (latestMastery) {
    candidates.push({
      id: `${latestMastery.id}-mastery`,
      sourceType: "progress_signal",
      title: "Mastery estimate evidence",
      content: `Recent mastery state for ${latestMastery.subjectType} ${latestMastery.subjectId} is ${latestMastery.level} with score ${latestMastery.score}.`,
      rationale: "Mastery records make the adaptive baseline explainable to downstream systems.",
      entityType:
        latestMastery.subjectType === "topic" || latestMastery.subjectType === "learning_path"
          ? latestMastery.subjectType
          : "lesson",
      entityId: latestMastery.subjectId,
      sourceWeight: 0.69
    });
  }

  if (input.graphInsight?.recommendedReviewConcept) {
    candidates.push({
      id: `${input.graphInsight.recommendedReviewConcept.id}-review-concept`,
      sourceType: "concept" as const,
      title: input.graphInsight.recommendedReviewConcept.title,
      content:
        input.graphInsight.recommendedReviewConcept.summary ??
        input.graphInsight.recommendedReviewConcept.title,
      rationale: "The graph-suggested review concept is the clearest prerequisite signal available.",
      entityType: "concept" as const,
      entityId: input.graphInsight.recommendedReviewConcept.id,
      sourceWeight: 0.83
    });
  }

  const graphInsight = input.graphInsight;

  for (const explanation of graphInsight?.explanation ?? []) {
    candidates.push({
      id: `graph-explanation-${candidates.length}`,
      sourceType: "graph_explanation" as const,
      title: "Graph reasoning",
      content: explanation,
      rationale: "Graph explanations make prerequisite-based recommendations auditable.",
      entityType: graphInsight?.anchorEntityType,
      entityId: graphInsight?.anchorEntityId,
      sourceWeight: 0.74
    });
  }

  if (tutorReplyCount > 0) {
    candidates.push({
      id: "recent-tutor-usage",
      sourceType: "tutor_memory" as const,
      title: "Recent tutor help signal",
      content: `The learner needed ${tutorReplyCount} recent tutor replies, which suggests active clarification needs.`,
      rationale: "Tutor usage is a practical friction signal in the current baseline.",
      entityType: latestSession?.lessonId ? "lesson" : undefined,
      entityId: latestSession?.lessonId,
      sourceWeight: tutorReplyCount >= 3 ? 0.76 : 0.64
    });
  }

  if (input.estimatedMastery) {
    candidates.push({
      id: "estimated-mastery",
      sourceType: "adaptive_signal" as const,
      title: "Estimated mastery",
      content: `${input.estimatedMastery.level} mastery with score ${input.estimatedMastery.score} and confidence ${input.estimatedMastery.confidence}.`,
      rationale: "Estimated mastery consolidates multiple raw signals into one explainable summary.",
      entityType: input.learningPath ? "learning_path" : undefined,
      entityId: input.learningPath?.id,
      sourceWeight: 0.68
    });
  }

  if (input.nextBestAction) {
    candidates.push({
      id: "next-best-action",
      sourceType: "adaptive_signal",
      title: input.nextBestAction.title,
      content: [input.nextBestAction.summary, input.nextBestAction.rationale]
        .filter(Boolean)
        .join(" "),
      rationale: "The last computed next-best-action is a strong prior for adaptive continuity.",
      entityType: input.nextBestAction.targetEntityType,
      entityId: input.nextBestAction.targetEntityId,
      sourceWeight: 0.66
    });
  }

  for (const guidance of input.adaptiveGuidance ?? []) {
    candidates.push({
      id: `adaptive-guidance-${candidates.length}`,
      sourceType: "adaptive_signal",
      title: guidance.title,
      content: `${guidance.summary} ${guidance.rationale}`.trim(),
      rationale: "Adaptive guidance captures the current explainable intervention stance.",
      entityType: guidance.relatedEntityType,
      entityId: guidance.relatedEntityId,
      sourceWeight: 0.65
    });
  }

  return rankCandidates({
    query: buildAdaptiveQuery(input, tutorReplyCount),
    strategy: "adaptive_review",
    explanation: buildAdaptiveExplanation(input, tutorReplyCount),
    candidates,
    limit: 5
  });
}

function buildAdaptiveQuery(input: AdaptiveRetrievalInput, tutorReplyCount: number) {
  return [
    input.estimatedMastery?.level,
    input.graphInsight?.recommendedReviewConcept?.title,
    input.nextBestAction?.actionType,
    input.learningPath?.title,
    tutorReplyCount > 0 ? "tutor support" : undefined,
    input.sessions[0]?.status
  ]
    .filter(Boolean)
    .join(" ");
}

function buildAdaptiveExplanation(
  input: AdaptiveRetrievalInput,
  tutorReplyCount: number
) {
  const explanation = [
    "Adaptive retrieval assembled progress, mastery, graph, and tutor-help signals into one explainable context bundle."
  ];

  if (input.graphInsight?.recommendedReviewConcept) {
    explanation.push(
      `Graph reasoning elevated ${input.graphInsight.recommendedReviewConcept.title} as the most likely missing prerequisite.`
    );
  }

  if (tutorReplyCount > 0) {
    explanation.push(
      `Recent tutor usage was included because ${tutorReplyCount} tutor replies usually indicate current friction rather than stable mastery.`
    );
  }

  return explanation;
}
