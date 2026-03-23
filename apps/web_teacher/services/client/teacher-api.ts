"use client";

import type {
  AssignClassroomModulesResponse,
  CreateClassroomMeetingResponse,
  CreateClassroomResponse,
  CreateContentItemRequest,
  CreateContentItemResponse,
  CreateLessonRequest,
  CreateLessonResponse,
  GenerateModuleResponse,
  GenerateQuizResponse,
  GetClassroomAnalyticsResponse,
  GetClassroomResponse,
  GetKnowledgeExploreResponse,
  GetTeacherOverviewResponse,
  ImportStudentsResponse,
  ListTeacherMaterialsResponse,
  ListTeacherClassroomsResponse,
  ListTeachingModulesResponse,
  ListTeachingQuizzesResponse,
  UploadExamScanResponse,
  UploadTeacherMaterialResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse
} from "@cumbre/schemas";
import { requestAppApi } from "@/lib/app-http";

export function fetchTeacherOverview(learningPathId?: string) {
  const query = new URLSearchParams();

  if (learningPathId) {
    query.set("learningPathId", learningPathId);
  }

  const suffix = query.size > 0 ? `?${query.toString()}` : "";
  return requestAppApi<GetTeacherOverviewResponse>(`/api/teacher/overview${suffix}`);
}

export function fetchTeacherAuthoringOverview(topicId?: string) {
  const query = new URLSearchParams();

  if (topicId) {
    query.set("topicId", topicId);
  }

  const suffix = query.size > 0 ? `?${query.toString()}` : "";
  return requestAppApi<{
    topics: { id: string; title: string; summary?: string }[];
    lessons: {
      id: string;
      title: string;
      summary?: string;
      topicId: string;
      learningObjectiveIds?: string[];
      prerequisiteLessonIds?: string[];
    }[];
    concepts: { id: string; title: string; summary?: string; sourceEntityId?: string }[];
    edges: { id: string; sourceNodeId: string; targetNodeId: string; edgeType: string }[];
    contentItems: { id: string; title: string; lessonId?: string; topicIds?: string[] }[];
  }>(`/api/teacher/authoring${suffix}`);
}

export function createTeacherLesson(request: CreateLessonRequest) {
  return requestAppApi<CreateLessonResponse>("/api/teacher/lessons", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateTeacherLesson(request: UpdateLessonRequest) {
  return requestAppApi<UpdateLessonResponse>("/api/teacher/lessons/update", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createTeacherContentItem(request: CreateContentItemRequest) {
  return requestAppApi<CreateContentItemResponse>("/api/teacher/content-items", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateTeacherLessonConceptMappings(
  request: UpdateLessonConceptMappingsRequest
) {
  return requestAppApi<UpdateLessonConceptMappingsResponse>(
    "/api/teacher/lesson-mappings",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function fetchTeacherKnowledgeExplore(
  anchorEntityType: "topic" | "lesson" | "concept",
  anchorEntityId: string
) {
  const query = new URLSearchParams({
    anchorEntityType,
    anchorEntityId
  });

  return requestAppApi<GetKnowledgeExploreResponse>(
    `/api/teacher/knowledge/explore?${query.toString()}`
  );
}

export function fetchTeacherClassrooms() {
  return requestAppApi<ListTeacherClassroomsResponse>("/api/teacher/classrooms");
}

export function createTeacherClassroom(request: {
  name: string;
  gradeLevel: string;
  subject: string;
}) {
  return requestAppApi<CreateClassroomResponse>("/api/teacher/classrooms", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchTeacherClassroom(classroomId: string) {
  return requestAppApi<
    GetClassroomResponse & { analytics: GetClassroomAnalyticsResponse["analytics"] }
  >(`/api/teacher/classrooms/${encodeURIComponent(classroomId)}`);
}

export function importTeacherStudents(request: {
  classroomId: string;
  csvContent: string;
}) {
  return requestAppApi<ImportStudentsResponse>("/api/teacher/classrooms/import", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function deleteTeacherClassroom(classroomId: string) {
  return requestAppApi<{ deleted: true; classroomId: string }>(
    `/api/teacher/classrooms/${encodeURIComponent(classroomId)}`,
    { method: "DELETE" }
  );
}

export function searchTeacherUsers(query: string) {
  const params = new URLSearchParams({ q: query });
  return requestAppApi<{ users: { id: string; displayName: string; email: string; primaryRole: string }[] }>(
    `/api/teacher/classrooms/search-users?${params.toString()}`
  );
}

export function addTeacherStudentToClassroom(request: {
  classroomId: string;
  userId: string;
  displayName: string;
  email: string;
}) {
  const csvContent = `name,email,gradeLevel\n${request.displayName},${request.email},`;
  return requestAppApi<ImportStudentsResponse>("/api/teacher/classrooms/import", {
    method: "POST",
    body: JSON.stringify({ classroomId: request.classroomId, csvContent })
  });
}

export function scheduleTeacherMeeting(request: {
  classroomId: string;
  provider: string;
  title: string;
  description?: string;
  scheduledAt: string;
  meetingUrl: string;
}) {
  return requestAppApi<CreateClassroomMeetingResponse>(
    `/api/teacher/classrooms/${encodeURIComponent(request.classroomId)}/meeting`,
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function assignTeacherClassroomModules(request: {
  classroomId: string;
  moduleIds: string[];
  learningPathIds?: string[];
}) {
  return requestAppApi<AssignClassroomModulesResponse>(
    `/api/teacher/classrooms/${encodeURIComponent(request.classroomId)}/modules/assign`,
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function fetchTeacherMaterials() {
  return requestAppApi<ListTeacherMaterialsResponse>("/api/teacher/materials");
}

export function uploadTeacherMaterialFile(request: {
  fileName: string;
  mimeType: string;
  textContent?: string;
  ocrTextHint?: string;
}) {
  return requestAppApi<UploadTeacherMaterialResponse>("/api/teacher/materials", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchTeachingModules() {
  return requestAppApi<ListTeachingModulesResponse>("/api/teacher/modules");
}

export function generateTeacherModule(request: {
  materialId: string;
  approve?: boolean;
}) {
  return requestAppApi<GenerateModuleResponse>("/api/teacher/modules/generate", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchTeachingQuizzes(moduleId?: string) {
  const query = moduleId
    ? `?moduleId=${encodeURIComponent(moduleId)}`
    : "";

  return requestAppApi<ListTeachingQuizzesResponse>(`/api/teacher/quizzes${query}`);
}

export function generateTeacherQuiz(request: {
  moduleId?: string;
  lessonId?: string;
  title?: string;
}) {
  return requestAppApi<GenerateQuizResponse>("/api/teacher/quizzes/generate", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function uploadTeacherExamScan(request: {
  studentId: string;
  classroomId?: string;
  quizId?: string;
  fileName: string;
  mimeType: string;
  ocrTextHint?: string;
  answerText?: string;
}) {
  return requestAppApi<UploadExamScanResponse>("/api/teacher/exams/upload-scan", {
    method: "POST",
    body: JSON.stringify(request)
  });
}
