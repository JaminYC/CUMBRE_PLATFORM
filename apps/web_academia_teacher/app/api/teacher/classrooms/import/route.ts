import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { importStudents } from "@/services/server/learning-server";

export async function POST(request: Request) {
  try {
    await requireTeacherSession(["classroom:manage"]);
    const body = (await request.json()) as {
      classroomId: string;
      csvContent: string;
    };
    const response = await importStudents(body);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
