import { DomainError, NotFoundError } from "@cumbre/api-runtime";
import type { ContentService as ContentServiceContract } from "@cumbre/sdk";
import type {
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
  GenerateModuleRequest,
  GenerateModuleResponse,
  GetAdminOverviewRequest,
  GetAdminOverviewResponse,
  GetAssessmentRequest,
  GetAssessmentResponse,
  GetKnowledgeExploreRequest,
  GetKnowledgeExploreResponse,
  GetLessonRequest,
  GetLessonKnowledgeRequest,
  GetLessonKnowledgeResponse,
  GetLessonResponse,
  GetTopicRequest,
  GetTopicKnowledgeRequest,
  GetTopicKnowledgeResponse,
  GetTopicResponse,
  ListContentItemsRequest,
  ListContentItemsResponse,
  ListKnowledgeEdgesRequest,
  ListKnowledgeEdgesResponse,
  ListKnowledgeNodesRequest,
  ListKnowledgeNodesResponse,
  ListLessonsRequest,
  ListLessonsResponse,
  ListTeacherMaterialsRequest,
  ListTeacherMaterialsResponse,
  ListTeachingModulesRequest,
  ListTeachingModulesResponse,
  ListTeachingQuizzesRequest,
  ListTeachingQuizzesResponse,
  ListTopicsRequest,
  ListTopicsResponse,
  RunIntegrityFixRequest,
  RunIntegrityFixResponse,
  SearchContentRequest,
  SearchContentResponse,
  GenerateQuizRequest,
  GenerateQuizResponse,
  UploadExamScanRequest,
  UploadExamScanResponse,
  UploadTeacherMaterialRequest,
  UploadTeacherMaterialResponse,
  UpdateKnowledgeNodeRequest,
  UpdateKnowledgeNodeResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse,
  UpdateTopicRequest,
  UpdateTopicResponse
} from "@cumbre/schemas";
import type {
  Assessment,
  ContentCoverageGap,
  GraphIntegrityIssue,
  KnowledgeNode,
  ParsedMaterialStructure,
  TeachingModule,
  TopicOperationalSummary
} from "@cumbre/types";
import { ContentItemRepository } from "../repositories/content-item-repository.js";
import { KnowledgeGraphRepository } from "../repositories/knowledge-graph-repository.js";
import { LessonRepository } from "../repositories/lesson-repository.js";
import { StudentAttemptRepository } from "../repositories/student-attempt-repository.js";
import { TeachingMaterialRepository } from "../repositories/teaching-material-repository.js";
import { TeachingModuleRepository } from "../repositories/teaching-module-repository.js";
import { TeachingQuizRepository } from "../repositories/teaching-quiz-repository.js";
import { TopicRepository } from "../repositories/topic-repository.js";
import {
  buildKnowledgeExploreResult,
  buildLessonKnowledgeInsight,
  buildTopicKnowledgeInsight
} from "./knowledge-graph-reasoner.js";
import type { Logger } from "../utils/logger.js";

interface ContentAIRuntime {
  parseTeachingMaterial(input: {
    fileName: string;
    mimeType: string;
    textContent?: string;
    ocrTextHint?: string;
    knowledgeNodes?: KnowledgeNode[];
  }): Promise<{
    materialKind: string;
    parsedText: string;
    parsedStructure: ParsedMaterialStructure;
  }>;
  buildModuleProposal(input: {
    teacherId: string;
    materialId: string;
    parsedStructure: ParsedMaterialStructure;
    conceptMatches: KnowledgeNode[];
    supportingLessons: Awaited<ReturnType<LessonRepository["list"]>>;
    approve?: boolean;
  }): Promise<{
    module: TeachingModule;
    supportingLessons: Awaited<ReturnType<LessonRepository["list"]>>;
    conceptMatches: KnowledgeNode[];
  }>;
  generatePedagogicalQuiz(input: {
    teacherId: string;
    title: string;
    module?: TeachingModule;
    lessonId?: string;
    conceptMatches: KnowledgeNode[];
  }): Promise<{
    quiz: import("@cumbre/types").TeachingQuiz;
  }>;
  parseExamScanToAttempt?(input: {
    studentId: string;
    classroomId?: string;
    quizId?: string;
    answerText?: string;
    ocrTextHint?: string;
  }): import("@cumbre/types").StudentAttempt;
}

