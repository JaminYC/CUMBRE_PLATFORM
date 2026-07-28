import { errorResponse, successResponse } from "@/lib/backend-http";
import { updateLessonConceptMappings } from "@/services/server/content-server";

export async function POST(request: Request) {
  try {
    const response = await updateLessonConceptMappings(await request.json());
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
