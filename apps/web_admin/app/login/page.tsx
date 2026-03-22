import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/server-session";
import { adminAppConfig } from "@/lib/env";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  redirect(`${adminAppConfig.portalUrl}/login`);
}