export class ContentApplicationService implements ContentServiceContract {
  constructor(
    private readonly topicRepository: TopicRepository,
    private readonly lessonRepository: LessonRepository,
    private readonly contentItemRepository: ContentItemRepository,
    private readonly knowledgeGraphRepository: KnowledgeGraphRepository,
    private readonly teachingMaterialRepository: TeachingMaterialRepository,
    private readonly teachingModuleRepository: TeachingModuleRepository,
    private readonly teachingQuizRepository: TeachingQuizRepository,
    private readonly studentAttemptRepository: StudentAttemptRepository,
    private readonly aiRuntime: ContentAIRuntime,
    private readonly logger: Logger
  ) {}

  async listTopics(request: ListTopicsRequest): Promise<ListTopicsResponse> {
    const items = await this.topicRepository.list(request.parentTopicId);
    const limitedItems = request.limit ? items.slice(0, request.limit) : items;

    return {
      items: limitedItems,
      total: items.length
    };
  }

  async createTopic(request: CreateTopicRequest): Promise<CreateTopicResponse> {
    const topic = await this.topicRepository.create(request);

    this.logger.info("Created topic", {
      topicId: topic.id
    });

    return { topic };
  }

  async updateTopic(request: UpdateTopicRequest): Promise<UpdateTopicResponse> {
    await this.ensureTopic(request.topicId);
    const topic = await this.topicRepository.update(request.topicId, request);

    this.logger.info("Updated topic", {
      topicId: topic.id
    });

    return { topic };
  }

  async getLesson(request: GetLessonRequest): Promise<GetLessonResponse> {
    const lesson = await this.lessonRepository.findById(request.lessonId);

    if (!lesson) {
      throw new NotFoundError("Lesson was not found.");
    }

    return { lesson };
  }

  async createLesson(request: CreateLessonRequest): Promise<CreateLessonResponse> {
    await this.ensureTopic(request.topicId);
    const lesson = await this.lessonRepository.create(request);

    this.logger.info("Created lesson", {
      lessonId: lesson.id,
      topicId: lesson.topicId
    });

    return { lesson };
  }

  async updateLesson(request: UpdateLessonRequest): Promise<UpdateLessonResponse> {
    await Promise.all([
      this.ensureLesson(request.lessonId),
      this.ensureTopic(request.topicId)
    ]);
    const lesson = await this.lessonRepository.update(request.lessonId, request);

    this.logger.info("Updated lesson", {
      lessonId: lesson.id,
      topicId: lesson.topicId
    });

    return { lesson };
  }

  async listLessons(
    request: ListLessonsRequest
  ): Promise<ListLessonsResponse> {
    const items = await this.lessonRepository.list({
      topicId: request.topicId,
      skillId: request.skillId
    });

    return {
      items,
      total: items.length
    };
  }

  async listContentItems(
    request: ListContentItemsRequest
  ): Promise<ListContentItemsResponse> {
    const items = await this.contentItemRepository.list({
      topicId: request.topicId,
      lessonId: request.lessonId
    });

    return {
      items: request.limit ? items.slice(0, request.limit) : items,
      total: items.length
    };
  }

  async createContentItem(
    request: CreateContentItemRequest
  ): Promise<CreateContentItemResponse> {
    if (request.lessonId) {
      await this.ensureLesson(request.lessonId);
    }

    const item = await this.contentItemRepository.create(request);

    this.logger.info("Created content item", {
      contentItemId: item.id,
      lessonId: item.lessonId,
      topicCount: item.topicIds?.length ?? 0
    });

    return { item };
  }

  async getLessonKnowledge(
    request: GetLessonKnowledgeRequest
  ): Promise<GetLessonKnowledgeResponse> {
    const lesson = await this.lessonRepository.findById(request.lessonId);

    if (!lesson) {
      throw new NotFoundError("Lesson was not found.");
    }

    const topic = await this.topicRepository.findById(lesson.topicId);

    if (!topic) {
      throw new NotFoundError("Topic was not found.");
    }

    const [nodes, edges] = await Promise.all([
      this.knowledgeGraphRepository.listNodes(),
      this.knowledgeGraphRepository.listEdges()
    ]);
    const insight = buildLessonKnowledgeInsight({
      lesson,
      topic,
      snapshot: { nodes, edges }
    });

    this.logger.info("Resolved lesson knowledge insight", {
      lessonId: lesson.id,
      topicId: topic.id,
      prerequisiteConceptCount: insight.prerequisiteConcepts.length,
      relatedConceptCount: insight.relatedConcepts.length
    });

    return { insight };
  }

