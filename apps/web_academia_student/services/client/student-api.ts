"use client";

import type {
  AuthLoginRequest,
  AuthLoginResponse,
  CreateTutorInteractionRequest,
  CreateTutorInteractionResponse,
  CreateLearningSessionRequest,
  CreateLearningSessionResponse,
  GetCurrentUserResponse,
  GetLessonKnowledgeResponse,
  GetLearningPathResponse,
  GetLearningProgressResponse,
  GetStudentClassroomWorkspaceResponse,
  GetTutorSessionResponse,
  GetTopicResponse,
  GetTopicKnowledgeResponse,
  ListTeachingModulesResponse,
  ListTeachingQuizzesResponse,
  ListLessonsResponse,
  ListTopicsResponse,
  JoinClassroomResponse,
  StartTutorSessionRequest,
  StartTutorSessionResponse
} from "@cumbre/schemas";
import { requestAppApi, requestAppApiStream } from "@/lib/app-http";

export function loginStudent(request: AuthLoginRequest) {
  return requestAppApi<AuthLoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchCurrentStudentSession() {
  return requestAppApi<{
    user: AuthLoginResponse["user"];
    profiles: unknown[];
    session: {
      userId: string;
      displayName: string;
      email?: string;
      primaryRole: string;
      roles: string[];
      scopes?: string[];
      expiresAt: string;
      refreshExpiresAt: string;
      defaultLearningPathId: string;
    };
  }>("/api/auth/session");
}

export function logoutStudentSession() {
  return requestAppApi<{ revoked: boolean }>("/api/auth/logout", {
    method: "POST"
  });
}

export function fetchCurrentStudent(userId: string) {
  return requestAppApi<GetCurrentUserResponse>(
    `/api/auth/me?userId=${encodeURIComponent(userId)}`
  );
}

export function fetchLearningPath(learningPathId: string) {
  return requestAppApi<GetLearningPathResponse>(
    `/api/learning/path/${encodeURIComponent(learningPathId)}`
  );
}

export function fetchLearningProgress(
  learnerUserId: string,
  learningPathId?: string
) {
  const query = new URLSearchParams({
    learnerUserId
  });

  if (learningPathId) {
    query.set("learningPathId", learningPathId);
  }

  return requestAppApi<GetLearningProgressResponse>(
    `/api/learning/progress?${query.toString()}`
  );
}

export function startStudentLearningSession(
  request: CreateLearningSessionRequest
) {
  return requestAppApi<CreateLearningSessionResponse>("/api/learning/session/start", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function startStudentTutorSession(request: StartTutorSessionRequest) {
  return requestAppApi<StartTutorSessionResponse>("/api/tutor/session", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function requestLessonTutorResponse(
  request: CreateTutorInteractionRequest
) {
  return requestAppApi<CreateTutorInteractionResponse>("/api/tutor/respond", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchTutorConversation(request: {
  learnerUserId: string;
  lessonId: string;
  topicId: string;
  tutorSessionId?: string;
}) {
  const query = new URLSearchParams({
    learnerUserId: request.learnerUserId,
    lessonId: request.lessonId,
    topicId: request.topicId
  });

  if (request.tutorSessionId) {
    query.set("tutorSessionId", request.tutorSessionId);
  }

  return requestAppApi<GetTutorSessionResponse>(`/api/tutor/session?${query.toString()}`);
}

export function streamLessonTutorResponse<TEvent>(
  request: CreateTutorInteractionRequest,
  onEvent: (event: TEvent) => void
) {
  return requestAppApiStream<TEvent>("/api/tutor/respond/stream", {
    method: "POST",
    body: JSON.stringify(request)
  }, onEvent);
}

export function fetchTopics() {
  return requestAppApi<ListTopicsResponse>("/api/content/topics");
}

export function fetchTopic(topicId: string) {
  return requestAppApi<GetTopicResponse>(
    `/api/content/topics/${encodeURIComponent(topicId)}`
  );
}

export function fetchLessons(topicId: string) {
  return requestAppApi<ListLessonsResponse>(
    `/api/content/lessons?topicId=${encodeURIComponent(topicId)}`
  );
}

export function fetchLesson(topicId: string, lessonId: string) {
  return requestAppApi<{ lesson: ListLessonsResponse["items"][number] }>(
    `/api/content/lessons/${encodeURIComponent(lessonId)}?topicId=${encodeURIComponent(topicId)}`
  );
}

export function fetchLessonKnowledge(lessonId: string) {
  return requestAppApi<GetLessonKnowledgeResponse>(
    `/api/content/knowledge/lessons/${encodeURIComponent(lessonId)}`
  );
}

export function fetchTopicKnowledge(topicId: string) {
  return requestAppApi<GetTopicKnowledgeResponse>(
    `/api/content/knowledge/topics/${encodeURIComponent(topicId)}`
  );
}

export function joinStudentClassroom(classCode: string) {
  return requestAppApi<JoinClassroomResponse>("/api/classrooms/join", {
    method: "POST",
    body: JSON.stringify({ classCode })
  });
}

export function fetchStudentClassroomWorkspace() {
  return requestAppApi<GetStudentClassroomWorkspaceResponse>("/api/classrooms/workspace");
}

export function fetchStudentClassroomModules() {
  return requestAppApi<{
    workspaces: GetStudentClassroomWorkspaceResponse["workspaces"];
    modules: ListTeachingModulesResponse["items"];
    quizzes: ListTeachingQuizzesResponse["items"];
  }>("/api/classrooms/modules");
}

export function fetchStudentClassroomMeetings() {
  return requestAppApi<GetStudentClassroomWorkspaceResponse>("/api/classrooms/meetings");
}
