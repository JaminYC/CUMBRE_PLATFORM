import { type NextRequest, NextResponse } from "next/server";
import { portalAppConfig } from "@/lib/env";

export async function GET(_request: NextRequest) {
  return NextResponse.redirect(`${portalAppConfig.authServiceUrl}/auth/google`);
}
