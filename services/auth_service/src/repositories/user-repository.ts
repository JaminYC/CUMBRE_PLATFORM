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
}
