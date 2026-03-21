import {
  DomainError,
  NotFoundError,
  UnauthorizedError
} from "@cumbre/api-runtime";
import type { AuthUser } from "../generated/prisma/index.js";
import type { AuthService as AuthServiceContract } from "@cumbre/sdk";
import type {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthSignupRequest,
  AuthSignupResponse,
  GetCurrentUserRequest,
  GetCurrentUserResponse,
  RefreshSessionRequest,
  RefreshSessionResponse,
  RevokeSessionRequest,
  RevokeSessionResponse,
  ValidateAccessTokenRequest,
  ValidateAccessTokenResponse
} from "@cumbre/schemas";
import type { UserProfile } from "@cumbre/types";
import type { AuthServiceConfig } from "../config/env.js";
import {
  toAuthenticatedSession,
  toDerivedProfiles,
  toDomainUser
} from "../models/user-mappers.js";
import { SessionRepository } from "../repositories/session-repository.js";
import { UserRepository } from "../repositories/user-repository.js";
import type { Logger } from "../utils/logger.js";

export class AuthApplicationService implements AuthServiceContract {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly logger: Logger,
    private readonly config: AuthServiceConfig
  ) {}

  async signup(
    request: AuthSignupRequest
  ): Promise<AuthSignupResponse> {
    const existingUser = await this.userRepository.findByEmail(request.email);

    if (existingUser) {
      throw new DomainError(
        "A user with this email already exists.",
        "CONFLICT",
        409
      );
    }

    const user = await this.userRepository.create(request);
    const session = await this.issueSession(user);

    this.logger.info("Created auth user record", {
      userId: user.id,
      role: request.requestedRole ?? "student"
    });

    return {
      user,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      expiresAt: session.accessTokenExpiresAt,
      refreshExpiresAt: session.refreshTokenExpiresAt
    };
  }

  async authenticate(
    request: AuthLoginRequest
  ): Promise<AuthLoginResponse> {
    const record = await this.userRepository.credentialsMatch(
      request.identifier,
      request.credential
    );

    if (!record) {
      throw new DomainError(
        "The provided credentials are invalid.",
        "INVALID_CREDENTIALS",
        401
      );
    }

    const user = toDomainUser(record);

    if (
      request.requestedRole &&
      !user.roles.includes(request.requestedRole)
    ) {
      throw new DomainError(
        "The requested role is not available for this account.",
        "ROLE_NOT_ALLOWED",
        403
      );
    }

    const session = await this.issueSession(user, request.deviceId);

    this.logger.info("Authenticated auth user record", {
      userId: user.id,
      identifier: request.identifier,
      requestedRole: request.requestedRole ?? user.primaryRole
    });

    return {
      user,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      expiresAt: session.accessTokenExpiresAt,
      refreshExpiresAt: session.refreshTokenExpiresAt
    };
  }

  async refreshSession(
    request: RefreshSessionRequest
  ): Promise<RefreshSessionResponse> {
    const record = await this.sessionRepository.findByRefreshToken(
      request.refreshToken
    );

    if (!record || record.revokedAt) {
      throw new UnauthorizedError("The refresh token is invalid or revoked.");
    }

    if (record.refreshTokenExpiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedError("The refresh token has expired.");
    }

    const rotated = await this.sessionRepository.rotateSession(
      record.id,
      this.buildAccessTokenExpiry(),
      this.buildRefreshTokenExpiry()
    );

    return {
      accessToken: rotated.tokens.accessToken,
      refreshToken: rotated.tokens.refreshToken,
      expiresAt: rotated.record.accessTokenExpiresAt.toISOString(),
      refreshExpiresAt: rotated.record.refreshTokenExpiresAt.toISOString()
    };
  }

  async revokeSession(
    request: RevokeSessionRequest
  ): Promise<RevokeSessionResponse> {
    const record = await this.sessionRepository.revokeByRefreshToken(
      request.refreshToken
    );

    if (!record) {
      throw new NotFoundError("The session to revoke was not found.");
    }

    return {
      revoked: true,
      revokedAt: record.revokedAt?.toISOString() ?? this.buildTimestamp()
    };
  }

  async getCurrentUser(
    request: GetCurrentUserRequest
  ): Promise<GetCurrentUserResponse> {
    const record = request.userId
      ? await this.userRepository.findRecordById(request.userId)
      : await this.userRepository.findFirstRecord();

    if (!record) {
      throw new NotFoundError("No auth user record was found.");
    }

    return {
      user: toDomainUser(record),
      profiles: this.buildProfiles(record)
    };
  }

  async setUserRole(accessToken: string, role: string): Promise<void> {
    if (role !== "student" && role !== "teacher") {
      throw new DomainError("Invalid role for self-assignment.", "INVALID_ROLE", 400);
    }

    const record = await this.sessionRepository.findByAccessToken(accessToken);

    if (!record || record.revokedAt) {
      throw new UnauthorizedError("The access token is invalid or revoked.");
    }

    if (record.accessTokenExpiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedError("The access token has expired.");
    }

    await this.userRepository.updatePrimaryRole(record.userId, role as "student" | "teacher");
  }

  async validateAccessToken(
    request: ValidateAccessTokenRequest
  ): Promise<ValidateAccessTokenResponse> {
    const record = await this.sessionRepository.findByAccessToken(
      request.accessToken
    );

    if (!record || record.revokedAt) {
      throw new UnauthorizedError("The access token is invalid or revoked.");
    }

    if (record.accessTokenExpiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedError("The access token has expired.");
    }

    const userRecord = await this.userRepository.findRecordById(record.userId);

    if (!userRecord) {
      throw new UnauthorizedError("The session user could not be resolved.");
    }

    await this.sessionRepository.markUsed(record.id);

    return {
      session: toAuthenticatedSession(record),
      user: toDomainUser(userRecord),
      profiles: this.buildProfiles(userRecord)
    };
  }

  private async issueSession(user: ReturnType<typeof toDomainUser>, deviceId?: string) {
    const accessTokenExpiresAt = this.buildAccessTokenExpiry();
    const refreshTokenExpiresAt = this.buildRefreshTokenExpiry();
    const session = await this.sessionRepository.create({
      user,
      accessTokenExpiresAt,
      refreshTokenExpiresAt,
      deviceId
    });

    return {
      accessToken: session.tokens.accessToken,
      refreshToken: session.tokens.refreshToken,
      accessTokenExpiresAt: session.record.accessTokenExpiresAt.toISOString(),
      refreshTokenExpiresAt: session.record.refreshTokenExpiresAt.toISOString()
    };
  }

  private buildTimestamp(): string {
    return new Date().toISOString();
  }

  private buildAccessTokenExpiry() {
    return new Date(
      Date.now() + this.config.authAccessTokenTtlMinutes * 60 * 1000
    );
  }

  private buildRefreshTokenExpiry() {
    return new Date(
      Date.now() + this.config.authRefreshTokenTtlDays * 24 * 60 * 60 * 1000
    );
  }

  private buildProfiles(record: AuthUser): UserProfile[] {
    return toDerivedProfiles(record);
  }
}
