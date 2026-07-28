import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { listLessons } from "@/services/server/content-server";

export async function GET(request: NextRequest) {
  try {
    const response = await listLessons({
      topicId: request.nextUrl.searchParams.get("topicId") ?? undefined,
      learningPathId:
        request.nextUrl.searchParams.get("learningPathId") ?? undefined,
      skillId: request.nextUrl.searchParams.get("skillId") ?? undefined
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
