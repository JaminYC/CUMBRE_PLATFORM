import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/server-session";
import { teacherAppConfig } from "@/lib/env";
import { LoginForm } from "@/features/auth/login-form";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  // Self-contained login by default: each role app authenticates against its own
  // /api/auth/login. Opt into the central portal's single sign-on by setting
  // AUTH_USE_PORTAL=true (e.g. in production behind the portal).
  if (process.env.AUTH_USE_PORTAL === "true") {
    redirect(`${teacherAppConfig.portalUrl}/login`);
  }

  return <LoginForm />;
}
