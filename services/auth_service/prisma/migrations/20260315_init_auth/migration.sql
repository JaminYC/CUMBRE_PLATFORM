CREATE TABLE "auth_users" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "primaryRole" TEXT NOT NULL,
  "roles" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "status" TEXT NOT NULL,
  "displayName" TEXT NOT NULL,
  "givenName" TEXT,
  "familyName" TEXT,
  "email" TEXT,
  "avatarUrl" TEXT,
  "locale" TEXT,
  "preferredLanguage" TEXT,
  "timezone" TEXT,
  "externalRef" TEXT,
  "credentialHash" TEXT,
  CONSTRAINT "auth_users_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "auth_users_email_key" ON "auth_users"("email");
