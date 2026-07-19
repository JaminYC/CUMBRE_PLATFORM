import type { IncomingMessage, ServerResponse } from "node:http";
import { randomUUID } from "node:crypto";
import { URL } from "node:url";
import type { PermissionScope, UserRole } from "@cumbre/types";
import {
  AppError,
  ForbiddenError,
  InternalServerError,
  RequestTimeoutError,
  UnauthorizedError,
  ValidationError,
  isAppError
} from "./errors.js";
import { sendError, sendSuccess } from "./response.js";
import {
  createRequestValidator,
  type RequestValidation
} from "./validation.js";

export type HttpMethod = "GET" | "POST" | "DELETE";

export interface LoggerLike {
  debug(message: string, context?: Record<string, unknown>): void;
  info(message: string, context?: Record<string, unknown>): void;
  warn(message: string, context?: Record<string, unknown>): void;
  error(message: string, context?: Record<string, unknown>): void;
}

export interface RequestContext {
  req: IncomingMessage;
  res: ServerResponse;
  requestId: string;
  params: Record<string, string>;
  query: URLSearchParams;
  logger: LoggerLike;
  auth: AuthenticatedRequestActor | null;
  body: unknown;
  validatedQuery: unknown;
  validatedParams: unknown;
}

export interface AuthenticatedRequestActor {
  sessionId?: string;
  userId: string;
  primaryRole: UserRole;
  roles: UserRole[];
  scopes: PermissionScope[];
}

export interface RouteAuthorization {
  required?: boolean;
  roles?: UserRole[];
  scopes?: PermissionScope[];
}

export interface RouteDefinition {
  method: HttpMethod;
  path: string;
  handler: (context: RequestContext) => Promise<unknown> | unknown;
  validation?: RequestValidation;
  successStatusCode?: number;
  authorization?: RouteAuthorization;
}

interface MatchedRoute {
  route: RouteDefinition;
  params: Record<string, string>;
}

export interface AuthResolver {
  resolveAccess(
    req: IncomingMessage,
    context: { requestId: string; logger: LoggerLike }
  ): Promise<AuthenticatedRequestActor | null>;
}

export interface RouterOptions {
  authResolver?: AuthResolver;
  requestTimeoutMs?: number;
}

export function createRouter(
  routes: RouteDefinition[],
  logger: LoggerLike,
  options: RouterOptions = {}
) {
  return async (req: IncomingMessage, res: ServerResponse) => {
    const method = (req.method ?? "GET").toUpperCase();
    const url = new URL(req.url ?? "/", "http://localhost");
    const requestId =
      normalizeRequestIdHeader(req.headers["x-request-id"]) ?? randomUUID();
    const matched = findRoute(routes, method, url.pathname);
    const startedAt = Date.now();

    res.setHeader("x-request-id", requestId);

    if (!matched) {
      sendError(
        res,
        404,
        "NOT_FOUND",
        `Route ${method} ${url.pathname} was not found.`
      );
      return;
    }

    logger.info("Incoming request", {
      requestId,
      method,
      path: url.pathname
    });

    let responseStatus = matched.route.successStatusCode ?? 200;

    try {
      const auth = await authorizeRoute(
        matched.route,
        req,
        requestId,
        logger,
        options.authResolver
      );
      const validator = createRequestValidator(matched.route.validation);
      const isPost = method === "POST" || method === "PUT" || method === "PATCH";
      const body = (matched.route.validation?.body || isPost) ? await readJson(req) : undefined;
      const validatedBody = validator.validateBody(body);
      const validatedQuery = validator.validateQuery(
        Object.fromEntries(url.searchParams.entries())
      );
      const validatedParams = validator.validateParams(matched.params);

      const response = await withTimeout(
        Promise.resolve(
          matched.route.handler({
            req,
            res,
            requestId,
            params: matched.params,
            query: url.searchParams,
            logger,
            auth,
            body: validatedBody,
            validatedQuery,
            validatedParams
          })
        ),
        options.requestTimeoutMs ?? 10_000
      );

      if (!res.writableEnded && response !== undefined) {
        responseStatus = matched.route.successStatusCode ?? 200;
        sendSuccess(
          res,
          responseStatus,
          response
        );
      }
    } catch (error) {
      const handledError = normalizeError(error);
      responseStatus = handledError.statusCode;

      logger.error("Request failed", {
        requestId,
        method,
        path: url.pathname,
        code: handledError.code,
        message: handledError.message
      });

      if (!res.writableEnded) {
        sendError(
          res,
          handledError.statusCode,
          handledError.code,
          handledError.message,
          handledError.details
        );
      }
    } finally {
      logger.info("Completed request", {
        requestId,
        method,
        path: url.pathname,
        statusCode: responseStatus,
        durationMs: Date.now() - startedAt
      });
    }
  };
}

