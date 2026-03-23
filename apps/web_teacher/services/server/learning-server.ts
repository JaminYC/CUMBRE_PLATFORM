import type {
  CreateClassroomMeetingRequest,
  CreateClassroomMeetingResponse,
  CreateClassroomRequest,
  CreateClassroomResponse,
  GetClassroomAnalyticsResponse,
  GetClassroomResponse,
  GetTeacherOverviewRequest,
  GetTeacherOverviewResponse,
  ImportStudentsRequest,
  ImportStudentsResponse,
  ListTeacherClassroomsResponse,
  AssignClassroomModulesRequest,
  AssignClassroomModulesResponse
} from "@cumbre/schemas";
import { fetchBackendData } from "@/lib/backend-http";

export function getTeacherOverview(request: GetTeacherOverviewRequest = {}) {
  const query = new URLSearchParams();

  if (request.learningPathId) {
    query.set("learningPathId", request.learningPathId);
  }

  if (request.limit !== undefined) {
    query.set("limit", String(request.limit));
  }

  const suffix = query.size > 0 ? `?${query.toString()}` : "";
  return fetchBackendData<GetTeacherOverviewResponse>(
    "learning",
    `/learning/teacher/overview${suffix}`
  );
}

export function listTeacherClassrooms(teacherId: string) {
  const query = new URLSearchParams({ teacherId });

  return fetchBackendData<ListTeacherClassroomsResponse>(
    "learning",
    `/classrooms?${query.toString()}`
  );
}

export function createClassroom(request: CreateClassroomRequest) {
  return fetchBackendData<CreateClassroomResponse>("learning", "/classrooms/create", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function deleteClassroom(classroomId: string) {
  return fetchBackendData<{ deleted: true; classroomId: string }>(
    "learning",
    `/classrooms/${classroomId}`,
    { method: "DELETE" }
  );
}

export function searchStudentUsers(query: string) {
  const params = new URLSearchParams({ q: query, role: "student", limit: "10" });
  return fetchBackendData<{ users: { id: string; displayName: string; email: string; primaryRole: string }[] }>(
    "learning",
    `/classrooms/search-users?${params.toString()}`
  );
}

export function addStudentToClassroom(request: { classroomId: string; userId: string; displayName: string; email: string }) {
  return fetchBackendData<ImportStudentsResponse>(
    "learning",
    "/classrooms/import-students",
    {
      method: "POST",
      body: JSON.stringify({
        classroomId: request.classroomId,
        csvContent: `name,email,gradeLevel\n${request.displayName},${request.email},`
      })
    }
  );
}

export function getClassroom(classroomId: string) {
  return fetchBackendData<GetClassroomResponse>("learning", `/classrooms/${classroomId}`);
}

export function importStudents(request: ImportStudentsRequest) {
  return fetchBackendData<ImportStudentsResponse>("learning", "/classrooms/import-students", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createClassroomMeeting(request: CreateClassroomMeetingRequest) {
  return fetchBackendData<CreateClassroomMeetingResponse>(
    "learning",
    `/classrooms/${request.classroomId}/meeting/create`,
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function getClassroomAnalytics(classroomId: string) {
  return fetchBackendData<GetClassroomAnalyticsResponse>(
    "learning",
    `/analytics/classroom/${classroomId}`
  );
}

export function assignClassroomModules(request: AssignClassroomModulesRequest) {
  return fetchBackendData<AssignClassroomModulesResponse>(
    "learning",
    `/classrooms/${request.classroomId}/modules/assign`,
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}
