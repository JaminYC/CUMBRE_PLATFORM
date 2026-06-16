import type {
  AdaptiveGuidance,
  Classroom,
  ClassroomAnalytics,
  ClassroomMeeting,
  ClassroomRosterEntry,
  ClassroomStudentProfile,
  AnalyticsTrendPoint,
  Assessment,
  AuthenticatedSession,
  ConceptStruggleSummary,
  ContentItem,
  ContentItemType,
  ContentCoverageGap,
  DifficultyLevel,
  EntityId,
  ISODateTime,
  LearningPath,
  LearningSession,
  LearningSessionStatus,
  Lesson,
  LearnerProgressSummary,
  KnowledgeEdge,
  KnowledgeGraphInsight,
  KnowledgeExploreResult,
  KnowledgeNode,
  MasteryState,
  MasteryEstimate,
  NextBestAction,
  Notification,
  NotificationStatus,
  Recommendation,
  RecommendationTrendPoint,
  TeacherDashboardOverview,
  Topic,
  TopicOperationalSummary,
  TeachingMaterial,
  TeachingModule,
  TeachingQuiz,
  StudentAttempt,
  MaterialGenerationProposal,
  GeneratedModuleProposal,
  GeneratedQuizProposal,
  StudentEnrollment,
  StudentClassroomWorkspace,
  GraphIntegrityIssue,
  AdminDashboardOverview,
  TutorAction,
  TutorContextSnippet,
  TutorMode,
  TutorReply,
  TutorResponseType,
  TutorSession,
  TutorTurn,
  User,
  UserProfile,
  UserRole
} from "@cumbre/types";
import {
  classroomSchemas,
  type AssignClassroomModulesRequest,
  type AssignClassroomModulesResponse,
  type CreateClassroomMeetingRequest,
  type CreateClassroomMeetingResponse,
  type CreateClassroomRequest,
  type CreateClassroomResponse,
  type GetClassroomAnalyticsRequest,
  type GetClassroomAnalyticsResponse,
  type GetClassroomMeetingRequest,
  type GetClassroomMeetingResponse,
  type GetClassroomModulesRequest,
  type GetClassroomModulesResponse,
  type GetClassroomRequest,
  type GetClassroomResponse,
  type GetClassroomStudentsRequest,
  type GetClassroomStudentsResponse,
  type ListTeacherClassroomsRequest,
  type ListTeacherClassroomsResponse,
  type GetStudentClassroomWorkspaceRequest,
  type GetStudentClassroomWorkspaceResponse,
  type ImportStudentsRequest,
  type ImportStudentsResponse,
  type JoinClassroomRequest,
  type JoinClassroomResponse
} from "./classroom.js";
import {
  teachingSchemas,
  type GenerateModuleRequest,
  type GenerateModuleResponse,
  type GenerateQuizRequest,
  type GenerateQuizResponse,
  type ListTeacherMaterialsRequest,
  type ListTeacherMaterialsResponse,
  type ListTeachingModulesRequest,
  type ListTeachingModulesResponse,
  type ListTeachingQuizzesRequest,
  type ListTeachingQuizzesResponse,
  type UploadExamScanRequest,
  type UploadExamScanResponse,
  type UploadTeacherMaterialRequest,
  type UploadTeacherMaterialResponse
} from "./teaching.js";

export type PrimitiveSchemaType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "object"
  | "array"
  | "null";

export interface SchemaDefinition {
  $id?: string;
  $ref?: string;
  type?: PrimitiveSchemaType | PrimitiveSchemaType[];
  description?: string;
  format?: string;
  enum?: readonly string[];
  required?: readonly string[];
  properties?: Record<string, SchemaDefinition>;
  items?: SchemaDefinition;
  oneOf?: readonly SchemaDefinition[];
  additionalProperties?: boolean | SchemaDefinition;
}

export interface ApiErrorDetail {
  field?: string;
  message: string;
  code?: string;
}

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetail[];
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

export interface AuthLoginRequest {
  identifier: string;
  credential: string;
  requestedRole?: UserRole;
  deviceId?: string;
}

export interface AuthLoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: ISODateTime;
  refreshExpiresAt: ISODateTime;
}

export interface AuthSignupRequest {
  email: string;
  credential: string;
  displayName: string;
  requestedRole?: UserRole;
}

export interface AuthSignupResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: ISODateTime;
  refreshExpiresAt: ISODateTime;
}

export interface RefreshSessionRequest {
  refreshToken: string;
}

export interface RefreshSessionResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: ISODateTime;
  refreshExpiresAt: ISODateTime;
}

export interface RevokeSessionRequest {
  refreshToken: string;
  reason?: string;
}

export interface RevokeSessionResponse {
  revoked: boolean;
  revokedAt: ISODateTime;
}

export interface GetCurrentUserRequest {
  userId?: EntityId;
}

export interface GetCurrentUserResponse {
  user: User;
  profiles: UserProfile[];
}

export interface ValidateAccessTokenRequest {
  accessToken: string;
}

export interface ValidateAccessTokenResponse {
  session: AuthenticatedSession;
  user: User;
  profiles: UserProfile[];
}

export interface GetUserProfileRequest {
  userId: EntityId;
}

export interface GetUserProfileResponse {
  user: User;
  profiles: UserProfile[];
}

export interface UpdateUserProfileRequest {
  userId: EntityId;
  profile: UserProfile;
}

export interface UpdateUserProfileResponse {
  user: User;
  profile: UserProfile;
}

export interface CreateLearningSessionRequest {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
  lessonId?: EntityId;
  topicId?: EntityId;
  initiatedBy?: "student" | "teacher" | "ai" | "system";
  difficultyLevel?: DifficultyLevel;
}

export interface CreateLearningSessionResponse {
  session: LearningSession;
}

export interface UpdateLearningSessionRequest {
  sessionId: EntityId;
  status?: LearningSessionStatus;
  progressPercent?: number;
  difficultyLevel?: DifficultyLevel;
  masteryStates?: MasteryState[];
}

export interface UpdateLearningSessionResponse {
  session: LearningSession;
}

export interface CompleteLearningSessionRequest {
  sessionId: EntityId;
  completedAt?: ISODateTime;
  summary?: string;
}

export interface CompleteLearningSessionResponse {
  session: LearningSession;
}

export interface GetLearningProgressRequest {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
}

export interface GetLearningProgressResponse {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
  progressPercent: number;
  sessions: LearningSession[];
  masteryStates: MasteryState[];
  recommendations: Recommendation[];
  estimatedMastery?: MasteryEstimate;
  nextBestAction?: NextBestAction;
  adaptiveGuidance?: AdaptiveGuidance[];
}

export interface GetLearningPathRequest {
  learningPathId: EntityId;
}

export interface GetLearningPathResponse {
  learningPath: LearningPath;
}

export interface GetTeacherOverviewRequest {
  learningPathId?: EntityId;
  limit?: number;
}

export interface GetTeacherOverviewResponse {
  overview: TeacherDashboardOverview;
}

