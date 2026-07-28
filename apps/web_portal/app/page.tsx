import { headers } from "next/headers";
import { marcaPorHost } from "@cumbre/brands";
import { LandingPage } from "@/features/landing/landing-page";
import { LandingEditorial } from "@/features/landing/landing-editorial";
import { getActivePortalSession } from "@/lib/session-bridge";

/**
 * La portada la elige la marca, no un condicional con el nombre de una
 * academia dentro. Sumar una institución es decir cuál de las dos quiere
 * en `packages/brands`, sin tocar este archivo.
 */
export default async function HomePage() {
  const activeSession = await getActivePortalSession();
  const marca = marcaPorHost((await headers()).get("host"));
  const destino = activeSession?.target ?? null;

  return marca.landing === "editorial" ? (
    <LandingEditorial activeTarget={destino} marca={marca} />
  ) : (
    <LandingPage activeTarget={destino} marca={marca} />
  );
}
