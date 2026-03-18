import { errorResponse, successResponse } from "@/lib/backend-http";
import { getAdminOverview } from "@/services/server/content-server";

export async function GET() {
  try {
    const response = await getAdminOverview();

    return successResponse(response);
  } catch (error) {
    return errorResponse(error);
  }
}
