import type {
  AdaptiveGuidance,
  ContentItem,
  KnowledgeGraphInsight,
  LearningPath,
  Lesson,
  NextBestAction,
  RetrievedContextBundle,
  Topic,
  TutorAction,
  TutorTurn
} from "@cumbre/types";
import {
  rankCandidates,
  truncateContent,
  type RetrievalCandidate
} from "./ranking.js";

export interface TutorRetrievalInput {
  action: TutorAction;
  prompt?: string;
  lesson: Lesson;
  topic: Topic;
  learningPath?: LearningPath;
  relatedLessons?: Lesson[];
  contentItems?: ContentItem[];
  graphInsight?: KnowledgeGraphInsight | null;
  recentTutorTurns?: TutorTurn[];
  adaptiveContext?: {
    nextBestAction?: NextBestAction;
    adaptiveGuidance?: AdaptiveGuidance[];
    progressPercent?: number;
  };
}

export function retrieveTutorContext(
  input: TutorRetrievalInput
): RetrievedContextBundle {
  const query = buildTutorQuery(input);
  const candidates: RetrievalCandidate[] = [
    {
      id: `${input.lesson.id}-lesson`,
      sourceType: "lesson" as const,
      title: input.lesson.title,
      content:
        input.lesson.summary ??
        `${input.lesson.title} focuses on ${input.lesson.learningObjectiveIds?.join(", ") || "the core lesson objective"}.`,
      rationale: "Current lesson context is the highest-priority grounding source.",
      entityType: "lesson" as const,
      entityId: input.lesson.id,
      tags: input.lesson.skillIds,
      sourceWeight: 0.92
    },
    {
      id: `${input.topic.id}-topic`,
      sourceType: "topic" as const,
      title: input.topic.title,
      content:
        input.topic.summary ??
        `${input.topic.title} frames the lesson within the broader topic sequence.`,
      rationale: "Topic context keeps the explanation connected beyond a single lesson.",
      entityType: "topic" as const,
      entityId: input.topic.id,
      tags: input.topic.skillIds,
      sourceWeight: 0.78
    }
  ];

  if (input.learningPath) {
    candidates.push({
      id: `${input.learningPath.id}-path`,
      sourceType: "learning_path",
      title: input.learningPath.title,
      content:
        input.learningPath.summary ??
        `${input.learningPath.title} is the active learning path around this lesson.`,
      rationale: "Learning-path context keeps tutor guidance aligned with the student's current sequence.",
      entityType: "learning_path",
      entityId: input.learningPath.id,
      tags: input.learningPath.skillIds,
      sourceWeight: 0.68
    });
  }

  for (const lesson of input.relatedLessons?.filter(
    (candidateLesson) => candidateLesson.id !== input.lesson.id
  ) ?? []) {
    candidates.push({
      id: `${lesson.id}-related-lesson`,
      sourceType: "related_lesson",
      title: lesson.title,
      content:
        lesson.summary ??
        `${lesson.title} is adjacent to the current lesson inside ${input.topic.title}.`,
      rationale: "Related lessons add nearby instructional examples without losing topical focus.",
      entityType: "lesson",
      entityId: lesson.id,
      tags: lesson.skillIds,
      sourceWeight: 0.64
    });
  }

  for (const contentItem of input.contentItems ?? []) {
    candidates.push({
      id: `${contentItem.id}-content`,
      sourceType: "content_item",
      title: contentItem.title,
      content:
        contentItem.summary ??
        `${contentItem.title} is supporting lesson content connected to ${input.lesson.title}.`,
      rationale: "Supporting content items provide extra retrieval-ready lesson evidence.",
      entityType: "content_item",
      entityId: contentItem.id,
      tags: contentItem.skillIds,
      sourceWeight: 0.7
    });
  }

  for (const concept of input.graphInsight?.prerequisiteConcepts ?? []) {
    candidates.push({
      id: `${concept.id}-prerequisite`,
      sourceType: "concept",
      title: concept.title,
      content: concept.summary ?? concept.title,
      rationale: "Prerequisite concepts explain what may need review before deeper progress.",
      entityType: "concept",
      entityId: concept.id,
      sourceWeight: 0.8
    });
  }

  for (const concept of input.graphInsight?.relatedConcepts ?? []) {
    candidates.push({
      id: `${concept.id}-related-concept`,
      sourceType: "concept",
      title: concept.title,
      content: concept.summary ?? concept.title,
      rationale: "Related concepts broaden the answer without drifting away from the topic.",
      entityType: "concept",
      entityId: concept.id,
      sourceWeight: 0.66
    });
  }

  for (const explanation of input.graphInsight?.explanation ?? []) {
    candidates.push({
      id: `${input.lesson.id}-graph-${candidates.length}`,
      sourceType: "graph_explanation",
      title: "Knowledge graph signal",
      content: explanation,
      rationale: "Knowledge-graph explanations make prerequisite reasoning explicit.",
      entityType: "lesson",
      entityId: input.lesson.id,
      sourceWeight: 0.75
    });
  }

  if (input.adaptiveContext?.progressPercent !== undefined) {
    candidates.push({
      id: `${input.lesson.id}-progress`,
      sourceType: "progress_signal",
      title: "Learning progress signal",
      content: `The learner is at ${Math.round(input.adaptiveContext.progressPercent)}% progress in the active path context.`,
      rationale: "Progress signals keep the tutor aligned with current momentum.",
      entityType: "lesson",
      entityId: input.lesson.id,
      sourceWeight: 0.59
    });
  }

  if (input.adaptiveContext?.nextBestAction) {
    candidates.push({
      id: `${input.lesson.id}-next-best-action`,
      sourceType: "adaptive_signal",
      title: input.adaptiveContext.nextBestAction.title,
      content: [
        input.adaptiveContext.nextBestAction.summary,
        input.adaptiveContext.nextBestAction.rationale
      ]
        .filter(Boolean)
        .join(" "),
      rationale: "Next-best-action guidance keeps the tutor consistent with adaptive recommendations.",
      entityType: input.adaptiveContext.nextBestAction.targetEntityType,
      entityId: input.adaptiveContext.nextBestAction.targetEntityId,
      sourceWeight: 0.69
    });
  }

  for (const guidance of input.adaptiveContext?.adaptiveGuidance ?? []) {
    candidates.push({
      id: `${input.lesson.id}-guidance-${candidates.length}`,
      sourceType: "adaptive_signal",
      title: guidance.title,
      content: `${guidance.summary} ${guidance.rationale}`.trim(),
      rationale: "Adaptive guidance helps the tutor stay aligned with recent struggle and momentum.",
      entityType: guidance.relatedEntityType,
      entityId: guidance.relatedEntityId,
      sourceWeight: 0.67
    });
  }

  for (const turn of input.recentTutorTurns?.slice(-4) ?? []) {
    candidates.push({
      id: `${turn.id}-memory`,
      sourceType: "tutor_memory",
      title: turn.title ?? `${turn.actor === "learner" ? "Student" : "Tutor"} memory`,
      content: truncateContent(turn.content, 180),
      rationale: "Recent tutor turns preserve short-term conversation continuity.",
      entityType: "tutor_turn",
      entityId: turn.id,
      sourceWeight: turn.actor === "learner" ? 0.62 : 0.66
    });
  }

  return rankCandidates({
    query,
    strategy: "tutor_grounding",
    explanation: buildTutorExplanation(input),
    candidates,
    limit: 7
  });
}

