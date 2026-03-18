import { TeacherClassroomsWorkspace } from "@/features/classrooms/teacher-classrooms-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function ClassroomsPage() {
  await requireTeacherSession(["classroom:manage"]);
  return <TeacherClassroomsWorkspace />;
}
