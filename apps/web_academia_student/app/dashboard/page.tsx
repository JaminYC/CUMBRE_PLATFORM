import { DashboardOverview } from "@/features/dashboard/dashboard-overview";
import { requireStudentSession } from "@/lib/server-session";

export default async function DashboardPage() {
  await requireStudentSession();
  return <DashboardOverview />;
}