  async getAssessment(
    _request: GetAssessmentRequest
  ): Promise<GetAssessmentResponse> {
    return {
      assessment: this.buildPlaceholderAssessment()
    };
  }

  async getTopic(request: GetTopicRequest): Promise<GetTopicResponse> {
    const topic = await this.topicRepository.findById(request.topicId);

    if (!topic) {
      throw new NotFoundError("Topic was not found.");
    }

    return { topic };
  }

  async getTopicKnowledge(
    request: GetTopicKnowledgeRequest
  ): Promise<GetTopicKnowledgeResponse> {
    const topic = await this.topicRepository.findById(request.topicId);

    if (!topic) {
      throw new NotFoundError("Topic was not found.");
    }

    const [nodes, edges] = await Promise.all([
      this.knowledgeGraphRepository.listNodes(),
      this.knowledgeGraphRepository.listEdges()
    ]);
    const insight = buildTopicKnowledgeInsight({
      topic,
      snapshot: { nodes, edges }
    });

    this.logger.info("Resolved topic knowledge insight", {
      topicId: topic.id,
      coveredConceptCount: insight.coveredConcepts.length,
      prerequisiteConceptCount: insight.prerequisiteConcepts.length
    });

    return { insight };
  }

  async listKnowledgeNodes(
    request: ListKnowledgeNodesRequest
  ): Promise<ListKnowledgeNodesResponse> {
    const items = await this.knowledgeGraphRepository.listNodes({
      nodeType: request.nodeType,
      sourceEntityType: request.sourceEntityType,
      sourceEntityId: request.sourceEntityId
    });

    return {
      items: request.limit ? items.slice(0, request.limit) : items,
      total: items.length
    };
  }

  async createKnowledgeNode(
    request: CreateKnowledgeNodeRequest
  ): Promise<CreateKnowledgeNodeResponse> {
    const node = await this.knowledgeGraphRepository.createNode(request);

    this.logger.info("Created knowledge node", {
      nodeId: node.id,
      nodeType: node.nodeType
    });

    return { node };
  }

  async updateKnowledgeNode(
    request: UpdateKnowledgeNodeRequest
  ): Promise<UpdateKnowledgeNodeResponse> {
    await this.ensureKnowledgeNode(request.nodeId);
    const node = await this.knowledgeGraphRepository.updateNode(request.nodeId, request);

    this.logger.info("Updated knowledge node", {
      nodeId: node.id,
      nodeType: node.nodeType
    });

    return { node };
  }

  async listKnowledgeEdges(
    request: ListKnowledgeEdgesRequest
  ): Promise<ListKnowledgeEdgesResponse> {
    const items = await this.knowledgeGraphRepository.listEdges({
      sourceNodeId: request.sourceNodeId,
      targetNodeId: request.targetNodeId,
      edgeType: request.edgeType
    });

    return {
      items: request.limit ? items.slice(0, request.limit) : items,
      total: items.length
    };
  }

  async createKnowledgeEdge(
    request: CreateKnowledgeEdgeRequest
  ): Promise<CreateKnowledgeEdgeResponse> {
    await Promise.all([
      this.ensureKnowledgeNode(request.sourceNodeId),
      this.ensureKnowledgeNode(request.targetNodeId)
    ]);
    const edge = await this.knowledgeGraphRepository.createEdge(request);

    this.logger.info("Created knowledge edge", {
      edgeId: edge.id,
      edgeType: edge.edgeType
    });

    return { edge };
  }

