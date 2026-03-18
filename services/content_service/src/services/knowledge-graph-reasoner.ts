import type {
  KnowledgeEdge,
  KnowledgeGraphInsight,
  KnowledgeExploreResult,
  KnowledgeNode,
  Lesson,
  Topic
} from "@cumbre/types";

interface GraphSnapshot {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
}

export function buildKnowledgeExploreResult(input: {
  anchorEntityType: "topic" | "lesson" | "concept";
  anchorEntityId: string;
  snapshot: GraphSnapshot;
  topics: Topic[];
  lessons: Lesson[];
}): KnowledgeExploreResult {
  if (input.anchorEntityType === "lesson") {
    const lesson = input.lessons.find((candidate) => candidate.id === input.anchorEntityId);
    const topic = lesson
      ? input.topics.find((candidate) => candidate.id === lesson.topicId)
      : undefined;

    if (lesson && topic) {
      const insight = buildLessonKnowledgeInsight({
        lesson,
        topic,
        snapshot: input.snapshot
      });

      return {
        anchorEntityType: "lesson",
        anchorEntityId: lesson.id,
        prerequisiteChain: insight.prerequisiteConcepts,
        relatedConcepts: insight.relatedConcepts,
        mappedLessons: [lesson],
        mappedTopics: [topic],
        conceptCluster: uniqueNodes([
          ...insight.coveredConcepts,
          ...insight.prerequisiteConcepts,
          ...insight.relatedConcepts
        ]),
        explanation: insight.explanation
      };
    }
  }

  if (input.anchorEntityType === "topic") {
    const topic = input.topics.find((candidate) => candidate.id === input.anchorEntityId);

    if (topic) {
      const insight = buildTopicKnowledgeInsight({
        topic,
        snapshot: input.snapshot
      });

      return {
        anchorEntityType: "topic",
        anchorEntityId: topic.id,
        prerequisiteChain: insight.prerequisiteConcepts,
        relatedConcepts: insight.relatedConcepts,
        mappedLessons: input.lessons.filter((lesson) => lesson.topicId === topic.id),
        mappedTopics: [topic],
        conceptCluster: uniqueNodes([
          ...insight.coveredConcepts,
          ...insight.prerequisiteConcepts,
          ...insight.relatedConcepts
        ]),
        explanation: insight.explanation
      };
    }
  }

  const conceptNode =
    input.snapshot.nodes.find((node) => node.id === input.anchorEntityId) ?? null;
  const prerequisiteChain = conceptNode
    ? collectPrerequisites(input.snapshot, [conceptNode])
    : [];
  const relatedConcepts = conceptNode
    ? collectRelatedConcepts(input.snapshot, [conceptNode, ...prerequisiteChain])
    : [];
  const clusterConcepts = uniqueNodes([
    ...(conceptNode ? [conceptNode] : []),
    ...prerequisiteChain,
    ...relatedConcepts
  ]);
  const mappedLessons = collectIncomingSources(
    input.snapshot,
    clusterConcepts.map((node) => node.id),
    "reinforces",
    "lesson"
  )
    .map((lessonNode) =>
      input.lessons.find(
        (lesson) =>
          lesson.id === lessonNode.sourceEntityId || lesson.id === lessonNode.id
      )
    )
    .filter((lesson): lesson is Lesson => Boolean(lesson));
  const mappedTopics = collectTargets(
    input.snapshot,
    clusterConcepts.map((node) => node.id),
    "part_of",
    "topic"
  )
    .map((topicNode) =>
      input.topics.find(
        (topic) => topic.id === topicNode.sourceEntityId || topic.id === topicNode.id
      )
    )
    .filter((topic): topic is Topic => Boolean(topic));

  return {
    anchorEntityType: "concept",
    anchorEntityId: input.anchorEntityId,
    prerequisiteChain,
    relatedConcepts,
    mappedLessons: uniqueEntities(mappedLessons),
    mappedTopics: uniqueEntities(mappedTopics),
    conceptCluster: clusterConcepts,
    explanation: conceptNode
      ? [
          `${conceptNode.title} sits inside a cluster with ${joinNodeTitles(clusterConcepts)}.`,
          prerequisiteChain.length
            ? `Its prerequisite chain includes ${joinNodeTitles(prerequisiteChain)}.`
            : "No prerequisite chain is currently mapped for this concept.",
          relatedConcepts.length
            ? `Related concepts include ${joinNodeTitles(relatedConcepts)}.`
            : "No directly related concepts are mapped yet."
        ]
      : ["The requested concept could not be resolved from the current graph snapshot."]
  };
}

