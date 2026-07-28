import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { listTeachingQuizzes } from "@/services/server/content-server";

export async function GET(request: Request) {
  try {
    const session = await requireTeacherSession(["content:read"]);
    const { searchParams } = new URL(request.url);
    const moduleId = searchParams.get("moduleId") ?? undefined;
    const response = await listTeachingQuizzes(session.userId, moduleId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
