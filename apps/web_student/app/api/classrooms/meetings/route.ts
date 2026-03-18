import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireStudentSession } from "@/lib/server-session";
import { getStudentClassroomWorkspace } from "@/services/server/learning-server";

export async function GET() {
  try {
    const session = await requireStudentSession(["learning:read"]);
    const response = await getStudentClassroomWorkspace(session.userId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
