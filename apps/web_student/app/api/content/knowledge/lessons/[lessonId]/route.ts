import { errorResponse, successResponse } from "@/lib/backend-http";
import { getLessonKnowledge } from "@/services/server/content-server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ lessonId: string }> }
) {
  try {
    const { lessonId } = await context.params;
    const response = await getLessonKnowledge(lessonId);

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
