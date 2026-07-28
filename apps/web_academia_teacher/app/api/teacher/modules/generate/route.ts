import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import { generateModule } from "@/services/server/content-server";

export async function POST(request: Request) {
  try {
    const session = await requireTeacherSession(["material:write"]);
    const body = (await request.json()) as {
      materialId: string;
      approve?: boolean;
    };
    const response = await generateModule({
      teacherId: session.userId,
      ...body
    });

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
