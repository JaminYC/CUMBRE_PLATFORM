CREATE TABLE "content_topics" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "slug" TEXT,
  "parentTopicId" TEXT,
  "skillIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "prerequisiteTopicIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  CONSTRAINT "content_topics_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "content_lessons" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "lessonType" TEXT NOT NULL,
  "topicId" TEXT NOT NULL,
  "skillIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "learningObjectiveIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "prerequisiteLessonIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "estimatedDurationMinutes" INTEGER,
  "difficultyLevel" TEXT,
  "resourceUrls" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  CONSTRAINT "content_lessons_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "content_items" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "contentType" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "topicIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "skillIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "lessonId" TEXT,
  "assessmentId" TEXT,
  "projectId" TEXT,
  "authorUserId" TEXT,
  "sourceUrl" TEXT,
  "language" TEXT,
  "versionLabel" TEXT,
  CONSTRAINT "content_items_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "content_lessons"
ADD CONSTRAINT "content_lessons_topicId_fkey"
FOREIGN KEY ("topicId") REFERENCES "content_topics"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

CREATE INDEX "content_lessons_topicId_idx" ON "content_lessons"("topicId");
