import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { assignClassroomModules } from "@/services/server/learning-server";

export async function POST(
  request: Request,
  context: { params: Promise<{ classroomId: string }> }
) {
  try {
    const session = await requireTeacherSession(["classroom:manage"]);
    const { classroomId } = await context.params;
    const body = (await request.json()) as {
      moduleIds: string[];
      learningPathIds?: string[];
    };
    const response = await assignClassroomModules({
      classroomId,
      moduleIds: body.moduleIds,
      learningPathIds: body.learningPathIds,
      teacherId: session.userId
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
