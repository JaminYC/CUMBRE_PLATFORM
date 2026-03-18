import { NextRequest } from "next/server";
import { BackendRequestError, errorResponse, successResponse } from "@/lib/backend-http";
import { getLearningProgress } from "@/services/server/learning-server";

export async function GET(request: NextRequest) {
  try {
    const learnerUserId = request.nextUrl.searchParams.get("learnerUserId");
    const learningPathId = request.nextUrl.searchParams.get("learningPathId") ?? undefined;

    if (!learnerUserId) {
      throw new BackendRequestError(
        "Se requiere learnerUserId.",
        400,
        "VALIDATION_ERROR"
      );
    }

    const response = await getLearningProgress(learnerUserId, learningPathId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
