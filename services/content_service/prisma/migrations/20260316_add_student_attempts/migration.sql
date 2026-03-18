CREATE TABLE "student_attempts" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "metadata" JSONB,
  "studentId" TEXT NOT NULL,
  "classroomId" TEXT,
  "quizId" TEXT,
  "source" TEXT NOT NULL,
  "score" DOUBLE PRECISION,
  "answers" JSONB NOT NULL,
  "teacherVerified" BOOLEAN NOT NULL DEFAULT false,

  CONSTRAINT "student_attempts_pkey" PRIMARY KEY ("id")
);
