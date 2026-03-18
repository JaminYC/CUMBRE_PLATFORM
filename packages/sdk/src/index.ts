import type {
  Assessment,
  Classroom,
  ClassroomAnalytics,
  ClassroomMeeting,
  ClassroomRosterEntry,
  ContentItem,
  EntityId,
  LearningPath,
  Lesson,
  Notification,
  Recommendation,
  StudentAttempt,
  StudentClassroomWorkspace,
  TeachingMaterial,
  TeachingModule,
  TeachingQuiz,
  Topic,
  User,
  UserProfile
} from "@cumbre/types";
import type {
  AssignClassroomModulesRequest,
  AssignClassroomModulesResponse,
  AcknowledgeRecommendationRequest,
  AcknowledgeRecommendationResponse,
  ApiErrorResponse,
  AppendTutorTurnRequest,
  AppendTutorTurnResponse,
  AuthLoginRequest,
  AuthLoginResponse,
  AuthSignupRequest,
  AuthSignupResponse,
  CompleteLearningSessionRequest,
  CompleteLearningSessionResponse,
  CreateTutorInteractionRequest,
  CreateTutorInteractionResponse,
  CreateLearningSessionRequest,
  CreateLearningSessionResponse,
  CreateClassroomMeetingRequest,
  CreateClassroomMeetingResponse,
  CreateClassroomRequest,
  CreateClassroomResponse,
  CreateContentItemRequest,
  CreateContentItemResponse,
  CreateKnowledgeEdgeRequest,
  CreateKnowledgeEdgeResponse,
  CreateKnowledgeNodeRequest,
  CreateKnowledgeNodeResponse,
  CreateLessonRequest,
  CreateLessonResponse,
  CreateTopicRequest,
  CreateTopicResponse,
  EndTutorSessionRequest,
  EndTutorSessionResponse,
  GenerateModuleRequest,
  GenerateModuleResponse,
  GenerateQuizRequest,
  GenerateQuizResponse,
  GetCurrentUserRequest,
  GetCurrentUserResponse,
  GetAssessmentRequest,
  GetAssessmentResponse,
  GetLearningPathRequest,
  GetLearningPathResponse,
  GetLearningProgressRequest,
  GetLearningProgressResponse,
  GetTeacherOverviewRequest,
  GetTeacherOverviewResponse,
  GetLearnerAnalyticsRequest,
  GetLearnerAnalyticsResponse,
  GetClassroomAnalyticsRequest,
  GetClassroomAnalyticsResponse,
  GetClassroomMeetingRequest,
  GetClassroomMeetingResponse,
  GetClassroomModulesRequest,
  GetClassroomModulesResponse,
  GetClassroomRequest,
  GetClassroomResponse,
  GetClassroomStudentsRequest,
  GetClassroomStudentsResponse,
  ListTeacherClassroomsRequest,
  ListTeacherClassroomsResponse,
  GetLessonRequest,
  GetLessonKnowledgeRequest,
  GetLessonKnowledgeResponse,
  GetLessonResponse,
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetAdminOverviewRequest,
  GetAdminOverviewResponse,
  GetKnowledgeExploreRequest,
  GetKnowledgeExploreResponse,
  GetTopicRequest,
  GetTopicKnowledgeRequest,
  GetTopicKnowledgeResponse,
  GetTopicResponse,
  GetStudentClassroomWorkspaceRequest,
  GetStudentClassroomWorkspaceResponse,
  GetTutorSessionRequest,
  GetTutorSessionResponse,
  GetUserProfileRequest,
  GetUserProfileResponse,
  ListLessonsRequest,
  ListLessonsResponse,
  ListContentItemsRequest,
  ListContentItemsResponse,
  ListKnowledgeEdgesRequest,
  ListKnowledgeEdgesResponse,
  ListKnowledgeNodesRequest,
  ListKnowledgeNodesResponse,
  ListNotificationsRequest,
  ListNotificationsResponse,
  ListTeacherMaterialsRequest,
  ListTeacherMaterialsResponse,
  ListTeachingModulesRequest,
  ListTeachingModulesResponse,
  ListTeachingQuizzesRequest,
  ListTeachingQuizzesResponse,
  ListTopicsRequest,
  ListTopicsResponse,
  MarkNotificationReadRequest,
  MarkNotificationReadResponse,
  RefreshSessionRequest,
  RefreshSessionResponse,
  RevokeSessionRequest,
  RevokeSessionResponse,
  RunIntegrityFixRequest,
  RunIntegrityFixResponse,
  ImportStudentsRequest,
  ImportStudentsResponse,
  JoinClassroomRequest,
  JoinClassroomResponse,
  SearchContentRequest,
  SearchContentResponse,
  SendNotificationRequest,
  SendNotificationResponse,
  StartTutorSessionRequest,
  StartTutorSessionResponse,
  TrackLearningEventRequest,
  TrackLearningEventResponse,
  UploadExamScanRequest,
  UploadExamScanResponse,
  UploadTeacherMaterialRequest,
  UploadTeacherMaterialResponse,
  ValidateAccessTokenRequest,
  ValidateAccessTokenResponse,
  UpdateLearningSessionRequest,
  UpdateLearningSessionResponse,
  UpdateKnowledgeNodeRequest,
  UpdateKnowledgeNodeResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse,
  UpdateTopicRequest,
  UpdateTopicResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse
} from "@cumbre/schemas";

