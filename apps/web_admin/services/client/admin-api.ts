"use client";

import type {
  AuthSignupRequest,
  CreateLessonRequest,
  CreateLessonResponse,
  CreateKnowledgeEdgeRequest,
  CreateKnowledgeEdgeResponse,
  CreateKnowledgeNodeRequest,
  CreateKnowledgeNodeResponse,
  CreateTopicRequest,
  CreateTopicResponse,
  GetAdminOverviewResponse,
  GetKnowledgeExploreResponse,
  RunIntegrityFixResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse
} from "@cumbre/schemas";
import type { User } from "@cumbre/types";
import { requestAppApi } from "@/lib/app-http";

export function fetchAdminOverview() {
  return requestAppApi<GetAdminOverviewResponse>("/api/admin/overview");
}

export function fetchAdminManagementOverview() {
  return requestAppApi<{
    overview: GetAdminOverviewResponse["overview"];
    topics: { id: string; title: string; summary?: string }[];
    lessons: { id: string; title: string; topicId: string; summary?: string }[];
    nodes: { id: string; title: string; nodeType: string; sourceEntityId?: string }[];
    edges: { id: string; edgeType: string; sourceNodeId: string; targetNodeId: string }[];
  }>("/api/admin/management/overview");
}

export function createAdminTopic(request: CreateTopicRequest) {
  return requestAppApi<CreateTopicResponse>("/api/admin/topics", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createAdminLesson(request: CreateLessonRequest) {
  return requestAppApi<CreateLessonResponse>("/api/admin/lessons", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateAdminLesson(request: UpdateLessonRequest) {
  return requestAppApi<UpdateLessonResponse>("/api/admin/lessons/update", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createAdminConcept(request: CreateKnowledgeNodeRequest) {
  return requestAppApi<CreateKnowledgeNodeResponse>("/api/admin/concepts", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createAdminEdge(request: CreateKnowledgeEdgeRequest) {
  return requestAppApi<CreateKnowledgeEdgeResponse>("/api/admin/edges", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateAdminLessonMappings(
  request: UpdateLessonConceptMappingsRequest
) {
  return requestAppApi<UpdateLessonConceptMappingsResponse>(
    "/api/admin/lesson-mappings",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function runAdminIntegrityFix(issueType: string, entityId: string) {
  return requestAppApi<RunIntegrityFixResponse>("/api/admin/integrity/fix", {
    method: "POST",
    body: JSON.stringify({
      issueType,
      entityId
    })
  });
}

export function createAdminUser(request: AuthSignupRequest) {
  return requestAppApi<{ user: User }>("/api/admin/users", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchAdminKnowledgeExplore(
  anchorEntityType: "topic" | "lesson" | "concept",
  anchorEntityId: string
) {
  const query = new URLSearchParams({
    anchorEntityType,
    anchorEntityId
  });

  return requestAppApi<GetKnowledgeExploreResponse>(
    `/api/admin/knowledge/explore?${query.toString()}`
  );
}
