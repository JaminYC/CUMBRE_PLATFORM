import { TeacherDashboard } from "@/features/dashboard/teacher-dashboard";
import { requireTeacherSession } from "@/lib/server-session";

export default async function DashboardPage() {
  await requireTeacherSession(["analytics:read"]);
  return <TeacherDashboard />;
}
