import { JoinClassroomView } from "@/features/classroom/join-classroom-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function JoinClassPage() {
  await requireStudentSession(["classroom:join"]);
  return <JoinClassroomView />;
}
