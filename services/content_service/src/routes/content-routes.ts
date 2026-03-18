import type { RouteDefinition } from "@cumbre/api-runtime";
import { contentSchemas, teachingSchemas } from "@cumbre/schemas";
import type { ContentController } from "../controllers/content-controller.js";

export function registerContentRoutes(
  controller: ContentController
): RouteDefinition[] {
  return [
    {
      method: "GET",
      path: "/content/topics",
      handler: controller.listTopics,
      validation: {
        query: contentSchemas.listTopicsRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "GET",
      path: "/content/lessons",
      handler: controller.listLessons,
      validation: {
        query: contentSchemas.listLessonsRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/content/teacher/lessons",
      handler: controller.createLesson,
      validation: {
        body: contentSchemas.createLessonRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:write", "lesson:edit"]
      }
    },
    {
      method: "POST",
      path: "/content/teacher/lessons/update",
      handler: controller.updateLesson,
      validation: {
        body: contentSchemas.updateLessonRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:write", "lesson:edit"]
      }
    },
    {
      method: "GET",
      path: "/content/items",
      handler: controller.listContentItems,
      validation: {
        query: contentSchemas.listContentItemsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/content/teacher/items",
      handler: controller.createContentItem,
      validation: {
        body: contentSchemas.createContentItemRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:write"]
      }
    },
    {
      method: "GET",
      path: "/content/search",
      handler: controller.searchContent,
      validation: {
        query: contentSchemas.searchContentRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "GET",
      path: "/content/knowledge/nodes",
      handler: controller.listKnowledgeNodes,
      validation: {
        query: contentSchemas.listKnowledgeNodesRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/content/admin/knowledge/nodes",
      handler: controller.createKnowledgeNode,
      validation: {
        body: contentSchemas.createKnowledgeNodeRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["concept:create"]
      }
    },
    {
      method: "POST",
      path: "/content/admin/knowledge/nodes/update",
      handler: controller.updateKnowledgeNode,
      validation: {
        body: contentSchemas.updateKnowledgeNodeRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["graph:manage"]
      }
    },
    {
      method: "GET",
      path: "/content/knowledge/edges",
      handler: controller.listKnowledgeEdges,
      validation: {
        query: contentSchemas.listKnowledgeEdgesRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/content/admin/knowledge/edges",
      handler: controller.createKnowledgeEdge,
      validation: {
        body: contentSchemas.createKnowledgeEdgeRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["graph:manage"]
      }
    },
    {
      method: "GET",
      path: "/content/knowledge/lesson/:lessonId",
      handler: controller.getLessonKnowledge,
      validation: {
        params: contentSchemas.getLessonKnowledgeRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "GET",
      path: "/content/knowledge/topic/:topicId",
      handler: controller.getTopicKnowledge,
      validation: {
        params: contentSchemas.getTopicKnowledgeRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/content/teacher/lesson-mappings",
      handler: controller.updateLessonConceptMappings,
      validation: {
        body: contentSchemas.updateLessonConceptMappingsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:write", "lesson:edit"]
      }
    },
    {
      method: "GET",
      path: "/content/knowledge/explore",
      handler: controller.getKnowledgeExplore,
      validation: {
        query: contentSchemas.getKnowledgeExploreRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "GET",
      path: "/content/admin/overview",
      handler: controller.getAdminOverview,
      validation: {
        query: contentSchemas.getAdminOverviewRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["analytics:read"]
      }
    },
    {
      method: "POST",
      path: "/content/admin/topics",
      handler: controller.createTopic,
      validation: {
        body: contentSchemas.createTopicRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["content:write"]
      }
    },
    {
      method: "POST",
      path: "/content/admin/topics/update",
      handler: controller.updateTopic,
      validation: {
        body: contentSchemas.updateTopicRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["content:write"]
      }
    },
    {
      method: "POST",
      path: "/content/admin/integrity/fix",
      handler: controller.runIntegrityFix,
      validation: {
        body: contentSchemas.runIntegrityFixRequest
      },
      authorization: {
        required: true,
        roles: ["administrator"],
        scopes: ["graph:manage"]
      }
    },
    {
      method: "POST",
      path: "/teacher/materials/upload",
      handler: controller.uploadTeacherMaterial,
      validation: {
        body: teachingSchemas.uploadTeacherMaterialRequest
      },
      successStatusCode: 201,
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["material:write"]
      }
    },
    {
      method: "GET",
      path: "/teacher/materials",
      handler: controller.listTeacherMaterials,
      validation: {
        query: teachingSchemas.listTeacherMaterialsRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/ai/modules/generate",
      handler: controller.generateModule,
      validation: {
        body: teachingSchemas.generateModuleRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["material:write"]
      }
    },
    {
      method: "GET",
      path: "/teaching/modules",
      handler: controller.listTeachingModules,
      validation: {
        query: teachingSchemas.listTeachingModulesRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/ai/quiz/generate",
      handler: controller.generateQuiz,
      validation: {
        body: teachingSchemas.generateQuizRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["assessment:write"]
      }
    },
    {
      method: "GET",
      path: "/teaching/quizzes",
      handler: controller.listTeachingQuizzes,
      validation: {
        query: teachingSchemas.listTeachingQuizzesRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    },
    {
      method: "POST",
      path: "/teacher/exams/upload-scan",
      handler: controller.uploadExamScan,
      validation: {
        body: teachingSchemas.uploadExamScanRequest
      },
      authorization: {
        required: true,
        roles: ["teacher", "administrator"],
        scopes: ["assessment:write"]
      }
    },
    {
      method: "GET",
      path: "/content/topic/:topicId",
      handler: controller.getTopic,
      validation: {
        params: contentSchemas.getTopicRequest
      },
      authorization: {
        required: true,
        roles: ["student", "teacher", "administrator"],
        scopes: ["content:read"]
      }
    }
  ];
}
