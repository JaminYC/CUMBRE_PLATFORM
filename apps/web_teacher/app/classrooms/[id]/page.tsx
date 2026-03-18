import { TeacherClassroomDetailWorkspace } from "@/features/classrooms/teacher-classroom-detail-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function ClassroomDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  await requireTeacherSession(["classroom:manage"]);
  const { id } = await params;

  return <TeacherClassroomDetailWorkspace classroomId={id} />;
}
