import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/server-session";
import { teacherAppConfig } from "@/lib/env";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  redirect(`${teacherAppConfig.portalUrl}/login`);
}
