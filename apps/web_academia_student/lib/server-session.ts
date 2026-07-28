import type { NextResponse } from "next/server";
import type { PermissionScope } from "@cumbre/types";
import { buildAppSessionPayload, createServerSessionHelpers } from "@cumbre/app-runtime";
import type { AppSessionPayload } from "@cumbre/app-auth";
import { studentAppConfig } from "./env";

const sessionHelpers = createServerSessionHelpers(studentAppConfig);

export const getServerSession = sessionHelpers.getServerSession;
export const writeSessionCookie = sessionHelpers.writeSessionCookie;
export const clearSessionCookie = sessionHelpers.clearSessionCookie;

export async function requireStudentSession(requiredScopes: PermissionScope[] = ["content:read"]) {
  return sessionHelpers.requireSession({
    roles: ["student"],
    scopes: requiredScopes
  });
}

export function buildStudentAppSession(input: Parameters<typeof buildAppSessionPayload>[1]) {
  return buildAppSessionPayload(studentAppConfig, input);
}

export function writeStudentSessionCookie(response: NextResponse, session: AppSessionPayload) {
  return writeSessionCookie(response, session);
}
