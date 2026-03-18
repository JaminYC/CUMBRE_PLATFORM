import { errorResponse, successResponse } from "@/lib/backend-http";
import {
  getLessonTutorSession,
  startLessonTutorSession
} from "@/services/server/tutor-server";
import type {
  GetTutorSessionRequest,
  StartTutorSessionRequest
} from "@cumbre/schemas";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const payload: GetTutorSessionRequest = {
      learnerUserId: url.searchParams.get("learnerUserId") ?? "",
      lessonId: url.searchParams.get("lessonId") ?? "",
      topicId: url.searchParams.get("topicId") ?? "",
      tutorSessionId: url.searchParams.get("tutorSessionId") ?? undefined
    };

    const response = await getLessonTutorSession(payload);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as StartTutorSessionRequest;
    const response = await startLessonTutorSession(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
