CREATE TABLE "auth_sessions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "primaryRole" TEXT NOT NULL,
    "roles" TEXT[],
    "accessTokenHash" TEXT NOT NULL,
    "refreshTokenHash" TEXT NOT NULL,
    "accessTokenExpiresAt" TIMESTAMP(3) NOT NULL,
    "refreshTokenExpiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "lastUsedAt" TIMESTAMP(3),
    "deviceId" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,

    CONSTRAINT "auth_sessions_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "auth_sessions_accessTokenHash_key" ON "auth_sessions"("accessTokenHash");
CREATE UNIQUE INDEX "auth_sessions_refreshTokenHash_key" ON "auth_sessions"("refreshTokenHash");
CREATE INDEX "auth_sessions_userId_idx" ON "auth_sessions"("userId");
CREATE INDEX "auth_sessions_accessTokenExpiresAt_idx" ON "auth_sessions"("accessTokenExpiresAt");
CREATE INDEX "auth_sessions_refreshTokenExpiresAt_idx" ON "auth_sessions"("refreshTokenExpiresAt");

ALTER TABLE "auth_sessions"
ADD CONSTRAINT "auth_sessions_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "auth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
