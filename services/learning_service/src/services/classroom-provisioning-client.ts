import type { AuthSignupResponse } from "@cumbre/schemas";
import type { Logger } from "../utils/logger.js";

export class ClassroomProvisioningClient {
  constructor(
    private readonly authServiceUrl: string,
    private readonly logger: Logger
  ) {}

  async createStudentAccount(input: {
    displayName: string;
    email: string;
    credential: string;
  }) {
    const response = await fetch(`${this.authServiceUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: input.email,
        credential: input.credential,
        displayName: input.displayName,
        requestedRole: "student"
      })
    });

    const payload = (await response.json()) as
      | { success: true; data: AuthSignupResponse }
      | { success: false; error: { code: string; message: string } };

    if (!response.ok || !payload.success) {
      this.logger.error("Failed to provision student account", {
        email: input.email,
        status: response.status
      });
      throw new Error(
        "Unable to provision the imported student account through auth_service."
      );
    }

    return payload.data.user;
  }
}
