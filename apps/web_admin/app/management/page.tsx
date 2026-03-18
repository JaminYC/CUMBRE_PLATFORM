import { AdminManagementWorkspace } from "@/features/management/admin-management-workspace";
import { requireAdminSession } from "@/lib/server-session";

export default async function ManagementPage() {
  await requireAdminSession(["graph:manage"]);
  return <AdminManagementWorkspace />;
}
