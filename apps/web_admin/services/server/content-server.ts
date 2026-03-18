import type {
  CreateLessonRequest,
  CreateLessonResponse,
  CreateKnowledgeEdgeRequest,
  CreateKnowledgeEdgeResponse,
  CreateKnowledgeNodeRequest,
  CreateKnowledgeNodeResponse,
  CreateTopicRequest,
  CreateTopicResponse,
  GetAdminOverviewResponse,
  GetKnowledgeExploreRequest,
  GetKnowledgeExploreResponse,
  ListKnowledgeEdgesResponse,
  ListKnowledgeNodesResponse,
  ListLessonsResponse,
  ListTopicsResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse,
  RunIntegrityFixRequest,
  RunIntegrityFixResponse
} from "@cumbre/schemas";
import { fetchBackendData } from "@/lib/backend-http";

export function getAdminOverview() {
  return fetchBackendData<GetAdminOverviewResponse>("/content/admin/overview");
}

export function listTopics() {
  return fetchBackendData<ListTopicsResponse>("/content/topics");
}

export function listLessons() {
  return fetchBackendData<ListLessonsResponse>("/content/lessons");
}

export function listKnowledgeNodes() {
  return fetchBackendData<ListKnowledgeNodesResponse>("/content/knowledge/nodes");
}

export function listKnowledgeEdges() {
  return fetchBackendData<ListKnowledgeEdgesResponse>("/content/knowledge/edges");
}

export function createTopic(request: CreateTopicRequest) {
  return fetchBackendData<CreateTopicResponse>("/content/admin/topics", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createLesson(request: CreateLessonRequest) {
  return fetchBackendData<CreateLessonResponse>("/content/teacher/lessons", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateLesson(request: UpdateLessonRequest) {
  return fetchBackendData<UpdateLessonResponse>("/content/teacher/lessons/update", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createKnowledgeNode(request: CreateKnowledgeNodeRequest) {
  return fetchBackendData<CreateKnowledgeNodeResponse>("/content/admin/knowledge/nodes", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createKnowledgeEdge(request: CreateKnowledgeEdgeRequest) {
  return fetchBackendData<CreateKnowledgeEdgeResponse>("/content/admin/knowledge/edges", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateLessonConceptMappings(
  request: UpdateLessonConceptMappingsRequest
) {
  return fetchBackendData<UpdateLessonConceptMappingsResponse>(
    "/content/teacher/lesson-mappings",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function runIntegrityFix(request: RunIntegrityFixRequest) {
  return fetchBackendData<RunIntegrityFixResponse>("/content/admin/integrity/fix", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function getKnowledgeExplore(request: GetKnowledgeExploreRequest) {
  const query = new URLSearchParams({
    anchorEntityType: request.anchorEntityType,
    anchorEntityId: request.anchorEntityId
  });

  return fetchBackendData<GetKnowledgeExploreResponse>(
    `/content/knowledge/explore?${query.toString()}`
  );
}
