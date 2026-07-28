import { AdminDashboard } from "@/features/dashboard/admin-dashboard";
import { requireAdminSession } from "@/lib/server-session";

export default async function DashboardPage() {
  await requireAdminSession(["analytics:read"]);
  return <AdminDashboard />;
}