  async updateLessonConceptMappings(
    request: UpdateLessonConceptMappingsRequest
  ): Promise<UpdateLessonConceptMappingsResponse> {
    const lesson = await this.ensureLesson(request.lessonId);
    const topic = await this.ensureTopic(lesson.topicId);
    const lessonNode = await this.knowledgeGraphRepository.ensureNodeForSource({
      nodeType: "lesson",
      title: lesson.title,
      summary: lesson.summary,
      sourceEntityType: "lesson",
      sourceEntityId: lesson.id
    });
    const mappedConcepts = (
      await Promise.all(
        request.conceptNodeIds.map((conceptNodeId) =>
          this.knowledgeGraphRepository.findNodeById(conceptNodeId)
        )
      )
    ).filter((node): node is KnowledgeNode => Boolean(node));

    if (mappedConcepts.length !== request.conceptNodeIds.length) {
      throw new DomainError(
        "One or more concept nodes could not be found.",
        "INVALID_CONCEPT_MAPPING"
      );
    }

    await this.knowledgeGraphRepository.replaceLessonConceptMappings(
      lessonNode.id,
      request.conceptNodeIds
    );
    const [nodes, edges] = await Promise.all([
      this.knowledgeGraphRepository.listNodes(),
      this.knowledgeGraphRepository.listEdges()
    ]);
    const insight = buildLessonKnowledgeInsight({
      lesson,
      topic,
      snapshot: { nodes, edges }
    });

    this.logger.info("Updated lesson concept mappings", {
      lessonId: lesson.id,
      conceptCount: mappedConcepts.length
    });

    return {
      lesson,
      mappedConcepts,
      insight
    };
  }

  async getKnowledgeExplore(
    request: GetKnowledgeExploreRequest
  ): Promise<GetKnowledgeExploreResponse> {
    const [topics, lessons, nodes, edges] = await Promise.all([
      this.topicRepository.list(),
      this.lessonRepository.list({}),
      this.knowledgeGraphRepository.listNodes(),
      this.knowledgeGraphRepository.listEdges()
    ]);
    const exploration = buildKnowledgeExploreResult({
      anchorEntityType: request.anchorEntityType,
      anchorEntityId: request.anchorEntityId,
      snapshot: { nodes, edges },
      topics,
      lessons
    });

    return { exploration };
  }

  async getAdminOverview(
    _request: GetAdminOverviewRequest
  ): Promise<GetAdminOverviewResponse> {
    const [topics, lessons, nodes, edges] = await Promise.all([
      this.topicRepository.list(),
      this.lessonRepository.list({}),
      this.knowledgeGraphRepository.listNodes(),
      this.knowledgeGraphRepository.listEdges()
    ]);
    const topicSummaries: TopicOperationalSummary[] = topics.map((topic) => ({
      topic,
      lessonCount: lessons.filter((lesson) => lesson.topicId === topic.id).length,
      conceptCount: nodes.filter(
        (node) =>
          node.nodeType === "concept" &&
          node.sourceEntityType === "topic" &&
          node.sourceEntityId === topic.id
      ).length,
      prerequisiteTopicIds: topic.prerequisiteTopicIds ?? []
    }));
    const integrityIssues = this.buildIntegrityIssues(topics, lessons, nodes, edges);
    const coverageGaps = this.buildCoverageGaps(lessons, nodes, edges);

    this.logger.info("Resolved admin content overview", {
      topicCount: topics.length,
      lessonCount: lessons.length,
      conceptCount: nodes.filter((node) => node.nodeType === "concept").length,
      issueCount: integrityIssues.length
    });

    return {
      overview: {
        totalTopics: topics.length,
        totalLessons: lessons.length,
        totalConcepts: nodes.filter((node) => node.nodeType === "concept").length,
        totalEdges: edges.length,
        topicSummaries,
        integrityIssues,
        coverageGaps
      }
    };
  }

