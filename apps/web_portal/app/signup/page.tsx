import { redirect } from "next/navigation";
import { getActivePortalSession } from "@/lib/session-bridge";
import { SignupForm } from "@/features/auth/signup-form";

export default async function SignupPage() {
  const session = await getActivePortalSession();

  if (session) {
    redirect(session.redirectTo);
  }

  return <SignupForm />;
}
