import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { marcaPorHost } from "@cumbre/brands";
import { getActivePortalSession } from "@/lib/session-bridge";
import { SignupForm } from "@/features/auth/signup-form";

export default async function SignupPage() {
  const session = await getActivePortalSession();

  if (session) {
    redirect(session.redirectTo);
  }

  /* Si la institución no abre el registro, esta página no existe para ella.
     Se manda al acceso, que ya explica a quién pedirle la cuenta — mejor
     que un formulario que va a fallar recién al enviarlo. */
  const marca = marcaPorHost((await headers()).get("host"));

  if (!marca.permiteRegistroPublico) {
    redirect("/login");
  }

  return <SignupForm />;
}
