import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isSessionExpired, serializeAppSession, type AppSessionPayload } from "@cumbre/app-auth";
import type { AppRuntimeConfig } from "./session";

interface BackendSuccessEnvelope<T> {
  success: true;
  data: T;
}

interface BackendErrorEnvelope {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Array<{ field?: string; message: string; code?: string }>;
  };
}

export class BackendRequestError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly code = "BACKEND_ERROR",
    public readonly details?: BackendErrorEnvelope["error"]["details"]
  ) {
    super(message);
    this.name = "BackendRequestError";
  }
}

export function createBackendClient(config: {
  appConfig: AppRuntimeConfig;
  getServerSession: () => Promise<AppSessionPayload | null>;
  serviceEndpoints: {
    authServiceUrl: string;
    learningServiceUrl?: string;
    contentServiceUrl?: string;
    yarinetServiceUrl?: string;
  };
}) {
  async function fetchBackendData<T>(
    serviceName: "auth" | "learning" | "content" | "yarinet",
    path: string,
    init?: RequestInit,
    options: {
      auth?: "required" | "none";
    } = {}
  ): Promise<T> {
    const serviceUrl = resolveServiceUrl(serviceName, config.serviceEndpoints);
    const authMode = options.auth ?? "required";
    const session = authMode === "required" ? await config.getServerSession() : null;
    const resolvedSession =
      authMode === "required" ? await ensureActiveSession(session, () => refreshAppSession(session!, config)) : null;
    const response = await executeRequest<T>(serviceUrl, path, init, resolvedSession?.accessToken);

    if (response.error?.statusCode === 401 && authMode === "required" && session) {
      const refreshedSession = await refreshAppSession(session, config);
      const retryResponse = await executeRequest<T>(
        serviceUrl,
        path,
        init,
        refreshedSession.accessToken
      );

      if (retryResponse.error) {
        throw retryResponse.error;
      }

      return retryResponse.data;
    }

    if (response.error) {
      throw response.error;
    }

    return response.data;
  }

  return {
    fetchBackendData,
    successResponse,
    errorResponse
  };
}

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({ success: true as const, data }, { status });
}

export function errorResponse(error: unknown) {
  if (error instanceof BackendRequestError) {
    return NextResponse.json(
      {
        success: false as const,
        error: {
          code: error.code,
          message: error.message,
          details: error.details
        }
      },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    {
      success: false as const,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrio un error inesperado en el servidor frontend."
      }
    },
    { status: 500 }
  );
}

export async function parseBackendEnvelope<T>(
  response: Response,
  fallbackMessage: string
) {
  const payload = (await response.json()) as BackendSuccessEnvelope<T> | BackendErrorEnvelope;

  if (!response.ok || !("success" in payload) || !payload.success) {
    const errorPayload =
      "error" in payload
        ? payload.error
        : { code: "BACKEND_ERROR", message: fallbackMessage };

    throw new BackendRequestError(
      errorPayload.message,
      response.status || 500,
      errorPayload.code,
      errorPayload.details
    );
  }

  return payload.data;
}

function resolveServiceUrl(
  serviceName: "auth" | "learning" | "content" | "yarinet",
  endpoints: {
    authServiceUrl: string;
    learningServiceUrl?: string;
    contentServiceUrl?: string;
    yarinetServiceUrl?: string;
  }
) {
  if (serviceName === "auth") {
    return endpoints.authServiceUrl;
  }

  if (serviceName === "learning") {
    if (!endpoints.learningServiceUrl) {
      throw new BackendRequestError(
        "La URL de learning_service no esta configurada.",
        500
      );
    }

    return endpoints.learningServiceUrl;
  }

  if (serviceName === "yarinet") {
    if (!endpoints.yarinetServiceUrl) {
      throw new BackendRequestError(
        "La URL de yarinet_service no esta configurada.",
        500
      );
    }

    return endpoints.yarinetServiceUrl;
  }

  if (!endpoints.contentServiceUrl) {
    throw new BackendRequestError(
      "La URL de content_service no esta configurada.",
      500
    );
  }

  return endpoints.contentServiceUrl;
}

async function ensureActiveSession(
  session: AppSessionPayload | null,
  refresh: () => Promise<AppSessionPayload>
) {
  if (!session) {
    throw new BackendRequestError(
      "Esta solicitud requiere autenticacion.",
      401,
      "UNAUTHORIZED"
    );
  }

  if (isSessionExpired(session)) {
    return refresh();
  }

  return session;
}

async function refreshAppSession(
  session: AppSessionPayload,
  config: {
    appConfig: AppRuntimeConfig;
    getServerSession: () => Promise<AppSessionPayload | null>;
    serviceEndpoints: { authServiceUrl: string };
  }
) {
  const response = await fetch(`${config.serviceEndpoints.authServiceUrl}/auth/refresh`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "content-type": "application/json",
      "x-request-id": randomUUID()
    },
    body: JSON.stringify({
      refreshToken: session.refreshToken
    })
  });

  const payload = (await response.json()) as
    | BackendSuccessEnvelope<{
        accessToken: string;
        refreshToken: string;
        expiresAt: string;
        refreshExpiresAt: string;
      }>
    | BackendErrorEnvelope;

  if (!response.ok || !("success" in payload) || !payload.success) {
    const errorPayload =
      "error" in payload
        ? payload.error
        : {
            code: "UNAUTHORIZED",
            message: "No se pudo refrescar la sesion de la aplicacion."
          };

    throw new BackendRequestError(
      errorPayload.message,
      response.status || 401,
      errorPayload.code,
      errorPayload.details
    );
  }

  const refreshedSession = {
    ...session,
    accessToken: payload.data.accessToken,
    refreshToken: payload.data.refreshToken,
    expiresAt: payload.data.expiresAt,
    refreshExpiresAt: payload.data.refreshExpiresAt,
    lastValidatedAt: new Date().toISOString()
  };

  const cookieStore = await cookies();
  cookieStore.set({
    name: config.appConfig.appSessionCookieName,
    value: serializeAppSession(refreshedSession, config.appConfig.appSessionSecret),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    domain: config.appConfig.appSessionCookieDomain,
    path: "/",
    expires: new Date(refreshedSession.refreshExpiresAt)
  });

  return refreshedSession;
}

async function executeRequest<T>(
  serviceUrl: string,
  path: string,
  init: RequestInit | undefined,
  accessToken?: string
) {
  const controller = new AbortController();
  const timeoutHandle = setTimeout(() => controller.abort(), 30_000);

  try {
    const response = await fetch(`${serviceUrl}${path}`, {
      ...init,
      cache: "no-store",
      signal: controller.signal,
      headers: {
        "content-type": "application/json",
        "x-request-id": randomUUID(),
        ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
        ...(init?.headers ?? {})
      }
    });

    const payload = (await response.json()) as BackendSuccessEnvelope<T> | BackendErrorEnvelope;

    if (!response.ok || !("success" in payload) || !payload.success) {
      const errorPayload =
        "error" in payload
          ? payload.error
          : {
              code: "BACKEND_ERROR",
              message: "El backend devolvio una respuesta inesperada."
            };

      return {
        error: new BackendRequestError(
          errorPayload.message,
          response.status || 500,
          errorPayload.code,
          errorPayload.details
        )
      } as const;
    }

    return { data: payload.data } as const;
  } catch (error) {
    if (error instanceof BackendRequestError) {
      return { error } as const;
    }

    throw error;
  } finally {
    clearTimeout(timeoutHandle);
  }
}
