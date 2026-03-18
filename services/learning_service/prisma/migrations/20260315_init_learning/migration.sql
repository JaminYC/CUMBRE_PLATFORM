CREATE TABLE "learning_paths" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "status" TEXT NOT NULL,
  "audienceRoles" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "topicIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "skillIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "lessonIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "projectIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "estimatedDurationMinutes" INTEGER,
  "difficultyLevel" TEXT,
  "sequencingStrategy" TEXT,
  CONSTRAINT "learning_paths_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "learning_sessions" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "learnerUserId" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "learningPathId" TEXT,
  "lessonId" TEXT,
  "topicId" TEXT,
  "tutorSessionId" TEXT,
  "startedAt" TIMESTAMP(3) NOT NULL,
  "endedAt" TIMESTAMP(3),
  "progressPercent" DOUBLE PRECISION NOT NULL,
  "difficultyLevel" TEXT,
  "masteryStateIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "recommendationIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  CONSTRAINT "learning_sessions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "mastery_states" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "learnerUserId" TEXT NOT NULL,
  "learningPathId" TEXT,
  "subjectType" TEXT NOT NULL,
  "subjectId" TEXT NOT NULL,
  "level" TEXT NOT NULL,
  "score" DOUBLE PRECISION NOT NULL,
  "confidence" DOUBLE PRECISION NOT NULL,
  "evidenceCount" INTEGER,
  "trend" TEXT,
  "lastObservedAt" TIMESTAMP(3) NOT NULL,
  "recommendedDifficulty" TEXT,
  CONSTRAINT "mastery_states_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "learning_sessions"
ADD CONSTRAINT "learning_sessions_learningPathId_fkey"
FOREIGN KEY ("learningPathId") REFERENCES "learning_paths"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "learning_sessions_learnerUserId_idx" ON "learning_sessions"("learnerUserId");
CREATE INDEX "mastery_states_learnerUserId_idx" ON "mastery_states"("learnerUserId");
