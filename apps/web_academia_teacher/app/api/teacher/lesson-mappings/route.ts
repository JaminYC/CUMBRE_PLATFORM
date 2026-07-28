import { errorResponse, successResponse } from "@/lib/backend-http";
import { updateLessonConceptMappings } from "@/services/server/content-server";
import type { UpdateLessonConceptMappingsRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as UpdateLessonConceptMappingsRequest;
    const response = await updateLessonConceptMappings(payload);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
