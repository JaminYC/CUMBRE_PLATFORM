import type {
  AssignClassroomModulesRequest,
  CreateClassroomMeetingRequest,
  CreateClassroomRequest,
  CreateLearningSessionRequest,
  GetClassroomAnalyticsRequest,
  GetClassroomMeetingRequest,
  GetClassroomModulesRequest,
  GetClassroomRequest,
  GetClassroomStudentsRequest,
  GetLearningPathRequest,
  GetLearningProgressRequest,
  GetStudentClassroomWorkspaceRequest,
  GetTeacherOverviewRequest,
  ImportStudentsRequest,
  JoinClassroomRequest,
  ListTeacherClassroomsRequest,
  UpdateLearningSessionRequest
} from "@cumbre/schemas";
import type { RequestContext } from "@cumbre/api-runtime";
import type { LearningService } from "@cumbre/sdk";

export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  startSession = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.createLearningSession(
      body as CreateLearningSessionRequest
    );
  };

  updateSession = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.updateLearningSession(
      body as UpdateLearningSessionRequest
    );
  };

  getProgress = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getLearningProgress(
      validatedQuery as GetLearningProgressRequest
    );
  };

  getLearningPath = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getLearningPath(
      validatedQuery as GetLearningPathRequest
    );
  };

  getTeacherOverview = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getTeacherOverview(
      validatedQuery as GetTeacherOverviewRequest
    );
  };

  createClassroom = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.createClassroom(body as CreateClassroomRequest);
  };

  joinClassroom = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.joinClassroom(body as JoinClassroomRequest);
  };

  getClassroom = async ({ validatedParams }: RequestContext): Promise<unknown> => {
    return this.learningService.getClassroom(
      validatedParams as GetClassroomRequest
    );
  };

  listTeacherClassrooms = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.learningService.listTeacherClassrooms(
      validatedQuery as ListTeacherClassroomsRequest
    );
  };

  importStudents = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.importStudents(body as ImportStudentsRequest);
  };

  getClassroomStudents = async ({
    validatedParams
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getClassroomStudents(
      validatedParams as GetClassroomStudentsRequest
    );
  };

  assignClassroomModules = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.assignClassroomModules(
      body as AssignClassroomModulesRequest
    );
  };

  getClassroomModules = async ({
    validatedParams
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getClassroomModules(
      validatedParams as GetClassroomModulesRequest
    );
  };

  createClassroomMeeting = async ({ body }: RequestContext): Promise<unknown> => {
    return this.learningService.createClassroomMeeting(
      body as CreateClassroomMeetingRequest
    );
  };

  getClassroomMeeting = async ({
    validatedParams
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getClassroomMeeting(
      validatedParams as GetClassroomMeetingRequest
    );
  };

  getStudentClassroomWorkspace = async ({
    validatedQuery
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getStudentClassroomWorkspace(
      validatedQuery as GetStudentClassroomWorkspaceRequest
    );
  };

  getClassroomAnalytics = async ({
    validatedParams
  }: RequestContext): Promise<unknown> => {
    return this.learningService.getClassroomAnalytics(
      validatedParams as GetClassroomAnalyticsRequest
    );
  };

  deleteClassroom = async ({ params }: RequestContext): Promise<unknown> => {
    return (this.learningService as unknown as {
      deleteClassroom(id: string): Promise<unknown>;
    }).deleteClassroom(params["classroomId"] ?? "");
  };

  searchStudentUsers = async ({ query }: RequestContext): Promise<unknown> => {
    const q = query.get("q") ?? "";
    return (this.learningService as unknown as {
      searchStudentUsers(q: string): Promise<unknown>;
    }).searchStudentUsers(q);
  };
}
