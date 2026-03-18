import { errorResponse, successResponse } from "@/lib/backend-http";
import { runIntegrityFix } from "@/services/server/content-server";
import type { RunIntegrityFixRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RunIntegrityFixRequest;
    const response = await runIntegrityFix(payload);
    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
