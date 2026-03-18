import { ClassroomMeetingsView } from "@/features/classroom/classroom-meetings-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function ClassroomMeetingsPage() {
  await requireStudentSession(["learning:read"]);
  return <ClassroomMeetingsView />;
}