  async runIntegrityFix(
    request: RunIntegrityFixRequest
  ): Promise<RunIntegrityFixResponse> {
    const issue = await this.resolveIntegrityIssue(request.issueType, request.entityId);

    if (!issue.fixable) {
      return {
        issue,
        applied: false,
        summary: "This integrity issue currently requires manual authoring review."
      };
    }

    if (request.issueType === "orphan_lesson" || request.issueType === "missing_prerequisite_mapping") {
      const lesson = await this.ensureLesson(request.entityId);
      const lessonNode = await this.knowledgeGraphRepository.ensureNodeForSource({
        nodeType: "lesson",
        title: lesson.title,
        summary: lesson.summary,
        sourceEntityType: "lesson",
        sourceEntityId: lesson.id
      });

      if (request.issueType === "missing_prerequisite_mapping") {
        const topicConcepts = await this.knowledgeGraphRepository.listNodes({
          nodeType: "concept",
          sourceEntityType: "topic",
          sourceEntityId: lesson.topicId
        });

        if (topicConcepts[0]) {
          await this.knowledgeGraphRepository.replaceLessonConceptMappings(
            lessonNode.id,
            [topicConcepts[0].id]
          );
        }
      }

      return {
        issue: {
          ...issue,
          severity: "info",
          message: `${lesson.title} now has a lesson node and baseline concept linkage.`
        },
        applied: true,
        summary: "Applied the baseline graph fix for the lesson."
      };
    }

    if (request.issueType === "orphan_concept") {
      const conceptNode = await this.ensureKnowledgeNode(request.entityId);

      if (conceptNode.sourceEntityType === "topic" && conceptNode.sourceEntityId) {
        const topicNode = await this.knowledgeGraphRepository.ensureNodeForSource({
          nodeType: "topic",
          title: (await this.ensureTopic(conceptNode.sourceEntityId)).title,
          summary: (await this.ensureTopic(conceptNode.sourceEntityId)).summary,
          sourceEntityType: "topic",
          sourceEntityId: conceptNode.sourceEntityId
        });

        await this.knowledgeGraphRepository.createEdge({
          sourceNodeId: conceptNode.id,
          targetNodeId: topicNode.id,
          edgeType: "part_of",
          label: "linked by integrity fix",
          directed: true
        });
      }

      return {
        issue: {
          ...issue,
          severity: "info",
          message: `${conceptNode.title} now has a baseline graph linkage.`
        },
        applied: true,
        summary: "Connected the concept back into the current graph baseline."
      };
    }

    return {
      issue,
      applied: false,
      summary: "No automatic fix was applied."
    };
  }

  async uploadTeacherMaterial(
    request: UploadTeacherMaterialRequest
  ): Promise<UploadTeacherMaterialResponse> {
    const knowledgeNodes = await this.knowledgeGraphRepository.listNodes({
      nodeType: "concept"
    });
    const parsed = await this.aiRuntime.parseTeachingMaterial({
      fileName: request.fileName,
      mimeType: request.mimeType,
      textContent: request.textContent,
      ocrTextHint: request.ocrTextHint,
      knowledgeNodes
    });
    const material = await this.teachingMaterialRepository.create({
      teacherId: request.teacherId,
      fileName: request.fileName,
      mimeType: request.mimeType,
      materialKind: parsed.materialKind,
      status: "parsed",
      parsedText: parsed.parsedText,
      parsedStructure: parsed.parsedStructure
    });
    const conceptMatches = this.matchConceptNodes(
      knowledgeNodes,
      parsed.parsedStructure.concepts
    );

    this.logger.info("Uploaded teaching material", {
      materialId: material.id,
      teacherId: request.teacherId,
      conceptMatchCount: conceptMatches.length
    });

    return {
      material,
      proposal: {
        material,
        suggestedTopics: parsed.parsedStructure.suggestedTopicTitles,
        suggestedLessons: parsed.parsedStructure.suggestedLessonTitles,
        conceptMatches,
        generationMetadata: parsed.parsedStructure.generationMetadata
      }
    };
  }

  async listTeacherMaterials(
    request: ListTeacherMaterialsRequest
  ): Promise<ListTeacherMaterialsResponse> {
    const items = await this.teachingMaterialRepository.listByTeacher(request.teacherId);

    return {
      items,
      total: items.length
    };
  }

