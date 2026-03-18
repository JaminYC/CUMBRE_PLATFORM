import { TeacherExamsWorkspace } from "@/features/exams/teacher-exams-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function ExamsPage() {
  await requireTeacherSession(["assessment:write"]);
  return <TeacherExamsWorkspace />;
}
