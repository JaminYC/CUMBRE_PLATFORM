import { errorResponse, successResponse } from "@/lib/backend-http";
import { updateLesson } from "@/services/server/content-server";
import type { UpdateLessonRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as UpdateLessonRequest;
    const response = await updateLesson(payload);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