export interface GetLessonRequest {
  lessonId: EntityId;
}

export interface GetLessonResponse {
  lesson: Lesson;
}

export interface ListLessonsRequest {
  learningPathId?: EntityId;
  topicId?: EntityId;
  skillId?: EntityId;
}

export interface ListLessonsResponse extends PaginatedResponse<Lesson> {}

export interface GetAssessmentRequest {
  assessmentId: EntityId;
}

export interface GetAssessmentResponse {
  assessment: Assessment;
}

export interface GetTopicRequest {
  topicId: EntityId;
}

export interface GetTopicResponse {
  topic: Topic;
}

export interface GetLessonKnowledgeRequest {
  lessonId: EntityId;
  topicId?: EntityId;
}

export interface GetLessonKnowledgeResponse {
  insight: KnowledgeGraphInsight;
}

export interface GetTopicKnowledgeRequest {
  topicId: EntityId;
}

export interface GetTopicKnowledgeResponse {
  insight: KnowledgeGraphInsight;
}

export interface GetAdminOverviewRequest {}

export interface GetAdminOverviewResponse {
  overview: AdminDashboardOverview;
}

export interface ListTopicsRequest {
  parentTopicId?: EntityId;
  limit?: number;
}

export interface ListTopicsResponse extends PaginatedResponse<Topic> {}

export interface SearchContentRequest {
  query: string;
  topicId?: EntityId;
  contentType?: ContentItemType;
  limit?: number;
}

export interface SearchContentResponse extends PaginatedResponse<ContentItem> {}

export interface ListContentItemsRequest {
  topicId?: EntityId;
  lessonId?: EntityId;
  limit?: number;
}

export interface ListContentItemsResponse extends PaginatedResponse<ContentItem> {}

export interface CreateTopicRequest {
  title: string;
  summary?: string;
  slug?: string;
  parentTopicId?: EntityId;
  skillIds?: EntityId[];
  prerequisiteTopicIds?: EntityId[];
}

export interface CreateTopicResponse {
  topic: Topic;
}

export interface UpdateTopicRequest extends CreateTopicRequest {
  topicId: EntityId;
}

export interface UpdateTopicResponse {
  topic: Topic;
}

export interface CreateLessonRequest {
  title: string;
  summary?: string;
  lessonType: string;
  topicId: EntityId;
  skillIds?: EntityId[];
  learningObjectiveIds?: EntityId[];
  prerequisiteLessonIds?: EntityId[];
  estimatedDurationMinutes?: number;
  difficultyLevel?: DifficultyLevel;
  resourceUrls?: string[];
}

export interface CreateLessonResponse {
  lesson: Lesson;
}

export interface UpdateLessonRequest extends CreateLessonRequest {
  lessonId: EntityId;
}

export interface UpdateLessonResponse {
  lesson: Lesson;
}

export interface CreateContentItemRequest {
  title: string;
  summary?: string;
  contentType: ContentItemType;
  topicIds?: EntityId[];
  skillIds?: EntityId[];
  lessonId?: EntityId;
  sourceUrl?: string;
  language?: string;
  versionLabel?: string;
  relatedLearningPathId?: EntityId;
}

export interface CreateContentItemResponse {
  item: ContentItem;
}

export interface ListKnowledgeNodesRequest {
  nodeType?: string;
  sourceEntityType?: string;
  sourceEntityId?: EntityId;
  limit?: number;
}

export interface ListKnowledgeNodesResponse extends PaginatedResponse<KnowledgeNode> {}

export interface CreateKnowledgeNodeRequest {
  nodeType: string;
  title: string;
  summary?: string;
  sourceEntityType?: string;
  sourceEntityId?: EntityId;
}

export interface CreateKnowledgeNodeResponse {
  node: KnowledgeNode;
}

export interface UpdateKnowledgeNodeRequest extends CreateKnowledgeNodeRequest {
  nodeId: EntityId;
}

export interface UpdateKnowledgeNodeResponse {
  node: KnowledgeNode;
}

export interface ListKnowledgeEdgesRequest {
  sourceNodeId?: EntityId;
  targetNodeId?: EntityId;
  edgeType?: string;
  limit?: number;
}

export interface ListKnowledgeEdgesResponse extends PaginatedResponse<KnowledgeEdge> {}

export interface CreateKnowledgeEdgeRequest {
  sourceNodeId: EntityId;
  targetNodeId: EntityId;
  edgeType: string;
  label?: string;
  weight?: number;
  directed?: boolean;
}

export interface CreateKnowledgeEdgeResponse {
  edge: KnowledgeEdge;
}

export interface UpdateLessonConceptMappingsRequest {
  lessonId: EntityId;
  conceptNodeIds: EntityId[];
}

export interface UpdateLessonConceptMappingsResponse {
  lesson: Lesson;
  mappedConcepts: KnowledgeNode[];
  insight: KnowledgeGraphInsight;
}

export interface GetKnowledgeExploreRequest {
  anchorEntityType: "topic" | "lesson" | "concept";
  anchorEntityId: EntityId;
}

export interface GetKnowledgeExploreResponse {
  exploration: KnowledgeExploreResult;
}

export interface RunIntegrityFixRequest {
  issueType: string;
  entityId: EntityId;
}

export interface RunIntegrityFixResponse {
  issue: GraphIntegrityIssue;
  applied: boolean;
  summary: string;
}

export interface GetRecommendationsRequest {
  userId: EntityId;
  limit?: number;
  contextEntityType?: string;
  contextEntityId?: EntityId;
}

export interface GetRecommendationsResponse {
  recommendations: Recommendation[];
}

export interface AcknowledgeRecommendationRequest {
  recommendationId: EntityId;
  userId: EntityId;
  outcome?: "accepted" | "dismissed" | "saved";
}

export interface AcknowledgeRecommendationResponse {
  recommendation: Recommendation;
  acknowledgedAt: ISODateTime;
}

export interface StartTutorSessionRequest {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
  lessonId?: EntityId;
  topicId?: EntityId;
  tutorMode?: TutorMode;
  goalSummary?: string;
}

export interface StartTutorSessionResponse {
  tutorSession: TutorSession;
}

export interface AppendTutorTurnRequest {
  tutorSessionId: EntityId;
  actor: "learner" | "tutor";
  content: string;
  referencedKnowledgeNodeIds?: EntityId[];
}

export interface AppendTutorTurnResponse {
  tutorSession: TutorSession;
  followUpRecommendations?: Recommendation[];
}

export interface CreateTutorInteractionRequest {
  learnerUserId: EntityId;
  tutorSessionId?: EntityId;
  learningPathId?: EntityId;
  lessonId: EntityId;
  topicId: EntityId;
  action: TutorAction;
  prompt?: string;
}

export interface CreateTutorInteractionResponse {
  tutorSession: TutorSession;
  learnerTurn: TutorTurn;
  tutorTurn: TutorTurn;
  reply: TutorReply;
}

