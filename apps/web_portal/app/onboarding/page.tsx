import { redirect } from "next/navigation";
import { getActivePortalSession } from "@/lib/session-bridge";
import { OnboardingForm } from "@/features/auth/onboarding-form";

export default async function OnboardingPage() {
  const activeSession = await getActivePortalSession();

  if (!activeSession) {
    redirect("/login");
  }

  return <OnboardingForm />;
}
