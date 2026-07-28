import { NextRequest, NextResponse } from "next/server";
import { errorResponse, successResponse } from "@cumbre/app-runtime";
import { marcaPorHost } from "@cumbre/brands";
import { applyPortalRoleSession, bridgePortalLoginToRoleApp } from "@/lib/session-bridge";
import { signupFromPortal } from "@/services/server/auth-server";

export async function POST(request: NextRequest) {
  try {
    /* No todas las instituciones permiten que alguien se cree una cuenta
       solo. En una academia, las cuentas las da Dirección: un registro
       abierto significaria gente al azar en la lista de estudiantes de un
       cliente que paga.

       La comprobacion va aqui y no solo en la interfaz, porque esconder el
       enlace no impide que alguien llame directamente a la ruta. */
    const marca = marcaPorHost(request.headers.get("host"));

    if (!marca.permiteRegistroPublico) {
      /* Se arma a mano y no con `errorResponse`, que solo recibe el error y
         siempre responderia 500. Esto no es un fallo del servidor: es una
         peticion que no corresponde. */
      return NextResponse.json(
        {
          success: false as const,
          error: {
            code: "SIGNUP_DISABLED",
            message: `${marca.nombre} no permite crear cuentas desde aquí. Solicítala a la institución.`
          }
        },
        { status: 403 }
      );
    }

    const payload = await request.json();
    const authResponse = await signupFromPortal(payload);
    const bridged = await bridgePortalLoginToRoleApp(authResponse);
    const appResponse = successResponse({
      redirectTo: bridged.redirectTo,
      role: authResponse.user.primaryRole,
      roleLabel: bridged.target.label
    });

    applyPortalRoleSession(appResponse, bridged);

    return appResponse;
  } catch (error) {
    return errorResponse(error);
  }
}
