import { errorResponse, successResponse } from "@/lib/backend-http";
import { createTopic } from "@/services/server/content-server";
import type { CreateTopicRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateTopicRequest;
    const response = await createTopic(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
