import { randomUUID } from "node:crypto";
import type { PrismaClient } from "../generated/prisma/index.js";
import {
  toDomainClassroom,
  toDomainClassroomMeeting,
  toDomainClassroomStudentProfile,
  toDomainEnrollment
} from "../models/learning-mappers.js";

export class ClassroomRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createClassroom(input: {
    name: string;
    gradeLevel: string;
    subject: string;
    teacherId: string;
    classCode: string;
    learningPathId?: string;
  }) {
    const record = await this.prisma.classroomRecord.create({
      data: {
        id: randomUUID(),
        name: input.name,
        gradeLevel: input.gradeLevel,
        subject: input.subject,
        teacherId: input.teacherId,
        classCode: input.classCode,
        learningPathId: input.learningPathId
      }
    });

    return toDomainClassroom(record);
  }

  async findClassroomById(classroomId: string) {
    const record = await this.prisma.classroomRecord.findUnique({
      where: { id: classroomId }
    });

    return record ? toDomainClassroom(record) : null;
  }

  async findClassroomByCode(classCode: string) {
    const record = await this.prisma.classroomRecord.findUnique({
      where: { classCode }
    });

    return record ? toDomainClassroom(record) : null;
  }

  async listClassroomsByTeacher(teacherId: string) {
    const records = await this.prisma.classroomRecord.findMany({
      where: { teacherId },
      orderBy: { createdAt: "desc" }
    });

    return records.map(toDomainClassroom);
  }

  async listClassroomsByStudentUserId(studentUserId: string) {
    const records = await this.prisma.classroomRecord.findMany({
      where: {
        enrollments: {
          some: {
            student: {
              linkedUserId: studentUserId
            }
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return records.map(toDomainClassroom);
  }

  async updateAssignments(
    classroomId: string,
    input: { moduleIds: string[]; learningPathIds?: string[] }
  ) {
    const record = await this.prisma.classroomRecord.update({
      where: { id: classroomId },
      data: {
        assignedModuleIds: input.moduleIds,
        assignedLearningPathIds: input.learningPathIds ?? []
      }
    });

    return toDomainClassroom(record);
  }

  async ensureStudentProfile(input: {
    name: string;
    email?: string;
    gradeLevel: string;
    createdByTeacher: boolean;
    linkedUserId?: string;
    generatedCredential?: string;
  }) {
    if (input.linkedUserId) {
      const existing = await this.prisma.classroomStudentProfileRecord.findUnique({
        where: { linkedUserId: input.linkedUserId }
      });

      if (existing) {
        const updated = await this.prisma.classroomStudentProfileRecord.update({
          where: { id: existing.id },
          data: {
            name: input.name,
            email: input.email,
            gradeLevel: input.gradeLevel,
            createdByTeacher: input.createdByTeacher,
            generatedCredential: input.generatedCredential ?? existing.generatedCredential
          }
        });

        return {
          profile: toDomainClassroomStudentProfile(updated),
          generatedCredential: updated.generatedCredential ?? undefined
        };
      }
    }

    const created = await this.prisma.classroomStudentProfileRecord.create({
      data: {
        id: randomUUID(),
        name: input.name,
        email: input.email,
        gradeLevel: input.gradeLevel,
        createdByTeacher: input.createdByTeacher,
        linkedUserId: input.linkedUserId,
        generatedCredential: input.generatedCredential
      }
    });

    return {
      profile: toDomainClassroomStudentProfile(created),
      generatedCredential: created.generatedCredential ?? undefined
    };
  }

  async createEnrollment(input: {
    classroomId: string;
    studentId: string;
    status: string;
    joinedAt?: string;
  }) {
    const existing = await this.prisma.studentEnrollmentRecord.findFirst({
      where: {
        classroomId: input.classroomId,
        studentId: input.studentId
      }
    });

    const record = existing
      ? await this.prisma.studentEnrollmentRecord.update({
          where: { id: existing.id },
          data: {
            status: input.status,
            joinedAt: input.joinedAt ? new Date(input.joinedAt) : existing.joinedAt
          }
        })
      : await this.prisma.studentEnrollmentRecord.create({
          data: {
            id: randomUUID(),
            classroomId: input.classroomId,
            studentId: input.studentId,
            status: input.status,
            joinedAt: input.joinedAt ? new Date(input.joinedAt) : undefined
          }
        });

    return toDomainEnrollment(record);
  }

  async findEnrollmentByClassroomAndStudent(classroomId: string, studentId: string) {
    const record = await this.prisma.studentEnrollmentRecord.findFirst({
      where: { classroomId, studentId }
    });

    return record ? toDomainEnrollment(record) : null;
  }

  async listRoster(classroomId: string) {
    const records = await this.prisma.studentEnrollmentRecord.findMany({
      where: { classroomId },
      include: {
        student: true
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return records.map((record) => ({
      classroomId: record.classroomId,
      student: toDomainClassroomStudentProfile(record.student),
      enrollment: toDomainEnrollment(record),
      generatedCredential: record.student.generatedCredential ?? undefined
    }));
  }

  async createMeeting(input: {
    classroomId: string;
    provider: string;
    title: string;
    description?: string;
    scheduledAt: string;
    meetingUrl: string;
    createdByTeacherId: string;
  }) {
    await this.prisma.classroomMeetingRecord.deleteMany({
      where: { classroomId: input.classroomId }
    });

    const record = await this.prisma.classroomMeetingRecord.create({
      data: {
        id: randomUUID(),
        classroomId: input.classroomId,
        provider: input.provider,
        title: input.title,
        description: input.description,
        scheduledAt: new Date(input.scheduledAt),
        meetingUrl: input.meetingUrl,
        createdByTeacherId: input.createdByTeacherId
      }
    });

    return toDomainClassroomMeeting(record);
  }

  async getLatestMeeting(classroomId: string) {
    const record = await this.prisma.classroomMeetingRecord.findFirst({
      where: { classroomId },
      orderBy: { scheduledAt: "desc" }
    });

    return record ? toDomainClassroomMeeting(record) : null;
  }

  async deleteClassroom(classroomId: string) {
    await this.prisma.classroomRecord.delete({
      where: { id: classroomId }
    });
  }

  async searchStudentProfiles(query: string) {
    const records = await this.prisma.classroomStudentProfileRecord.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { email: { contains: query } }
        ]
      },
      take: 10,
      orderBy: { name: "asc" }
    });

    return records.map(toDomainClassroomStudentProfile);
  }
}
