import type {
  Classroom,
  ClassroomAnalytics,
  ClassroomMeeting,
  ClassroomRosterEntry,
  StudentClassroomWorkspace
} from "@cumbre/types";
import type { SchemaDefinition } from "./index.js";

export interface CreateClassroomRequest {
  name: string;
  gradeLevel: string;
  subject: string;
  teacherId: string;
}

export interface CreateClassroomResponse {
  classroom: Classroom;
}

export interface JoinClassroomRequest {
  classCode: string;
  studentId: string;
}

export interface JoinClassroomResponse {
  classroom: Classroom;
  enrollment: ClassroomRosterEntry["enrollment"];
}

export interface GetClassroomRequest {
  classroomId: string;
}

export interface ListTeacherClassroomsRequest {
  teacherId: string;
}

export interface ListTeacherClassroomsResponse {
  items: GetClassroomResponse["overview"][];
  total: number;
}

export interface GetClassroomResponse {
  overview: {
    classroom: Classroom;
    roster: ClassroomRosterEntry[];
    nextMeeting?: ClassroomMeeting;
    assignedModuleIds: string[];
    assignedLearningPathIds: string[];
  };
}

export interface ImportStudentsRequest {
  classroomId: string;
  csvContent: string;
}

export interface ImportStudentsResponse {
  classroom: Classroom;
  importedStudents: ClassroomRosterEntry[];
}

export interface GetClassroomStudentsRequest {
  classroomId: string;
}

export interface GetClassroomStudentsResponse {
  classroom: Classroom;
  students: ClassroomRosterEntry[];
}

export interface AssignClassroomModulesRequest {
  classroomId: string;
  moduleIds: string[];
  learningPathIds?: string[];
  teacherId: string;
}

export interface AssignClassroomModulesResponse {
  classroom: Classroom;
}

export interface GetClassroomModulesRequest {
  classroomId: string;
}

export interface GetClassroomModulesResponse {
  classroom: Classroom;
  moduleIds: string[];
  learningPathIds: string[];
}

export interface CreateClassroomMeetingRequest {
  classroomId: string;
  teacherId: string;
  provider: string;
  title: string;
  description?: string;
  scheduledAt: string;
}

export interface CreateClassroomMeetingResponse {
  meeting: ClassroomMeeting;
}

export interface GetClassroomMeetingRequest {
  classroomId: string;
}

export interface GetClassroomMeetingResponse {
  meeting: ClassroomMeeting | null;
}

export interface GetStudentClassroomWorkspaceRequest {
  studentId: string;
}

export interface GetStudentClassroomWorkspaceResponse {
  workspaces: StudentClassroomWorkspace[];
}

export interface GetClassroomAnalyticsRequest {
  classroomId: string;
}

export interface GetClassroomAnalyticsResponse {
  analytics: ClassroomAnalytics;
}

const domainRef = (name: string): SchemaDefinition => ({
  $ref: `domain://${name}`
});