async function readJson(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return undefined;
  }

  const rawBody = Buffer.concat(chunks).toString("utf8").trim();

  if (!rawBody) {
    return undefined;
  }

  try {
    return JSON.parse(rawBody) as unknown;
  } catch {
    throw new ValidationError("Request body must be valid JSON.");
  }
}

function matchPath(
  routePath: string,
  requestPath: string
): Record<string, string> | null {
  const routeSegments = routePath.split("/").filter(Boolean);
  const requestSegments = requestPath.split("/").filter(Boolean);

  if (routeSegments.length !== requestSegments.length) {
    return null;
  }

  const params: Record<string, string> = {};

  for (let index = 0; index < routeSegments.length; index += 1) {
    const routeSegment = routeSegments[index];
    const requestSegment = requestSegments[index];

    if (routeSegment.startsWith(":")) {
      params[routeSegment.slice(1)] = requestSegment;
      continue;
    }

    if (routeSegment !== requestSegment) {
      return null;
    }
  }

  return params;
}

function findRoute(
  routes: RouteDefinition[],
  method: string,
  path: string
): MatchedRoute | undefined {
  for (const route of routes) {
    if (route.method !== method) {
      continue;
    }

    const params = matchPath(route.path, path);

    if (params) {
      return { route, params };
    }
  }

  return undefined;
}

function normalizeError(error: unknown): AppError {
  if (isAppError(error)) {
    return error;
  }

  return new InternalServerError(
    error instanceof Error ? error.message : "Unhandled service error."
  );
}

async function authorizeRoute(
  route: RouteDefinition,
  req: IncomingMessage,
  requestId: string,
  logger: LoggerLike,
  authResolver?: AuthResolver
): Promise<AuthenticatedRequestActor | null> {
  if (!route.authorization?.required) {
    return null;
  }

  if (!authResolver) {
    throw new UnauthorizedError("No auth resolver is configured for this service.");
  }

  const actor = await authResolver.resolveAccess(req, {
    requestId,
    logger
  });

  if (!actor) {
    throw new UnauthorizedError();
  }

  if (
    route.authorization.roles?.length &&
    !route.authorization.roles.some((role) => actor.roles.includes(role))
  ) {
    throw new ForbiddenError();
  }

  if (
    route.authorization.scopes?.length &&
    !route.authorization.scopes.every((scope) => actor.scopes.includes(scope))
  ) {
    throw new ForbiddenError("You do not have the required permission scope for this route.");
  }

  return actor;
}

async function withTimeout<T>(
  operation: Promise<T>,
  timeoutMs: number
): Promise<T> {
  if (timeoutMs <= 0) {
    return operation;
  }

  let timeoutHandle: NodeJS.Timeout | undefined;

  try {
    return await Promise.race([
      operation,
      new Promise<T>((_, reject) => {
        timeoutHandle = setTimeout(() => {
          reject(new RequestTimeoutError());
        }, timeoutMs);
      })
    ]);
  } finally {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
  }
}

function normalizeRequestIdHeader(value: string | string[] | undefined) {
  if (!value) {
    return null;
  }

  const candidate = Array.isArray(value) ? value[0] : value;
  return candidate.trim().length > 0 ? candidate.trim() : null;
}
