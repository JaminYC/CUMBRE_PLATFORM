import { ClassroomWorkspaceView } from "@/features/classroom/classroom-workspace-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function ClassroomPage() {
  await requireStudentSession(["learning:read"]);
  return <ClassroomWorkspaceView />;
}
