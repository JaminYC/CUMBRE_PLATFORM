import type { CreateChallengeRequest } from "@cumbre/schemas";
import { fetchBackendData } from "@/lib/backend-http";

export interface ChallengeView {
  id: string;
  teacherId: string;
  classroomId: string | null;
  title: string;
  problemStatement: string;
  context: string | null;
  category: string;
  gradeLevel: string | null;
  status: string;
  guidingQuestions: string[];
  opensAt: string | null;
  closesAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export function listTeacherChallenges(teacherId: string) {
  const query = new URLSearchParams({ teacherId });
  return fetchBackendData<{ items: ChallengeView[] }>(
    "yarinet",
    `/challenges?${query.toString()}`
  );
}

export function createChallenge(request: CreateChallengeRequest) {
  return fetchBackendData<ChallengeView>("yarinet", "/challenges", {
    method: "POST",
    body: JSON.stringify(request)
  });
}