export function buildLessonKnowledgeInsight(input: {
  lesson: Lesson;
  topic: Topic;
  snapshot: GraphSnapshot;
}): KnowledgeGraphInsight {
  const lessonNode = findAnchorNode(input.snapshot.nodes, "lesson", input.lesson.id);
  const topicNode = findAnchorNode(input.snapshot.nodes, "topic", input.topic.id);
  const coveredConcepts = lessonNode
    ? collectTargets(input.snapshot, [lessonNode.id], "reinforces", "concept")
    : [];
  const prerequisiteConcepts = collectPrerequisites(input.snapshot, coveredConcepts);
  const relatedConcepts = collectRelatedConcepts(input.snapshot, [
    ...coveredConcepts,
    ...prerequisiteConcepts
  ]);
  const recommendedReviewConcept = prerequisiteConcepts[0] ?? relatedConcepts[0];
  const relevantNodeIds = new Set<string>([
    lessonNode?.id,
    topicNode?.id,
    ...coveredConcepts.map((node) => node.id),
    ...prerequisiteConcepts.map((node) => node.id),
    ...relatedConcepts.map((node) => node.id)
  ].filter(isDefined));

  return {
    anchorEntityType: "lesson",
    anchorEntityId: input.lesson.id,
    lessonId: input.lesson.id,
    topicId: input.topic.id,
    coveredConcepts,
    prerequisiteConcepts,
    relatedConcepts,
    recommendedReviewConcept,
    recommendedReviewTopicId:
      recommendedReviewConcept?.sourceEntityType === "topic"
        ? recommendedReviewConcept.sourceEntityId
        : input.topic.id,
    recommendedReviewLessonId: input.lesson.prerequisiteLessonIds?.[0],
    edges: input.snapshot.edges.filter(
      (edge) =>
        relevantNodeIds.has(edge.sourceNodeId) && relevantNodeIds.has(edge.targetNodeId)
    ),
    explanation: buildLessonExplanation(
      input.lesson,
      input.topic,
      coveredConcepts,
      prerequisiteConcepts,
      relatedConcepts,
      recommendedReviewConcept
    )
  };
}

export function buildTopicKnowledgeInsight(input: {
  topic: Topic;
  snapshot: GraphSnapshot;
}): KnowledgeGraphInsight {
  const topicNode = findAnchorNode(input.snapshot.nodes, "topic", input.topic.id);
  const coveredConcepts = topicNode
    ? collectIncomingSources(input.snapshot, [topicNode.id], "part_of", "concept")
    : [];
  const prerequisiteConcepts = collectPrerequisites(input.snapshot, coveredConcepts);
  const relatedConcepts = collectRelatedConcepts(input.snapshot, [
    ...coveredConcepts,
    ...prerequisiteConcepts
  ]);
  const recommendedReviewConcept = prerequisiteConcepts[0] ?? relatedConcepts[0];
  const relevantNodeIds = new Set<string>([
    topicNode?.id,
    ...coveredConcepts.map((node) => node.id),
    ...prerequisiteConcepts.map((node) => node.id),
    ...relatedConcepts.map((node) => node.id)
  ].filter(isDefined));

  return {
    anchorEntityType: "topic",
    anchorEntityId: input.topic.id,
    topicId: input.topic.id,
    coveredConcepts,
    prerequisiteConcepts,
    relatedConcepts,
    recommendedReviewConcept,
    recommendedReviewTopicId:
      recommendedReviewConcept?.sourceEntityType === "topic"
        ? recommendedReviewConcept.sourceEntityId
        : input.topic.id,
    edges: input.snapshot.edges.filter(
      (edge) =>
        relevantNodeIds.has(edge.sourceNodeId) && relevantNodeIds.has(edge.targetNodeId)
    ),
    explanation: buildTopicExplanation(
      input.topic,
      coveredConcepts,
      prerequisiteConcepts,
      relatedConcepts,
      recommendedReviewConcept
    )
  };
}

function buildLessonExplanation(
  lesson: Lesson,
  topic: Topic,
  coveredConcepts: KnowledgeNode[],
  prerequisiteConcepts: KnowledgeNode[],
  relatedConcepts: KnowledgeNode[],
  recommendedReviewConcept?: KnowledgeNode
) {
  const explanation = [
    `${lesson.title} reinforces ${joinNodeTitles(coveredConcepts)} inside ${topic.title}.`
  ];

  if (prerequisiteConcepts.length) {
    explanation.push(
      `Before advancing, the learner should feel stable with ${joinNodeTitles(prerequisiteConcepts)}.`
    );
  }

  if (relatedConcepts.length) {
    explanation.push(
      `Related concepts such as ${joinNodeTitles(relatedConcepts)} help connect this lesson to the wider topic sequence.`
    );
  }

  if (recommendedReviewConcept) {
    explanation.push(
      `The most likely missing prerequisite behind current struggle is ${recommendedReviewConcept.title}.`
    );
  }

  return explanation;
}