export interface ServiceEndpoints {
  authServiceUrl: string;
  learningServiceUrl: string;
  contentServiceUrl: string;
  analyticsServiceUrl: string;
  notificationServiceUrl: string;
}

export interface ServiceClientConfig {
  endpoints: ServiceEndpoints;
  timeoutMs?: number;
  apiKey?: string;
}

export type ServiceResponse<T> = Promise<T | ApiErrorResponse>;

export interface AuthService {
  signup(request: AuthSignupRequest): ServiceResponse<AuthSignupResponse>;
  authenticate(request: AuthLoginRequest): ServiceResponse<AuthLoginResponse>;
  refreshSession(
    request: RefreshSessionRequest
  ): ServiceResponse<RefreshSessionResponse>;
  revokeSession(
    request: RevokeSessionRequest
  ): ServiceResponse<RevokeSessionResponse>;
  getCurrentUser(
    request: GetCurrentUserRequest
  ): ServiceResponse<GetCurrentUserResponse>;
  validateAccessToken(
    request: ValidateAccessTokenRequest
  ): ServiceResponse<ValidateAccessTokenResponse>;
}

export interface LearningService {
  createLearningSession(
    request: CreateLearningSessionRequest
  ): ServiceResponse<CreateLearningSessionResponse>;
  updateLearningSession(
    request: UpdateLearningSessionRequest
  ): ServiceResponse<UpdateLearningSessionResponse>;
  completeLearningSession(
    request: CompleteLearningSessionRequest
  ): ServiceResponse<CompleteLearningSessionResponse>;
  getLearningProgress(
    request: GetLearningProgressRequest
  ): ServiceResponse<GetLearningProgressResponse>;
  getLearningPath(
    request: GetLearningPathRequest
  ): ServiceResponse<GetLearningPathResponse>;
  getTeacherOverview(
    request: GetTeacherOverviewRequest
  ): ServiceResponse<GetTeacherOverviewResponse>;
  createClassroom(
    request: CreateClassroomRequest
  ): ServiceResponse<CreateClassroomResponse>;
  joinClassroom(
    request: JoinClassroomRequest
  ): ServiceResponse<JoinClassroomResponse>;
  getClassroom(
    request: GetClassroomRequest
  ): ServiceResponse<GetClassroomResponse>;
  listTeacherClassrooms(
    request: ListTeacherClassroomsRequest
  ): ServiceResponse<ListTeacherClassroomsResponse>;
  importStudents(
    request: ImportStudentsRequest
  ): ServiceResponse<ImportStudentsResponse>;
  getClassroomStudents(
    request: GetClassroomStudentsRequest
  ): ServiceResponse<GetClassroomStudentsResponse>;
  assignClassroomModules(
    request: AssignClassroomModulesRequest
  ): ServiceResponse<AssignClassroomModulesResponse>;
  getClassroomModules(
    request: GetClassroomModulesRequest
  ): ServiceResponse<GetClassroomModulesResponse>;
  createClassroomMeeting(
    request: CreateClassroomMeetingRequest
  ): ServiceResponse<CreateClassroomMeetingResponse>;
  getClassroomMeeting(
    request: GetClassroomMeetingRequest
  ): ServiceResponse<GetClassroomMeetingResponse>;
  getStudentClassroomWorkspace(
    request: GetStudentClassroomWorkspaceRequest
  ): ServiceResponse<GetStudentClassroomWorkspaceResponse>;
  getClassroomAnalytics(
    request: GetClassroomAnalyticsRequest
  ): ServiceResponse<GetClassroomAnalyticsResponse>;
  listLearningPaths(
    audienceRole?: string
  ): ServiceResponse<{ items: LearningPath[]; total: number }>;
}

