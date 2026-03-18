import { errorResponse, successResponse } from "@/lib/backend-http";
import {
  getAdminOverview,
  listKnowledgeEdges,
  listKnowledgeNodes,
  listLessons,
  listTopics
} from "@/services/server/content-server";

export async function GET() {
  try {
    const [overviewResponse, topicsResponse, lessonsResponse, nodesResponse, edgesResponse] =
      await Promise.all([
        getAdminOverview(),
        listTopics(),
        listLessons(),
        listKnowledgeNodes(),
        listKnowledgeEdges()
      ]);

    return successResponse({
      overview: overviewResponse.overview,
      topics: topicsResponse.items,
      lessons: lessonsResponse.items,
      nodes: nodesResponse.items,
      edges: edgesResponse.items
    });
  } catch (error) {
    return errorResponse(error);
  }
}