export interface GetTutorSessionRequest {
  learnerUserId: EntityId;
  lessonId: EntityId;
  topicId: EntityId;
  tutorSessionId?: EntityId;
}

export interface GetTutorSessionResponse {
  tutorSession: TutorSession | null;
  turns: TutorTurn[];
}

export interface EndTutorSessionRequest {
  tutorSessionId: EntityId;
  completedAt?: ISODateTime;
  summary?: string;
}

export interface EndTutorSessionResponse {
  tutorSession: TutorSession;
}

export interface TrackLearningEventRequest {
  eventName: string;
  userId?: EntityId;
  sessionId?: EntityId;
  entityType?: string;
  entityId?: EntityId;
  occurredAt: ISODateTime;
  attributes?: Record<string, string | number | boolean>;
}

export interface TrackLearningEventResponse {
  accepted: boolean;
  eventId: EntityId;
}

export interface GetLearnerAnalyticsRequest {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
  from?: ISODateTime;
  to?: ISODateTime;
}

export interface GetLearnerAnalyticsResponse {
  learnerUserId: EntityId;
  activeLearningPathIds: EntityId[];
  sessionsCompleted: number;
  averageMasteryScore: number;
}

export interface SendNotificationRequest {
  notification: Notification;
}

export interface SendNotificationResponse {
  notification: Notification;
}

export interface ListNotificationsRequest {
  recipientUserId: EntityId;
  status?: NotificationStatus;
  limit?: number;
}

export interface ListNotificationsResponse extends PaginatedResponse<Notification> {}

export interface MarkNotificationReadRequest {
  notificationId: EntityId;
  recipientUserId: EntityId;
}

export interface MarkNotificationReadResponse {
  notification: Notification;
}

export const sharedErrorResponseSchema: SchemaDefinition = {
  $id: "schema://shared/ErrorResponse",
  type: "object",
  required: ["error"],
  properties: {
    error: {
      type: "object",
      required: ["code", "message"],
      properties: {
        code: { type: "string" },
        message: { type: "string" },
        details: {
          type: "array",
          items: {
            type: "object",
            properties: {
              field: { type: "string" },
              message: { type: "string" },
              code: { type: "string" }
            }
          }
        }
      }
    }
  }
};

const domainRef = (name: string): SchemaDefinition => ({
  $ref: `domain://${name}`
});

const tutorContextSnippetSchema: SchemaDefinition = {
  type: "object",
  required: ["id", "snippetType", "title", "content", "entityType", "entityId"],
  properties: {
    id: { type: "string" },
    snippetType: { type: "string" },
    title: { type: "string" },
    content: { type: "string" },
    entityType: { type: "string" },
    entityId: { type: "string" }
  }
};

const tutorReferenceSchema: SchemaDefinition = {
  type: "object",
  required: ["entityType", "entityId", "label"],
  properties: {
    entityType: { type: "string" },
    entityId: { type: "string" },
    label: { type: "string" },
    excerpt: { type: "string" }
  }
};

const adaptiveGuidanceSchema: SchemaDefinition = {
  type: "object",
  required: ["title", "summary", "rationale"],
  properties: {
    title: { type: "string" },
    summary: { type: "string" },
    rationale: { type: "string" },
    relatedEntityType: { type: "string" },
    relatedEntityId: { type: "string" }
  }
};

const masteryEstimateSchema: SchemaDefinition = {
  type: "object",
  required: [
    "learnerUserId",
    "score",
    "level",
    "confidence",
    "rationale",
    "contributingSignals"
  ],
  properties: {
    learnerUserId: { type: "string" },
    learningPathId: { type: "string" },
    score: { type: "number" },
    level: { type: "string" },
    confidence: { type: "number" },
    rationale: { type: "string" },
    contributingSignals: {
      type: "array",
      items: { type: "string" }
    },
    recommendedDifficulty: { type: "string" }
  }
};

const nextBestActionSchema: SchemaDefinition = {
  type: "object",
  required: ["actionType", "title", "rationale", "confidence"],
  properties: {
    actionType: { type: "string" },
    title: { type: "string" },
    summary: { type: "string" },
    rationale: { type: "string" },
    confidence: { type: "number" },
    targetEntityType: { type: "string" },
    targetEntityId: { type: "string" },
    actionLabel: { type: "string" },
    actionUrl: { type: "string" }
  }
};

const knowledgeGraphInsightSchema: SchemaDefinition = {
  type: "object",
  required: [
    "anchorEntityType",
    "anchorEntityId",
    "coveredConcepts",
    "prerequisiteConcepts",
    "relatedConcepts",
    "edges",
    "explanation"
  ],
  properties: {
    anchorEntityType: { type: "string" },
    anchorEntityId: { type: "string" },
    topicId: { type: "string" },
    lessonId: { type: "string" },
    coveredConcepts: {
      type: "array",
      items: domainRef("KnowledgeNode")
    },
    prerequisiteConcepts: {
      type: "array",
      items: domainRef("KnowledgeNode")
    },
    relatedConcepts: {
      type: "array",
      items: domainRef("KnowledgeNode")
    },
    recommendedReviewConcept: domainRef("KnowledgeNode"),
    recommendedReviewTopicId: { type: "string" },
    recommendedReviewLessonId: { type: "string" },
    edges: {
      type: "array",
      items: domainRef("KnowledgeEdge")
    },
    explanation: {
      type: "array",
      items: { type: "string" }
    }
  }
};

const learnerProgressSummarySchema: SchemaDefinition = {
  type: "object",
  required: ["learnerUserId", "progressPercent", "tutorUsageCount"],
  properties: {
    learnerUserId: { type: "string" },
    learningPathId: { type: "string" },
    progressPercent: { type: "number" },
    recentSessionStatus: { type: "string" },
    recentSessionId: { type: "string" },
    currentLessonId: { type: "string" },
    currentTopicId: { type: "string" },
    tutorUsageCount: { type: "integer" },
    estimatedMastery: masteryEstimateSchema,
    nextBestAction: nextBestActionSchema,
    adaptiveGuidance: {
      type: "array",
      items: adaptiveGuidanceSchema
    },
    strugglingConcept: domainRef("KnowledgeNode"),
    recommendedReviewTopicId: { type: "string" },
    recommendedReviewLessonId: { type: "string" }
  }
};

const analyticsTrendPointSchema: SchemaDefinition = {
  type: "object",
  required: ["label", "value"],
  properties: {
    label: { type: "string" },
    value: { type: "number" }
  }
};

const recommendationTrendPointSchema: SchemaDefinition = {
  type: "object",
  required: ["recommendationType", "count"],
  properties: {
    recommendationType: { type: "string" },
    count: { type: "integer" }
  }
};

const conceptStruggleSummarySchema: SchemaDefinition = {
  type: "object",
  required: ["concept", "learnerCount", "tutorUsageCount", "recommendationCount"],
  properties: {
    concept: domainRef("KnowledgeNode"),
    learnerCount: { type: "integer" },
    tutorUsageCount: { type: "integer" },
    recommendationCount: { type: "integer" }
  }
};