  async generateModule(
    request: GenerateModuleRequest
  ): Promise<GenerateModuleResponse> {
    const material = await this.teachingMaterialRepository.findById(request.materialId);

    if (!material) {
      throw new NotFoundError("Teaching material was not found.");
    }

    if (material.teacherId !== request.teacherId) {
      throw new DomainError(
        "Teachers can only generate modules from their own materials.",
        "MATERIAL_OWNERSHIP_REQUIRED"
      );
    }

    const [conceptNodes, lessons] = await Promise.all([
      this.knowledgeGraphRepository.listNodes({ nodeType: "concept" }),
      this.lessonRepository.list({})
    ]);
    const conceptMatches = this.matchConceptNodes(
      conceptNodes,
      material.parsedStructure.concepts
    );
    const supportingLessons = this.selectSupportingLessons(
      lessons,
      material.parsedStructure
    );
    const proposal = await this.aiRuntime.buildModuleProposal({
      teacherId: request.teacherId,
      materialId: material.id,
      parsedStructure: material.parsedStructure,
      conceptMatches,
      supportingLessons,
      approve: request.approve
    });

    if (!request.approve) {
      return { proposal };
    }

    const persistedModule = await this.teachingModuleRepository.create({
      teacherId: request.teacherId,
      materialId: material.id,
      title: proposal.module.title,
      summary: proposal.module.summary,
      status: proposal.module.status,
      conceptNodeIds: proposal.module.conceptNodeIds,
      lessonIds: proposal.module.lessonIds,
      sections: proposal.module.sections,
      suggestedTopicTitles: proposal.module.suggestedTopicTitles
    });

    this.logger.info("Generated teaching module", {
      moduleId: persistedModule.id,
      materialId: material.id,
      teacherId: request.teacherId,
      approved: request.approve ?? false
    });

    return {
      proposal: {
        ...proposal,
        module: persistedModule
      }
    };
  }

  async listTeachingModules(
    request: ListTeachingModulesRequest
  ): Promise<ListTeachingModulesResponse> {
    const items = await this.teachingModuleRepository.list(request.teacherId);

    return {
      items,
      total: items.length
    };
  }

  async generateQuiz(
    request: GenerateQuizRequest
  ): Promise<GenerateQuizResponse> {
    const [module, conceptNodes] = await Promise.all([
      request.moduleId
        ? this.teachingModuleRepository.findById(request.moduleId)
        : Promise.resolve(null),
      this.knowledgeGraphRepository.listNodes({ nodeType: "concept" })
    ]);

    if (request.moduleId && !module) {
      throw new NotFoundError("Teaching module was not found.");
    }

    if (module && module.teacherId !== request.teacherId) {
      throw new DomainError(
        "Teachers can only generate quizzes from their own modules.",
        "MODULE_OWNERSHIP_REQUIRED"
      );
    }

    const conceptMatches = module
      ? conceptNodes.filter((node) => module.conceptNodeIds.includes(node.id))
      : conceptNodes.slice(0, 4);
    const proposal = await this.aiRuntime.generatePedagogicalQuiz({
      teacherId: request.teacherId,
      title:
        request.title ??
        module?.title ??
        "AI-generated classroom quiz",
      module: module ?? undefined,
      lessonId: request.lessonId,
      conceptMatches
    });
    const persistedQuiz = await this.teachingQuizRepository.create({
      teacherId: request.teacherId,
      moduleId: module?.id,
      lessonId: request.lessonId,
      title: proposal.quiz.title,
      summary: proposal.quiz.summary,
      questions: proposal.quiz.questions
    });

    this.logger.info("Generated teaching quiz", {
      quizId: persistedQuiz.id,
      teacherId: request.teacherId,
      moduleId: module?.id
    });

    return {
      proposal: {
        ...proposal,
        quiz: persistedQuiz
      }
    };
  }

  async listTeachingQuizzes(
    request: ListTeachingQuizzesRequest
  ): Promise<ListTeachingQuizzesResponse> {
    const items = await this.teachingQuizRepository.list({
      teacherId: request.teacherId,
      moduleId: request.moduleId
    });

    return {
      items,
      total: items.length
    };
  }

  async uploadExamScan(
    request: UploadExamScanRequest
  ): Promise<UploadExamScanResponse> {
    if (!this.aiRuntime.parseExamScanToAttempt) {
      throw new DomainError(
        "Exam scan parsing is not configured in this environment.",
        "EXAM_SCAN_NOT_AVAILABLE"
      );
    }

    const attempt = this.aiRuntime.parseExamScanToAttempt({
      studentId: request.studentId,
      classroomId: request.classroomId,
      quizId: request.quizId,
      answerText: request.answerText,
      ocrTextHint: request.ocrTextHint
    });
    const persistedAttempt = await this.studentAttemptRepository.create({
      studentId: attempt.studentId,
      classroomId: attempt.classroomId,
      quizId: attempt.quizId,
      source: attempt.source,
      score: attempt.score,
      answers: attempt.answers,
      teacherVerified: attempt.teacherVerified
    });

    this.logger.info("Uploaded exam scan", {
      attemptId: persistedAttempt.id,
      teacherId: request.teacherId,
      studentId: request.studentId
    });

    return {
      attempt: persistedAttempt
    };
  }