export interface ContentService {
  listTopics(request: ListTopicsRequest): ServiceResponse<ListTopicsResponse>;
  getLesson(request: GetLessonRequest): ServiceResponse<GetLessonResponse>;
  getLessonKnowledge(
    request: GetLessonKnowledgeRequest
  ): ServiceResponse<GetLessonKnowledgeResponse>;
  listLessons(request: ListLessonsRequest): ServiceResponse<ListLessonsResponse>;
  createLesson(request: CreateLessonRequest): ServiceResponse<CreateLessonResponse>;
  updateLesson(request: UpdateLessonRequest): ServiceResponse<UpdateLessonResponse>;
  listContentItems(
    request: ListContentItemsRequest
  ): ServiceResponse<ListContentItemsResponse>;
  createContentItem(
    request: CreateContentItemRequest
  ): ServiceResponse<CreateContentItemResponse>;
  getAssessment(
    request: GetAssessmentRequest
  ): ServiceResponse<GetAssessmentResponse>;
  getTopic(request: GetTopicRequest): ServiceResponse<GetTopicResponse>;
  createTopic(request: CreateTopicRequest): ServiceResponse<CreateTopicResponse>;
  updateTopic(request: UpdateTopicRequest): ServiceResponse<UpdateTopicResponse>;
  getTopicKnowledge(
    request: GetTopicKnowledgeRequest
  ): ServiceResponse<GetTopicKnowledgeResponse>;
  listKnowledgeNodes(
    request: ListKnowledgeNodesRequest
  ): ServiceResponse<ListKnowledgeNodesResponse>;
  createKnowledgeNode(
    request: CreateKnowledgeNodeRequest
  ): ServiceResponse<CreateKnowledgeNodeResponse>;
  updateKnowledgeNode(
    request: UpdateKnowledgeNodeRequest
  ): ServiceResponse<UpdateKnowledgeNodeResponse>;
  listKnowledgeEdges(
    request: ListKnowledgeEdgesRequest
  ): ServiceResponse<ListKnowledgeEdgesResponse>;
  createKnowledgeEdge(
    request: CreateKnowledgeEdgeRequest
  ): ServiceResponse<CreateKnowledgeEdgeResponse>;
  updateLessonConceptMappings(
    request: UpdateLessonConceptMappingsRequest
  ): ServiceResponse<UpdateLessonConceptMappingsResponse>;
  getKnowledgeExplore(
    request: GetKnowledgeExploreRequest
  ): ServiceResponse<GetKnowledgeExploreResponse>;
  getAdminOverview(
    request: GetAdminOverviewRequest
  ): ServiceResponse<GetAdminOverviewResponse>;
  runIntegrityFix(
    request: RunIntegrityFixRequest
  ): ServiceResponse<RunIntegrityFixResponse>;
  uploadTeacherMaterial(
    request: UploadTeacherMaterialRequest
  ): ServiceResponse<UploadTeacherMaterialResponse>;
  listTeacherMaterials(
    request: ListTeacherMaterialsRequest
  ): ServiceResponse<ListTeacherMaterialsResponse>;
  generateModule(
    request: GenerateModuleRequest
  ): ServiceResponse<GenerateModuleResponse>;
  listTeachingModules(
    request: ListTeachingModulesRequest
  ): ServiceResponse<ListTeachingModulesResponse>;
  generateQuiz(
    request: GenerateQuizRequest
  ): ServiceResponse<GenerateQuizResponse>;
  listTeachingQuizzes(
    request: ListTeachingQuizzesRequest
  ): ServiceResponse<ListTeachingQuizzesResponse>;
  uploadExamScan(
    request: UploadExamScanRequest
  ): ServiceResponse<UploadExamScanResponse>;
  searchContent(
    request: SearchContentRequest
  ): ServiceResponse<SearchContentResponse>;
}

