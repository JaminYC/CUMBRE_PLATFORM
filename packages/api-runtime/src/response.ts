import type { ServerResponse } from "node:http";
import type { ApiErrorDetail } from "@cumbre/schemas";

export interface SuccessEnvelope<T> {
  success: true;
  data: T;
}

export interface ErrorEnvelope {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetail[];
  };
}

export function json(
  res: ServerResponse,
  statusCode: number,
  payload?: unknown
): void {
  res.statusCode = statusCode;

  if (payload === undefined || statusCode === 204) {
    res.end();
    return;
  }

  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

export function sendSuccess<T>(
  res: ServerResponse,
  statusCode: number,
  data: T
): void {
  json(res, statusCode, {
    success: true,
    data
  } satisfies SuccessEnvelope<T>);
}

export function sendError(
  res: ServerResponse,
  statusCode: number,
  code: string,
  message: string,
  details?: ApiErrorDetail[]
): void {
  json(res, statusCode, {
    success: false,
    error: {
      code,
      message,
      details
    }
  } satisfies ErrorEnvelope);
}
