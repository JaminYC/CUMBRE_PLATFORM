import { errorResponse, successResponse } from "@/lib/backend-http";
import { createLesson } from "@/services/server/content-server";
import type { CreateLessonRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateLessonRequest;
    const response = await createLesson(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
