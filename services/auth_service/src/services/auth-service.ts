import { randomBytes } from "node:crypto";
import {
  DomainError,
  NotFoundError,
  UnauthorizedError
} from "@cumbre/api-runtime";
import type { AuthUser } from "../generated/prisma/index.js";
import type { AuthService as AuthServiceContract } from "@cumbre/sdk";
import type {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthSignupRequest,
  AuthSignupResponse,
  GetCurrentUserRequest,
  GetCurrentUserResponse,
  RefreshSessionRequest,
  RefreshSessionResponse,
  RevokeSessionRequest,
  RevokeSessionResponse,
  ValidateAccessTokenRequest,
  ValidateAccessTokenResponse
} from "@cumbre/schemas";
import type { UserProfile, UserRole } from "@cumbre/types";
import type { AuthServiceConfig } from "../config/env.js";
import {
  toAuthenticatedSession,
  toDerivedProfiles,
  toDomainUser
} from "../models/user-mappers.js";
import { SessionRepository } from "../repositories/session-repository.js";
import { UserRepository } from "../repositories/user-repository.js";
import { generateOpaqueToken, hashOpaqueToken } from "../utils/credentials.js";
import { LoginThrottle } from "../utils/login-throttle.js";
import type { Logger } from "../utils/logger.js";

/** Vigencia del enlace de recuperación. Corto a propósito. */
const MINUTOS_VIGENCIA_REINICIO = 30;

