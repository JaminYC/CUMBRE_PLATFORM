import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import {
  createClassroom,
  listTeacherClassrooms
} from "@/services/server/learning-server";

export async function GET() {
  try {
    const session = await requireTeacherSession(["classroom:manage"]);
    const response = await listTeacherClassrooms(session.userId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireTeacherSession(["classroom:manage"]);
    const body = (await request.json()) as {
      name: string;
      gradeLevel: string;
      subject: string;
    };
    const response = await createClassroom({
      ...body,
      teacherId: session.userId
    });

    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
