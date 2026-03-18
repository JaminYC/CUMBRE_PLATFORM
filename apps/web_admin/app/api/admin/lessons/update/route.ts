import { errorResponse, successResponse } from "@/lib/backend-http";
import { updateLesson } from "@/services/server/content-server";

export async function POST(request: Request) {
  try {
    const response = await updateLesson(await request.json());
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
