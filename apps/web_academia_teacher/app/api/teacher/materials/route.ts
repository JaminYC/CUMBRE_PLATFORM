import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireTeacherSession } from "@/lib/server-session";
import {
  listTeacherMaterials,
  uploadTeacherMaterial
} from "@/services/server/content-server";

export async function GET() {
  try {
    const session = await requireTeacherSession(["material:write"]);
    const response = await listTeacherMaterials(session.userId);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireTeacherSession(["material:write"]);
    const body = (await request.json()) as {
      fileName: string;
      mimeType: string;
      textContent?: string;
      ocrTextHint?: string;
    };
    const response = await uploadTeacherMaterial({
      teacherId: session.userId,
      ...body
    });

    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
