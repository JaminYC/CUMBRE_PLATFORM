import type {
  GetStudentClassroomWorkspaceResponse,
  CreateLearningSessionRequest,
  CreateLearningSessionResponse,
  GetLearningPathResponse,
  GetLearningProgressResponse,
  JoinClassroomRequest,
  JoinClassroomResponse
} from "@cumbre/schemas";
import { fetchBackendData } from "@/lib/backend-http";

export function getLearningPath(learningPathId: string) {
  return fetchBackendData<GetLearningPathResponse>(
    "learning",
    `/learning/path?learningPathId=${encodeURIComponent(learningPathId)}`
  );
}

export function getLearningProgress(
  learnerUserId: string,
  learningPathId?: string
) {
  const query = new URLSearchParams({
    learnerUserId
  });

  if (learningPathId) {
    query.set("learningPathId", learningPathId);
  }

  return fetchBackendData<GetLearningProgressResponse>(
    "learning",
    `/learning/progress?${query.toString()}`
  );
}

export function startLearningSession(request: CreateLearningSessionRequest) {
  return fetchBackendData<CreateLearningSessionResponse>(
    "learning",
    "/learning/session/start",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function joinClassroom(request: JoinClassroomRequest) {
  return fetchBackendData<JoinClassroomResponse>("learning", "/classrooms/join", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function getStudentClassroomWorkspace(studentId: string) {
  return fetchBackendData<GetStudentClassroomWorkspaceResponse>(
    "learning",
    `/classrooms/student/workspace?studentId=${encodeURIComponent(studentId)}`
  );
}
