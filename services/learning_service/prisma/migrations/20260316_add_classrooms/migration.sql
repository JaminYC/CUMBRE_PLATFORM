CREATE TABLE "classrooms" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "name" TEXT NOT NULL,
  "gradeLevel" TEXT NOT NULL,
  "subject" TEXT NOT NULL,
  "teacherId" TEXT NOT NULL,
  "classCode" TEXT NOT NULL UNIQUE,
  "assignedModuleIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "assignedLearningPathIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "learningPathId" TEXT
);

CREATE TABLE "classroom_student_profiles" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "name" TEXT NOT NULL,
  "email" TEXT,
  "gradeLevel" TEXT NOT NULL,
  "createdByTeacher" BOOLEAN NOT NULL,
  "linkedUserId" TEXT UNIQUE,
  "generatedCredential" TEXT
);

CREATE TABLE "student_enrollments" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "classroomId" TEXT NOT NULL,
  "studentId" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "joinedAt" TIMESTAMP(3),
  CONSTRAINT "student_enrollments_classroom_student_unique" UNIQUE ("classroomId", "studentId")
);

CREATE TABLE "classroom_meetings" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "metadata" JSONB,
  "classroomId" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "scheduledAt" TIMESTAMP(3) NOT NULL,
  "meetingUrl" TEXT NOT NULL,
  "createdByTeacherId" TEXT NOT NULL
);

ALTER TABLE "classrooms"
  ADD CONSTRAINT "classrooms_learningPathId_fkey"
  FOREIGN KEY ("learningPathId") REFERENCES "learning_paths"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "student_enrollments"
  ADD CONSTRAINT "student_enrollments_classroomId_fkey"
  FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "student_enrollments"
  ADD CONSTRAINT "student_enrollments_studentId_fkey"
  FOREIGN KEY ("studentId") REFERENCES "classroom_student_profiles"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "classroom_meetings"
  ADD CONSTRAINT "classroom_meetings_classroomId_fkey"
  FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
