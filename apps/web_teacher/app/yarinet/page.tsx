import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { marcaPorHost } from "@cumbre/brands";
import { TeacherYariNetWorkspace } from "@/features/yarinet/teacher-yarinet-workspace";
import { requireTeacherSession } from "@/lib/server-session";

export default async function YariNetPage() {
  /* La marca se comprueba ANTES que la sesion, a proposito.

     Si la institucion no tiene esta funcion, la pagina no existe para nadie
     —tenga sesion o no—, asi que un 404 no deberia depender de haber
     iniciado sesion. Al reves se filtraria que la pantalla existe: quien
     escriba la direccion recibiria "ve a identificarte" en lugar de "aqui
     no hay nada".

     Y hace falta comprobarlo aqui aunque el menu ya no muestre la entrada:
     esconder un enlace no impide escribir la direccion a mano, y esta
     pantalla necesita un servicio que todavia no esta desplegado. Sin esto,
     quien llegara veria la pagina cargar y los datos fallar con
     "fetch failed". Mismo criterio que el registro publico. */
  const marca = marcaPorHost((await headers()).get("host"));

  if (!marca.funcionalidades.yarinet) {
    notFound();
  }

  await requireTeacherSession(["challenge:manage"]);

  return <TeacherYariNetWorkspace />;
}
