import { errorResponse, successResponse } from "@/lib/backend-http";
import { listTopics } from "@/services/server/content-server";

export async function GET() {
  try {
    const response = await listTopics();
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