  async searchContent(
    request: SearchContentRequest
  ): Promise<SearchContentResponse> {
    const items = await this.contentItemRepository.search(
      request.query,
      request.topicId,
      request.contentType
    );

    this.logger.info("Loaded persisted content search response", {
      query: request.query,
      resultCount: items.length
    });

    return {
      items: request.limit ? items.slice(0, request.limit) : items,
      total: items.length
    };
  }

  private buildPlaceholderAssessment(): Assessment {
    const now = new Date().toISOString();

    return {
      id: "assessment-placeholder",
      createdAt: now,
      updatedAt: now,
      title: "Systems Thinking Checkpoint",
      summary:
        "Placeholder assessment metadata while content ownership stays on topics and lessons.",
      assessmentType: "quiz",
      topicIds: ["topic-placeholder"],
      skillIds: ["skill-critical-thinking"],
      learningObjectiveIds: ["objective-placeholder"],
      lessonId: "lesson-placeholder",
      maxScore: 100,
      passingScore: 70
    };
  }

  private buildIntegrityIssues(
    topics: Awaited<ReturnType<TopicRepository["list"]>>,
    lessons: Awaited<ReturnType<LessonRepository["list"]>>,
    nodes: Awaited<ReturnType<KnowledgeGraphRepository["listNodes"]>>,
    edges: Awaited<ReturnType<KnowledgeGraphRepository["listEdges"]>>
  ): GraphIntegrityIssue[] {
    const issues: GraphIntegrityIssue[] = [];
    const lessonNodes = nodes.filter(
      (node) => node.nodeType === "lesson" && node.sourceEntityType === "lesson"
    );
    const lessonNodeEntityIds = new Set(
      lessonNodes
        .map((node) => node.sourceEntityId)
        .filter((value): value is string => Boolean(value))
    );
    const conceptNodeIds = new Set(
      nodes.filter((node) => node.nodeType === "concept").map((node) => node.id)
    );

    for (const topic of topics) {
      const topicLessonCount = lessons.filter((lesson) => lesson.topicId === topic.id).length;

      if (topicLessonCount === 0) {
        issues.push({
          issueType: "empty_topic",
          severity: "warning",
          message: `${topic.title} has no lessons linked yet.`,
          entityType: "topic",
          entityId: topic.id,
          fixable: false,
          suggestedActionLabel: "Create lesson manually"
        });
      }
    }

    for (const lesson of lessons) {
      if (!lessonNodeEntityIds.has(lesson.id)) {
        issues.push({
          issueType: "orphan_lesson",
          severity: "warning",
          message: `${lesson.title} has no lesson node in the knowledge graph.`,
          entityType: "lesson",
          entityId: lesson.id,
          fixable: true,
          suggestedActionLabel: "Create lesson node"
        });
      }
    }

    for (const node of nodes.filter((candidate) => candidate.nodeType === "concept")) {
      const isReferenced = edges.some(
        (edge) => edge.sourceNodeId === node.id || edge.targetNodeId === node.id
      );

      if (!isReferenced) {
        issues.push({
          issueType: "orphan_concept",
          severity: "warning",
          message: `${node.title} is not connected to any other graph element.`,
          entityType: "concept",
          entityId: node.id,
          fixable: true,
          suggestedActionLabel: "Reconnect concept"
        });
      }
    }

    for (const lessonNode of lessonNodes) {
      const hasConceptCoverage = edges.some(
        (edge) =>
          edge.sourceNodeId === lessonNode.id && conceptNodeIds.has(edge.targetNodeId)
      );

      if (!hasConceptCoverage) {
        issues.push({
          issueType: "missing_prerequisite_mapping",
          severity: "info",
          message: `Lesson graph node ${lessonNode.title} has no mapped concept coverage.`,
          entityType: "lesson",
          entityId: lessonNode.sourceEntityId ?? lessonNode.id,
          fixable: true,
          suggestedActionLabel: "Map first topic concept"
        });
      }
    }

    return issues;
  }

