import { BackendRequestError, createBackendClient } from "@cumbre/app-runtime";
import { adminAppConfig, serverServiceEndpoints } from "./env";
import { getServerSession } from "./server-session";

const backendClient = createBackendClient({
  appConfig: adminAppConfig,
  getServerSession,
  serviceEndpoints: serverServiceEndpoints
});

export { BackendRequestError };

export const { errorResponse, successResponse } = backendClient;

export function fetchBackendData<T>(path: string, init?: RequestInit) {
  return backendClient.fetchBackendData<T>("content", path, init);
}