function buildTopicExplanation(
  topic: Topic,
  coveredConcepts: KnowledgeNode[],
  prerequisiteConcepts: KnowledgeNode[],
  relatedConcepts: KnowledgeNode[],
  recommendedReviewConcept?: KnowledgeNode
) {
  const explanation = [
    `${topic.title} groups concepts such as ${joinNodeTitles(coveredConcepts)}.`
  ];

  if (prerequisiteConcepts.length) {
    explanation.push(
      `The topic depends on prerequisite concepts like ${joinNodeTitles(prerequisiteConcepts)}.`
    );
  }

  if (relatedConcepts.length) {
    explanation.push(
      `Connected concepts such as ${joinNodeTitles(relatedConcepts)} expand the topic beyond a single lesson.`
    );
  }

  if (recommendedReviewConcept) {
    explanation.push(
      `If a learner stalls here, ${recommendedReviewConcept.title} is the first concept to review.`
    );
  }

  return explanation;
}

function collectTargets(
  snapshot: GraphSnapshot,
  sourceNodeIds: string[],
  edgeType: string,
  requiredNodeType?: string
) {
  const sourceSet = new Set(sourceNodeIds);
  const targetIds = snapshot.edges
    .filter((edge) => sourceSet.has(edge.sourceNodeId) && edge.edgeType === edgeType)
    .map((edge) => edge.targetNodeId);

  return uniqueNodes(
    snapshot.nodes.filter(
      (node) =>
        targetIds.includes(node.id) &&
        (!requiredNodeType || node.nodeType === requiredNodeType)
    )
  );
}

function collectIncomingSources(
  snapshot: GraphSnapshot,
  targetNodeIds: string[],
  edgeType: string,
  requiredNodeType?: string
) {
  const targetSet = new Set(targetNodeIds);
  const sourceIds = snapshot.edges
    .filter((edge) => targetSet.has(edge.targetNodeId) && edge.edgeType === edgeType)
    .map((edge) => edge.sourceNodeId);

  return uniqueNodes(
    snapshot.nodes.filter(
      (node) =>
        sourceIds.includes(node.id) &&
        (!requiredNodeType || node.nodeType === requiredNodeType)
    )
  );
}

function collectPrerequisites(
  snapshot: GraphSnapshot,
  conceptNodes: KnowledgeNode[]
) {
  return collectIncomingSources(
    snapshot,
    conceptNodes.map((node) => node.id),
    "prerequisite_of",
    "concept"
  );
}

function collectRelatedConcepts(
  snapshot: GraphSnapshot,
  conceptNodes: KnowledgeNode[]
) {
  const conceptIds = new Set(conceptNodes.map((node) => node.id));
  const relatedIds = snapshot.edges
    .filter(
      (edge) =>
        edge.edgeType === "relates_to" &&
        (conceptIds.has(edge.sourceNodeId) || conceptIds.has(edge.targetNodeId))
    )
    .map((edge) =>
      conceptIds.has(edge.sourceNodeId) ? edge.targetNodeId : edge.sourceNodeId
    );

  return uniqueNodes(
    snapshot.nodes.filter(
      (node) => relatedIds.includes(node.id) && node.nodeType === "concept"
    )
  );
}

function findAnchorNode(
  nodes: KnowledgeNode[],
  sourceEntityType: string,
  sourceEntityId: string
) {
  return (
    nodes.find(
      (node) =>
        node.sourceEntityType === sourceEntityType &&
        node.sourceEntityId === sourceEntityId
    ) ?? null
  );
}

function uniqueNodes(nodes: KnowledgeNode[]) {
  const seen = new Set<string>();

  return nodes.filter((node) => {
    if (seen.has(node.id)) {
      return false;
    }

    seen.add(node.id);
    return true;
  });
}

function uniqueEntities<T extends { id: string }>(items: T[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.id)) {
      return false;
    }

    seen.add(item.id);
    return true;
  });
}

function joinNodeTitles(nodes: KnowledgeNode[]) {
  if (!nodes.length) {
    return "the current concept set";
  }

  return nodes.map((node) => node.title).join(", ");
}

function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}
