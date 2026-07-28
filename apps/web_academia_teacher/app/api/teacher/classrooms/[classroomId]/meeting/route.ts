import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { createClassroomMeeting } from "@/services/server/learning-server";

export async function POST(
  request: Request,
  context: { params: Promise<{ classroomId: string }> }
) {
  try {
    const session = await requireTeacherSession(["classroom:manage"]);
    const { classroomId } = await context.params;
    const body = (await request.json()) as {
      provider: string;
      title: string;
      description?: string;
      scheduledAt: string;
    };
    const response = await createClassroomMeeting({
      classroomId,
      teacherId: session.userId,
      provider: body.provider,
      title: body.title,
      description: body.description,
      scheduledAt: body.scheduledAt
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
