export type ExtensibleString<T extends string> = T | (string & {});

export type EntityId = string;
export type ISODateTime = string;
export type LocaleCode = string;
export type LanguageCode = string;
export type UrlString = string;
export type AttributeValue =
  | string
  | number
  | boolean
  | null
  | readonly string[]
  | readonly number[];

export interface DomainMetadata {
  tags?: string[];
  attributes?: Record<string, AttributeValue>;
}

export interface BaseEntity {
  id: EntityId;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  metadata?: DomainMetadata;
}

export type UserRole = ExtensibleString<
  | "student"
  | "teacher"
  | "mentor"
  | "researcher"
  | "parent"
  | "administrator"
>;

export type PermissionScope = ExtensibleString<
  | "content:read"
  | "content:write"
  | "lesson:edit"
  | "learning:read"
  | "learning:write"
  | "progress:read"
  | "analytics:read"
  | "graph:manage"
  | "concept:create"
  | "tutor:use"
  | "tutor:moderate"
  | "classroom:manage"
  | "classroom:join"
  | "material:write"
  | "assessment:write"
  | "deliberation:read"
  | "deliberation:write"
  | "challenge:manage"
  | "forum:moderate"
>;

export type UserStatus = ExtensibleString<
  "active" | "inactive" | "invited" | "suspended" | "archived"
>;

export type ProfileStatus = ExtensibleString<
  "active" | "inactive" | "pending_review" | "archived"
>;

export type DifficultyLevel = ExtensibleString<
  "beginner" | "emerging" | "intermediate" | "advanced" | "expert"
>;

export type MasteryLevel = ExtensibleString<
  "not_started" | "emerging" | "developing" | "proficient" | "mastered"
>;

export type MasteryTrend = ExtensibleString<
  "rising" | "stable" | "declining" | "insufficient_data"
>;

export type LearningPathStatus = ExtensibleString<
  "draft" | "active" | "archived"
>;

export type LearningSessionStatus = ExtensibleString<
  "planned" | "active" | "paused" | "completed" | "abandoned"
>;

export type LessonType = ExtensibleString<
  "lesson" | "practice" | "lab" | "project" | "assessment_prep"
>;

export type ProjectStatus = ExtensibleString<
  "planned" | "active" | "submitted" | "reviewed" | "completed" | "archived"
>;

export type AssessmentType = ExtensibleString<
  "quiz" | "exam" | "rubric" | "portfolio" | "project_review" | "diagnostic"
>;

export type RecommendationType = ExtensibleString<
  | "lesson"
  | "exercise"
  | "project"
  | "intervention"
  | "review"
  | "learning_path"
  | "tutor_prompt"
>;

export type RecommendationPriority = ExtensibleString<
  "low" | "medium" | "high" | "critical"
>;

export type TutorMode = ExtensibleString<
  "guided" | "coaching" | "socratic" | "feedback" | "review"
>;

export type TutorSessionStatus = ExtensibleString<
  "active" | "waiting" | "completed" | "escalated" | "archived"
>;

export type TutorAction = ExtensibleString<
  "explain_concept" | "summarize_lesson" | "give_hint" | "ask_question"
>;

export type TutorTurnActor = ExtensibleString<"learner" | "tutor" | "system">;

export type TutorResponseType = ExtensibleString<
  "explanation" | "summary" | "hint" | "answer"
>;

export type TutorContextSnippetType = ExtensibleString<
  | "lesson_summary"
  | "topic_summary"
  | "learning_objective"
  | "skill_anchor"
  | "path_context"
  | "related_lesson"
  | "prerequisite_concept"
  | "related_concept"
  | "concept_map"
  | "adaptive_guidance"
  | "next_best_action"
  | "retrieved_context"
  | "conversation_memory"
  | "progress_signal"
>;

export type RetrievedContextSourceType = ExtensibleString<
  | "lesson"
  | "topic"
  | "learning_path"
  | "related_lesson"
  | "content_item"
  | "concept"
  | "graph_explanation"
  | "adaptive_signal"
  | "progress_signal"
  | "tutor_memory"
>;

export type NextBestActionType = ExtensibleString<
  | "continue_current_path"
  | "review_prerequisite_topic"
  | "revisit_struggled_lesson"
  | "ask_tutor_for_clarification"
  | "advance_to_next_lesson"
>;

export type KnowledgeNodeType = ExtensibleString<
  | "concept"
  | "skill"
  | "topic"
  | "lesson"
  | "assessment"
  | "project"
  | "resource"
>;

export type KnowledgeEdgeType = ExtensibleString<
  | "prerequisite_of"
  | "part_of"
  | "reinforces"
  | "assesses"
  | "relates_to"
  | "recommended_next"
