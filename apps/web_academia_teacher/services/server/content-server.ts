import type {
  CreateContentItemRequest,
  CreateContentItemResponse,
  CreateLessonRequest,
  CreateLessonResponse,
  GenerateModuleRequest,
  GenerateModuleResponse,
  GenerateQuizRequest,
  GenerateQuizResponse,
  GetKnowledgeExploreRequest,
  GetKnowledgeExploreResponse,
  ListContentItemsResponse,
  ListKnowledgeEdgesResponse,
  ListKnowledgeNodesResponse,
  ListLessonsResponse,
  ListTeacherMaterialsResponse,
  ListTeachingModulesResponse,
  ListTeachingQuizzesResponse,
  ListTopicsResponse,
  UploadExamScanRequest,
  UploadExamScanResponse,
  UploadTeacherMaterialRequest,
  UploadTeacherMaterialResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse
} from "@cumbre/schemas";
import { fetchBackendData } from "@/lib/backend-http";

export function listTopics() {
  return fetchBackendData<ListTopicsResponse>("content", "/content/topics");
}

export function listLessons(topicId?: string) {
  const query = new URLSearchParams();

  if (topicId) {
    query.set("topicId", topicId);
  }

  const suffix = query.size ? `?${query.toString()}` : "";
  return fetchBackendData<ListLessonsResponse>("content", `/content/lessons${suffix}`);
}

export function listKnowledgeNodes() {
  return fetchBackendData<ListKnowledgeNodesResponse>(
    "content",
    "/content/knowledge/nodes"
  );
}

export function listKnowledgeEdges() {
  return fetchBackendData<ListKnowledgeEdgesResponse>(
    "content",
    "/content/knowledge/edges"
  );
}

export function listContentItems(topicId?: string) {
  const query = new URLSearchParams();

  if (topicId) {
    query.set("topicId", topicId);
  }

  const suffix = query.size ? `?${query.toString()}` : "";
  return fetchBackendData<ListContentItemsResponse>("content", `/content/items${suffix}`);
}

export function createLesson(request: CreateLessonRequest) {
  return fetchBackendData<CreateLessonResponse>("content", "/content/teacher/lessons", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateLesson(request: UpdateLessonRequest) {
  return fetchBackendData<UpdateLessonResponse>(
    "content",
    "/content/teacher/lessons/update",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function createContentItem(request: CreateContentItemRequest) {
  return fetchBackendData<CreateContentItemResponse>("content", "/content/teacher/items", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateLessonConceptMappings(
  request: UpdateLessonConceptMappingsRequest
) {
  return fetchBackendData<UpdateLessonConceptMappingsResponse>(
    "content",
    "/content/teacher/lesson-mappings",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function getKnowledgeExplore(request: GetKnowledgeExploreRequest) {
  const query = new URLSearchParams({
    anchorEntityType: request.anchorEntityType,
    anchorEntityId: request.anchorEntityId
  });

  return fetchBackendData<GetKnowledgeExploreResponse>(
    "content",
    `/content/knowledge/explore?${query.toString()}`
  );
}

export function uploadTeacherMaterial(request: UploadTeacherMaterialRequest) {
  return fetchBackendData<UploadTeacherMaterialResponse>(
    "content",
    "/teacher/materials/upload",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function listTeacherMaterials(teacherId: string) {
  return fetchBackendData<ListTeacherMaterialsResponse>(
    "content",
    `/teacher/materials?teacherId=${encodeURIComponent(teacherId)}`
  );
}

export function generateModule(request: GenerateModuleRequest) {
  return fetchBackendData<GenerateModuleResponse>("content", "/ai/modules/generate", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function listTeachingModules(teacherId?: string) {
  const query = teacherId
    ? `?teacherId=${encodeURIComponent(teacherId)}`
    : "";

  return fetchBackendData<ListTeachingModulesResponse>("content", `/teaching/modules${query}`);
}

export function generateQuiz(request: GenerateQuizRequest) {
  return fetchBackendData<GenerateQuizResponse>("content", "/ai/quiz/generate", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function listTeachingQuizzes(teacherId?: string, moduleId?: string) {
  const query = new URLSearchParams();

  if (teacherId) {
    query.set("teacherId", teacherId);
  }

  if (moduleId) {
    query.set("moduleId", moduleId);
  }

  const suffix = query.size ? `?${query.toString()}` : "";
  return fetchBackendData<ListTeachingQuizzesResponse>("content", `/teaching/quizzes${suffix}`);
}

export function uploadExamScan(request: UploadExamScanRequest) {
  return fetchBackendData<UploadExamScanResponse>("content", "/teacher/exams/upload-scan", {
    method: "POST",
    body: JSON.stringify(request)
  });
}
