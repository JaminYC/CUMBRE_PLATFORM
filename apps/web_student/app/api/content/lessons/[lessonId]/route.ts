import { NextRequest } from "next/server";
import { BackendRequestError, errorResponse, successResponse } from "@/lib/backend-http";
import { getLessonByTopic } from "@/services/server/content-server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ lessonId: string }> }
) {
  try {
    const { lessonId } = await context.params;
    const topicId = request.nextUrl.searchParams.get("topicId");

    if (!topicId) {
      throw new BackendRequestError("Se requiere topicId.", 400, "VALIDATION_ERROR");
    }

    const response = await getLessonByTopic(topicId, lessonId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
