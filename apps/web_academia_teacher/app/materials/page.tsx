import { TeacherMaterialsWorkspace } from "@/features/materials/teacher-materials-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function MaterialsPage() {
  await requireTeacherSession(["material:write"]);
  return <TeacherMaterialsWorkspace />;
}
