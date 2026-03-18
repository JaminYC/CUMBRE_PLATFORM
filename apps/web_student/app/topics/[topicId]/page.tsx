import { TopicDetailView } from "@/features/content/topic-detail-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function TopicDetailPage({
  params
}: {
  params: Promise<{ topicId: string }>;
}) {
  await requireStudentSession();
  const { topicId } = await params;
  return <TopicDetailView topicId={topicId} />;
}
