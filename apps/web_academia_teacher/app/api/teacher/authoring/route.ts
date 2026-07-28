import { errorResponse, successResponse } from "@/lib/backend-http";
import {
  listContentItems,
  listKnowledgeEdges,
  listKnowledgeNodes,
  listLessons,
  listTopics
} from "@/services/server/content-server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const topicId = searchParams.get("topicId") ?? undefined;
    const [topicsResponse, lessonsResponse, nodesResponse, edgesResponse, contentItemsResponse] =
      await Promise.all([
        listTopics(),
        listLessons(topicId),
        listKnowledgeNodes(),
        listKnowledgeEdges(),
        listContentItems(topicId)
      ]);

    return successResponse({
      topics: topicsResponse.items,
      lessons: lessonsResponse.items,
      concepts: nodesResponse.items.filter((node) => node.nodeType === "concept"),
      edges: edgesResponse.items,
      contentItems: contentItemsResponse.items
    });
  } catch (error) {
    return errorResponse(error);
  }
}