>;

export type NotificationChannel = ExtensibleString<
  "in_app" | "email" | "push" | "sms" | "webhook"
>;

export type NotificationPriority = ExtensibleString<
  "low" | "medium" | "high" | "urgent"
>;

export type NotificationStatus = ExtensibleString<
  "draft" | "scheduled" | "sent" | "delivered" | "read" | "failed"
>;

export type ContentItemType = ExtensibleString<
  | "lesson"
  | "article"
  | "video"
  | "exercise"
  | "assessment"
  | "project"
  | "resource"
>;

export type ContentItemStatus = ExtensibleString<
  "draft" | "review" | "published" | "archived"
>;

export type AnalyticsEventType = ExtensibleString<
  | "session_started"
  | "session_completed"
  | "lesson_viewed"
  | "assessment_submitted"
  | "recommendation_shown"
  | "tutor_interaction"
  | "notification_opened"
>;

export interface User extends BaseEntity {
  primaryRole: UserRole;
  roles: UserRole[];
  scopes?: PermissionScope[];
  status: UserStatus;
  displayName: string;
  givenName?: string;
  familyName?: string;
  email?: string;
  avatarUrl?: UrlString;
  locale?: LocaleCode;
  preferredLanguage?: LanguageCode;
  timezone?: string;
  externalRef?: string;
}

