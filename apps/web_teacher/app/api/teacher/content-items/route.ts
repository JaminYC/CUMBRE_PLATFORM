import { errorResponse, successResponse } from "@/lib/backend-http";
import { createContentItem } from "@/services/server/content-server";
import type { CreateContentItemRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateContentItemRequest;
    const response = await createContentItem(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
