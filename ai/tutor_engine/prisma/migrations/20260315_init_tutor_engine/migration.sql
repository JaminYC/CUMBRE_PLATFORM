CREATE TABLE "tutor_sessions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "learnerUserId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tutorMode" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "lastInteractionAt" TIMESTAMP(3) NOT NULL,
    "learningPathId" TEXT,
    "lessonId" TEXT,
    "topicIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "goalSummary" TEXT,
    "turnCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tutor_sessions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "tutor_turns" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "tutorSessionId" TEXT NOT NULL,
    "actor" TEXT NOT NULL,
    "action" TEXT,
    "responseType" TEXT,
    "title" TEXT,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "lessonId" TEXT,
    "topicId" TEXT,
    "suggestedPrompts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "nextSteps" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "references" JSONB,
    "contextSnippets" JSONB,

    CONSTRAINT "tutor_turns_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "tutor_sessions_learnerUserId_lessonId_status_lastInteractionAt_idx"
ON "tutor_sessions"("learnerUserId", "lessonId", "status", "lastInteractionAt" DESC);

CREATE INDEX "tutor_turns_tutorSessionId_createdAt_idx"
ON "tutor_turns"("tutorSessionId", "createdAt");

ALTER TABLE "tutor_turns"
ADD CONSTRAINT "tutor_turns_tutorSessionId_fkey"
FOREIGN KEY ("tutorSessionId") REFERENCES "tutor_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
