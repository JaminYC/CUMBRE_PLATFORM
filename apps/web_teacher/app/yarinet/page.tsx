import { TeacherYariNetWorkspace } from "@/features/yarinet/teacher-yarinet-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function YariNetPage() {
  await requireTeacherSession(["challenge:manage"]);
  return <TeacherYariNetWorkspace />;
}
