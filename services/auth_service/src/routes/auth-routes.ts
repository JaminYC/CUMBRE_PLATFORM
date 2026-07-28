import type { RouteDefinition } from "@cumbre/api-runtime";
import { authSchemas } from "@cumbre/schemas";
import type { AuthController } from "../controllers/auth-controller.js";

export function registerAuthRoutes(
  controller: AuthController
): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/auth/signup",
      handler: controller.signup,
      validation: {
        body: authSchemas.signupRequest
      },
      successStatusCode: 201
    },
    {
      method: "POST",
      path: "/auth/login",
      handler: controller.login,
      validation: {
        body: authSchemas.loginRequest
      }
    },
    {
      method: "POST",
      path: "/auth/refresh",
      handler: controller.refresh,
      validation: {
        body: authSchemas.refreshSessionRequest
      }
    },
    {
      method: "POST",
      path: "/auth/logout",
      handler: controller.logout,
      validation: {
        body: authSchemas.revokeSessionRequest
      }
    },
    {
      method: "GET",
      path: "/auth/me",
      handler: controller.me,
      validation: {
        query: authSchemas.getCurrentUserRequest
      },
      authorization: {
        required: true
      }
    },
    {
      method: "GET",
      path: "/auth/session",
      handler: controller.session,
      authorization: {
        required: true
      }
    },
    {
      method: "PATCH",
      path: "/auth/me/role",
      handler: controller.setRole,
      authorization: {
        required: true
      }
    },
    /* ── Recuperación de contraseña ─────────────────────────────────────
       Ambos son públicos a propósito: quien los usa perdió el acceso.
       La protección está en que el token es de un solo uso y vence
       a los 30 minutos.
       ──────────────────────────────────────────────────────────────── */
    {
      method: "POST",
      path: "/auth/password/forgot",
      handler: controller.olvideContrasena,
      validation: {
        body: {
          type: "object",
          required: ["email"],
          additionalProperties: false,
          properties: {
            email: { type: "string", format: "email" }
          }
        }
      }
    },
    /* ── Gestión de usuarios ────────────────────────────────────────────
       Requieren sesión: solo el panel administrativo las consume.
       ──────────────────────────────────────────────────────────────── */
    {
      method: "GET",
      path: "/auth/users",
      handler: controller.listarUsuarios,
      validation: {
        query: {
          type: "object",
          additionalProperties: false,
          properties: {
            rol: { type: "string" },
            busqueda: { type: "string" }
          }
        }
      },
      authorization: {
        required: true
      }
    },
    /* El alta pasaba por /auth/signup, que es público y por tanto no sabe
       quién la pide — la cuenta nacía sin institución. Acá la hereda de
       quien la crea. */
    {
      method: "POST",
      path: "/auth/users",
      handler: controller.crearUsuario,
      validation: {
        body: {
          type: "object",
          required: ["displayName", "email", "credential"],
          additionalProperties: false,
          properties: {
            displayName: { type: "string" },
            email: { type: "string" },
            credential: { type: "string" },
            requestedRole: {
              type: "string",
              enum: ["student", "teacher", "administrator"]
            }
          }
        }
      },
      authorization: {
        required: true
      }
    },
    {
      method: "PATCH",
      path: "/auth/users/status",
      handler: controller.cambiarEstadoDeUsuario,
      validation: {
        body: {
          type: "object",
          required: ["id", "estado"],
          additionalProperties: false,
          properties: {
            id: { type: "string" },
            estado: { type: "string", enum: ["active", "suspended"] }
          }
        }
      },
      authorization: {
        required: true
      }
    },
    {
      method: "POST",
      path: "/auth/users/temp-password",
      handler: controller.generarContrasenaTemporal,
      validation: {
        body: {
          type: "object",
          required: ["id"],
          additionalProperties: false,
          properties: {
            id: { type: "string" }
          }
        }
      },
      authorization: {
        required: true
      }
    },
    {
      // El largo mínimo de la contraseña se valida en el servicio:
      // `SchemaDefinition` no soporta minLength.
      method: "POST",
      path: "/auth/password/reset",
      handler: controller.restablecerContrasena,
      validation: {
        body: {
          type: "object",
          required: ["token", "credential"],
          additionalProperties: false,
          properties: {
            token: { type: "string" },
            credential: { type: "string" }
          }
        }
      }
    }
  ];
}
