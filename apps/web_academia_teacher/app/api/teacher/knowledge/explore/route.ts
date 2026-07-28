import { errorResponse, successResponse } from "@/lib/backend-http";
import { getKnowledgeExplore } from "@/services/server/content-server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const anchorEntityType = searchParams.get("anchorEntityType");
    const anchorEntityId = searchParams.get("anchorEntityId");

    if (!anchorEntityType || !anchorEntityId) {
      throw new Error("anchorEntityType and anchorEntityId are required.");
    }

    const response = await getKnowledgeExplore({
      anchorEntityType: anchorEntityType as "topic" | "lesson" | "concept",
      anchorEntityId
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