function buildTutorQuery(input: TutorRetrievalInput) {
  const actionLabel =
    input.action === "summarize_lesson"
      ? "summarize lesson"
      : input.action === "give_hint"
        ? "give hint"
        : input.action === "ask_question"
          ? "answer student question"
          : "explain concept";

  return [
    actionLabel,
    input.prompt,
    input.lesson.title,
    input.topic.title,
    input.graphInsight?.recommendedReviewConcept?.title
  ]
    .filter(Boolean)
    .join(" ");
}

function buildTutorExplanation(input: TutorRetrievalInput) {
  const explanation = [
    `Assembled hybrid retrieval context for ${input.lesson.title} from lesson, topic, graph, adaptive, and conversation sources.`
  ];

  if (input.graphInsight?.recommendedReviewConcept) {
    explanation.push(
      `Prioritized the prerequisite concept ${input.graphInsight.recommendedReviewConcept.title} because the knowledge graph marks it as the likely review target.`
    );
  }

  if (input.recentTutorTurns?.length) {
    explanation.push(
      `Included ${Math.min(input.recentTutorTurns.length, 4)} recent tutor turns to maintain short-term continuity.`
    );
  }

  if (input.contentItems?.length) {
    explanation.push(
      `Included ${Math.min(input.contentItems.length, 3)} supporting content items to strengthen lesson-aware grounding.`
    );
  }

  return explanation;
}
