import type {
  ContentItemRecord,
  KnowledgeEdgeRecord,
  KnowledgeNodeRecord,
  LessonRecord,
  StudentAttemptRecord,
  TeachingMaterialRecord,
  TeachingModuleRecord,
  TeachingQuizRecord,
  TopicRecord
} from "../generated/prisma/index.js";
import type {
  AttributeValue,
  ContentItem,
  KnowledgeEdge,
  KnowledgeNode,
  Lesson,
  StudentAttempt,
  TeachingMaterial,
  TeachingModule,
  TeachingQuiz,
  Topic
} from "@cumbre/types";

export function toDomainTopic(record: TopicRecord): Topic {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    title: record.title,
    summary: record.summary ?? undefined,
    slug: record.slug ?? undefined,
    parentTopicId: record.parentTopicId ?? undefined,
    skillIds: record.skillIds,
    prerequisiteTopicIds: record.prerequisiteTopicIds
  };
}

export function toDomainLesson(record: LessonRecord): Lesson {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    title: record.title,
    summary: record.summary ?? undefined,
    lessonType: record.lessonType,
    topicId: record.topicId,
    skillIds: record.skillIds,
    learningObjectiveIds: record.learningObjectiveIds,
    prerequisiteLessonIds: record.prerequisiteLessonIds,
    estimatedDurationMinutes: record.estimatedDurationMinutes ?? undefined,
    difficultyLevel: record.difficultyLevel ?? undefined,
    resourceUrls: record.resourceUrls
  };
}

export function toDomainContentItem(record: ContentItemRecord): ContentItem {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    title: record.title,
    summary: record.summary ?? undefined,
    contentType: record.contentType,
    status: record.status,
    topicIds: record.topicIds,
    skillIds: record.skillIds,
    lessonId: record.lessonId ?? undefined,
    assessmentId: record.assessmentId ?? undefined,
    projectId: record.projectId ?? undefined,
    authorUserId: record.authorUserId ?? undefined,
    sourceUrl: record.sourceUrl ?? undefined,
    language: record.language ?? undefined,
    versionLabel: record.versionLabel ?? undefined
  };
}

export function toDomainKnowledgeNode(record: KnowledgeNodeRecord): KnowledgeNode {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    nodeType: record.nodeType,
    title: record.title,
    summary: record.summary ?? undefined,
    sourceEntityType: record.sourceEntityType ?? undefined,
    sourceEntityId: record.sourceEntityId ?? undefined
  };
}

export function toDomainKnowledgeEdge(record: KnowledgeEdgeRecord): KnowledgeEdge {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    sourceNodeId: record.sourceNodeId,
    targetNodeId: record.targetNodeId,
    edgeType: record.edgeType,
    label: record.label ?? undefined,
    weight: record.weight ?? undefined,
    directed: record.directed
  };
}

export function toDomainTeachingMaterial(record: TeachingMaterialRecord): TeachingMaterial {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    teacherId: record.teacherId,
    fileName: record.fileName,
    mimeType: record.mimeType,
    materialKind: record.materialKind,
    status: record.status,
    parsedText: record.parsedText,
    parsedStructure: record.parsedStructure as unknown as TeachingMaterial["parsedStructure"],
    sourceUrl: record.sourceUrl ?? undefined
  };
}

export function toDomainTeachingModule(record: TeachingModuleRecord): TeachingModule {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    teacherId: record.teacherId,
    materialId: record.materialId ?? undefined,
    title: record.title,
    summary: record.summary ?? undefined,
    status: record.status,
    conceptNodeIds: record.conceptNodeIds,
    lessonIds: record.lessonIds,
    sections: record.sections as unknown as TeachingModule["sections"],
    suggestedTopicTitles: record.suggestedTopicTitles
  };
}

export function toDomainTeachingQuiz(record: TeachingQuizRecord): TeachingQuiz {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    teacherId: record.teacherId,
    moduleId: record.moduleId ?? undefined,
    lessonId: record.lessonId ?? undefined,
    title: record.title,
    summary: record.summary ?? undefined,
    questions: record.questions as unknown as TeachingQuiz["questions"]
  };
}

export function toDomainStudentAttempt(record: StudentAttemptRecord): StudentAttempt {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    studentId: record.studentId,
    classroomId: record.classroomId ?? undefined,
    quizId: record.quizId ?? undefined,
    source: record.source,
    score: record.score ?? undefined,
    answers: record.answers as unknown as StudentAttempt["answers"],
    teacherVerified: record.teacherVerified
  };
}

function toMetadata(
  value: unknown
): Topic["metadata"] | Lesson["metadata"] | ContentItem["metadata"] {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }

  const candidate = value as Record<string, unknown>;
  const tags = Array.isArray(candidate.tags)
    ? candidate.tags.filter((item): item is string => typeof item === "string")
    : undefined;
  const attributes =
    candidate.attributes &&
    typeof candidate.attributes === "object" &&
    !Array.isArray(candidate.attributes)
      ? (candidate.attributes as Record<string, AttributeValue>)
      : undefined;

  return {
    tags,
    attributes
  };
}
