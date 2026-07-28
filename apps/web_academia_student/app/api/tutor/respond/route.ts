import { errorResponse, successResponse } from "@/lib/backend-http";
import { createLessonTutorInteraction } from "@/services/server/tutor-server";
import type { CreateTutorInteractionRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateTutorInteractionRequest;
    const response = await createLessonTutorInteraction(payload);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
