import { ProgressView } from "@/features/progress/progress-view";
import { requireStudentSession } from "@/lib/server-session";

export default async function ProgressPage() {
  await requireStudentSession();
  return <ProgressView />;
}
