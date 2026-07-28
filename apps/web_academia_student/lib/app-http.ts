"use client";

interface AppSuccessEnvelope<T> {
  success: true;
  data: T;
}

interface AppErrorEnvelope {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Array<{ field?: string; message: string; code?: string }>;
  };
}

export class AppApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly code: string,
    public readonly details?: AppErrorEnvelope["error"]["details"]
  ) {
    super(message);
    this.name = "AppApiError";
  }
}

export async function requestAppApi<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(path, {
    ...init,
    cache: "no-store",
    headers: {
      "content-type": "application/json",
      ...(init?.headers ?? {})
    }
  });

  const payload = (await response.json()) as AppSuccessEnvelope<T> | AppErrorEnvelope;

  if (!response.ok || !payload.success) {
    const errorPayload = "error" in payload
        ? payload.error
        : {
          code: "APP_API_ERROR",
          message: "La API del frontend devolvio una respuesta inesperada."
        };

    throw new AppApiError(
      errorPayload.message,
      response.status || 500,
      errorPayload.code,
      errorPayload.details
    );
  }

  return payload.data;
}

export async function requestAppApiStream<TEvent>(
  path: string,
  init: RequestInit,
  onEvent: (event: TEvent) => void
) {
  const response = await fetch(path, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init.headers ?? {})
    }
  });

  if (!response.ok || !response.body) {
    const payload = (await response.json()) as AppErrorEnvelope;
    throw new AppApiError(
      payload.error?.message ?? "El stream del frontend devolvio una respuesta inesperada.",
      response.status || 500,
      payload.error?.code ?? "APP_API_STREAM_ERROR",
      payload.error?.details
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let bufferedText = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    bufferedText += decoder.decode(value, {
      stream: true
    });

    const lines = bufferedText.split("\n");
    bufferedText = lines.pop() ?? "";

    for (const line of lines) {
      const normalizedLine = line.trim();

      if (!normalizedLine) {
        continue;
      }

      onEvent(JSON.parse(normalizedLine) as TEvent);
    }
  }

  if (bufferedText.trim()) {
    onEvent(JSON.parse(bufferedText) as TEvent);
  }
}
