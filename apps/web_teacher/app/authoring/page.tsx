import { TeacherAuthoringWorkspace } from "@/features/authoring/teacher-authoring-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function AuthoringPage() {
  await requireTeacherSession(["content:write", "lesson:edit"]);
  return <TeacherAuthoringWorkspace />;
}
