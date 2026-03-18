import { errorResponse, successResponse } from "@/lib/backend-http";
import { createKnowledgeNode } from "@/services/server/content-server";
import type { CreateKnowledgeNodeRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateKnowledgeNodeRequest;
    const response = await createKnowledgeNode(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
