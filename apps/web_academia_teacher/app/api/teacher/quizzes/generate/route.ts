import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { generateQuiz } from "@/services/server/content-server";

export async function POST(request: Request) {
  try {
    const session = await requireTeacherSession(["assessment:write"]);
    const body = (await request.json()) as {
      moduleId?: string;
      lessonId?: string;
      title?: string;
    };
    const response = await generateQuiz({
      teacherId: session.userId,
      ...body
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