export interface AnalyticsService {
  trackLearningEvent(
    request: TrackLearningEventRequest
  ): ServiceResponse<TrackLearningEventResponse>;
  getLearnerAnalytics(
    request: GetLearnerAnalyticsRequest
  ): ServiceResponse<GetLearnerAnalyticsResponse>;
}

export interface NotificationService {
  sendNotification(
    request: SendNotificationRequest
  ): ServiceResponse<SendNotificationResponse>;
  listNotifications(
    request: ListNotificationsRequest
  ): ServiceResponse<ListNotificationsResponse>;
  markNotificationRead(
    request: MarkNotificationReadRequest
  ): ServiceResponse<MarkNotificationReadResponse>;
}

export interface UserProfileServiceContract {
  getUserProfile(
    request: GetUserProfileRequest
  ): ServiceResponse<GetUserProfileResponse>;
  updateUserProfile(
    request: UpdateUserProfileRequest
  ): ServiceResponse<UpdateUserProfileResponse>;
}

export interface RecommendationServiceContract {
  getRecommendations(
    request: GetRecommendationsRequest
  ): ServiceResponse<GetRecommendationsResponse>;
  acknowledgeRecommendation(
    request: AcknowledgeRecommendationRequest
  ): ServiceResponse<AcknowledgeRecommendationResponse>;
}

export interface TutorServiceContract {
  getTutorSession(
    request: GetTutorSessionRequest
  ): ServiceResponse<GetTutorSessionResponse>;
  startTutorSession(
    request: StartTutorSessionRequest
  ): ServiceResponse<StartTutorSessionResponse>;
  createTutorInteraction(
    request: CreateTutorInteractionRequest
  ): ServiceResponse<CreateTutorInteractionResponse>;
  appendTutorTurn(
    request: AppendTutorTurnRequest
  ): ServiceResponse<AppendTutorTurnResponse>;
  endTutorSession(
    request: EndTutorSessionRequest
  ): ServiceResponse<EndTutorSessionResponse>;
}

export interface CumbrePlatformContracts {
  auth: AuthService;
  learning: LearningService;
  content: ContentService;
  analytics: AnalyticsService;
  notifications: NotificationService;
}

export interface PlatformReadModels {
  currentUser?: User;
  currentProfiles?: UserProfile[];
  currentLesson?: Lesson;
  currentTopic?: Topic;
  currentAssessment?: Assessment;
  pendingRecommendations?: Recommendation[];
  pendingNotifications?: Notification[];
}

export const defaultServiceEndpoints: ServiceEndpoints = {
  authServiceUrl: "http://localhost:3001",
  learningServiceUrl: "http://localhost:3002",
  contentServiceUrl: "http://localhost:3003",
  analyticsServiceUrl: "http://localhost:3004",
  notificationServiceUrl: "http://localhost:3005"
};
