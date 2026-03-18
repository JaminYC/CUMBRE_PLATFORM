import { BackendRequestError, createBackendClient } from "@cumbre/app-runtime";
import { teacherAppConfig, serverServiceEndpoints } from "./env";
import { getServerSession } from "./server-session";

const backendClient = createBackendClient({
  appConfig: teacherAppConfig,
  getServerSession,
  serviceEndpoints: serverServiceEndpoints
});

export { BackendRequestError };

export const { errorResponse, fetchBackendData, successResponse } = backendClient;
