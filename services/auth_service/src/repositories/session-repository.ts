import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import type { User } from "@cumbre/types";
import {
  generateOpaqueToken,
  hashOpaqueToken
} from "../utils/credentials.js";

export interface SessionTokens {
  accessToken: string;
  refreshToken: string;
}

export interface CreateSessionInput {
  user: User;
  accessTokenExpiresAt: Date;
  refreshTokenExpiresAt: Date;
  deviceId?: string;
  userAgent?: string;
  ipAddress?: string;
}

export class SessionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateSessionInput) {
    const tokens = this.generateTokens();
    const record = await this.prisma.authSession.create({
      data: {
        id: randomUUID(),
        userId: input.user.id,
        primaryRole: input.user.primaryRole,
        roles: input.user.roles,
        accessTokenHash: hashOpaqueToken(tokens.accessToken),
        refreshTokenHash: hashOpaqueToken(tokens.refreshToken),
        accessTokenExpiresAt: input.accessTokenExpiresAt,
        refreshTokenExpiresAt: input.refreshTokenExpiresAt,
        lastUsedAt: new Date(),
        deviceId: input.deviceId,
        userAgent: input.userAgent,
        ipAddress: input.ipAddress
      }
    });

    return {
      record,
      tokens
    };
  }

  async findByAccessToken(accessToken: string) {
    return this.prisma.authSession.findUnique({
      where: {
        accessTokenHash: hashOpaqueToken(accessToken)
      }
    });
  }

  async findByRefreshToken(refreshToken: string) {
    return this.prisma.authSession.findUnique({
      where: {
        refreshTokenHash: hashOpaqueToken(refreshToken)
      }
    });
  }

  async rotateSession(
    sessionId: string,
    accessTokenExpiresAt: Date,
    refreshTokenExpiresAt: Date
  ) {
    const tokens = this.generateTokens();
    const record = await this.prisma.authSession.update({
      where: {
        id: sessionId
      },
      data: {
        accessTokenHash: hashOpaqueToken(tokens.accessToken),
        refreshTokenHash: hashOpaqueToken(tokens.refreshToken),
        accessTokenExpiresAt,
        refreshTokenExpiresAt,
        revokedAt: null,
        lastUsedAt: new Date()
      }
    });

    return {
      record,
      tokens
    };
  }

  async markUsed(sessionId: string) {
    return this.prisma.authSession.update({
      where: {
        id: sessionId
      },
      data: {
        lastUsedAt: new Date()
      }
    });
  }

  async revokeByRefreshToken(refreshToken: string) {
    const record = await this.findByRefreshToken(refreshToken);

    if (!record) {
      return null;
    }

    return this.prisma.authSession.update({
      where: {
        id: record.id
      },
      data: {
        revokedAt: new Date()
      }
    });
  }

  private generateTokens(): SessionTokens {
    return {
      accessToken: generateOpaqueToken(),
      refreshToken: generateOpaqueToken()
    };
  }
}
