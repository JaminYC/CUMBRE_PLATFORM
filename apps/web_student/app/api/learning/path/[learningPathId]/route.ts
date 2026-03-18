import { errorResponse, successResponse } from "@/lib/backend-http";
import { getLearningPath } from "@/services/server/learning-server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ learningPathId: string }> }
) {
  try {
    const { learningPathId } = await context.params;
    const response = await getLearningPath(learningPathId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
