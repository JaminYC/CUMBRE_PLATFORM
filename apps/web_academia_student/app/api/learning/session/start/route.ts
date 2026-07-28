import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/backend-http";
import { startLearningSession } from "@/services/server/learning-server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const response = await startLearningSession(payload);
    return successResponse(response, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
