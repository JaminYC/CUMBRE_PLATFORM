import { LandingPage } from "@/features/landing/landing-page";
import { getActivePortalSession } from "@/lib/session-bridge";

export default async function HomePage() {
  const activeSession = await getActivePortalSession();
  return <LandingPage activeTarget={activeSession?.target ?? null} />;
}
