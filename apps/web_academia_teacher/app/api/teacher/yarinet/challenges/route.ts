import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import {
  createChallenge,
  listTeacherChallenges
} from "@/services/server/yarinet-server";

export async function GET() {
  try {
    const session = await requireTeacherSession(["challenge:manage"]);
    const response = await listTeacherChallenges(session.userId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireTeacherSession(["challenge:manage"]);
    const body = (await request.json()) as {
      title: string;
      problemStatement: string;
      category: string;
      context?: string;
      gradeLevel?: string;
      guidingQuestions?: string[];
    };
    const response = await createChallenge({
      teacherId: session.userId,
      title: body.title,
      problemStatement: body.problemStatement,
      category: body.category,
      context: body.context,
      gradeLevel: body.gradeLevel,
      guidingQuestions: body.guidingQuestions ?? []
    });

    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
