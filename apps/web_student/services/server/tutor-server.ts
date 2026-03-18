import type {
  CreateTutorInteractionRequest,
  CreateTutorInteractionResponse,
  GetTutorSessionRequest,
  GetTutorSessionResponse,
  StartTutorSessionRequest,
  StartTutorSessionResponse
} from "@cumbre/schemas";
import {
  createTutorInteraction,
  getTutorSession,
  startTutorSession,
  streamTutorInteraction
} from "@cumbre/tutor-engine";
import { BackendRequestError } from "@/lib/backend-http";
import {
  getLessonKnowledge,
  getTopic,
  getLessonByTopic,
  listLessons,
  searchContent
} from "@/services/server/content-server";
import {
  getLearningPath,
  getLearningProgress
} from "@/services/server/learning-server";
import type { TutorAction } from "@cumbre/types";

export async function startLessonTutorSession(
  request: StartTutorSessionRequest
): Promise<StartTutorSessionResponse> {
  validateTutorSessionRequest(request);
  const context = await buildGroundingContext({
    learnerUserId: request.learnerUserId,
    topicId: request.topicId!,
    lessonId: request.lessonId!,
    learningPathId: request.learningPathId
  });
  return startTutorSession(request, context);
}

export async function createLessonTutorInteraction(
  request: CreateTutorInteractionRequest
): Promise<CreateTutorInteractionResponse> {
  validateTutorInteractionRequest(request);
  const context = await buildGroundingContext({
    learnerUserId: request.learnerUserId,
    topicId: request.topicId,
    lessonId: request.lessonId,
    learningPathId: request.learningPathId,
    prompt: request.prompt,
    action: request.action
  });
  return createTutorInteraction(request, context);
}

export async function getLessonTutorSession(
  request: GetTutorSessionRequest
): Promise<GetTutorSessionResponse> {
  validateTutorSessionLookupRequest(request);
  return getTutorSession(request);
}

export async function streamLessonTutorInteraction(
  request: CreateTutorInteractionRequest
) {
  validateTutorInteractionRequest(request);
  const context = await buildGroundingContext({
    learnerUserId: request.learnerUserId,
    topicId: request.topicId,
    lessonId: request.lessonId,
    learningPathId: request.learningPathId,
    prompt: request.prompt,
    action: request.action
  });
  return createTutorInteractionStream(request, context);
}

async function buildGroundingContext(input: {
  learnerUserId: string;
  topicId: string;
  lessonId: string;
  learningPathId?: string;
  prompt?: string;
  action?: TutorAction;
}) {
  const [
    topicResponse,
    lessonResponse,
    learningPathResponse,
    relatedLessonsResponse,
    progressResponse,
    lessonKnowledgeResponse
  ] =
    await Promise.all([
      getTopic(input.topicId),
      getLessonByTopic(input.topicId, input.lessonId),
      input.learningPathId
        ? getLearningPath(input.learningPathId)
        : Promise.resolve(null),
      listLessons({ topicId: input.topicId }),
      getLearningProgress(input.learnerUserId, input.learningPathId),
      getLessonKnowledge(input.lessonId)
    ]);
  const contentSearchResponse = await searchContent({
    query: buildRetrievalQuery({
      prompt: input.prompt,
      action: input.action,
      topicTitle: topicResponse.topic.title,
      lessonTitle: lessonResponse.lesson.title
    }),
    topicId: input.topicId,
    limit: 4
  });

  return {
    topic: topicResponse.topic,
    lesson: lessonResponse.lesson,
    learningPath: learningPathResponse?.learningPath,
    relatedLessons: relatedLessonsResponse.items,
    contentItems: contentSearchResponse.items,
    graphInsight: lessonKnowledgeResponse.insight,
    adaptiveContext: {
      progressPercent: progressResponse.progressPercent,
      nextBestAction: progressResponse.nextBestAction,
      adaptiveGuidance: progressResponse.adaptiveGuidance
    }
  };
}

function buildRetrievalQuery(input: {
  prompt?: string;
  action?: TutorAction;
  topicTitle: string;
  lessonTitle: string;
}) {
  const actionQuery =
    input.action === "summarize_lesson"
      ? "resumen general"
      : input.action === "give_hint"
        ? "pista primer paso"
        : input.action === "ask_question"
          ? "aclaracion de pregunta"
          : "explicacion de concepto";

  return [input.prompt, actionQuery, input.topicTitle, input.lessonTitle]
    .filter(Boolean)
    .join(" ");
}

function validateTutorSessionRequest(request: StartTutorSessionRequest) {
  if (!request.learnerUserId || !request.lessonId || !request.topicId) {
    throw new BackendRequestError(
      "Se requieren learnerUserId, lessonId y topicId para iniciar una sesion de tutor.",
      400,
      "VALIDATION_ERROR"
    );
  }
}

function validateTutorInteractionRequest(request: CreateTutorInteractionRequest) {
  if (!request.learnerUserId || !request.lessonId || !request.topicId) {
    throw new BackendRequestError(
      "Se requieren learnerUserId, lessonId y topicId para interactuar con el tutor.",
      400,
      "VALIDATION_ERROR"
    );
  }

  if (!request.action) {
    throw new BackendRequestError(
      "Se requiere action para la interaccion con el tutor.",
      400,
      "VALIDATION_ERROR"
    );
  }

  if (request.action === "ask_question" && !request.prompt?.trim()) {
    throw new BackendRequestError(
      "Se requiere prompt cuando action es ask_question.",
      400,
      "VALIDATION_ERROR"
    );
  }
}

function validateTutorSessionLookupRequest(request: GetTutorSessionRequest) {
  if (!request.learnerUserId || !request.lessonId || !request.topicId) {
    throw new BackendRequestError(
      "Se requieren learnerUserId, lessonId y topicId para consultar una sesion de tutor.",
      400,
      "VALIDATION_ERROR"
    );
  }
}

async function* createTutorInteractionStream(
  request: CreateTutorInteractionRequest,
  context: Awaited<ReturnType<typeof buildGroundingContext>>
) {
  yield* streamTutorInteraction(request, context);
}
