import { LandingEditorial } from "@/features/landing/landing-editorial";
import { getActivePortalSession } from "@/lib/session-bridge";

export default async function HomePage() {
  const activeSession = await getActivePortalSession();
  return <LandingEditorial activeTarget={activeSession?.target ?? null} />;
}
