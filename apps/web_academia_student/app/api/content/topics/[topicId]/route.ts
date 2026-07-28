import { errorResponse, successResponse } from "@/lib/backend-http";
import { getTopic } from "@/services/server/content-server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ topicId: string }> }
) {
  try {
    const { topicId } = await context.params;
    const response = await getTopic(topicId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
