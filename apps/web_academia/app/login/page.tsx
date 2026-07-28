import { redirect } from "next/navigation";
import { LoginForm } from "@/features/auth/login-form";
import { getActivePortalSession } from "@/lib/session-bridge";

export default async function LoginPage() {
  const activeSession = await getActivePortalSession();

  if (activeSession) {
    redirect(activeSession.redirectTo);
  }

  return <LoginForm />;
}
