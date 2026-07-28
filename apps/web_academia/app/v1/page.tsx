import { LandingPage } from "@/features/landing/landing-page";
import { getActivePortalSession } from "@/lib/session-bridge";

/* Version navy, conservada para comparar. La principal es la editorial. */
export default async function NavyLandingPage() {
  const activeSession = await getActivePortalSession();
  return <LandingPage activeTarget={activeSession?.target ?? null} />;
}
