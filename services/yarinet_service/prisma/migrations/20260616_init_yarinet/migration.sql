-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "ChallengeStatus" AS ENUM ('DRAFT', 'OPEN', 'DELIBERATING', 'SYNTHESIZING', 'CLOSED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ForumStatus" AS ENUM ('ACTIVE', 'PAUSED', 'LOCKED', 'CLOSED');

-- CreateEnum
CREATE TYPE "MessageAuthorType" AS ENUM ('STUDENT', 'TEACHER', 'AI', 'SYSTEM');

-- CreateEnum
CREATE TYPE "AgentRole" AS ENUM ('MODERATOR', 'FACT_CHECKER', 'SYNTHESIZER');

-- CreateEnum
CREATE TYPE "ModerationStatus" AS ENUM ('VISIBLE', 'FLAGGED', 'HIDDEN', 'PENDING');

-- CreateEnum
CREATE TYPE "FactVerdict" AS ENUM ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'DISPUTED', 'UNSUPPORTED', 'UNVERIFIED');

-- CreateEnum
CREATE TYPE "ProposalStatus" AS ENUM ('DRAFT', 'UNDER_REVIEW', 'APPROVED', 'PUBLISHED', 'REJECTED');

-- CreateTable
CREATE TABLE "civic_challenges" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "teacherId" TEXT NOT NULL,
    "classroomId" TEXT,
    "title" TEXT NOT NULL,
    "problemStatement" TEXT NOT NULL,
    "context" TEXT,
    "category" TEXT NOT NULL,
    "gradeLevel" TEXT,
    "status" "ChallengeStatus" NOT NULL DEFAULT 'DRAFT',
    "guidingQuestions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "rubric" JSONB,
    "opensAt" TIMESTAMP(3),
    "closesAt" TIMESTAMP(3),

    CONSTRAINT "civic_challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debate_forums" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "challengeId" TEXT NOT NULL,
    "status" "ForumStatus" NOT NULL DEFAULT 'ACTIVE',
    "moderationLevel" TEXT NOT NULL DEFAULT 'standard',
    "messageCount" INTEGER NOT NULL DEFAULT 0,
    "lastActivityAt" TIMESTAMP(3),

    CONSTRAINT "debate_forums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forum_participants" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "forumId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "stance" TEXT,
    "messagesSent" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "forum_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forum_messages" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "forumId" TEXT NOT NULL,
    "authorType" "MessageAuthorType" NOT NULL,
    "authorId" TEXT,
    "agentRole" "AgentRole",
    "body" TEXT NOT NULL,
    "replyToId" TEXT,
    "moderationStatus" "ModerationStatus" NOT NULL DEFAULT 'VISIBLE',
    "flaggedReason" TEXT,

    CONSTRAINT "forum_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fact_check_citations" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "messageId" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "sourceTitle" TEXT,
    "claim" TEXT NOT NULL,
    "verdict" "FactVerdict" NOT NULL DEFAULT 'UNVERIFIED',
    "confidence" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rationale" TEXT,
    "supportingSources" JSONB,

    CONSTRAINT "fact_check_citations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "citizen_proposals" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,
    "challengeId" TEXT NOT NULL,
    "generatedByAgent" BOOLEAN NOT NULL DEFAULT true,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "problemRestatement" TEXT NOT NULL,
    "proposedActions" JSONB NOT NULL,
    "agreements" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tensions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "citedMessageIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" "ProposalStatus" NOT NULL DEFAULT 'DRAFT',
    "approvedByTeacherId" TEXT,

    CONSTRAINT "citizen_proposals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "civic_challenges_teacherId_idx" ON "civic_challenges"("teacherId");

-- CreateIndex
CREATE INDEX "civic_challenges_classroomId_idx" ON "civic_challenges"("classroomId");

-- CreateIndex
CREATE UNIQUE INDEX "debate_forums_challengeId_key" ON "debate_forums"("challengeId");

-- CreateIndex
CREATE UNIQUE INDEX "forum_participants_forumId_studentId_key" ON "forum_participants"("forumId", "studentId");

-- CreateIndex
CREATE INDEX "forum_messages_forumId_createdAt_idx" ON "forum_messages"("forumId", "createdAt");

-- CreateIndex
CREATE INDEX "fact_check_citations_messageId_idx" ON "fact_check_citations"("messageId");

-- CreateIndex
CREATE INDEX "citizen_proposals_challengeId_idx" ON "citizen_proposals"("challengeId");

-- AddForeignKey
ALTER TABLE "debate_forums" ADD CONSTRAINT "debate_forums_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "civic_challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forum_participants" ADD CONSTRAINT "forum_participants_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "debate_forums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forum_messages" ADD CONSTRAINT "forum_messages_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "debate_forums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forum_messages" ADD CONSTRAINT "forum_messages_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "forum_messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fact_check_citations" ADD CONSTRAINT "fact_check_citations_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "forum_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citizen_proposals" ADD CONSTRAINT "citizen_proposals_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "civic_challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

