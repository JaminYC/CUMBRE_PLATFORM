CREATE TABLE "teaching_materials" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "teacherId" TEXT NOT NULL,
  "fileName" TEXT NOT NULL,
  "mimeType" TEXT NOT NULL,
  "materialKind" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "parsedText" TEXT NOT NULL,
  "parsedStructure" JSONB NOT NULL,
  "sourceUrl" TEXT
);

CREATE TABLE "teaching_modules" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "teacherId" TEXT NOT NULL,
  "materialId" TEXT,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "status" TEXT NOT NULL,
  "conceptNodeIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "lessonIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "sections" JSONB NOT NULL,
  "suggestedTopicTitles" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[]
);

CREATE TABLE "teaching_quizzes" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "teacherId" TEXT NOT NULL,
  "moduleId" TEXT,
  "lessonId" TEXT,
  "title" TEXT NOT NULL,
  "summary" TEXT,
  "questions" JSONB NOT NULL
);
