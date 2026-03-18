import type {
  GetLessonKnowledgeResponse,
  GetTopicKnowledgeResponse,
  GetTopicResponse,
  ListLessonsRequest,
  ListLessonsResponse,
  ListTeachingModulesResponse,
  ListTeachingQuizzesResponse,
  ListTopicsRequest,
  ListTopicsResponse,
  SearchContentRequest,
  SearchContentResponse
} from "@cumbre/schemas";
import { BackendRequestError, fetchBackendData } from "@/lib/backend-http";

export function listTopics(request: ListTopicsRequest = {}) {
  const query = new URLSearchParams();

  if (request.parentTopicId) {
    query.set("parentTopicId", request.parentTopicId);
  }

  if (request.limit !== undefined) {
    query.set("limit", String(request.limit));
  }

  const suffix = query.size > 0 ? `?${query.toString()}` : "";
  return fetchBackendData<ListTopicsResponse>("content", `/content/topics${suffix}`);
}

export function getTopic(topicId: string) {
  return fetchBackendData<GetTopicResponse>(
    "content",
    `/content/topic/${encodeURIComponent(topicId)}`
  );
}

export function listLessons(request: ListLessonsRequest = {}) {
  const query = new URLSearchParams();

  if (request.learningPathId) {
    query.set("learningPathId", request.learningPathId);
  }

  if (request.topicId) {
    query.set("topicId", request.topicId);
  }

  if (request.skillId) {
    query.set("skillId", request.skillId);
  }

  const suffix = query.size > 0 ? `?${query.toString()}` : "";
  return fetchBackendData<ListLessonsResponse>(
    "content",
    `/content/lessons${suffix}`
  );
}

export async function getLessonByTopic(topicId: string, lessonId: string) {
  const response = await listLessons({ topicId });
  const lesson = response.items.find((item) => item.id === lessonId);

  if (!lesson) {
    throw new BackendRequestError("No se encontro la leccion.", 404, "NOT_FOUND");
  }

  return {
    lesson
  };
}

export function getLessonKnowledge(lessonId: string) {
  return fetchBackendData<GetLessonKnowledgeResponse>(
    "content",
    `/content/knowledge/lesson/${encodeURIComponent(lessonId)}`
  );
}

export function getTopicKnowledge(topicId: string) {
  return fetchBackendData<GetTopicKnowledgeResponse>(
    "content",
    `/content/knowledge/topic/${encodeURIComponent(topicId)}`
  );
}

export function searchContent(request: SearchContentRequest) {
  const query = new URLSearchParams({
    query: request.query
  });

  if (request.topicId) {
    query.set("topicId", request.topicId);
  }

  if (request.contentType) {
    query.set("contentType", request.contentType);
  }

  if (request.limit !== undefined) {
    query.set("limit", String(request.limit));
  }

  return fetchBackendData<SearchContentResponse>(
    "content",
    `/content/search?${query.toString()}`
  );
}

export function listTeachingModules() {
  return fetchBackendData<ListTeachingModulesResponse>("content", "/teaching/modules");
}

export function listTeachingQuizzes(moduleId?: string) {
  const suffix = moduleId ? `?moduleId=${encodeURIComponent(moduleId)}` : "";
  return fetchBackendData<ListTeachingQuizzesResponse>("content", `/teaching/quizzes${suffix}`);
}
