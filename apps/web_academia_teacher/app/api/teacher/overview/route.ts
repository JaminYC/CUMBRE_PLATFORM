import { errorResponse, successResponse } from "@/lib/backend-http";
import { getTeacherOverview } from "@/services/server/learning-server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const learningPathId = searchParams.get("learningPathId") ?? undefined;
    const limitValue = searchParams.get("limit");
    const limit = limitValue ? Number(limitValue) : undefined;
    const response = await getTeacherOverview({
      learningPathId,
      limit: Number.isFinite(limit) ? limit : undefined
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
