import type {
  Assessment,
  AiGenerationMetadata,
  BaseEntity,
  ContentItem,
  EntityId,
  ExtensibleString,
  ISODateTime,
  KnowledgeNode,
  Lesson,
  UrlString
} from "./index.js";

export type TeachingMaterialStatus = ExtensibleString<
  "uploaded" | "parsed" | "approved" | "published" | "archived"
>;

export type TeachingMaterialKind = ExtensibleString<
  "pdf" | "worksheet" | "slides" | "image" | "scan" | "text"
>;

export type ModuleGenerationStatus = ExtensibleString<
  "draft" | "proposed" | "approved" | "published" | "archived"
>;

export type ModuleSectionKind = ExtensibleString<
  | "motivation"
  | "concept_introduction"
  | "guided_practice"
  | "exploration"
  | "challenge_problem"
  | "assessment"
>;

export type QuizQuestionKind = ExtensibleString<
  "mechanical" | "contextual" | "challenge"
>;

export type ExamAttemptSource = ExtensibleString<"scan" | "quiz_submission">;

export interface ParsedMaterialSection {
  id: EntityId;
  heading: string;
  content: string;
}

export interface ParsedMaterialStructure {
  title: string;
  sections: ParsedMaterialSection[];
  concepts: string[];
  examples: string[];
  exercises: string[];
  suggestedTopicTitles: string[];
  suggestedLessonTitles: string[];
  generationMetadata?: AiGenerationMetadata;
}

export interface TeachingMaterial extends BaseEntity {
  teacherId: EntityId;
  fileName: string;
  mimeType: string;
  materialKind: TeachingMaterialKind;
  status: TeachingMaterialStatus;
  parsedText: string;
  parsedStructure: ParsedMaterialStructure;
  sourceUrl?: UrlString;
}

export interface TeachingModuleSection {
  id: EntityId;
  kind: ModuleSectionKind;
  title: string;
  summary: string;
  activityPrompt?: string;
}

export interface TeachingModule extends BaseEntity {
  teacherId: EntityId;
  materialId?: EntityId;
  title: string;
  summary?: string;
  status: ModuleGenerationStatus;
  conceptNodeIds: EntityId[];
  lessonIds: EntityId[];
  sections: TeachingModuleSection[];
  suggestedTopicTitles?: string[];
}

export interface QuizQuestionOption {
  id: EntityId;
  label: string;
  content: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: EntityId;
  questionKind: QuizQuestionKind;
  prompt: string;
  explanation?: string;
  difficulty: ExtensibleString<"easy" | "medium" | "hard">;
  conceptNodeIds?: EntityId[];
  options?: QuizQuestionOption[];
  expectedAnswer?: string;
}

export interface TeachingQuiz extends BaseEntity {
  teacherId: EntityId;
  moduleId?: EntityId;
  lessonId?: EntityId;
  title: string;
  summary?: string;
  questions: QuizQuestion[];
}

export interface StudentAttemptAnswer {
  questionId: EntityId;
  answerText: string;
  matchedOptionId?: EntityId;
}

export interface StudentAttempt extends BaseEntity {
  studentId: EntityId;
  classroomId?: EntityId;
  quizId?: EntityId;
  source: ExamAttemptSource;
  score?: number;
  answers: StudentAttemptAnswer[];
  teacherVerified: boolean;
}

export interface MaterialGenerationProposal {
  material: TeachingMaterial;
  suggestedTopics: string[];
  suggestedLessons: string[];
  conceptMatches: KnowledgeNode[];
  generationMetadata?: AiGenerationMetadata;
}

export interface GeneratedModuleProposal {
  module: TeachingModule;
  supportingLessons: Lesson[];
  conceptMatches: KnowledgeNode[];
  generationMetadata?: AiGenerationMetadata;
}

export interface GeneratedQuizProposal {
  quiz: TeachingQuiz;
  supportingAssessment?: Assessment;
  supportingContentItems?: ContentItem[];
  generationMetadata?: AiGenerationMetadata;
}
