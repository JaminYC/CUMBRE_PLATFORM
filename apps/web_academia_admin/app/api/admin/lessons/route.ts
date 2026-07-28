import { errorResponse, successResponse } from "@/lib/backend-http";
import { createLesson } from "@/services/server/content-server";

export async function POST(request: Request) {
  try {
    const response = await createLesson(await request.json());
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
