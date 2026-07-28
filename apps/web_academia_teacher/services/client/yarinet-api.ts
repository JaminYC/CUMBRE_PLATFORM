"use client";

import { requestAppApi } from "@/lib/app-http";
import type { ChallengeView } from "@/services/server/yarinet-server";

export type { ChallengeView };

export interface CreateChallengeInput {
  title: string;
  problemStatement: string;
  category: string;
  context?: string;
  gradeLevel?: string;
  guidingQuestions?: string[];
}

export function fetchTeacherChallenges() {
  return requestAppApi<{ items: ChallengeView[] }>("/api/teacher/yarinet/challenges");
}

export function createTeacherChallenge(input: CreateChallengeInput) {
  return requestAppApi<ChallengeView>("/api/teacher/yarinet/challenges", {
    method: "POST",
    body: JSON.stringify(input)
  });
}