const topicOperationalSummarySchema: SchemaDefinition = {
  type: "object",
  required: ["topic", "lessonCount", "conceptCount", "prerequisiteTopicIds"],
  properties: {
    topic: domainRef("Topic"),
    lessonCount: { type: "integer" },
    conceptCount: { type: "integer" },
    prerequisiteTopicIds: {
      type: "array",
      items: { type: "string" }
    }
  }
};

const graphIntegrityIssueSchema: SchemaDefinition = {
  type: "object",
  required: ["issueType", "severity", "message"],
  properties: {
    issueType: { type: "string" },
    severity: { type: "string" },
    message: { type: "string" },
    entityType: { type: "string" },
    entityId: { type: "string" },
    fixable: { type: "boolean" },
    suggestedActionLabel: { type: "string" }
  }
};

const contentCoverageGapSchema: SchemaDefinition = {
  type: "object",
  required: ["gapType", "message"],
  properties: {
    gapType: { type: "string" },
    message: { type: "string" },
    entityType: { type: "string" },
    entityId: { type: "string" }
  }
};

const knowledgeExploreResultSchema: SchemaDefinition = {
  type: "object",
  required: [
    "anchorEntityType",
    "anchorEntityId",
    "prerequisiteChain",
    "relatedConcepts",
    "mappedLessons",
    "mappedTopics",
    "conceptCluster",
    "explanation"
  ],
  properties: {
    anchorEntityType: { type: "string" },
    anchorEntityId: { type: "string" },
    prerequisiteChain: {
      type: "array",
      items: domainRef("KnowledgeNode")
    },
    relatedConcepts: {
      type: "array",
      items: domainRef("KnowledgeNode")
    },
    mappedLessons: {
      type: "array",
      items: domainRef("Lesson")
    },
    mappedTopics: {
      type: "array",
      items: domainRef("Topic")
    },
    conceptCluster: {
      type: "array",
      items: domainRef("KnowledgeNode")
    },
    explanation: {
      type: "array",
      items: { type: "string" }
    }
  }
};

