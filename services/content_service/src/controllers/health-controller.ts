import type { RequestContext } from "@cumbre/api-runtime";
import { InternalServerError } from "@cumbre/api-runtime";
import type {
  ServiceHealthResponse,
  ServiceReadinessResponse
} from "../models/contracts.js";

export class HealthController {
  constructor(
    private readonly serviceName: string,
    private readonly readinessCheck: () => Promise<void>
  ) {}

  getHealth = (_context: RequestContext): ServiceHealthResponse => {
    return {
      service: this.serviceName,
      status: "ok",
      timestamp: new Date().toISOString()
    };
  };

  getReadiness = async (_context: RequestContext): Promise<ServiceReadinessResponse> => {
    try {
      await this.readinessCheck();

      return {
        service: this.serviceName,
        status: "ready",
        timestamp: new Date().toISOString(),
        dependencies: {
          database: "ready"
        }
      };
    } catch {
      throw new InternalServerError("The service is not ready to receive traffic.");
    }
  };
}
