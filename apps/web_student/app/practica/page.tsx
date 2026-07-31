import { PracticaWorkspace } from "@/features/practica/practica-workspace";
import { requireStudentSession } from "@/lib/server-session";

export default async function PracticaPage() {
  await requireStudentSession();
  return <PracticaWorkspace />;
}
