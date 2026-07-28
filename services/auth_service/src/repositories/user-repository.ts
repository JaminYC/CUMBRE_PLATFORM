import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import type { UserRole } from "@cumbre/types";
import { toDomainUser } from "../models/user-mappers.js";
import { hashCredential, verifyCredential } from "../utils/credentials.js";

/** Lo que Prisma acepta guardar dentro de una columna jsonb. */
type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface CreateUserRecordInput {
  displayName: string;
  email: string;
  credential: string;
  requestedRole?: UserRole;
  /** Institución dueña de la cuenta. Sin valor, cae en "cumbre". */
  tenant?: string;
}

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateUserRecordInput) {
    const record = await this.prisma.authUser.create({
      data: {
        id: randomUUID(),
        displayName: input.displayName,
        email: input.email,
        primaryRole: input.requestedRole ?? "student",
        roles: [input.requestedRole ?? "student"],
        status: "active",
        tenant: input.tenant ?? "cumbre",
        locale: "en-US",
        preferredLanguage: "en",
        timezone: "America/Lima",
        credentialHash: hashCredential(input.credential)
      }
    });

    return toDomainUser(record);
  }

  async findByEmail(email: string) {
    const record = await this.prisma.authUser.findUnique({
      where: { email }
    });

    return record ? toDomainUser(record) : null;
  }

  async findRecordByEmail(email: string) {
    return this.prisma.authUser.findUnique({
      where: { email }
    });
  }

  async findRecordById(id: string) {
    return this.prisma.authUser.findUnique({
      where: { id }
    });
  }

  async findFirstRecord() {
    return this.prisma.authUser.findFirst({
      orderBy: {
        createdAt: "asc"
      }
    });
  }

  async credentialsMatch(email: string, credential: string) {
    const record = await this.findRecordByEmail(email);

    if (!record) {
      return null;
    }

    return verifyCredential(credential, record.credentialHash) ? record : null;
  }

  async findOrCreateByGoogle(input: {
    googleId: string;
    email: string;
    displayName: string;
    givenName?: string;
    familyName?: string;
    avatarUrl?: string;
  }) {
    const externalRef = `google:${input.googleId}`;

    let record = await this.prisma.authUser.findFirst({
      where: { externalRef }
    });

    if (!record) {
      record = await this.prisma.authUser.findUnique({
        where: { email: input.email }
      });
    }

    let isNew = false;

    if (!record) {
      record = await this.prisma.authUser.create({
        data: {
          id: randomUUID(),
          displayName: input.displayName,
          email: input.email,
          givenName: input.givenName,
          familyName: input.familyName,
          avatarUrl: input.avatarUrl,
          externalRef,
          primaryRole: "student",
          roles: ["student"],
          status: "active",
          locale: "es-PE",
          preferredLanguage: "es",
          timezone: "America/Lima"
        }
      });
      isNew = true;
    } else if (!record.externalRef) {
      record = await this.prisma.authUser.update({
        where: { id: record.id },
        data: {
          externalRef,
          avatarUrl: input.avatarUrl ?? record.avatarUrl
        }
      });
    }

    return { record, isNew };
  }

  async updatePrimaryRole(id: string, role: UserRole) {
    await this.prisma.authUser.update({
      where: { id },
      data: { primaryRole: role, roles: [role] }
    });
  }

  /**
   * Listado para el panel administrativo.
   * Nunca devuelve `credentialHash` ni `metadata`: ahí viven el hash de la
   * contraseña y los tokens de recuperación.
   */
  async listarUsuarios(filtro: {
    /** Obligatorio: acota el listado a una sola institución. */
    tenant: string;
    rol?: string;
    busqueda?: string;
  }) {
    /* El tenant no es opcional a propósito. Si fuera un campo más del
       filtro, olvidarlo en una llamada devolvería todas las academias
       en silencio — que es justo el fallo que esto viene a cerrar. */
    const where: Record<string, unknown> = { tenant: filtro.tenant };

    if (filtro?.rol) {
      where.primaryRole = filtro.rol;
    }

    if (filtro?.busqueda) {
      where.OR = [
        { displayName: { contains: filtro.busqueda, mode: "insensitive" } },
        { email: { contains: filtro.busqueda, mode: "insensitive" } }
      ];
    }

    const registros = await this.prisma.authUser.findMany({
      where,
      select: {
        id: true,
        displayName: true,
        email: true,
        primaryRole: true,
        status: true,
        createdAt: true
      },
      orderBy: [{ primaryRole: "asc" }, { displayName: "asc" }],
      take: 500
    });

    return registros.map((r) => ({
      id: r.id,
      nombre: r.displayName,
      correo: r.email,
      rol: r.primaryRole,
      estado: r.status,
      creado: r.createdAt.toISOString()
    }));
  }

  /**
   * Institución a la que pertenece una cuenta.
   *
   * Es la pieza que hace segura la separación: el tenant sale siempre de
   * quien hace la petición, nunca de la petición misma. Si viniera del
   * cliente, un administrador podría pedir el listado de otra academia.
   */
  async obtenerTenant(id: string): Promise<string | null> {
    const registro = await this.prisma.authUser.findUnique({
      where: { id },
      select: { tenant: true }
    });

    return registro?.tenant ?? null;
  }

  /** Activa o suspende una cuenta sin borrarla. */
  async cambiarEstado(id: string, estado: "active" | "suspended") {
    await this.prisma.authUser.update({
      where: { id },
      data: { status: estado }
    });
  }

  /* ── Restablecimiento de contraseña ──────────────────────────────────
     El token se guarda hasheado dentro de `metadata`, que ya existe como
     columna jsonb. Evita una migración y mantiene un solo registro por
     usuario: pedir un enlace nuevo invalida el anterior.
     ──────────────────────────────────────────────────────────────────── */

  async guardarTokenDeReinicio(
    id: string,
    tokenHash: string,
    expiraEn: Date
  ) {
    const record = await this.prisma.authUser.findUnique({ where: { id } });
    const metadata: Record<string, JsonValue> =
      record?.metadata && typeof record.metadata === "object"
        ? (record.metadata as Record<string, JsonValue>)
        : {};

    await this.prisma.authUser.update({
      where: { id },
      data: {
        metadata: {
          ...metadata,
          reinicioContrasena: {
            tokenHash,
            expiraEn: expiraEn.toISOString()
          }
        }
      }
    });
  }

  async buscarPorTokenDeReinicio(tokenHash: string) {
    // El hash es determinista (sha256), así que se puede filtrar en la base.
    const candidatos = await this.prisma.authUser.findMany({
      where: {
        metadata: {
          path: ["reinicioContrasena", "tokenHash"],
          equals: tokenHash
        }
      },
      take: 1
    });

    return candidatos[0] ?? null;
  }

  async aplicarNuevaContrasena(id: string, credential: string) {
    const record = await this.prisma.authUser.findUnique({ where: { id } });
    const metadata: Record<string, JsonValue> =
      record?.metadata && typeof record.metadata === "object"
        ? { ...(record.metadata as Record<string, JsonValue>) }
        : {};

    // El token se consume: no puede reutilizarse.
    delete metadata.reinicioContrasena;

    await this.prisma.authUser.update({
      where: { id },
      data: {
        credentialHash: hashCredential(credential),
        metadata
      }
    });
  }
}
