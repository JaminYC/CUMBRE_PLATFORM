import { BackendRequestError, createBackendClient } from "@cumbre/app-runtime";
import { studentAppConfig, serverServiceEndpoints } from "./env";
import { getServerSession } from "./server-session";

const backendClient = createBackendClient({
  appConfig: studentAppConfig,
  getServerSession,
  serviceEndpoints: serverServiceEndpoints
});

export { BackendRequestError };

export const { errorResponse, fetchBackendData, successResponse } = backendClient;