export const authSchemas = {
  signupRequest: {
    $id: "schema://auth/SignupRequest",
    type: "object",
    required: ["email", "credential", "displayName"],
    properties: {
      email: { type: "string" },
      credential: { type: "string" },
      displayName: { type: "string" },
      requestedRole: { type: "string" }
    }
  } satisfies SchemaDefinition,
  signupResponse: {
    $id: "schema://auth/SignupResponse",
    type: "object",
    required: ["user", "accessToken", "refreshToken", "expiresAt", "refreshExpiresAt"],
    properties: {
      user: domainRef("User"),
      accessToken: { type: "string" },
      refreshToken: { type: "string" },
      expiresAt: { type: "string", format: "date-time" },
      refreshExpiresAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  loginRequest: {
    $id: "schema://auth/LoginRequest",
    type: "object",
    required: ["identifier", "credential"],
    properties: {
      identifier: { type: "string" },
      credential: { type: "string" },
      requestedRole: { type: "string" },
      deviceId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  loginResponse: {
    $id: "schema://auth/LoginResponse",
    type: "object",
    required: ["user", "accessToken", "refreshToken", "expiresAt", "refreshExpiresAt"],
    properties: {
      user: domainRef("User"),
      accessToken: { type: "string" },
      refreshToken: { type: "string" },
      expiresAt: { type: "string", format: "date-time" },
      refreshExpiresAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  refreshSessionRequest: {
    $id: "schema://auth/RefreshSessionRequest",
    type: "object",
    required: ["refreshToken"],
    properties: {
      refreshToken: { type: "string" }
    }
  } satisfies SchemaDefinition,
  refreshSessionResponse: {
    $id: "schema://auth/RefreshSessionResponse",
    type: "object",
    required: ["accessToken", "refreshToken", "expiresAt", "refreshExpiresAt"],
    properties: {
      accessToken: { type: "string" },
      refreshToken: { type: "string" },
      expiresAt: { type: "string", format: "date-time" },
      refreshExpiresAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  revokeSessionRequest: {
    $id: "schema://auth/RevokeSessionRequest",
    type: "object",
    required: ["refreshToken"],
    properties: {
      refreshToken: { type: "string" },
      reason: { type: "string" }
    }
  } satisfies SchemaDefinition,
  revokeSessionResponse: {
    $id: "schema://auth/RevokeSessionResponse",
    type: "object",
    required: ["revoked", "revokedAt"],
    properties: {
      revoked: { type: "boolean" },
      revokedAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  getCurrentUserRequest: {
    $id: "schema://auth/GetCurrentUserRequest",
    type: "object",
    properties: {
      userId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getCurrentUserResponse: {
    $id: "schema://auth/GetCurrentUserResponse",
    type: "object",
    required: ["user", "profiles"],
    properties: {
      user: domainRef("User"),
      profiles: {
        type: "array",
        items: {
          oneOf: [
            domainRef("StudentProfile"),
            domainRef("TeacherProfile"),
            domainRef("MentorProfile"),
            domainRef("ResearcherProfile"),
            domainRef("ParentProfile"),
            domainRef("AdministratorProfile")
          ]
        }
      }
    }
  } satisfies SchemaDefinition,
  validateAccessTokenRequest: {
    $id: "schema://auth/ValidateAccessTokenRequest",
    type: "object",
    required: ["accessToken"],
    properties: {
      accessToken: { type: "string" }
    }
  } satisfies SchemaDefinition,
  validateAccessTokenResponse: {
    $id: "schema://auth/ValidateAccessTokenResponse",
    type: "object",
    required: ["session", "user", "profiles"],
    properties: {
      session: domainRef("AuthenticatedSession"),
      user: domainRef("User"),
      profiles: {
        type: "array",
        items: {
          oneOf: [
            domainRef("StudentProfile"),
            domainRef("TeacherProfile"),
            domainRef("MentorProfile"),
            domainRef("ResearcherProfile"),
            domainRef("ParentProfile"),
            domainRef("AdministratorProfile")
          ]
        }
      }
    }
  } satisfies SchemaDefinition
};

export const userProfileSchemas = {
  getUserProfileRequest: {
    $id: "schema://user-profile/GetUserProfileRequest",
    type: "object",
    required: ["userId"],
    properties: {
      userId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getUserProfileResponse: {
    $id: "schema://user-profile/GetUserProfileResponse",
    type: "object",
    required: ["user", "profiles"],
    properties: {
      user: domainRef("User"),
      profiles: {
        type: "array",
        items: {
          oneOf: [
            domainRef("StudentProfile"),
            domainRef("TeacherProfile"),
            domainRef("MentorProfile"),
            domainRef("ResearcherProfile"),
            domainRef("ParentProfile"),
            domainRef("AdministratorProfile")
          ]
        }
      }
    }
  } satisfies SchemaDefinition,
  updateUserProfileRequest: {
    $id: "schema://user-profile/UpdateUserProfileRequest",
    type: "object",
    required: ["userId", "profile"],
    properties: {
      userId: { type: "string" },
      profile: {
        oneOf: [
          domainRef("StudentProfile"),
          domainRef("TeacherProfile"),
          domainRef("MentorProfile"),
          domainRef("ResearcherProfile"),
          domainRef("ParentProfile"),
          domainRef("AdministratorProfile")
        ]
      }
    }
  } satisfies SchemaDefinition,
  updateUserProfileResponse: {
    $id: "schema://user-profile/UpdateUserProfileResponse",
    type: "object",
    required: ["user", "profile"],
    properties: {
      user: domainRef("User"),
      profile: {
        oneOf: [
          domainRef("StudentProfile"),
          domainRef("TeacherProfile"),
          domainRef("MentorProfile"),
          domainRef("ResearcherProfile"),
          domainRef("ParentProfile"),
          domainRef("AdministratorProfile")
        ]
      }
    }
  } satisfies SchemaDefinition
};

export const learningSessionSchemas = {
  createSessionRequest: {
    $id: "schema://learning-session/CreateRequest",
    type: "object",
    required: ["learnerUserId"],
    properties: {
      learnerUserId: { type: "string" },
      learningPathId: { type: "string" },
      lessonId: { type: "string" },
      topicId: { type: "string" },
      initiatedBy: {
        type: "string",
        enum: ["student", "teacher", "ai", "system"]
      },
      difficultyLevel: { type: "string" }
    }
  } satisfies SchemaDefinition,
  createSessionResponse: {
    $id: "schema://learning-session/CreateResponse",
    type: "object",
    required: ["session"],
    properties: {
      session: domainRef("LearningSession")
    }
  } satisfies SchemaDefinition,
  updateSessionRequest: {
    $id: "schema://learning-session/UpdateRequest",
    type: "object",
    required: ["sessionId"],
    properties: {
      sessionId: { type: "string" },
      status: { type: "string" },
      progressPercent: { type: "number" },
      difficultyLevel: { type: "string" },
      masteryStates: {
        type: "array",
        items: domainRef("MasteryState")
      }
    }
  } satisfies SchemaDefinition,
  updateSessionResponse: {
    $id: "schema://learning-session/UpdateResponse",
    type: "object",
    required: ["session"],
    properties: {
      session: domainRef("LearningSession")
    }
  } satisfies SchemaDefinition,
  completeSessionRequest: {
    $id: "schema://learning-session/CompleteRequest",
    type: "object",
    required: ["sessionId"],
    properties: {
      sessionId: { type: "string" },
      completedAt: { type: "string", format: "date-time" },
      summary: { type: "string" }
    }
  } satisfies SchemaDefinition,
  completeSessionResponse: {
    $id: "schema://learning-session/CompleteResponse",
    type: "object",
    required: ["session"],
    properties: {
      session: domainRef("LearningSession")
    }
  } satisfies SchemaDefinition,
  getProgressRequest: {
    $id: "schema://learning/GetProgressRequest",
    type: "object",
    required: ["learnerUserId"],
    properties: {
      learnerUserId: { type: "string" },
      learningPathId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getProgressResponse: {
    $id: "schema://learning/GetProgressResponse",
    type: "object",
    required: [
      "learnerUserId",
      "progressPercent",
      "sessions",
      "masteryStates",
      "recommendations"
    ],
    properties: {
      learnerUserId: { type: "string" },
      learningPathId: { type: "string" },
      progressPercent: { type: "number" },
      sessions: {
        type: "array",
        items: domainRef("LearningSession")
      },
      masteryStates: {
        type: "array",
        items: domainRef("MasteryState")
      },
      recommendations: {
        type: "array",
        items: domainRef("Recommendation")
      },
      estimatedMastery: masteryEstimateSchema,
      nextBestAction: nextBestActionSchema,
      adaptiveGuidance: {
        type: "array",
        items: adaptiveGuidanceSchema
      }
    }
  } satisfies SchemaDefinition,
  getLearningPathRequest: {
    $id: "schema://learning/GetLearningPathRequest",
    type: "object",
    required: ["learningPathId"],
    properties: {
      learningPathId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getLearningPathResponse: {
    $id: "schema://learning/GetLearningPathResponse",
    type: "object",
    required: ["learningPath"],
    properties: {
      learningPath: domainRef("LearningPath")
    }
  } satisfies SchemaDefinition,
  getTeacherOverviewRequest: {
    $id: "schema://learning/GetTeacherOverviewRequest",
    type: "object",
    properties: {
      learningPathId: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  getTeacherOverviewResponse: {
    $id: "schema://learning/GetTeacherOverviewResponse",
    type: "object",
    required: ["overview"],
    properties: {
      overview: {
        type: "object",
        required: [
          "totalLearners",
          "activeLearners",
          "averageProgressPercent",
          "averageTutorUsageCount",
          "learnersNeedingReview",
          "learnerSummaries",
          "conceptStruggles",
          "tutorUsageTrends",
          "recommendationTrends"
        ],
        properties: {
          learningPathId: { type: "string" },
          totalLearners: { type: "integer" },
          activeLearners: { type: "integer" },
          averageProgressPercent: { type: "number" },
          averageTutorUsageCount: { type: "number" },
          learnersNeedingReview: { type: "integer" },
          learnerSummaries: {
            type: "array",
            items: learnerProgressSummarySchema
          },
          conceptStruggles: {
            type: "array",
            items: conceptStruggleSummarySchema
          },
          tutorUsageTrends: {
            type: "array",
            items: analyticsTrendPointSchema
          },
          recommendationTrends: {
            type: "array",
            items: recommendationTrendPointSchema
          }
        }
      }
    }
  } satisfies SchemaDefinition
};

export const contentSchemas = {
  listTopicsRequest: {
    $id: "schema://content/ListTopicsRequest",
    type: "object",
    properties: {
      parentTopicId: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  listTopicsResponse: {
    $id: "schema://content/ListTopicsResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("Topic")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  getLessonRequest: {
    $id: "schema://content/GetLessonRequest",
    type: "object",
    required: ["lessonId"],
    properties: {
      lessonId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getLessonResponse: {
    $id: "schema://content/GetLessonResponse",
    type: "object",
    required: ["lesson"],
    properties: {
      lesson: domainRef("Lesson")
    }
  } satisfies SchemaDefinition,
  listLessonsRequest: {
    $id: "schema://content/ListLessonsRequest",
    type: "object",
    properties: {
      learningPathId: { type: "string" },
      topicId: { type: "string" },
      skillId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listLessonsResponse: {
    $id: "schema://content/ListLessonsResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("Lesson")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  getAssessmentRequest: {
    $id: "schema://content/GetAssessmentRequest",
    type: "object",
    required: ["assessmentId"],
    properties: {
      assessmentId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getAssessmentResponse: {
    $id: "schema://content/GetAssessmentResponse",
    type: "object",
    required: ["assessment"],
    properties: {
      assessment: domainRef("Assessment")
    }
  } satisfies SchemaDefinition,
  getTopicRequest: {
    $id: "schema://content/GetTopicRequest",
    type: "object",
    required: ["topicId"],
    properties: {
      topicId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getTopicResponse: {
    $id: "schema://content/GetTopicResponse",
    type: "object",
    required: ["topic"],
    properties: {
      topic: domainRef("Topic")
    }
  } satisfies SchemaDefinition,
  getLessonKnowledgeRequest: {
    $id: "schema://content/GetLessonKnowledgeRequest",
    type: "object",
    required: ["lessonId"],
    properties: {
      lessonId: { type: "string" },
      topicId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getLessonKnowledgeResponse: {
    $id: "schema://content/GetLessonKnowledgeResponse",
    type: "object",
    required: ["insight"],
    properties: {
      insight: knowledgeGraphInsightSchema
    }
  } satisfies SchemaDefinition,
  getTopicKnowledgeRequest: {
    $id: "schema://content/GetTopicKnowledgeRequest",
    type: "object",
    required: ["topicId"],
    properties: {
      topicId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getTopicKnowledgeResponse: {
    $id: "schema://content/GetTopicKnowledgeResponse",
    type: "object",
    required: ["insight"],
    properties: {
      insight: knowledgeGraphInsightSchema
    }
  } satisfies SchemaDefinition,
  getAdminOverviewRequest: {
    $id: "schema://content/GetAdminOverviewRequest",
    type: "object",
    properties: {}
  } satisfies SchemaDefinition,
  getAdminOverviewResponse: {
    $id: "schema://content/GetAdminOverviewResponse",
    type: "object",
    required: ["overview"],
    properties: {
      overview: {
        type: "object",
        required: [
          "totalTopics",
          "totalLessons",
          "totalConcepts",
          "totalEdges",
          "topicSummaries",
          "integrityIssues",
          "coverageGaps"
        ],
        properties: {
          totalTopics: { type: "integer" },
          totalLessons: { type: "integer" },
          totalConcepts: { type: "integer" },
          totalEdges: { type: "integer" },
          topicSummaries: {
            type: "array",
            items: topicOperationalSummarySchema
          },
          integrityIssues: {
            type: "array",
            items: graphIntegrityIssueSchema
          },
          coverageGaps: {
            type: "array",
            items: contentCoverageGapSchema
          }
        }
      }
    }
  } satisfies SchemaDefinition,
  searchContentRequest: {
    $id: "schema://content/SearchContentRequest",
    type: "object",
    required: ["query"],
    properties: {
      query: { type: "string" },
      topicId: { type: "string" },
      contentType: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  searchContentResponse: {
    $id: "schema://content/SearchContentResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("ContentItem")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  listContentItemsRequest: {
    $id: "schema://content/ListContentItemsRequest",
    type: "object",
    properties: {
      topicId: { type: "string" },
      lessonId: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  listContentItemsResponse: {
    $id: "schema://content/ListContentItemsResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("ContentItem")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  createTopicRequest: {
    $id: "schema://content/CreateTopicRequest",
    type: "object",
    required: ["title"],
    properties: {
      title: { type: "string" },
      summary: { type: "string" },
      slug: { type: "string" },
      parentTopicId: { type: "string" },
      skillIds: {
        type: "array",
        items: { type: "string" }
      },
      prerequisiteTopicIds: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  createTopicResponse: {
    $id: "schema://content/CreateTopicResponse",
    type: "object",
    required: ["topic"],
    properties: {
      topic: domainRef("Topic")
    }
  } satisfies SchemaDefinition,
  updateTopicRequest: {
    $id: "schema://content/UpdateTopicRequest",
    type: "object",
    required: ["topicId", "title"],
    properties: {
      topicId: { type: "string" },
      title: { type: "string" },
      summary: { type: "string" },
      slug: { type: "string" },
      parentTopicId: { type: "string" },
      skillIds: {
        type: "array",
        items: { type: "string" }
      },
      prerequisiteTopicIds: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  updateTopicResponse: {
    $id: "schema://content/UpdateTopicResponse",
    type: "object",
    required: ["topic"],
    properties: {
      topic: domainRef("Topic")
    }
  } satisfies SchemaDefinition,
  createLessonRequest: {
    $id: "schema://content/CreateLessonRequest",
    type: "object",
    required: ["title", "lessonType", "topicId"],
    properties: {
      title: { type: "string" },
      summary: { type: "string" },
      lessonType: { type: "string" },
      topicId: { type: "string" },
      skillIds: {
        type: "array",
        items: { type: "string" }
      },
      learningObjectiveIds: {
        type: "array",
        items: { type: "string" }
      },
      prerequisiteLessonIds: {
        type: "array",
        items: { type: "string" }
      },
      estimatedDurationMinutes: { type: "integer" },
      difficultyLevel: { type: "string" },
      resourceUrls: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  createLessonResponse: {
    $id: "schema://content/CreateLessonResponse",
    type: "object",
    required: ["lesson"],
    properties: {
      lesson: domainRef("Lesson")
    }
  } satisfies SchemaDefinition,
  updateLessonRequest: {
    $id: "schema://content/UpdateLessonRequest",
    type: "object",
    required: ["lessonId", "title", "lessonType", "topicId"],
    properties: {
      lessonId: { type: "string" },
      title: { type: "string" },
      summary: { type: "string" },
      lessonType: { type: "string" },
      topicId: { type: "string" },
      skillIds: {
        type: "array",
        items: { type: "string" }
      },
      learningObjectiveIds: {
        type: "array",
        items: { type: "string" }
      },
      prerequisiteLessonIds: {
        type: "array",
        items: { type: "string" }
      },
      estimatedDurationMinutes: { type: "integer" },
      difficultyLevel: { type: "string" },
      resourceUrls: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  updateLessonResponse: {
    $id: "schema://content/UpdateLessonResponse",
    type: "object",
    required: ["lesson"],
    properties: {
      lesson: domainRef("Lesson")
    }
  } satisfies SchemaDefinition,
  createContentItemRequest: {
    $id: "schema://content/CreateContentItemRequest",
    type: "object",
    required: ["title", "contentType"],
    properties: {
      title: { type: "string" },
      summary: { type: "string" },
      contentType: { type: "string" },
      topicIds: {
        type: "array",
        items: { type: "string" }
      },
      skillIds: {
        type: "array",
        items: { type: "string" }
      },
      lessonId: { type: "string" },
      sourceUrl: { type: "string" },
      language: { type: "string" },
      versionLabel: { type: "string" },
      relatedLearningPathId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  createContentItemResponse: {
    $id: "schema://content/CreateContentItemResponse",
    type: "object",
    required: ["item"],
    properties: {
      item: domainRef("ContentItem")
    }
  } satisfies SchemaDefinition,
  listKnowledgeNodesRequest: {
    $id: "schema://content/ListKnowledgeNodesRequest",
    type: "object",
    properties: {
      nodeType: { type: "string" },
      sourceEntityType: { type: "string" },
      sourceEntityId: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  listKnowledgeNodesResponse: {
    $id: "schema://content/ListKnowledgeNodesResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("KnowledgeNode")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  createKnowledgeNodeRequest: {
    $id: "schema://content/CreateKnowledgeNodeRequest",
    type: "object",
    required: ["nodeType", "title"],
    properties: {
      nodeType: { type: "string" },
      title: { type: "string" },
      summary: { type: "string" },
      sourceEntityType: { type: "string" },
      sourceEntityId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  createKnowledgeNodeResponse: {
    $id: "schema://content/CreateKnowledgeNodeResponse",
    type: "object",
    required: ["node"],
    properties: {
      node: domainRef("KnowledgeNode")
    }
  } satisfies SchemaDefinition,
  updateKnowledgeNodeRequest: {
    $id: "schema://content/UpdateKnowledgeNodeRequest",
    type: "object",
    required: ["nodeId", "nodeType", "title"],
    properties: {
      nodeId: { type: "string" },
      nodeType: { type: "string" },
      title: { type: "string" },
      summary: { type: "string" },
      sourceEntityType: { type: "string" },
      sourceEntityId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  updateKnowledgeNodeResponse: {
    $id: "schema://content/UpdateKnowledgeNodeResponse",
    type: "object",
    required: ["node"],
    properties: {
      node: domainRef("KnowledgeNode")
    }
  } satisfies SchemaDefinition,
  listKnowledgeEdgesRequest: {
    $id: "schema://content/ListKnowledgeEdgesRequest",
    type: "object",
    properties: {
      sourceNodeId: { type: "string" },
      targetNodeId: { type: "string" },
      edgeType: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  listKnowledgeEdgesResponse: {
    $id: "schema://content/ListKnowledgeEdgesResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("KnowledgeEdge")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  createKnowledgeEdgeRequest: {
    $id: "schema://content/CreateKnowledgeEdgeRequest",
    type: "object",
    required: ["sourceNodeId", "targetNodeId", "edgeType"],
    properties: {
      sourceNodeId: { type: "string" },
      targetNodeId: { type: "string" },
      edgeType: { type: "string" },
      label: { type: "string" },
      weight: { type: "number" },
      directed: { type: "boolean" }
    }
  } satisfies SchemaDefinition,
  createKnowledgeEdgeResponse: {
    $id: "schema://content/CreateKnowledgeEdgeResponse",
    type: "object",
    required: ["edge"],
    properties: {
      edge: domainRef("KnowledgeEdge")
    }
  } satisfies SchemaDefinition,
  updateLessonConceptMappingsRequest: {
    $id: "schema://content/UpdateLessonConceptMappingsRequest",
    type: "object",
    required: ["lessonId", "conceptNodeIds"],
    properties: {
      lessonId: { type: "string" },
      conceptNodeIds: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  updateLessonConceptMappingsResponse: {
    $id: "schema://content/UpdateLessonConceptMappingsResponse",
    type: "object",
    required: ["lesson", "mappedConcepts", "insight"],
    properties: {
      lesson: domainRef("Lesson"),
      mappedConcepts: {
        type: "array",
        items: domainRef("KnowledgeNode")
      },
      insight: knowledgeGraphInsightSchema
    }
  } satisfies SchemaDefinition,
  getKnowledgeExploreRequest: {
    $id: "schema://content/GetKnowledgeExploreRequest",
    type: "object",
    required: ["anchorEntityType", "anchorEntityId"],
    properties: {
      anchorEntityType: {
        type: "string",
        enum: ["topic", "lesson", "concept"]
      },
      anchorEntityId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getKnowledgeExploreResponse: {
    $id: "schema://content/GetKnowledgeExploreResponse",
    type: "object",
    required: ["exploration"],
    properties: {
      exploration: knowledgeExploreResultSchema
    }
  } satisfies SchemaDefinition,
  runIntegrityFixRequest: {
    $id: "schema://content/RunIntegrityFixRequest",
    type: "object",
    required: ["issueType", "entityId"],
    properties: {
      issueType: { type: "string" },
      entityId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  runIntegrityFixResponse: {
    $id: "schema://content/RunIntegrityFixResponse",
    type: "object",
    required: ["issue", "applied", "summary"],
    properties: {
      issue: graphIntegrityIssueSchema,
      applied: { type: "boolean" },
      summary: { type: "string" }
    }
  } satisfies SchemaDefinition
};

export const recommendationSchemas = {
  getRecommendationsRequest: {
    $id: "schema://recommendation/GetRecommendationsRequest",
    type: "object",
    required: ["userId"],
    properties: {
      userId: { type: "string" },
      limit: { type: "integer" },
      contextEntityType: { type: "string" },
      contextEntityId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getRecommendationsResponse: {
    $id: "schema://recommendation/GetRecommendationsResponse",
    type: "object",
    required: ["recommendations"],
    properties: {
      recommendations: {
        type: "array",
        items: domainRef("Recommendation")
      }
    }
  } satisfies SchemaDefinition,
  acknowledgeRecommendationRequest: {
    $id: "schema://recommendation/AcknowledgeRequest",
    type: "object",
    required: ["recommendationId", "userId"],
    properties: {
      recommendationId: { type: "string" },
      userId: { type: "string" },
      outcome: {
        type: "string",
        enum: ["accepted", "dismissed", "saved"]
      }
    }
  } satisfies SchemaDefinition,
  acknowledgeRecommendationResponse: {
    $id: "schema://recommendation/AcknowledgeResponse",
    type: "object",
    required: ["recommendation", "acknowledgedAt"],
    properties: {
      recommendation: domainRef("Recommendation"),
      acknowledgedAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition
};

export const tutorSessionSchemas = {
  startTutorSessionRequest: {
    $id: "schema://tutor-session/StartRequest",
    type: "object",
    required: ["learnerUserId"],
    properties: {
      learnerUserId: { type: "string" },
      learningPathId: { type: "string" },
      lessonId: { type: "string" },
      topicId: { type: "string" },
      tutorMode: { type: "string" },
      goalSummary: { type: "string" }
    }
  } satisfies SchemaDefinition,
  startTutorSessionResponse: {
    $id: "schema://tutor-session/StartResponse",
    type: "object",
    required: ["tutorSession"],
    properties: {
      tutorSession: domainRef("TutorSession")
    }
  } satisfies SchemaDefinition,
  getTutorSessionRequest: {
    $id: "schema://tutor-session/GetRequest",
    type: "object",
    required: ["learnerUserId", "lessonId", "topicId"],
    properties: {
      learnerUserId: { type: "string" },
      lessonId: { type: "string" },
      topicId: { type: "string" },
      tutorSessionId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getTutorSessionResponse: {
    $id: "schema://tutor-session/GetResponse",
    type: "object",
    required: ["tutorSession", "turns"],
    properties: {
      tutorSession: {
        oneOf: [{ type: "null" }, domainRef("TutorSession")]
      },
      turns: {
        type: "array",
        items: domainRef("TutorTurn")
      }
    }
  } satisfies SchemaDefinition,
  appendTutorTurnRequest: {
    $id: "schema://tutor-session/AppendTurnRequest",
    type: "object",
    required: ["tutorSessionId", "actor", "content"],
    properties: {
      tutorSessionId: { type: "string" },
      actor: {
        type: "string",
        enum: ["learner", "tutor"]
      },
      content: { type: "string" },
      referencedKnowledgeNodeIds: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  appendTutorTurnResponse: {
    $id: "schema://tutor-session/AppendTurnResponse",
    type: "object",
    required: ["tutorSession"],
    properties: {
      tutorSession: domainRef("TutorSession"),
      followUpRecommendations: {
        type: "array",
        items: domainRef("Recommendation")
      }
    }
  } satisfies SchemaDefinition,
  createTutorInteractionRequest: {
    $id: "schema://tutor-session/CreateInteractionRequest",
    type: "object",
    required: ["learnerUserId", "lessonId", "topicId", "action"],
    properties: {
      learnerUserId: { type: "string" },
      tutorSessionId: { type: "string" },
      learningPathId: { type: "string" },
      lessonId: { type: "string" },
      topicId: { type: "string" },
      action: {
        type: "string",
        enum: [
          "explain_concept",
          "summarize_lesson",
          "give_hint",
          "ask_question"
        ]
      },
      prompt: { type: "string" }
    }
  } satisfies SchemaDefinition,
  createTutorInteractionResponse: {
    $id: "schema://tutor-session/CreateInteractionResponse",
    type: "object",
    required: ["tutorSession", "learnerTurn", "tutorTurn", "reply"],
    properties: {
      tutorSession: domainRef("TutorSession"),
      learnerTurn: domainRef("TutorTurn"),
      tutorTurn: domainRef("TutorTurn"),
      reply: {
        type: "object",
        required: ["responseType", "title", "answer"],
        properties: {
          responseType: { type: "string" },
          title: { type: "string" },
          answer: { type: "string" },
          summary: { type: "string" },
          suggestedPrompts: {
            type: "array",
            items: { type: "string" }
          },
          nextSteps: {
            type: "array",
            items: { type: "string" }
          },
          references: {
            type: "array",
            items: tutorReferenceSchema
          },
          contextSnippets: {
            type: "array",
            items: tutorContextSnippetSchema
          }
        }
      }
    }
  } satisfies SchemaDefinition,
  endTutorSessionRequest: {
    $id: "schema://tutor-session/EndRequest",
    type: "object",
    required: ["tutorSessionId"],
    properties: {
      tutorSessionId: { type: "string" },
      completedAt: { type: "string", format: "date-time" },
      summary: { type: "string" }
    }
  } satisfies SchemaDefinition,
  endTutorSessionResponse: {
    $id: "schema://tutor-session/EndResponse",
    type: "object",
    required: ["tutorSession"],
    properties: {
      tutorSession: domainRef("TutorSession")
    }
  } satisfies SchemaDefinition
};

export const analyticsSchemas = {
  trackLearningEventRequest: {
    $id: "schema://analytics/TrackLearningEventRequest",
    type: "object",
    required: ["eventName", "occurredAt"],
    properties: {
      eventName: { type: "string" },
      userId: { type: "string" },
      sessionId: { type: "string" },
      entityType: { type: "string" },
      entityId: { type: "string" },
      occurredAt: { type: "string", format: "date-time" },
      attributes: {
        type: "object",
        additionalProperties: {
          oneOf: [{ type: "string" }, { type: "number" }, { type: "boolean" }]
        }
      }
    }
  } satisfies SchemaDefinition,
  trackLearningEventResponse: {
    $id: "schema://analytics/TrackLearningEventResponse",
    type: "object",
    required: ["accepted", "eventId"],
    properties: {
      accepted: { type: "boolean" },
      eventId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getLearnerAnalyticsRequest: {
    $id: "schema://analytics/GetLearnerAnalyticsRequest",
    type: "object",
    required: ["learnerUserId"],
    properties: {
      learnerUserId: { type: "string" },
      learningPathId: { type: "string" },
      from: { type: "string", format: "date-time" },
      to: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  getLearnerAnalyticsResponse: {
    $id: "schema://analytics/GetLearnerAnalyticsResponse",
    type: "object",
    required: [
      "learnerUserId",
      "activeLearningPathIds",
      "sessionsCompleted",
      "averageMasteryScore"
    ],
    properties: {
      learnerUserId: { type: "string" },
      activeLearningPathIds: {
        type: "array",
        items: { type: "string" }
      },
      sessionsCompleted: { type: "integer" },
      averageMasteryScore: { type: "number" }
    }
  } satisfies SchemaDefinition
};

export const notificationSchemas = {
  sendNotificationRequest: {
    $id: "schema://notification/SendRequest",
    type: "object",
    required: ["notification"],
    properties: {
      notification: domainRef("Notification")
    }
  } satisfies SchemaDefinition,
  sendNotificationResponse: {
    $id: "schema://notification/SendResponse",
    type: "object",
    required: ["notification"],
    properties: {
      notification: domainRef("Notification")
    }
  } satisfies SchemaDefinition,
  listNotificationsRequest: {
    $id: "schema://notification/ListRequest",
    type: "object",
    required: ["recipientUserId"],
    properties: {
      recipientUserId: { type: "string" },
      status: { type: "string" },
      limit: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  listNotificationsResponse: {
    $id: "schema://notification/ListResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("Notification")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  markNotificationReadRequest: {
    $id: "schema://notification/MarkReadRequest",
    type: "object",
    required: ["notificationId", "recipientUserId"],
    properties: {
      notificationId: { type: "string" },
      recipientUserId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  markNotificationReadResponse: {
    $id: "schema://notification/MarkReadResponse",
    type: "object",
    required: ["notification"],
    properties: {
      notification: domainRef("Notification")
    }
  } satisfies SchemaDefinition
};

export const apiSchemas = {
  auth: authSchemas,
  userProfile: userProfileSchemas,
  learningSession: learningSessionSchemas,
  classroom: classroomSchemas,
  content: contentSchemas,
  teaching: teachingSchemas,
  recommendation: recommendationSchemas,
  tutorSession: tutorSessionSchemas,
  analytics: analyticsSchemas,
  notification: notificationSchemas,
  sharedError: sharedErrorResponseSchema
};

export type ContentReferenceResponse =
  | GetLessonResponse
  | GetAssessmentResponse
  | GetTopicResponse
  | { learningPath: LearningPath };

export * from "./classroom.js";
export * from "./teaching.js";
export {
  yarinetSchemas,
  challengeStatusValues,
  type ChallengeStatusValue,
  type CreateChallengeRequest,
  type UpdateChallengeStatusRequest,
  type GetChallengeRequest,
  type ListChallengesRequest
} from "./yarinet.js";
