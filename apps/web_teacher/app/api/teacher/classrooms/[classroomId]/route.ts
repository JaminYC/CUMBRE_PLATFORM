import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import {
  deleteClassroom,
  getClassroom,
  getClassroomAnalytics
} from "@/services/server/learning-server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ classroomId: string }> }
) {
  try {
    await requireTeacherSession(["classroom:manage"]);
    const { classroomId } = await context.params;
    const [classroomResponse, analyticsResponse] = await Promise.all([
      getClassroom(classroomId),
      getClassroomAnalytics(classroomId)
    ]);

    return successResponse({
      ...classroomResponse,
      analytics: analyticsResponse.analytics
    });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ classroomId: string }> }
) {
  try {
    await requireTeacherSession(["classroom:manage"]);
    const { classroomId } = await context.params;
    await deleteClassroom(classroomId);
    return successResponse({ deleted: true, classroomId });
  } catch (error) {
    return errorResponse(error);
  }
}
