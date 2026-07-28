import { TeacherModuleBuilderWorkspace } from "@/features/module-builder/teacher-module-builder-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function ModuleBuilderPage() {
  await requireTeacherSession(["material:write"]);
  return <TeacherModuleBuilderWorkspace />;
}
