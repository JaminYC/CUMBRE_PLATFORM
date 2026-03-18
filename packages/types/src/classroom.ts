import type {
  BaseEntity,
  EntityId,
  ExtensibleString,
  ISODateTime,
  RecommendationTrendPoint,
  Topic,
  UrlString
} from "./index.js";
import type {
  AdaptiveGuidance,
  KnowledgeNode,
  LearnerProgressSummary,
  NextBestAction
} from "./index.js";

export type ClassroomEnrollmentStatus = ExtensibleString<
  "pending" | "joined" | "invited" | "inactive"
>;

export type ClassroomModuleAssignmentStatus = ExtensibleString<
  "draft" | "assigned" | "published" | "archived"
>;

export type ClassroomMeetingProvider = ExtensibleString<
  "zoom" | "google_meet" | "microsoft_teams" | "custom"
>;

export interface Classroom extends BaseEntity {
  name: string;
  gradeLevel: string;
  subject: string;
  teacherId: EntityId;
  classCode: string;
  assignedModuleIds?: EntityId[];
  assignedLearningPathIds?: EntityId[];
}

export interface ClassroomStudentProfile extends BaseEntity {
  name: string;
  email?: string;
  gradeLevel: string;
  createdByTeacher: boolean;
  linkedUserId?: EntityId;
}

export interface StudentEnrollment extends BaseEntity {
  classroomId: EntityId;
  studentId: EntityId;
  status: ClassroomEnrollmentStatus;
  joinedAt?: ISODateTime;
}

export interface ClassroomRosterEntry {
  classroomId: EntityId;
  student: ClassroomStudentProfile;
  enrollment: StudentEnrollment;
  generatedCredential?: string;
}

export interface ClassroomModuleAssignment extends BaseEntity {
  classroomId: EntityId;
  moduleId: EntityId;
  assignedByTeacherId: EntityId;
  status: ClassroomModuleAssignmentStatus;
  assignedAt: ISODateTime;
  publishedAt?: ISODateTime;
}

export interface ClassroomMeeting extends BaseEntity {
  classroomId: EntityId;
  provider: ClassroomMeetingProvider;
  title: string;
  description?: string;
  scheduledAt: ISODateTime;
  meetingUrl: UrlString;
  createdByTeacherId: EntityId;
}

export interface ClassroomLessonCompletion {
  lessonId: EntityId;
  lessonTitle: string;
  completedLearnerCount: number;
  activeLearnerCount: number;
}

export interface ClassroomConceptStruggle {
  concept: KnowledgeNode;
  learnerCount: number;
  tutorUsageCount: number;
  averageProgressPercent: number;
}

export interface ClassroomAnalytics extends BaseEntity {
  classroomId: EntityId;
  rosterCount: number;
  joinedLearnerCount: number;
  averageProgressPercent: number;
  tutorUsageTotal: number;
  conceptStruggles: ClassroomConceptStruggle[];
  lessonCompletion: ClassroomLessonCompletion[];
  recommendationDistribution: RecommendationTrendPoint[];
  adaptiveGuidanceHighlights: AdaptiveGuidance[];
}

export interface ClassroomOverview {
  classroom: Classroom;
  roster: ClassroomRosterEntry[];
  assignedModuleIds: EntityId[];
  assignedLearningPathIds: EntityId[];
  nextMeeting?: ClassroomMeeting;
}

export interface StudentClassroomWorkspace {
  classroom: Classroom;
  enrollment: StudentEnrollment;
  assignedModuleIds: EntityId[];
  assignedLearningPathIds: EntityId[];
  nextMeeting?: ClassroomMeeting;
  nextBestAction?: NextBestAction;
  learnerSummary?: LearnerProgressSummary;
  suggestedReviewTopics?: Topic[];
}
