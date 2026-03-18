import type { ApiErrorDetail } from "@cumbre/schemas";

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number,
    public readonly details?: ApiErrorDetail[]
  ) {
    super(message);
    this.name = new.target.name;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: ApiErrorDetail[]) {
    super(message, "VALIDATION_ERROR", 400, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication is required for this route.") {
    super(message, "UNAUTHORIZED", 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "You do not have permission to access this route.") {
    super(message, "FORBIDDEN", 403);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, code = "NOT_FOUND") {
    super(message, code, 404);
  }
}

export class DomainError extends AppError {
  constructor(message: string, code = "DOMAIN_ERROR", statusCode = 409) {
    super(message, code, statusCode);
  }
}

export class InternalServerError extends AppError {
  constructor(message = "Unhandled service error.") {
    super(message, "INTERNAL_SERVER_ERROR", 500);
  }
}

export class RequestTimeoutError extends AppError {
  constructor(message = "The request exceeded the configured timeout.") {
    super(message, "REQUEST_TIMEOUT", 504);
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}