  private matchConceptNodes(nodes: KnowledgeNode[], conceptLabels: string[]) {
    const loweredLabels = conceptLabels.map((label) => label.toLowerCase());

    return nodes.filter((node) => {
      const nodeLabel = node.title.toLowerCase();
      return loweredLabels.some(
        (label) => label.includes(nodeLabel) || nodeLabel.includes(label)
      );
    });
  }

  private selectSupportingLessons(
    lessons: Awaited<ReturnType<LessonRepository["list"]>>,
    parsedStructure: ParsedMaterialStructure
  ) {
    const candidateTitles = [
      ...parsedStructure.suggestedLessonTitles,
      ...parsedStructure.suggestedTopicTitles,
      ...parsedStructure.concepts
    ].map((value) => value.toLowerCase());
    const matchedLessons = lessons.filter((lesson) =>
      candidateTitles.some(
        (candidate) =>
          lesson.title.toLowerCase().includes(candidate) ||
          candidate.includes(lesson.title.toLowerCase())
      )
    );

    return matchedLessons.length ? matchedLessons.slice(0, 6) : lessons.slice(0, 4);
  }

  private buildCoverageGaps(
    lessons: Awaited<ReturnType<LessonRepository["list"]>>,
    nodes: Awaited<ReturnType<KnowledgeGraphRepository["listNodes"]>>,
    edges: Awaited<ReturnType<KnowledgeGraphRepository["listEdges"]>>
  ): ContentCoverageGap[] {
    const lessonNodes = nodes.filter((node) => node.nodeType === "lesson");
    const conceptNodes = nodes.filter((node) => node.nodeType === "concept");
    const gaps: ContentCoverageGap[] = [];

    for (const lesson of lessons) {
      const lessonNode = lessonNodes.find((node) => node.sourceEntityId === lesson.id);
      const hasConceptCoverage = lessonNode
        ? edges.some(
            (edge) =>
              edge.sourceNodeId === lessonNode.id &&
              conceptNodes.some((conceptNode) => conceptNode.id === edge.targetNodeId)
          )
        : false;

      if (!hasConceptCoverage) {
        gaps.push({
          gapType: "lesson_without_concepts",
          message: `${lesson.title} does not yet map to explicit concept coverage.`,
          entityType: "lesson",
          entityId: lesson.id
        });
      }
    }

    for (const conceptNode of conceptNodes) {
      const hasLessonCoverage = edges.some(
        (edge) => edge.targetNodeId === conceptNode.id && edge.edgeType === "reinforces"
      );

      if (!hasLessonCoverage) {
        gaps.push({
          gapType: "concept_without_lessons",
          message: `${conceptNode.title} has no lesson reinforcing it yet.`,
          entityType: "concept",
          entityId: conceptNode.id
        });
      }
    }

    return gaps;
  }

  private async ensureTopic(topicId: string) {
    const topic = await this.topicRepository.findById(topicId);

    if (!topic) {
      throw new NotFoundError("Topic was not found.");
    }

    return topic;
  }

  private async ensureLesson(lessonId: string) {
    const lesson = await this.lessonRepository.findById(lessonId);

    if (!lesson) {
      throw new NotFoundError("Lesson was not found.");
    }

    return lesson;
  }

  private async ensureKnowledgeNode(nodeId: string) {
    const node = await this.knowledgeGraphRepository.findNodeById(nodeId);

    if (!node) {
      throw new NotFoundError("Knowledge node was not found.");
    }

    return node;
  }

  private async resolveIntegrityIssue(issueType: string, entityId: string) {
    const [topics, lessons, nodes, edges] = await Promise.all([
      this.topicRepository.list(),
      this.lessonRepository.list({}),
      this.knowledgeGraphRepository.listNodes(),
      this.knowledgeGraphRepository.listEdges()
    ]);
    const issue = this.buildIntegrityIssues(topics, lessons, nodes, edges).find(
      (candidateIssue) =>
        candidateIssue.issueType === issueType && candidateIssue.entityId === entityId
    );

    if (!issue) {
      throw new NotFoundError("Integrity issue was not found.");
    }

    return issue;
  }
}
