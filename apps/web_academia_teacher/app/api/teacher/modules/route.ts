import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { listTeachingModules } from "@/services/server/content-server";

export async function GET() {
  try {
    const session = await requireTeacherSession(["content:read"]);
    const response = await listTeachingModules(session.userId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
