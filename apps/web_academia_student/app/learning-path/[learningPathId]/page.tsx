import { LearningPathView } from "@/features/learning/learning-path-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function LearningPathPage({
  params
}: {
  params: Promise<{ learningPathId: string }>;
}) {
  await requireStudentSession();
  const { learningPathId } = await params;
  return <LearningPathView learningPathId={learningPathId} />;
}
