import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireStudentSession } from "@/lib/server-session";
import { joinClassroom } from "@/services/server/learning-server";

export async function POST(request: Request) {
  try {
    const session = await requireStudentSession(["classroom:join"]);
    const body = (await request.json()) as { classCode: string };
    const response = await joinClassroom({
      classCode: body.classCode,
      studentId: session.userId
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
