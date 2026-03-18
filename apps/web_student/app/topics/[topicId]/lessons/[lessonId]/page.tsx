import { LessonDetailView } from "@/features/content/lesson-detail-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function LessonDetailPage({
  params
}: {
  params: Promise<{ topicId: string; lessonId: string }>;
}) {
  await requireStudentSession();
  const { topicId, lessonId } = await params;
  return <LessonDetailView topicId={topicId} lessonId={lessonId} />;
}
