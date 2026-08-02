import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { marcaPorHost, portalDeMarca } from "@cumbre/brands";
import { getServerSession } from "@/lib/server-session";
import { LoginForm } from "@/features/auth/login-form";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  /*
   * Puerta unica: quien llega sin sesion va al portal de SU institucion, que
   * es quien autentica y reparte por rol. El portal sale de la marca y la
   * marca del host, asi que alguien de Bryce nunca acaba en la puerta de
   * CUMBRE —que es justo lo que pasaba cuando el destino salia de una variable
   * de entorno global.
   *
   * Esto estaba apagado por defecto y cada aplicacion dibujaba su propio
   * acceso. Cuatro pantallas para lo mismo son cuatro sitios donde arreglar
   * cada cosa, y derivaron: la del alumno llevaba tiempo sin una sola regla de
   * estilo, porque se copio el componente del portal sin traer su CSS y nadie
   * lo noto.
   *
   * Queda la salida `AUTH_USE_PORTAL=false` para volver al acceso propio de la
   * aplicacion, que sigue funcionando y es util para depurar sin levantar el
   * portal.
   */
  if (process.env.AUTH_USE_PORTAL !== "false") {
    const marca = marcaPorHost((await headers()).get("host"));
    redirect(`${portalDeMarca(marca)}/login`);
  }

  return <LoginForm />;
}
