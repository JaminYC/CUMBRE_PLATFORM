import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { searchStudentUsers } from "@/services/server/learning-server";

export async function GET(request: Request) {
  try {
    await requireTeacherSession(["classroom:manage"]);
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") ?? "";

    if (query.length < 2) {
      return successResponse({ users: [] });
    }

    const response = await searchStudentUsers(query);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
