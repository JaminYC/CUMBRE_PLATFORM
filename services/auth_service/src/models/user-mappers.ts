import type { AuthSession, AuthUser } from "../generated/prisma/index.js";
import type {
  AuthenticatedSession,
  AttributeValue,
  StudentProfile,
  User,
  UserProfile,
  UserRole
} from "@cumbre/types";
import { resolvePermissionScopes } from "@cumbre/types";

export function toDomainUser(record: AuthUser): User {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    metadata: toMetadata(record.metadata),
    primaryRole: record.primaryRole,
    roles: record.roles,
    scopes: resolvePermissionScopes(record.roles),
    status: record.status,
    displayName: record.displayName,
    givenName: record.givenName ?? undefined,
    familyName: record.familyName ?? undefined,
    email: record.email ?? undefined,
    avatarUrl: record.avatarUrl ?? undefined,
    locale: record.locale ?? undefined,
    preferredLanguage: record.preferredLanguage ?? undefined,
    timezone: record.timezone ?? undefined,
    externalRef: record.externalRef ?? undefined
  };
}

export function toDerivedProfiles(record: AuthUser): UserProfile[] {
  const profileType = toSupportedProfileType(record.primaryRole);
  const profileId = `${record.id}-${record.primaryRole}-profile`;

  if (profileType === "student") {
    const profile: StudentProfile = {
      id: profileId,
      userId: record.id,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
      profileType,
      status: "active",
      activeLearningPathIds: ["learning-path-placeholder"],
      focusSkillIds: ["skill-critical-thinking"]
    };

    return [profile];
  }

  return [
    {
      id: profileId,
      userId: record.id,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
      profileType,
      status: "active"
    }
  ];
}

export function toAuthenticatedSession(record: AuthSession): AuthenticatedSession {
  return {
    id: record.id,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    userId: record.userId,
    primaryRole: record.primaryRole,
    roles: record.roles,
    scopes: resolvePermissionScopes(record.roles),
    accessTokenExpiresAt: record.accessTokenExpiresAt.toISOString(),
    refreshTokenExpiresAt: record.refreshTokenExpiresAt.toISOString(),
    revokedAt: record.revokedAt?.toISOString(),
    lastUsedAt: record.lastUsedAt?.toISOString(),
    deviceId: record.deviceId ?? undefined,
    userAgent: record.userAgent ?? undefined,
    ipAddress: record.ipAddress ?? undefined
  };
}

function toMetadata(value: unknown): User["metadata"] {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }

  const candidate = value as Record<string, unknown>;
  const tags = Array.isArray(candidate.tags)
    ? candidate.tags.filter((item): item is string => typeof item === "string")
    : undefined;
  const attributes =
    candidate.attributes &&
    typeof candidate.attributes === "object" &&
    !Array.isArray(candidate.attributes)
      ? (candidate.attributes as Record<string, AttributeValue>)
      : undefined;

  return {
    tags,
    attributes
  };
}

function toSupportedProfileType(
  value: string
): Extract<UserRole, "student" | "teacher" | "mentor" | "researcher" | "parent" | "administrator"> {
  switch (value) {
    case "teacher":
    case "mentor":
    case "researcher":
    case "parent":
    case "administrator":
      return value;
    case "student":
    default:
      return "student";
  }
}
