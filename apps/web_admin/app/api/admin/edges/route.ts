import { errorResponse, successResponse } from "@/lib/backend-http";
import { createKnowledgeEdge } from "@/services/server/content-server";
import type { CreateKnowledgeEdgeRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateKnowledgeEdgeRequest;
    const response = await createKnowledgeEdge(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
