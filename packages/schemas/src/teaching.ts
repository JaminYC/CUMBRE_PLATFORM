import type {
  GeneratedModuleProposal,
  GeneratedQuizProposal,
  MaterialGenerationProposal,
  StudentAttempt,
  TeachingMaterial,
  TeachingModule,
  TeachingQuiz
} from "@cumbre/types";
import type { SchemaDefinition } from "./index.js";

export interface UploadTeacherMaterialRequest {
  teacherId: string;
  fileName: string;
  mimeType: string;
  textContent?: string;
  ocrTextHint?: string;
}

export interface UploadTeacherMaterialResponse {
  material: TeachingMaterial;
  proposal: MaterialGenerationProposal;
}

export interface ListTeacherMaterialsRequest {
  teacherId: string;
}

export interface ListTeacherMaterialsResponse {
  items: TeachingMaterial[];
  total: number;
}

export interface GenerateModuleRequest {
  teacherId: string;
  materialId: string;
  approve?: boolean;
}

export interface GenerateModuleResponse {
  proposal: GeneratedModuleProposal;
}

export interface ListTeachingModulesRequest {
  teacherId?: string;
}

export interface ListTeachingModulesResponse {
  items: TeachingModule[];
  total: number;
}

export interface GenerateQuizRequest {
  teacherId: string;
  moduleId?: string;
  lessonId?: string;
  title?: string;
}

export interface GenerateQuizResponse {
  proposal: GeneratedQuizProposal;
}

export interface ListTeachingQuizzesRequest {
  teacherId?: string;
  moduleId?: string;
}

export interface ListTeachingQuizzesResponse {
  items: TeachingQuiz[];
  total: number;
}

export interface UploadExamScanRequest {
  teacherId: string;
  studentId: string;
  classroomId?: string;
  quizId?: string;
  fileName: string;
  mimeType: string;
  ocrTextHint?: string;
  answerText?: string;
}

export interface UploadExamScanResponse {
  attempt: StudentAttempt;
}

const domainRef = (name: string): SchemaDefinition => ({
  $ref: `domain://${name}`
});

export const teachingSchemas = {
  uploadTeacherMaterialRequest: {
    $id: "schema://teaching/UploadTeacherMaterialRequest",
    type: "object",
    required: ["teacherId", "fileName", "mimeType"],
    properties: {
      teacherId: { type: "string" },
      fileName: { type: "string" },
      mimeType: { type: "string" },
      textContent: { type: "string" },
      ocrTextHint: { type: "string" }
    }
  } satisfies SchemaDefinition,
  uploadTeacherMaterialResponse: {
    $id: "schema://teaching/UploadTeacherMaterialResponse",
    type: "object",
    required: ["material", "proposal"],
    properties: {
      material: domainRef("TeachingMaterial"),
      proposal: domainRef("MaterialGenerationProposal")
    }
  } satisfies SchemaDefinition,
  listTeacherMaterialsRequest: {
    $id: "schema://teaching/ListTeacherMaterialsRequest",
    type: "object",
    required: ["teacherId"],
    properties: {
      teacherId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listTeacherMaterialsResponse: {
    $id: "schema://teaching/ListTeacherMaterialsResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("TeachingMaterial")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  generateModuleRequest: {
    $id: "schema://teaching/GenerateModuleRequest",
    type: "object",
    required: ["teacherId", "materialId"],
    properties: {
      teacherId: { type: "string" },
      materialId: { type: "string" },
      approve: { type: "boolean" }
    }
  } satisfies SchemaDefinition,
  generateModuleResponse: {
    $id: "schema://teaching/GenerateModuleResponse",
    type: "object",
    required: ["proposal"],
    properties: {
      proposal: domainRef("GeneratedModuleProposal")
    }
  } satisfies SchemaDefinition,
  listTeachingModulesRequest: {
    $id: "schema://teaching/ListTeachingModulesRequest",
    type: "object",
    properties: {
      teacherId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listTeachingModulesResponse: {
    $id: "schema://teaching/ListTeachingModulesResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("TeachingModule")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  generateQuizRequest: {
    $id: "schema://teaching/GenerateQuizRequest",
    type: "object",
    required: ["teacherId"],
    properties: {
      teacherId: { type: "string" },
      moduleId: { type: "string" },
      lessonId: { type: "string" },
      title: { type: "string" }
    }
  } satisfies SchemaDefinition,
  generateQuizResponse: {
    $id: "schema://teaching/GenerateQuizResponse",
    type: "object",
    required: ["proposal"],
    properties: {
      proposal: domainRef("GeneratedQuizProposal")
    }
  } satisfies SchemaDefinition,
  listTeachingQuizzesRequest: {
    $id: "schema://teaching/ListTeachingQuizzesRequest",
    type: "object",
    properties: {
      teacherId: { type: "string" },
      moduleId: { type: "string" }
    }
  } satisfies SchemaDefinition,
  listTeachingQuizzesResponse: {
    $id: "schema://teaching/ListTeachingQuizzesResponse",
    type: "object",
    required: ["items", "total"],
    properties: {
      items: {
        type: "array",
        items: domainRef("TeachingQuiz")
      },
      total: { type: "integer" }
    }
  } satisfies SchemaDefinition,
  uploadExamScanRequest: {
    $id: "schema://teaching/UploadExamScanRequest",
    type: "object",
    required: ["teacherId", "studentId", "fileName", "mimeType"],
    properties: {
      teacherId: { type: "string" },
      studentId: { type: "string" },
      classroomId: { type: "string" },
      quizId: { type: "string" },
      fileName: { type: "string" },
      mimeType: { type: "string" },
      ocrTextHint: { type: "string" },
      answerText: { type: "string" }
    }
  } satisfies SchemaDefinition,
  uploadExamScanResponse: {
    $id: "schema://teaching/UploadExamScanResponse",
    type: "object",
    required: ["attempt"],
    properties: {
      attempt: domainRef("StudentAttempt")
    }
  } satisfies SchemaDefinition
};
