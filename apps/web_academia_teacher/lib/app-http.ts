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
  };
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
    const message =
      "error" in payload
        ? payload.error.message
        : "La API del frontend devolvio una respuesta inesperada.";
    throw new Error(message);
  }

  return payload.data;
}
