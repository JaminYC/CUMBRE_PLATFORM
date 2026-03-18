import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { uploadExamScan } from "@/services/server/content-server";

export async function POST(request: Request) {
  try {
    const session = await requireTeacherSession(["assessment:write"]);
    const body = (await request.json()) as {
      studentId: string;
      classroomId?: string;
      quizId?: string;
      fileName: string;
      mimeType: string;
      ocrTextHint?: string;
      answerText?: string;
    };
    const response = await uploadExamScan({
      teacherId: session.userId,
      ...body
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