export const classroomSchemas = {
  createClassroomRequest: {
    $id: "schema://classroom/CreateClassroomRequest",
    type: "object",
    required: ["name", "gradeLevel", "subject", "teacherId"],
    properties: {
      name: { type: "string" },
      gradeLevel: { type: "string" },
      subject: { type: "string" },
      teacherId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  createClassroomResponse: {
    $id: "schema://classroom/CreateClassroomResponse",
    type: "object",
    required: ["classroom"],
    properties: {
      classroom: domainRef("Classroom")
    }
  } satisfies SchemaDefinition,
  joinClassroomRequest: {
    $id: "schema://classroom/JoinClassroomRequest",
    type: "object",
    required: ["classCode", "studentId"],
    properties: {
      classCode: { type: "string" },
      studentId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  joinClassroomResponse: {
    $id: "schema://classroom/JoinClassroomResponse",
    type: "object",
    required: ["classroom", "enrollment"],
    properties: {
      classroom: domainRef("Classroom"),
      enrollment: domainRef("StudentEnrollment")
    }
  } satisfies SchemaDefinition,
  getClassroomRequest: {
    $id: "schema://classroom/GetClassroomRequest",
    type: "object",
    required: ["classroomId"],
    properties: {
      classroomId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listTeacherClassroomsRequest: {
    $id: "schema://classroom/ListTeacherClassroomsRequest",
    type: "object",
    required: ["teacherId"],
    properties: {
      teacherId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listTeacherClassroomsResponse: {
    $id: "schema://classroom/ListTeacherClassroomsResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          required: [
            "classroom",
            "roster",
            "assignedModuleIds",
            "assignedLearningPathIds"
          ],
          properties: {
            classroom: domainRef("Classroom"),
            roster: {
              type: "array",
              items: domainRef("ClassroomRosterEntry")
            },
            nextMeeting: {
              oneOf: [{ type: "null" }, domainRef("ClassroomMeeting")]
            },
            assignedModuleIds: {
              type: "array",
              items: { type: "string" }
            },
            assignedLearningPathIds: {
              type: "array",
              items: { type: "string" }
            }
          }
        }
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  getClassroomResponse: {
    $id: "schema://classroom/GetClassroomResponse",
    type: "object",
    required: ["overview"],
    properties: {
      overview: {
        type: "object",
        required: [
          "classroom",
          "roster",
          "assignedModuleIds",
          "assignedLearningPathIds"
        ],
        properties: {
          classroom: domainRef("Classroom"),
          roster: {
            type: "array",
            items: domainRef("ClassroomRosterEntry")
          },
          nextMeeting: {
            oneOf: [{ type: "null" }, domainRef("ClassroomMeeting")]
          },
          assignedModuleIds: {
            type: "array",
            items: { type: "string" }
          },
          assignedLearningPathIds: {
            type: "array",
            items: { type: "string" }
          }
        }
      }
    }
  } satisfies SchemaDefinition,
  importStudentsRequest: {
    $id: "schema://classroom/ImportStudentsRequest",
    type: "object",
    required: ["classroomId", "csvContent"],
    properties: {
      classroomId: { type: "string" },
      csvContent: { type: "string" }
    }
  } satisfies SchemaDefinition,
  importStudentsResponse: {
    $id: "schema://classroom/ImportStudentsResponse",
    type: "object",
    required: ["classroom", "importedStudents"],
    properties: {
      classroom: domainRef("Classroom"),
      importedStudents: {
        type: "array",
        items: domainRef("ClassroomRosterEntry")
      }
    }
  } satisfies SchemaDefinition,
  getClassroomStudentsRequest: {
    $id: "schema://classroom/GetClassroomStudentsRequest",
    type: "object",
    required: ["classroomId"],
    properties: {
      classroomId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getClassroomStudentsResponse: {
    $id: "schema://classroom/GetClassroomStudentsResponse",
    type: "object",
    required: ["classroom", "students"],
    properties: {
      classroom: domainRef("Classroom"),
      students: {
        type: "array",
        items: domainRef("ClassroomRosterEntry")
      }
    }
  } satisfies SchemaDefinition,
  assignClassroomModulesRequest: {
    $id: "schema://classroom/AssignClassroomModulesRequest",
    type: "object",
    required: ["classroomId", "moduleIds", "teacherId"],
    properties: {
      classroomId: { type: "string" },
      moduleIds: {
        type: "array",
        items: { type: "string" }
      },
      learningPathIds: {
        type: "array",
        items: { type: "string" }
      },
      teacherId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  assignClassroomModulesResponse: {
    $id: "schema://classroom/AssignClassroomModulesResponse",
    type: "object",
    required: ["classroom"],
    properties: {
      classroom: domainRef("Classroom")
    }
  } satisfies SchemaDefinition,
  getClassroomModulesRequest: {
    $id: "schema://classroom/GetClassroomModulesRequest",
    type: "object",
    required: ["classroomId"],
    properties: {
      classroomId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getClassroomModulesResponse: {
    $id: "schema://classroom/GetClassroomModulesResponse",
    type: "object",
    required: ["classroom", "moduleIds", "learningPathIds"],
    properties: {
      classroom: domainRef("Classroom"),
      moduleIds: {
        type: "array",
        items: { type: "string" }
      },
      learningPathIds: {
        type: "array",
        items: { type: "string" }
      }
    }
  } satisfies SchemaDefinition,
  createClassroomMeetingRequest: {
    $id: "schema://classroom/CreateClassroomMeetingRequest",
    type: "object",
    required: ["classroomId", "teacherId", "provider", "title", "scheduledAt"],
    properties: {
      classroomId: { type: "string" },
      teacherId: { type: "string" },
      provider: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      scheduledAt: { type: "string", format: "date-time" }
    }
  } satisfies SchemaDefinition,
  createClassroomMeetingResponse: {
    $id: "schema://classroom/CreateClassroomMeetingResponse",
    type: "object",
    required: ["meeting"],
    properties: {
      meeting: domainRef("ClassroomMeeting")
    }
  } satisfies SchemaDefinition,
  getClassroomMeetingRequest: {
    $id: "schema://classroom/GetClassroomMeetingRequest",
    type: "object",
    required: ["classroomId"],
    properties: {
      classroomId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getClassroomMeetingResponse: {
    $id: "schema://classroom/GetClassroomMeetingResponse",
    type: "object",
    required: ["meeting"],
    properties: {
      meeting: {
        oneOf: [{ type: "null" }, domainRef("ClassroomMeeting")]
      }
    }
  } satisfies SchemaDefinition,
  getStudentClassroomWorkspaceRequest: {
    $id: "schema://classroom/GetStudentClassroomWorkspaceRequest",
    type: "object",
    required: ["studentId"],
    properties: {
      studentId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getStudentClassroomWorkspaceResponse: {
    $id: "schema://classroom/GetStudentClassroomWorkspaceResponse",
    type: "object",
    required: ["workspaces"],
    properties: {
      workspaces: {
        type: "array",
        items: domainRef("StudentClassroomWorkspace")
      }
    }
  } satisfies SchemaDefinition,
  getClassroomAnalyticsRequest: {
    $id: "schema://classroom/GetClassroomAnalyticsRequest",
    type: "object",
    required: ["classroomId"],
    properties: {
      classroomId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  getClassroomAnalyticsResponse: {
    $id: "schema://classroom/GetClassroomAnalyticsResponse",
    type: "object",
    required: ["analytics"],
    properties: {
      analytics: domainRef("ClassroomAnalytics")
    }
  } satisfies SchemaDefinition
};
