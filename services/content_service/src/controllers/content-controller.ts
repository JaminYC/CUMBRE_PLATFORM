import type { RequestContext } from "@cumbre/api-runtime";
import type {
  CreateContentItemRequest,
  GenerateModuleRequest,
  GenerateQuizRequest,
  CreateKnowledgeEdgeRequest,
  CreateKnowledgeNodeRequest,
  CreateLessonRequest,
  CreateTopicRequest,
  GetAdminOverviewRequest,
  GetKnowledgeExploreRequest,
  GetLessonKnowledgeRequest,
  GetTopicRequest,
  GetTopicKnowledgeRequest,
  ListContentItemsRequest,
  ListKnowledgeEdgesRequest,
  ListKnowledgeNodesRequest,
  ListLessonsRequest,
  ListTeacherMaterialsRequest,
  ListTeachingModulesRequest,
  ListTeachingQuizzesRequest,
  ListTopicsRequest,
  RunIntegrityFixRequest,
  SearchContentRequest,
  UploadExamScanRequest,
  UploadTeacherMaterialRequest,
  UpdateKnowledgeNodeRequest,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonRequest,
  UpdateTopicRequest
} from "@cumbre/schemas";
import type { ContentService } from "@cumbre/sdk";

export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  listTopics = async ({ validatedQuery }: RequestContext): Promise<unknown> => {
    return this.contentService.listTopics(validatedQuery as ListTopicsRequest);
  };

  listLessons = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listLessons(validatedQuery as ListLessonsRequest);
  };

  createLesson = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.createLesson(body as CreateLessonRequest);
  };

  updateLesson = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.updateLesson(body as UpdateLessonRequest);
  };

  listContentItems = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listContentItems(
      (validatedQuery ?? {}) as ListContentItemsRequest
    );
  };

  createContentItem = async ({
    body
  }: RequestContext): Promise<unknown> => {
    return this.contentService.createContentItem(
      body as CreateContentItemRequest
    );
  };

  searchContent = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.searchContent(
      validatedQuery as SearchContentRequest
    );
  };

  getTopic = async ({ validatedParams }: RequestContext): Promise<unknown> => {
    return this.contentService.getTopic(validatedParams as GetTopicRequest);
  };

  createTopic = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.createTopic(body as CreateTopicRequest);
  };

  updateTopic = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.updateTopic(body as UpdateTopicRequest);
  };

  getLessonKnowledge = async ({
    validatedParams
  }: RequestContext): Promise<unknown> => {
    return this.contentService.getLessonKnowledge(
      validatedParams as GetLessonKnowledgeRequest
    );
  };

  getTopicKnowledge = async ({
    validatedParams
  }: RequestContext): Promise<unknown> => {
    return this.contentService.getTopicKnowledge(
      validatedParams as GetTopicKnowledgeRequest
    );
  };

  listKnowledgeNodes = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listKnowledgeNodes(
      (validatedQuery ?? {}) as ListKnowledgeNodesRequest
    );
  };

  createKnowledgeNode = async ({
    body
  }: RequestContext): Promise<unknown> => {
    return this.contentService.createKnowledgeNode(
      body as CreateKnowledgeNodeRequest
    );
  };

  updateKnowledgeNode = async ({
    body
  }: RequestContext): Promise<unknown> => {
    return this.contentService.updateKnowledgeNode(
      body as UpdateKnowledgeNodeRequest
    );
  };

  listKnowledgeEdges = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listKnowledgeEdges(
      (validatedQuery ?? {}) as ListKnowledgeEdgesRequest
    );
  };

  createKnowledgeEdge = async ({
    body
  }: RequestContext): Promise<unknown> => {
    return this.contentService.createKnowledgeEdge(
      body as CreateKnowledgeEdgeRequest
    );
  };

  updateLessonConceptMappings = async ({
    body
  }: RequestContext): Promise<unknown> => {
    return this.contentService.updateLessonConceptMappings(
      body as UpdateLessonConceptMappingsRequest
    );
  };

  getKnowledgeExplore = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.getKnowledgeExplore(
      validatedQuery as GetKnowledgeExploreRequest
    );
  };

  getAdminOverview = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.getAdminOverview(
      (validatedQuery ?? {}) as GetAdminOverviewRequest
    );
  };

  runIntegrityFix = async ({
    body
  }: RequestContext): Promise<unknown> => {
    return this.contentService.runIntegrityFix(
      body as RunIntegrityFixRequest
    );
  };

  uploadTeacherMaterial = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.uploadTeacherMaterial(
      body as UploadTeacherMaterialRequest
    );
  };

  listTeacherMaterials = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listTeacherMaterials(
      validatedQuery as ListTeacherMaterialsRequest
    );
  };

  generateModule = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.generateModule(body as GenerateModuleRequest);
  };

  listTeachingModules = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listTeachingModules(
      (validatedQuery ?? {}) as ListTeachingModulesRequest
    );
  };

  generateQuiz = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.generateQuiz(body as GenerateQuizRequest);
  };

  listTeachingQuizzes = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.contentService.listTeachingQuizzes(
      (validatedQuery ?? {}) as ListTeachingQuizzesRequest
    );
  };

  uploadExamScan = async ({ body }: RequestContext): Promise<unknown> => {
    return this.contentService.uploadExamScan(body as UploadExamScanRequest);
  };
}
