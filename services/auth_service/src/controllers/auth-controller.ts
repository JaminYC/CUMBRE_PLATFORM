import { UnauthorizedError } from "@cumbre/api-runtime";
import type {
  AuthLoginRequest,
  AuthSignupRequest,
  GetCurrentUserRequest,
  RefreshSessionRequest,
  RevokeSessionRequest,
  ValidateAccessTokenRequest
} from "@cumbre/schemas";
import type { RequestContext } from "@cumbre/api-runtime";
import type { AuthService } from "@cumbre/sdk";

/**
 * Los dos endpoints de recuperación no están en el contrato compartido
 * `AuthService` porque son propios de este servicio. Se declaran acá.
 */
interface AuthServiceConRecuperacion extends AuthService {
  /** Tampoco está en el contrato compartido, pero el controlador lo usa. */
  setUserRole(accessToken: string, role: string): Promise<void>;
  solicitarReinicioDeContrasena(
    email: string
  ): Promise<{ enviado: true; token?: string; expiraEn?: string }>;
  reiniciarContrasena(
    token: string,
    credential: string
  ): Promise<{ actualizado: true }>;
  crearUsuarioEnMiInstitucion(
    solicitanteId: string,
    datos: {
      displayName: string;
      email: string;
      credential: string;
      requestedRole?: AuthSignupRequest["requestedRole"];
    }
  ): Promise<unknown>;
  listarUsuarios(
    solicitanteId: string,
    filtro?: { rol?: string; busqueda?: string }
  ): Promise<unknown>;
  cambiarEstadoDeUsuario(
    solicitanteId: string,
    id: string,
    estado: "active" | "suspended"
  ): Promise<{ actualizado: true; estado: string }>;
  generarContrasenaTemporal(
    solicitanteId: string,
    id: string
  ): Promise<{ contrasenaTemporal: string; nombre: string }>;
}

export class AuthController {
  constructor(private readonly authService: AuthServiceConRecuperacion) {}

  olvideContrasena = async ({ body }: RequestContext): Promise<unknown> => {
    const { email } = body as { email: string };
    return this.authService.solicitarReinicioDeContrasena(email);
  };

  restablecerContrasena = async ({ body }: RequestContext): Promise<unknown> => {
    const { token, credential } = body as { token: string; credential: string };
    return this.authService.reiniciarContrasena(token, credential);
  };

  /* La institución se toma del actor autenticado, nunca del cuerpo ni de
     la query: es lo que impide que un administrador pida los usuarios de
     otra academia cambiando un parámetro. Las rutas ya exigen sesión, así
     que `auth` no puede faltar; si faltara, es un fallo de configuración
     y conviene que reviente aquí y no que devuelva datos de más. */
  private static solicitante(auth: RequestContext["auth"]): string {
    if (!auth?.userId) {
      throw new UnauthorizedError("Se requiere una sesión activa.");
    }

    return auth.userId;
  }

  crearUsuario = async ({ body, auth }: RequestContext): Promise<unknown> => {
    return this.authService.crearUsuarioEnMiInstitucion(
      AuthController.solicitante(auth),
      body as {
        displayName: string;
        email: string;
        credential: string;
        requestedRole?: AuthSignupRequest["requestedRole"];
      }
    );
  };

  listarUsuarios = async ({ validatedQuery, auth }: RequestContext): Promise<unknown> => {
    const { rol, busqueda } = (validatedQuery ?? {}) as {
      rol?: string;
      busqueda?: string;
    };
    return this.authService.listarUsuarios(AuthController.solicitante(auth), {
      rol,
      busqueda
    });
  };

  cambiarEstadoDeUsuario = async ({ body, auth }: RequestContext): Promise<unknown> => {
    const { id, estado } = body as { id: string; estado: "active" | "suspended" };
    return this.authService.cambiarEstadoDeUsuario(
      AuthController.solicitante(auth),
      id,
      estado
    );
  };

  generarContrasenaTemporal = async ({ body, auth }: RequestContext): Promise<unknown> => {
    const { id } = body as { id: string };
    return this.authService.generarContrasenaTemporal(
      AuthController.solicitante(auth),
      id
    );
  };

  signup = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.signup(body as AuthSignupRequest);
  };

  login = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.authenticate(body as AuthLoginRequest);
  };

  refresh = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.refreshSession(body as RefreshSessionRequest);
  };

  logout = async ({ body }: RequestContext): Promise<unknown> => {
    return this.authService.revokeSession(body as RevokeSessionRequest);
  };

  me = async ({ validatedQuery }: RequestContext): Promise<unknown> => {
    return this.authService.getCurrentUser(
      validatedQuery as GetCurrentUserRequest
    );
  };

  session = async ({ req }: RequestContext): Promise<unknown> => {
    const accessToken = extractBearerToken(req.headers.authorization);

    return this.authService.validateAccessToken({
      accessToken
    } satisfies ValidateAccessTokenRequest);
  };

  setRole = async ({ req, body }: RequestContext): Promise<unknown> => {
    const accessToken = extractBearerToken(req.headers.authorization);
    const { role } = body as { role: string };
    await this.authService.setUserRole(accessToken, role);
    return { updated: true };
  };
}

function extractBearerToken(authorizationHeader: string | undefined) {
  if (!authorizationHeader?.startsWith("Bearer ")) {
    throw new UnauthorizedError("A bearer token is required.");
  }

  return authorizationHeader.slice("Bearer ".length).trim();
}