export interface AuthenticatedSession extends BaseEntity {
  userId: EntityId;
  primaryRole: UserRole;
  roles: UserRole[];
  scopes?: PermissionScope[];
  accessTokenExpiresAt: ISODateTime;
  refreshTokenExpiresAt: ISODateTime;
  revokedAt?: ISODateTime;
  lastUsedAt?: ISODateTime;
  deviceId?: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface BaseProfile extends BaseEntity {
  userId: EntityId;
  profileType: UserRole;
  status: ProfileStatus;
  headline?: string;
  bio?: string;
  goals?: string[];
  interests?: string[];
}

export interface StudentProfile extends BaseProfile {
  profileType: "student";
  currentLevel?: string;
  guardianUserIds?: EntityId[];
  activeLearningPathIds?: EntityId[];
  focusSkillIds?: EntityId[];
  supportPreferences?: string[];
}

export interface TeacherProfile extends BaseProfile {
  profileType: "teacher";
  expertiseAreas?: string[];
  topicIds?: EntityId[];
  skillIds?: EntityId[];
  certificationLabels?: string[];
}

export interface MentorProfile extends BaseProfile {
  profileType: "mentor";
  expertiseAreas?: string[];
  supportedProjectTypes?: string[];
  availabilitySummary?: string;
}

export interface ResearcherProfile extends BaseProfile {
  profileType: "researcher";
  researchAreas?: string[];
  organization?: string;
  approvedDataScopes?: string[];
}

export interface ParentProfile extends BaseProfile {
  profileType: "parent";
  relatedStudentIds?: EntityId[];
  communicationPreferences?: NotificationChannel[];
}

export interface AdministratorProfile extends BaseProfile {
  profileType: "administrator";
  administrativeScopes?: string[];
  managedDomains?: string[];
  reportingFocus?: string[];
}

export type UserProfile =
  | StudentProfile
  | TeacherProfile
  | MentorProfile
  | ResearcherProfile
  | ParentProfile
  | AdministratorProfile;

export interface LearningObjective extends BaseEntity {
  title: string;
  description?: string;
  topicId?: EntityId;
  skillIds?: EntityId[];
  masteryThreshold?: number;
}

export interface Topic extends BaseEntity {
  title: string;
  summary?: string;
  slug?: string;
  parentTopicId?: EntityId;
  skillIds?: EntityId[];
  prerequisiteTopicIds?: EntityId[];
}

export interface Skill extends BaseEntity {
  name: string;
  description?: string;
  topicId?: EntityId;
  difficultyLevel?: DifficultyLevel;
  relatedSkillIds?: EntityId[];
}

export interface MasteryState extends BaseEntity {
  learnerUserId: EntityId;
  subjectType: ExtensibleString<
    "skill" | "topic" | "lesson" | "learning_objective" | "learning_path"
  >;
  subjectId: EntityId;
  level: MasteryLevel;
  score: number;
  confidence: number;
  evidenceCount?: number;
  trend?: MasteryTrend;
  lastObservedAt: ISODateTime;
  recommendedDifficulty?: DifficultyLevel;
}

export interface LearningPath extends BaseEntity {
  title: string;
  summary?: string;
  status: LearningPathStatus;
  audienceRoles?: UserRole[];
  topicIds?: EntityId[];
  skillIds?: EntityId[];
  lessonIds?: EntityId[];
  projectIds?: EntityId[];
  estimatedDurationMinutes?: number;
  difficultyLevel?: DifficultyLevel;
  sequencingStrategy?: ExtensibleString<
    "linear" | "adaptive" | "milestone_based" | "project_based"
  >;
}

export interface Lesson extends BaseEntity {
  title: string;
  summary?: string;
  lessonType: LessonType;
  topicId: EntityId;
  skillIds?: EntityId[];
  learningObjectiveIds?: EntityId[];
  prerequisiteLessonIds?: EntityId[];
  estimatedDurationMinutes?: number;
  difficultyLevel?: DifficultyLevel;
  resourceUrls?: UrlString[];
}

export interface LearningSession extends BaseEntity {
  learnerUserId: EntityId;
  status: LearningSessionStatus;
  learningPathId?: EntityId;
  lessonId?: EntityId;
  topicId?: EntityId;
  tutorSessionId?: EntityId;
  startedAt: ISODateTime;
  endedAt?: ISODateTime;
  progressPercent: number;
  difficultyLevel?: DifficultyLevel;
  masteryStateIds?: EntityId[];
  recommendationIds?: EntityId[];
}

export interface Project extends BaseEntity {
  title: string;
  summary?: string;
  description?: string;
  status: ProjectStatus;
  topicIds?: EntityId[];
  skillIds?: EntityId[];
  participantUserIds?: EntityId[];
  mentorUserIds?: EntityId[];
  assessmentIds?: EntityId[];
  dueAt?: ISODateTime;
  artifactUrls?: UrlString[];
}

export interface AssessmentCriterion {
  id: EntityId;
  title: string;
  description?: string;
  weight?: number;
}

export interface Assessment extends BaseEntity {
  title: string;
  summary?: string;
  assessmentType: AssessmentType;
  topicIds?: EntityId[];
  skillIds?: EntityId[];
  learningObjectiveIds?: EntityId[];
  lessonId?: EntityId;
  projectId?: EntityId;
  maxScore?: number;
  passingScore?: number;
  criteria?: AssessmentCriterion[];
}

export interface Recommendation extends BaseEntity {
  recipientUserId: EntityId;
  recommendationType: RecommendationType;
  priority: RecommendationPriority;
  title: string;
  summary?: string;
  rationale?: string;
  targetEntityType?: ExtensibleString<
    "lesson" | "topic" | "skill" | "project" | "assessment" | "learning_path"
  >;
  targetEntityId?: EntityId;
  actionLabel?: string;
  actionUrl?: UrlString;
  validUntil?: ISODateTime;
}

export interface TutorSession extends BaseEntity {
  learnerUserId: EntityId;
  status: TutorSessionStatus;
  tutorMode: TutorMode;
  startedAt: ISODateTime;
  lastInteractionAt: ISODateTime;
  learningPathId?: EntityId;
  lessonId?: EntityId;
  topicIds?: EntityId[];
  goalSummary?: string;
  turnCount?: number;
}

export interface TutorReference {
  entityType: ExtensibleString<
    "lesson" | "topic" | "learning_path" | "concept" | "content_item"
  >;
  entityId: EntityId;
  label: string;
  excerpt?: string;
}

export interface TutorContextSnippet {
  id: EntityId;
  snippetType: TutorContextSnippetType;
  title: string;
  content: string;
  entityType: ExtensibleString<
    "lesson" | "topic" | "learning_path" | "concept" | "content_item"
  >;
  entityId: EntityId;
}

export interface RetrievedContextItem {
  id: EntityId;
  sourceType: RetrievedContextSourceType;
  title: string;
  content: string;
  score: number;
  rationale: string;
  entityType?: ExtensibleString<
    "lesson" | "topic" | "learning_path" | "concept" | "content_item" | "tutor_turn"
  >;
  entityId?: EntityId;
  tags?: string[];
}

export interface RetrievedContextBundle {
  query: string;
  strategy: ExtensibleString<
    "tutor_grounding" | "adaptive_review" | "hybrid_semantic_baseline"
  >;
  explanation: string[];
  items: RetrievedContextItem[];
}

export type AiGenerationMode = ExtensibleString<"llm" | "fallback">;

export type LlmProviderName = ExtensibleString<"openai_compatible">;

export type LlmProviderErrorCode = ExtensibleString<
  | "LLM_API_KEY_MISSING"
  | "LLM_REQUEST_FAILED"
  | "LLM_INVALID_RESPONSE"
  | "LLM_PROVIDER_DISABLED"
>;

export interface LlmProviderError {
  code: LlmProviderErrorCode;
  provider: LlmProviderName;
  model?: string;
  message: string;
  recoverable: boolean;
  details?: string;
}

export interface AiGenerationMetadata {
  mode: AiGenerationMode;
  provider: LlmProviderName;
  model?: string;
  groundedBy: string[];
  error?: LlmProviderError;
}

export interface TutorTurn extends BaseEntity {
  tutorSessionId: EntityId;
  actor: TutorTurnActor;
  action?: TutorAction;
  responseType?: TutorResponseType;
  title?: string;
  summary?: string;
  content: string;
  lessonId?: EntityId;
  topicId?: EntityId;
  suggestedPrompts?: string[];
  nextSteps?: string[];
  references?: TutorReference[];
  contextSnippets?: TutorContextSnippet[];
  retrievalContext?: RetrievedContextBundle;
}

export interface TutorReply {
  responseType: TutorResponseType;
  title: string;
  answer: string;
  summary?: string;
  suggestedPrompts?: string[];
  nextSteps?: string[];
  references?: TutorReference[];
  contextSnippets?: TutorContextSnippet[];
  retrievalContext?: RetrievedContextBundle;
  generationMetadata?: AiGenerationMetadata;
}

export interface MasteryEstimate {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
  score: number;
  level: MasteryLevel;
  confidence: number;
  rationale: string;
  contributingSignals: string[];
  recommendedDifficulty?: DifficultyLevel;
}

export interface NextBestAction {
  actionType: NextBestActionType;
  title: string;
  summary?: string;
  rationale: string;
  confidence: number;
  targetEntityType?: ExtensibleString<
    "learning_path" | "topic" | "lesson" | "tutor_session"
  >;
  targetEntityId?: EntityId;
  actionLabel?: string;
  actionUrl?: UrlString;
}

export interface AdaptiveGuidance {
  title: string;
  summary: string;
  rationale: string;
  relatedEntityType?: ExtensibleString<"learning_path" | "topic" | "lesson">;
  relatedEntityId?: EntityId;
}

export interface KnowledgeGraphInsight {
  anchorEntityType: ExtensibleString<"lesson" | "topic">;
  anchorEntityId: EntityId;
  topicId?: EntityId;
  lessonId?: EntityId;
  coveredConcepts: KnowledgeNode[];
  prerequisiteConcepts: KnowledgeNode[];
  relatedConcepts: KnowledgeNode[];
  recommendedReviewConcept?: KnowledgeNode;
  recommendedReviewTopicId?: EntityId;
  recommendedReviewLessonId?: EntityId;
  edges: KnowledgeEdge[];
  explanation: string[];
}

export interface LearnerProgressSummary {
  learnerUserId: EntityId;
  learningPathId?: EntityId;
  progressPercent: number;
  recentSessionStatus?: LearningSessionStatus;
  recentSessionId?: EntityId;
  currentLessonId?: EntityId;
  currentTopicId?: EntityId;
  tutorUsageCount: number;
  estimatedMastery?: MasteryEstimate;
  nextBestAction?: NextBestAction;
  adaptiveGuidance?: AdaptiveGuidance[];
  strugglingConcept?: KnowledgeNode;
  recommendedReviewTopicId?: EntityId;
  recommendedReviewLessonId?: EntityId;
}

export interface AnalyticsTrendPoint {
  label: string;
  value: number;
}

export interface RecommendationTrendPoint {
  recommendationType: RecommendationType;
  count: number;
}

export interface ConceptStruggleSummary {
  concept: KnowledgeNode;
  learnerCount: number;
  tutorUsageCount: number;
  recommendationCount: number;
}

export interface TeacherDashboardOverview {
  learningPathId?: EntityId;
  totalLearners: number;
  activeLearners: number;
  averageProgressPercent: number;
  averageTutorUsageCount: number;
  learnersNeedingReview: number;
  learnerSummaries: LearnerProgressSummary[];
  conceptStruggles: ConceptStruggleSummary[];
  tutorUsageTrends: AnalyticsTrendPoint[];
  recommendationTrends: RecommendationTrendPoint[];
}

export interface TopicOperationalSummary {
  topic: Topic;
  lessonCount: number;
  conceptCount: number;
  prerequisiteTopicIds: EntityId[];
}

export interface GraphIntegrityIssue {
  issueType: ExtensibleString<
    "orphan_lesson" | "orphan_concept" | "missing_prerequisite_mapping" | "empty_topic"
  >;
  severity: ExtensibleString<"info" | "warning" | "error">;
  message: string;
  entityType?: ExtensibleString<"topic" | "lesson" | "concept" | "edge">;
  entityId?: EntityId;
  fixable?: boolean;
  suggestedActionLabel?: string;
}

export interface ContentCoverageGap {
  gapType: ExtensibleString<
    "topic_without_lessons" | "lesson_without_concepts" | "concept_without_lessons"
  >;
  message: string;
  entityType?: ExtensibleString<"topic" | "lesson" | "concept">;
  entityId?: EntityId;
}

export interface KnowledgeExploreResult {
  anchorEntityType: ExtensibleString<"topic" | "lesson" | "concept">;
  anchorEntityId: EntityId;
  prerequisiteChain: KnowledgeNode[];
  relatedConcepts: KnowledgeNode[];
  mappedLessons: Lesson[];
  mappedTopics: Topic[];
  conceptCluster: KnowledgeNode[];
  explanation: string[];
}

export interface AdminDashboardOverview {
  totalTopics: number;
  totalLessons: number;
  totalConcepts: number;
  totalEdges: number;
  topicSummaries: TopicOperationalSummary[];
  integrityIssues: GraphIntegrityIssue[];
  coverageGaps: ContentCoverageGap[];
}

export interface KnowledgeNode extends BaseEntity {
  nodeType: KnowledgeNodeType;
  title: string;
  summary?: string;
  sourceEntityType?: string;
  sourceEntityId?: EntityId;
}

export interface KnowledgeEdge extends BaseEntity {
  sourceNodeId: EntityId;
  targetNodeId: EntityId;
  edgeType: KnowledgeEdgeType;
  label?: string;
  weight?: number;
  directed?: boolean;
}

export interface ContentItem extends BaseEntity {
  title: string;
  summary?: string;
  contentType: ContentItemType;
  status: ContentItemStatus;
  topicIds?: EntityId[];
  skillIds?: EntityId[];
  lessonId?: EntityId;
  assessmentId?: EntityId;
  projectId?: EntityId;
  authorUserId?: EntityId;
  sourceUrl?: UrlString;
  language?: LanguageCode;
  versionLabel?: string;
}

export interface Notification extends BaseEntity {
  recipientUserId: EntityId;
  channel: NotificationChannel;
  priority: NotificationPriority;
  status: NotificationStatus;
  title: string;
  body: string;
  category?: ExtensibleString<
    "system" | "learning" | "recommendation" | "reminder" | "alert"
  >;
  actionUrl?: UrlString;
  scheduledAt?: ISODateTime;
  deliveredAt?: ISODateTime;
  readAt?: ISODateTime;
  relatedEntityType?: string;
  relatedEntityId?: EntityId;
}

export interface AnalyticsEvent extends BaseEntity {
  eventType: AnalyticsEventType;
  actorUserId?: EntityId;
  sessionId?: EntityId;
  contentItemId?: EntityId;
  lessonId?: EntityId;
  assessmentId?: EntityId;
  projectId?: EntityId;
  learningPathId?: EntityId;
  tutorSessionId?: EntityId;
  occurredAt: ISODateTime;
  attributes?: Record<string, AttributeValue>;
}

export const defaultRoleScopeMap: Record<string, PermissionScope[]> = {
  student: [
    "content:read",
    "learning:read",
    "learning:write",
    "progress:read",
    "tutor:use",
    "classroom:join",
    "deliberation:read",
    "deliberation:write"
  ],
  teacher: [
    "content:read",
    "content:write",
    "lesson:edit",
    "learning:read",
    "progress:read",
    "analytics:read",
    "tutor:moderate",
    "classroom:manage",
    "material:write",
    "assessment:write",
    "deliberation:read",
    "deliberation:write",
    "challenge:manage",
    "forum:moderate"
  ],
  mentor: ["content:read", "learning:read", "progress:read", "analytics:read", "tutor:moderate"],
  researcher: ["content:read", "analytics:read"],
  parent: ["content:read", "progress:read"],
  administrator: [
    "content:read",
    "content:write",
    "lesson:edit",
    "learning:read",
    "progress:read",
    "analytics:read",
    "graph:manage",
    "concept:create",
    "tutor:moderate",
    "classroom:manage",
    "material:write",
    "assessment:write",
    "deliberation:read",
    "deliberation:write",
    "challenge:manage",
    "forum:moderate"
  ]
};

export function resolvePermissionScopes(roles: UserRole[]): PermissionScope[] {
  const scopes = new Set<PermissionScope>();

  for (const role of roles) {
    const defaults = defaultRoleScopeMap[role] ?? [];

    for (const scope of defaults) {
      scopes.add(scope);
    }
  }

  return [...scopes];
}

export type * from "./classroom.js";
export type * from "./teaching.js";