export class AuthApplicationService implements AuthServiceContract {
  private readonly throttle = new LoginThrottle();

  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly logger: Logger,
    private readonly config: AuthServiceConfig
  ) {}

  async signup(
    request: AuthSignupRequest
  ): Promise<AuthSignupResponse> {
    const existingUser = await this.userRepository.findByEmail(request.email);

    if (existingUser) {
      throw new DomainError(
        "A user with this email already exists.",
        "CONFLICT",
        409
      );
    }

    const user = await this.userRepository.create(request);
    const session = await this.issueSession(user);

    this.logger.info("Created auth user record", {
      userId: user.id,
      role: request.requestedRole ?? "student"
    });

    return {
      user,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      expiresAt: session.accessTokenExpiresAt,
      refreshExpiresAt: session.refreshTokenExpiresAt
    };
  }

  async authenticate(
    request: AuthLoginRequest
  ): Promise<AuthLoginResponse> {
    // Antes de tocar la base: si la cuenta está bloqueada, se corta acá.
    const espera = this.throttle.segundosRestantes(request.identifier);

    if (espera !== null) {
      const minutos = Math.ceil(espera / 60);
      this.logger.info("Intento sobre cuenta bloqueada", {
        identifier: request.identifier,
        segundosRestantes: espera
      });
      throw new DomainError(
        `Demasiados intentos fallidos. Vuelve a intentar en ${minutos} ${
          minutos === 1 ? "minuto" : "minutos"
        }.`,
        "TOO_MANY_ATTEMPTS",
        429
      );
    }

    const record = await this.userRepository.credentialsMatch(
      request.identifier,
      request.credential
    );

    if (!record) {
      const seBloqueo = this.throttle.registrarFallo(request.identifier);

      if (seBloqueo) {
        this.logger.info("Cuenta bloqueada por intentos fallidos", {
          identifier: request.identifier
        });
      }

      throw new DomainError(
        "The provided credentials are invalid.",
        "INVALID_CREDENTIALS",
        401
      );
    }

    this.throttle.registrarExito(request.identifier);

    const user = toDomainUser(record);

    if (
      request.requestedRole &&
      !user.roles.includes(request.requestedRole)
    ) {
      throw new DomainError(
        "The requested role is not available for this account.",
        "ROLE_NOT_ALLOWED",
        403
      );
    }

    const session = await this.issueSession(user, request.deviceId);

    this.logger.info("Authenticated auth user record", {
      userId: user.id,
      identifier: request.identifier,
      requestedRole: request.requestedRole ?? user.primaryRole
    });

    return {
      user,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      expiresAt: session.accessTokenExpiresAt,
      refreshExpiresAt: session.refreshTokenExpiresAt
    };
  }

  async refreshSession(
    request: RefreshSessionRequest
  ): Promise<RefreshSessionResponse> {
    const record = await this.sessionRepository.findByRefreshToken(
      request.refreshToken
    );

    if (!record || record.revokedAt) {
      throw new UnauthorizedError("The refresh token is invalid or revoked.");
    }

    if (record.refreshTokenExpiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedError("The refresh token has expired.");
    }

    const rotated = await this.sessionRepository.rotateSession(
      record.id,
      this.buildAccessTokenExpiry(),
      this.buildRefreshTokenExpiry()
    );

    return {
      accessToken: rotated.tokens.accessToken,
      refreshToken: rotated.tokens.refreshToken,
      expiresAt: rotated.record.accessTokenExpiresAt.toISOString(),
      refreshExpiresAt: rotated.record.refreshTokenExpiresAt.toISOString()
    };
  }

  async revokeSession(
    request: RevokeSessionRequest
  ): Promise<RevokeSessionResponse> {
    const record = await this.sessionRepository.revokeByRefreshToken(
      request.refreshToken
    );

    if (!record) {
      throw new NotFoundError("The session to revoke was not found.");
    }

    return {
      revoked: true,
      revokedAt: record.revokedAt?.toISOString() ?? this.buildTimestamp()
    };
  }

  async getCurrentUser(
    request: GetCurrentUserRequest
  ): Promise<GetCurrentUserResponse> {
    const record = request.userId
      ? await this.userRepository.findRecordById(request.userId)
      : await this.userRepository.findFirstRecord();

    if (!record) {
      throw new NotFoundError("No auth user record was found.");
    }

    return {
      user: toDomainUser(record),
      profiles: this.buildProfiles(record)
    };
  }

  async setUserRole(accessToken: string, role: string): Promise<void> {
    if (role !== "student" && role !== "teacher") {
      throw new DomainError("Invalid role for self-assignment.", "INVALID_ROLE", 400);
    }

    const record = await this.sessionRepository.findByAccessToken(accessToken);

    if (!record || record.revokedAt) {
      throw new UnauthorizedError("The access token is invalid or revoked.");
    }

    if (record.accessTokenExpiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedError("The access token has expired.");
    }

    await this.userRepository.updatePrimaryRole(record.userId, role as "student" | "teacher");
  }

  async validateAccessToken(
    request: ValidateAccessTokenRequest
  ): Promise<ValidateAccessTokenResponse> {
    const record = await this.sessionRepository.findByAccessToken(
      request.accessToken
    );

    if (!record || record.revokedAt) {
      throw new UnauthorizedError("The access token is invalid or revoked.");
    }

    if (record.accessTokenExpiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedError("The access token has expired.");
    }

    const userRecord = await this.userRepository.findRecordById(record.userId);

    if (!userRecord) {
      throw new UnauthorizedError("The session user could not be resolved.");
    }

    await this.sessionRepository.markUsed(record.id);

    return {
      session: toAuthenticatedSession(record),
      user: toDomainUser(userRecord),
      profiles: this.buildProfiles(userRecord)
    };
  }

  /* ── Gestión de usuarios (panel administrativo) ────────────────────── */

  /**
   * Resuelve la institución de quien hace la petición y comprueba que la
   * cuenta sobre la que quiere actuar sea de la misma.
   *
   * Se responde "no existe" —y no "no tienes permiso"— cuando la cuenta
   * es de otra academia: confirmar que existe ya filtraría información
   * sobre los usuarios de un tercero.
   */
  private async exigirMismaInstitucion(solicitanteId: string, objetivoId: string) {
    const propio = await this.userRepository.obtenerTenant(solicitanteId);

    if (!propio) {
      throw new NotFoundError("La cuenta no existe.");
    }

    const ajeno = await this.userRepository.obtenerTenant(objetivoId);

    if (ajeno !== propio) {
      this.logger.warn("Intento de acceso a una cuenta de otra institución", {
        solicitanteId,
        objetivoId
      });
      throw new NotFoundError("La cuenta no existe.");
    }

    return propio;
  }

  /**
   * Alta de una cuenta desde el panel administrativo.
   *
   * A diferencia de `signup`, la institución no viene en la petición: se
   * hereda de quien está creando la cuenta. Así el panel de una academia
   * no puede dar de alta gente en otra, ni por error ni a propósito.
   */
  async crearUsuarioEnMiInstitucion(
    solicitanteId: string,
    datos: { displayName: string; email: string; credential: string; requestedRole?: UserRole }
  ) {
    const tenant = await this.userRepository.obtenerTenant(solicitanteId);

    if (!tenant) {
      throw new NotFoundError("La cuenta no existe.");
    }

    const existente = await this.userRepository.findByEmail(datos.email);

    if (existente) {
      throw new DomainError(
        "A user with this email already exists.",
        "CONFLICT",
        409
      );
    }

    const usuario = await this.userRepository.create({ ...datos, tenant });

    this.logger.info("Cuenta creada desde el panel", {
      userId: usuario.id,
      tenant,
      creadaPor: solicitanteId
    });

    return { user: usuario };
  }

  async listarUsuarios(
    solicitanteId: string,
    filtro?: { rol?: string; busqueda?: string }
  ) {
    const tenant = await this.userRepository.obtenerTenant(solicitanteId);

    if (!tenant) {
      throw new NotFoundError("La cuenta no existe.");
    }

    const usuarios = await this.userRepository.listarUsuarios({ ...filtro, tenant });

    return {
      usuarios,
      total: usuarios.length,
      porRol: usuarios.reduce<Record<string, number>>((acumulado, u) => {
        acumulado[u.rol] = (acumulado[u.rol] ?? 0) + 1;
        return acumulado;
      }, {})
    };
  }

  /**
   * Genera una contraseña temporal para una cuenta.
   *
   * Es la salida cuando no hay servicio de correo: Dirección la genera, se
   * la dicta a la persona y esta entra. Se muestra una sola vez.
   *
   * Formato pensado para dictarse por teléfono: sin caracteres que se
   * confundan al hablar (ni 0/O, ni 1/l/I).
   */
  async generarContrasenaTemporal(
    solicitanteId: string,
    id: string
  ): Promise<{ contrasenaTemporal: string; nombre: string }> {
    const tenant = await this.exigirMismaInstitucion(solicitanteId, id);
    const record = await this.userRepository.findRecordById(id);

    if (!record) {
      throw new NotFoundError("La cuenta no existe.");
    }

    const alfabeto = "abcdefghjkmnpqrstuvwxyz";
    const digitos = "23456789";
    const azar = randomBytes(10);

    let parte = "";
    for (let i = 0; i < 4; i += 1) {
      parte += alfabeto[azar[i] % alfabeto.length];
    }
    for (let i = 4; i < 7; i += 1) {
      parte += digitos[azar[i] % digitos.length];
    }

    /* El prefijo estaba fijo en "Bryce-": una clave generada desde el
       panel de CUMBRE salía con la marca de otro cliente. Sale de la
       institución de la cuenta. */
    const prefijo = tenant.charAt(0).toUpperCase() + tenant.slice(1);
    const contrasenaTemporal = `${prefijo}-${parte}`;

    await this.userRepository.aplicarNuevaContrasena(id, contrasenaTemporal);
    await this.sessionRepository.revokeAllForUser(id);

    if (record.email) {
      this.throttle.registrarExito(record.email);
    }

    this.logger.info("Contraseña temporal generada por administración", {
      userId: id
    });

    return { contrasenaTemporal, nombre: record.displayName };
  }

  async cambiarEstadoDeUsuario(
    solicitanteId: string,
    id: string,
    estado: "active" | "suspended"
  ): Promise<{ actualizado: true; estado: string }> {
    await this.exigirMismaInstitucion(solicitanteId, id);

    const record = await this.userRepository.findRecordById(id);

    if (!record) {
      throw new NotFoundError("La cuenta no existe.");
    }

    await this.userRepository.cambiarEstado(id, estado);

    // Suspender cierra las sesiones abiertas: si no, seguiría dentro.
    if (estado === "suspended") {
      await this.sessionRepository.revokeAllForUser(id);
    }

    this.logger.info("Estado de cuenta cambiado", { userId: id, estado });

    return { actualizado: true, estado };
  }

  /* ── Recuperación de contraseña ────────────────────────────────────── */

  /**
   * Genera un enlace de recuperación.
   *
   * Responde igual exista o no la cuenta: si dijera "ese correo no existe"
   * cualquiera podría averiguar qué correos están registrados.
   *
   * El token viaja en el resultado solo cuando no hay servicio de correo
   * configurado (desarrollo). En producción se envía por correo y nunca
   * vuelve en la respuesta.
   */
  async solicitarReinicioDeContrasena(
    email: string
  ): Promise<{ enviado: true; token?: string; expiraEn?: string }> {
    const record = await this.userRepository.findRecordByEmail(email);

    if (!record) {
      this.logger.info("Recuperación pedida para correo inexistente", { email });
      return { enviado: true };
    }

    const token = generateOpaqueToken();
    const expiraEn = new Date(
      Date.now() + MINUTOS_VIGENCIA_REINICIO * 60 * 1000
    );

    await this.userRepository.guardarTokenDeReinicio(
      record.id,
      hashOpaqueToken(token),
      expiraEn
    );

    this.logger.info("Token de recuperación emitido", {
      userId: record.id,
      expiraEn: expiraEn.toISOString()
    });

    // TODO(correo): cuando haya proveedor configurado, enviar el enlace acá
    // y dejar de devolver el token.
    return {
      enviado: true,
      token,
      expiraEn: expiraEn.toISOString()
    };
  }

  /** Consume el token y fija la nueva contraseña. */
  async reiniciarContrasena(
    token: string,
    credential: string
  ): Promise<{ actualizado: true }> {
    if (credential.length < 8) {
      throw new DomainError(
        "La contraseña debe tener al menos 8 caracteres.",
        "WEAK_CREDENTIAL",
        400
      );
    }

    const record = await this.userRepository.buscarPorTokenDeReinicio(
      hashOpaqueToken(token)
    );

    if (!record) {
      throw new DomainError(
        "El enlace no es válido o ya fue usado.",
        "INVALID_RESET_TOKEN",
        400
      );
    }

    const metadata = record.metadata as
      | { reinicioContrasena?: { expiraEn?: string } }
      | null;
    const expiraEn = metadata?.reinicioContrasena?.expiraEn;

    if (!expiraEn || new Date(expiraEn).getTime() <= Date.now()) {
      throw new DomainError(
        "El enlace expiró. Pide uno nuevo.",
        "EXPIRED_RESET_TOKEN",
        400
      );
    }

    await this.userRepository.aplicarNuevaContrasena(record.id, credential);

    // Cambiar la contraseña cierra las sesiones abiertas: si alguien había
    // entrado con la contraseña vieja, queda afuera.
    await this.sessionRepository.revokeAllForUser(record.id);

    // Y libera el bloqueo por intentos fallidos, que es lo que suele
    // llevar a la persona a recuperar la contraseña.
    if (record.email) {
      this.throttle.registrarExito(record.email);
    }

    this.logger.info("Contraseña restablecida", { userId: record.id });

    return { actualizado: true };
  }

  private async issueSession(user: ReturnType<typeof toDomainUser>, deviceId?: string) {
    const accessTokenExpiresAt = this.buildAccessTokenExpiry();
    const refreshTokenExpiresAt = this.buildRefreshTokenExpiry();
    const session = await this.sessionRepository.create({
      user,
      accessTokenExpiresAt,
      refreshTokenExpiresAt,
      deviceId
    });

    return {
      accessToken: session.tokens.accessToken,
      refreshToken: session.tokens.refreshToken,
      accessTokenExpiresAt: session.record.accessTokenExpiresAt.toISOString(),
      refreshTokenExpiresAt: session.record.refreshTokenExpiresAt.toISOString()
    };
  }

  private buildTimestamp(): string {
    return new Date().toISOString();
  }

  private buildAccessTokenExpiry() {
    return new Date(
      Date.now() + this.config.authAccessTokenTtlMinutes * 60 * 1000
    );
  }

  private buildRefreshTokenExpiry() {
    return new Date(
      Date.now() + this.config.authRefreshTokenTtlDays * 24 * 60 * 60 * 1000
    );
  }

  private buildProfiles(record: AuthUser): UserProfile[] {
    return toDerivedProfiles(record);
  }
}
