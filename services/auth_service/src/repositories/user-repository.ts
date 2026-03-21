import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import type { UserRole } from "@cumbre/types";
import { toDomainUser } from "../models/user-mappers.js";
import { hashCredential, verifyCredential } from "../utils/credentials.js";

export interface CreateUserRecordInput {
  displayName: string;
  email: string;
  credential: string;
  requestedRole?: UserRole;
}

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateUserRecordInput) {
    const record = await this.prisma.authUser.create({
      data: {
        id: randomUUID(),
        displayName: input.displayName,
        email: input.email,
        primaryRole: input.requestedRole ?? "student",
        roles: [input.requestedRole ?? "student"],
        status: "active",
        locale: "en-US",
        preferredLanguage: "en",
        timezone: "America/Lima",
        credentialHash: hashCredential(input.credential)
      }
    });

    return toDomainUser(record);
  }

  async findByEmail(email: string) {
    const record = await this.prisma.authUser.findUnique({
      where: { email }
    });

    return record ? toDomainUser(record) : null;
  }

  async findRecordByEmail(email: string) {
    return this.prisma.authUser.findUnique({
      where: { email }
    });
  }

  async findRecordById(id: string) {
    return this.prisma.authUser.findUnique({
      where: { id }
    });
  }

  async findFirstRecord() {
    return this.prisma.authUser.findFirst({
      orderBy: {
        createdAt: "asc"
      }
    });
  }

  async credentialsMatch(email: string, credential: string) {
    const record = await this.findRecordByEmail(email);

    if (!record) {
      return null;
    }

    return verifyCredential(credential, record.credentialHash) ? record : null;
  }

  async findOrCreateByGoogle(input: {
    googleId: string;
    email: string;
    displayName: string;
    givenName?: string;
    familyName?: string;
    avatarUrl?: string;
  }) {
    const externalRef = `google:${input.googleId}`;

    let record = await this.prisma.authUser.findFirst({
      where: { externalRef }
    });

    if (!record) {
      record = await this.prisma.authUser.findUnique({
        where: { email: input.email }
      });
    }

    let isNew = false;

    if (!record) {
      record = await this.prisma.authUser.create({
        data: {
          id: randomUUID(),
          displayName: input.displayName,
          email: input.email,
          givenName: input.givenName,
          familyName: input.familyName,
          avatarUrl: input.avatarUrl,
          externalRef,
          primaryRole: "student",
          roles: ["student"],
          status: "active",
          locale: "es-PE",
          preferredLanguage: "es",
          timezone: "America/Lima"
        }
      });
      isNew = true;
    } else if (!record.externalRef) {
      record = await this.prisma.authUser.update({
        where: { id: record.id },
        data: {
          externalRef,
          avatarUrl: input.avatarUrl ?? record.avatarUrl
        }
      });
    }

    return { record, isNew };
  }

  async updatePrimaryRole(id: string, role: UserRole) {
    await this.prisma.authUser.update({
      where: { id },
      data: { primaryRole: role, roles: [role] }
    });
  }
}
