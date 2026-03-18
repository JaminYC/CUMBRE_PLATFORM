import type {
  ClassroomMeetingRecord,
  ClassroomRecord,
  ClassroomStudentProfileRecord,
  LearningPathRecord,
  LearningSessionRecord,
  MasteryStateRecord,
  StudentEnrollmentRecord
} from "../generated/prisma/index.js";
import type {
  AttributeValue,
  Classroom,
  ClassroomMeeting,
  ClassroomStudentProfile,
  LearningPath,
  LearningSession,
  MasteryState,
  StudentEnrollment
} from "@cumbre/types";

export function toDomainLearningPath(record: LearningPathRecord): LearningPath {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    title: record.title,
    summary: record.summary ?? undefined,
    status: record.status,
    audienceRoles: record.audienceRoles,
    topicIds: record.topicIds,
    skillIds: record.skillIds,
    lessonIds: record.lessonIds,
    projectIds: record.projectIds,
    estimatedDurationMinutes: record.estimatedDurationMinutes ?? undefined,
    difficultyLevel: record.difficultyLevel ?? undefined,
    sequencingStrategy: record.sequencingStrategy ?? undefined
  };
}

export function toDomainLearningSession(
  record: LearningSessionRecord
): LearningSession {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    learnerUserId: record.learnerUserId,
    status: record.status,
    learningPathId: record.learningPathId ?? undefined,
    lessonId: record.lessonId ?? undefined,
    topicId: record.topicId ?? undefined,
    tutorSessionId: record.tutorSessionId ?? undefined,
    startedAt: record.startedAt.toISOString(),
    endedAt: record.endedAt?.toISOString(),
    progressPercent: record.progressPercent,
    difficultyLevel: record.difficultyLevel ?? undefined,
    masteryStateIds: record.masteryStateIds,
    recommendationIds: record.recommendationIds
  };
}

export function toDomainMasteryState(
  record: MasteryStateRecord
): MasteryState {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    learnerUserId: record.learnerUserId,
    subjectType: record.subjectType,
    subjectId: record.subjectId,
    level: record.level,
    score: record.score,
    confidence: record.confidence,
    evidenceCount: record.evidenceCount ?? undefined,
    trend: record.trend ?? undefined,
    lastObservedAt: record.lastObservedAt.toISOString(),
    recommendedDifficulty: record.recommendedDifficulty ?? undefined
  };
}

export function toDomainClassroom(record: ClassroomRecord): Classroom {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    name: record.name,
    gradeLevel: record.gradeLevel,
    subject: record.subject,
    teacherId: record.teacherId,
    classCode: record.classCode,
    assignedModuleIds: record.assignedModuleIds,
    assignedLearningPathIds: record.assignedLearningPathIds
  };
}

export function toDomainClassroomStudentProfile(
  record: ClassroomStudentProfileRecord
): ClassroomStudentProfile {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    name: record.name,
    email: record.email ?? undefined,
    gradeLevel: record.gradeLevel,
    createdByTeacher: record.createdByTeacher,
    linkedUserId: record.linkedUserId ?? undefined
  };
}

export function toDomainEnrollment(record: StudentEnrollmentRecord): StudentEnrollment {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    classroomId: record.classroomId,
    studentId: record.studentId,
    status: record.status,
    joinedAt: record.joinedAt?.toISOString()
  };
}

export function toDomainClassroomMeeting(
  record: ClassroomMeetingRecord
): ClassroomMeeting {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    classroomId: record.classroomId,
    provider: record.provider,
    title: record.title,
    description: record.description ?? undefined,
    scheduledAt: record.scheduledAt.toISOString(),
    meetingUrl: record.meetingUrl,
    createdByTeacherId: record.createdByTeacherId
  };
}

function toMetadata(
  value: unknown
): LearningPath["metadata"] | LearningSession["metadata"] | MasteryState["metadata"] {
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
