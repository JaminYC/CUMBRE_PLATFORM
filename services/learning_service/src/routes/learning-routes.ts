import type { RouteDefinition } from "@cumbre/api-runtime";
import { classroomSchemas, learningSessionSchemas } from "@cumbre/schemas";
import type { LearningController } from "../controllers/learning-controller.js";

export function registerLearningRoutes(
  controller: LearningController
): RouteDefinition[] {
  return [
    {
      method: "POST",
      path: "/learning/session/start",
      handler: controller.startSession,
      validation: {
        body: learningSessionSchemas.createSessionRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["learning:write"]
      },
      successStatusCode: 201
    },
    {
      method: "POST",
      path: "/learning/session/update",
      handler: controller.updateSession,
      validation: {
        body: learningSessionSchemas.updateSessionRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["learning:write"]
      }
    },
    {
      method: "GET",
      path: "/learning/progress",
      handler: controller.getProgress,
      validation: {
        query: learningSessionSchemas.getProgressRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["progress:read"]
      }
    },
    {
      method: "GET",
      path: "/learning/path",
      handler: controller.getLearningPath,
      validation: {
        query: learningSessionSchemas.getLearningPathRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["learning:read"]
      }
    },
    {
      method: "GET",
      path: "/learning/teacher/overview",
      handler: controller.getTeacherOverview,
      validation: {
        query: learningSessionSchemas.getTeacherOverviewRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["analytics:read"]
      }
    },
    {
      method: "POST",
      path: "/classrooms/create",
      handler: controller.createClassroom,
      validation: {
        body: classroomSchemas.createClassroomRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      },
      successStatusCode: 201
    },
    {
      method: "POST",
      path: "/classrooms/join",
      handler: controller.joinClassroom,
      validation: {
        body: classroomSchemas.joinClassroomRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["classroom:join"]
      }
    },
    {
      method: "GET",
      path: "/classrooms",
      handler: controller.listTeacherClassrooms,
      validation: {
        query: classroomSchemas.listTeacherClassroomsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    },
    {
      method: "GET",
      path: "/classrooms/:classroomId",
      handler: controller.getClassroom,
      validation: {
        params: classroomSchemas.getClassroomRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["learning:read"]
      }
    },
    {
      method: "POST",
      path: "/classrooms/import-students",
      handler: controller.importStudents,
      validation: {
        body: classroomSchemas.importStudentsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    },
    {
      method: "GET",
      path: "/classrooms/:classroomId/students",
      handler: controller.getClassroomStudents,
      validation: {
        params: classroomSchemas.getClassroomStudentsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    },
    {
      method: "POST",
      path: "/classrooms/:classroomId/modules/assign",
      handler: controller.assignClassroomModules,
      validation: {
        body: classroomSchemas.assignClassroomModulesRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    },
    {
      method: "GET",
      path: "/classrooms/:classroomId/modules",
      handler: controller.getClassroomModules,
      validation: {
        params: classroomSchemas.getClassroomModulesRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["learning:read"]
      }
    },
    {
      method: "POST",
      path: "/classrooms/:classroomId/meeting/create",
      handler: controller.createClassroomMeeting,
      validation: {
        body: classroomSchemas.createClassroomMeetingRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    },
    {
      method: "GET",
      path: "/classrooms/:classroomId/meeting",
      handler: controller.getClassroomMeeting,
      validation: {
        params: classroomSchemas.getClassroomMeetingRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["learning:read"]
      }
    },
    {
      method: "GET",
      path: "/classrooms/student/workspace",
      handler: controller.getStudentClassroomWorkspace,
      validation: {
        query: classroomSchemas.getStudentClassroomWorkspaceRequest
      },
      authorization: {
        required: true,
        roles: ["student"],
        scopes: ["learning:read"]
      }
    },
    {
      method: "GET",
      path: "/analytics/classroom/:classroomId",
      handler: controller.getClassroomAnalytics,
      validation: {
        params: classroomSchemas.getClassroomAnalyticsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["analytics:read"]
      }
    },
    {
      method: "DELETE",
      path: "/classrooms/:classroomId",
      handler: controller.deleteClassroom,
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    },
    {
      method: "GET",
      path: "/classrooms/search-users",
      handler: controller.searchStudentUsers,
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["classroom:manage"]
      }
    }
  ];
}
