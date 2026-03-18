import { ClassroomModulesView } from "@/features/classroom/classroom-modules-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function ClassroomModulesPage() {
  await requireStudentSession(["learning:read"]);
  return <ClassroomModulesView />;
}
