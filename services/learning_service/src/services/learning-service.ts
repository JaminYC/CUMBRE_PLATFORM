import { NotFoundError } from "@cumbre/api-runtime";
import { evaluateAdaptiveState } from "@cumbre/adaptive-engine";
import { generateRecommendations } from "@cumbre/recommendation-engine";
import { retrieveAdaptiveContext } from "@cumbre/retrieval-engine";
import type { LearningService as LearningServiceContract } from "@cumbre/sdk";
import type {
  AssignClassroomModulesRequest,
  AssignClassroomModulesResponse,
  CreateClassroomMeetingRequest,
  CreateClassroomMeetingResponse,
  CreateClassroomRequest,
  CreateClassroomResponse,
  CompleteLearningSessionRequest,
  CompleteLearningSessionResponse,
  CreateLearningSessionRequest,
  CreateLearningSessionResponse,
  GetClassroomAnalyticsRequest,
  GetClassroomAnalyticsResponse,
  GetClassroomMeetingRequest,
  GetClassroomMeetingResponse,
  GetClassroomModulesRequest,
  GetClassroomModulesResponse,
  GetClassroomRequest,
  GetClassroomResponse,
  GetClassroomStudentsRequest,
  GetClassroomStudentsResponse,
  GetLearningPathRequest,
  GetLearningPathResponse,
  GetLearningProgressRequest,
  GetLearningProgressResponse,
  GetStudentClassroomWorkspaceRequest,
  GetStudentClassroomWorkspaceResponse,
  GetTeacherOverviewRequest,
  GetTeacherOverviewResponse,
  ImportStudentsRequest,
  ImportStudentsResponse,
  JoinClassroomRequest,
  JoinClassroomResponse,
  ListTeacherClassroomsRequest,
  ListTeacherClassroomsResponse,
  UpdateLearningSessionRequest,
  UpdateLearningSessionResponse
} from "@cumbre/schemas";
import { listRecentTutorTurns } from "@cumbre/tutor-engine";
import type {
  ClassroomAnalytics,
  ClassroomOverview,
  ClassroomRosterEntry,
  LearnerProgressSummary,
  LearningPath,
  LearningSession,
  MasteryState
} from "@cumbre/types";
import { ClassroomRepository } from "../repositories/classroom-repository.js";
import { LearningPathRepository } from "../repositories/learning-path-repository.js";
import { LearningSessionRepository } from "../repositories/learning-session-repository.js";
import { MasteryStateRepository } from "../repositories/mastery-state-repository.js";
import { ContentKnowledgeClient } from "./content-knowledge-client.js";
import { ClassroomProvisioningClient } from "./classroom-provisioning-client.js";
import type { Logger } from "../utils/logger.js";

export class LearningApplicationService implements LearningServiceContract {
  constructor(
    private readonly learningPathRepository: LearningPathRepository,
    private readonly learningSessionRepository: LearningSessionRepository,
    private readonly masteryStateRepository: MasteryStateRepository,
    private readonly classroomRepository: ClassroomRepository,
    private readonly contentKnowledgeClient: ContentKnowledgeClient,
    private readonly classroomProvisioningClient: ClassroomProvisioningClient,
    private readonly logger: Logger
  ) {}

  async createLearningSession(
    request: CreateLearningSessionRequest
  ): Promise<CreateLearningSessionResponse> {
    const session = await this.learningSessionRepository.create(request);

    return { session };
  }

  async updateLearningSession(
    request: UpdateLearningSessionRequest
  ): Promise<UpdateLearningSessionResponse> {
    const session = await this.learningSessionRepository.update(request);

    if (!session) {
      throw new NotFoundError("Learning session was not found.");
    }

    return { session };
  }

  async completeLearningSession(
    request: CompleteLearningSessionRequest
  ): Promise<CompleteLearningSessionResponse> {
    const session = await this.learningSessionRepository.complete(
      request.sessionId,
      request.completedAt
    );

    if (!session) {
      throw new NotFoundError("Learning session was not found.");
    }

    return { session };
  }

  async getLearningProgress(
    request: GetLearningProgressRequest
  ): Promise<GetLearningProgressResponse> {
    const snapshot = await this.buildLearnerSnapshot(
      request.learnerUserId,
      request.learningPathId
    );

    this.logger.info("Loaded persisted adaptive learning progress", {
      learnerUserId: request.learnerUserId,
      learningPathId: snapshot.learningPathId,
      sessionCount: snapshot.sessions.length,
      masteryCount: snapshot.masteryStates.length,
      tutorTurnCount: snapshot.tutorUsageCount,
      masteryLevel: snapshot.estimatedMastery.level,
      nextBestAction: snapshot.nextBestAction.actionType,
      recommendedReviewConcept: snapshot.strugglingConcept?.title
    });

    return {
      learnerUserId: request.learnerUserId,
      learningPathId: snapshot.learningPathId,
      progressPercent: snapshot.progressPercent,
      sessions: snapshot.sessions,
      masteryStates: snapshot.masteryStates,
      recommendations: snapshot.recommendations,
      estimatedMastery: snapshot.estimatedMastery,
      nextBestAction: snapshot.nextBestAction,
      adaptiveGuidance: snapshot.adaptiveGuidance
    };
  }

  async getTeacherOverview(
    request: GetTeacherOverviewRequest
  ): Promise<GetTeacherOverviewResponse> {
    const learnerUserIds = await this.learningSessionRepository.listLearnerIds(
      request.learningPathId,
      request.limit ?? 12
    );
    const learnerSummaries = await Promise.all(
      learnerUserIds.map((learnerUserId) =>
        this.buildLearnerSnapshot(learnerUserId, request.learningPathId)
      )
    );
    const totalLearners = learnerSummaries.length;
    const activeLearners = learnerSummaries.filter(
      (summary) => summary.recentSessionStatus === "active"
    ).length;
    const averageProgressPercent =
      totalLearners > 0
        ? learnerSummaries.reduce(
            (sum, summary) => sum + summary.progressPercent,
            0
          ) / totalLearners
        : 0;
    const averageTutorUsageCount =
      totalLearners > 0
        ? learnerSummaries.reduce(
            (sum, summary) => sum + summary.tutorUsageCount,
            0
          ) / totalLearners
        : 0;
    const learnersNeedingReview = learnerSummaries.filter(
      (summary) => summary.strugglingConcept || summary.nextBestAction?.actionType === "review_prerequisite_topic"
    ).length;
    const conceptStruggles = Array.from(
      learnerSummaries.reduce((map, summary) => {
        const concept = summary.strugglingConcept;

        if (!concept) {
          return map;
        }

        const currentValue = map.get(concept.id) ?? {
          concept,
          learnerCount: 0,
          tutorUsageCount: 0,
          recommendationCount: 0
        };

        currentValue.learnerCount += 1;
        currentValue.tutorUsageCount += summary.tutorUsageCount;
        currentValue.recommendationCount += summary.recommendations.filter(
          (recommendation) => recommendation.recommendationType === "review"
        ).length;
        map.set(concept.id, currentValue);
        return map;
      }, new Map())
    )
      .map((entry) => entry[1])
      .sort((left, right) => right.learnerCount - left.learnerCount)
      .slice(0, 5);
    const tutorUsageTrends = [
      {
        label: "0 tutor replies",
        value: learnerSummaries.filter((summary) => summary.tutorUsageCount === 0).length
      },
      {
        label: "1-2 tutor replies",
        value: learnerSummaries.filter(
          (summary) => summary.tutorUsageCount >= 1 && summary.tutorUsageCount <= 2
        ).length
      },
      {
        label: "3+ tutor replies",
        value: learnerSummaries.filter((summary) => summary.tutorUsageCount >= 3).length
      }
    ];
    const recommendationCounts = learnerSummaries.reduce((map, summary) => {
      for (const recommendation of summary.recommendations) {
        map.set(
          recommendation.recommendationType,
          (map.get(recommendation.recommendationType) ?? 0) + 1
        );
      }

      return map;
    }, new Map<string, number>());
    const recommendationTrends = Array.from(recommendationCounts.entries()).map(
      ([recommendationType, count]) => ({
        recommendationType,
        count
      })
    );

    return {
      overview: {
        learningPathId: request.learningPathId,
        totalLearners,
        activeLearners,
        averageProgressPercent: round(averageProgressPercent),
        averageTutorUsageCount: round(averageTutorUsageCount),
        learnersNeedingReview,
        learnerSummaries,
        conceptStruggles,
        tutorUsageTrends,
        recommendationTrends
      }
    };
  }

  async getLearningPath(
    request: GetLearningPathRequest
  ): Promise<GetLearningPathResponse> {
    const learningPath = await this.learningPathRepository.findById(
      request.learningPathId
    );

    if (!learningPath) {
      throw new NotFoundError("Learning path was not found.");
    }

    return { learningPath };
  }

  async createClassroom(
    request: CreateClassroomRequest
  ): Promise<CreateClassroomResponse> {
    const classCode = buildClassCode(request.name, request.subject);
    const classroom = await this.classroomRepository.createClassroom({
      ...request,
      classCode
    });

    return { classroom };
  }

  async joinClassroom(
    request: JoinClassroomRequest
  ): Promise<JoinClassroomResponse> {
    const classroom = await this.classroomRepository.findClassroomByCode(
      request.classCode.trim().toUpperCase()
    );

    if (!classroom) {
      throw new NotFoundError("Classroom was not found for the provided class code.");
    }

    const profileRecord = await this.classroomRepository.ensureStudentProfile({
      name: request.studentId,
      gradeLevel: classroom.gradeLevel,
      createdByTeacher: false,
      linkedUserId: request.studentId
    });
    const enrollment = await this.classroomRepository.createEnrollment({
      classroomId: classroom.id,
      studentId: profileRecord.profile.id,
      status: "joined",
      joinedAt: new Date().toISOString()
    });

    return {
      classroom,
      enrollment
    };
  }

  async getClassroom(
    request: GetClassroomRequest
  ): Promise<GetClassroomResponse> {
    const overview = await this.resolveClassroomOverview(request.classroomId);

    return { overview };
  }

  async listTeacherClassrooms(
    request: ListTeacherClassroomsRequest
  ): Promise<ListTeacherClassroomsResponse> {
    const classrooms = await this.classroomRepository.listClassroomsByTeacher(
      request.teacherId
    );
    const items = await Promise.all(
      classrooms.map((classroom) => this.resolveClassroomOverview(classroom.id))
    );

    return {
      items,
      total: items.length
    };
  }

  async importStudents(
    request: ImportStudentsRequest
  ): Promise<ImportStudentsResponse> {
    const classroom = await this.ensureClassroom(request.classroomId);
    const rows = parseStudentCsv(request.csvContent);
    const importedStudents: ClassroomRosterEntry[] = [];

    for (const row of rows) {
      const generatedCredential = buildGeneratedCredential(row.name);
      const email = row.email || buildSyntheticStudentEmail(row.name, classroom.classCode);
      const user = await this.classroomProvisioningClient.createStudentAccount({
        displayName: row.name,
        email,
        credential: generatedCredential
      });
      const profileRecord = await this.classroomRepository.ensureStudentProfile({
        name: row.name,
        email,
        gradeLevel: row.gradeLevel ?? classroom.gradeLevel,
        createdByTeacher: true,
        linkedUserId: user.id,
        generatedCredential
      });
      const enrollment = await this.classroomRepository.createEnrollment({
        classroomId: classroom.id,
        studentId: profileRecord.profile.id,
        status: "invited"
      });

      importedStudents.push({
        classroomId: classroom.id,
        student: profileRecord.profile,
        enrollment,
        generatedCredential
      });
    }

    return {
      classroom,
      importedStudents
    };
  }

  async getClassroomStudents(
    request: GetClassroomStudentsRequest
  ): Promise<GetClassroomStudentsResponse> {
    const classroom = await this.ensureClassroom(request.classroomId);
    const students = await this.classroomRepository.listRoster(classroom.id);

    return {
      classroom,
      students
    };
  }

  async assignClassroomModules(
    request: AssignClassroomModulesRequest
  ): Promise<AssignClassroomModulesResponse> {
    await this.ensureClassroom(request.classroomId);
    const classroom = await this.classroomRepository.updateAssignments(
      request.classroomId,
      {
        moduleIds: request.moduleIds,
        learningPathIds: request.learningPathIds
      }
    );

    return { classroom };
  }

  async getClassroomModules(
    request: GetClassroomModulesRequest
  ): Promise<GetClassroomModulesResponse> {
    const classroom = await this.ensureClassroom(request.classroomId);

    return {
      classroom,
      moduleIds: classroom.assignedModuleIds ?? [],
      learningPathIds: classroom.assignedLearningPathIds ?? []
    };
  }

  async createClassroomMeeting(
    request: CreateClassroomMeetingRequest
  ): Promise<CreateClassroomMeetingResponse> {
    await this.ensureClassroom(request.classroomId);
    const meeting = await this.classroomRepository.createMeeting({
      classroomId: request.classroomId,
      provider: request.provider,
      title: request.title,
      description: request.description,
      scheduledAt: request.scheduledAt,
      meetingUrl: buildMeetingUrl(request.provider, request.classroomId),
      createdByTeacherId: request.teacherId
    });

    return { meeting };
  }

  async getClassroomMeeting(
    request: GetClassroomMeetingRequest
  ): Promise<GetClassroomMeetingResponse> {
    const meeting = await this.classroomRepository.getLatestMeeting(request.classroomId);

    return { meeting };
  }

  async getStudentClassroomWorkspace(
    request: GetStudentClassroomWorkspaceRequest
  ): Promise<GetStudentClassroomWorkspaceResponse> {
    const classrooms = await this.classroomRepository.listClassroomsByStudentUserId(
      request.studentId
    );
    const workspaces = await Promise.all(
      classrooms.map(async (classroom) => {
        const roster = await this.classroomRepository.listRoster(classroom.id);
        const profile = roster.find(
          (entry) => entry.student.linkedUserId === request.studentId
        );
        const meeting = await this.classroomRepository.getLatestMeeting(classroom.id);
        const summary = await this.buildLearnerSnapshot(
          request.studentId,
          classroom.assignedLearningPathIds?.[0] ?? "learning-path-placeholder"
        );

        return {
          classroom,
          enrollment: profile?.enrollment ?? {
            id: "enrollment-missing",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            classroomId: classroom.id,
            studentId: profile?.student.id ?? request.studentId,
            status: "pending"
          },
          assignedModuleIds: classroom.assignedModuleIds ?? [],
          assignedLearningPathIds: classroom.assignedLearningPathIds ?? [],
          nextMeeting: meeting ?? undefined,
          nextBestAction: summary.nextBestAction,
          learnerSummary: summary
        };
      })
    );

    return { workspaces };
  }

  async getClassroomAnalytics(
    request: GetClassroomAnalyticsRequest
  ): Promise<GetClassroomAnalyticsResponse> {
    const overview = await this.resolveClassroomOverview(request.classroomId);
    const learnerSummaries = await Promise.all(
      overview.roster
        .filter((entry) => entry.student.linkedUserId)
        .map((entry) =>
          this.buildLearnerSnapshot(
            entry.student.linkedUserId!,
            overview.classroom.assignedLearningPathIds?.[0] ?? "learning-path-placeholder"
          )
        )
    );
    const analytics = buildClassroomAnalytics(
      overview.classroom.id,
      overview.roster,
      learnerSummaries
    );

    return { analytics };
  }

  async listLearningPaths(
    audienceRole?: string
  ): Promise<{ items: LearningPath[]; total: number }> {
    const items = await this.learningPathRepository.list();
    const filteredItems = audienceRole
      ? items.filter((item: LearningPath) => item.audienceRoles?.includes(audienceRole))
      : items;

    return {
      items: filteredItems,
      total: filteredItems.length
    };
  }

  private async buildLearnerSnapshot(
    learnerUserId: string,
    requestedLearningPathId?: string
  ): Promise<
    LearnerProgressSummary & {
      sessions: LearningSession[];
      masteryStates: MasteryState[];
      recommendations: GetLearningProgressResponse["recommendations"];
      progressPercent: number;
      estimatedMastery: NonNullable<GetLearningProgressResponse["estimatedMastery"]>;
      nextBestAction: NonNullable<GetLearningProgressResponse["nextBestAction"]>;
      adaptiveGuidance: NonNullable<GetLearningProgressResponse["adaptiveGuidance"]>;
      tutorUsageCount: number;
      learningPathId?: string;
    }
  > {
    const [sessions, masteryStates] = await Promise.all([
      this.learningSessionRepository.listByLearner(
        learnerUserId,
        requestedLearningPathId
      ),
      this.masteryStateRepository.listByLearner(
        learnerUserId,
        requestedLearningPathId
      )
    ]);
    const learningPathId =
      requestedLearningPathId ?? sessions[0]?.learningPathId ?? undefined;
    const [learningPath, recentTutorTurns] = await Promise.all([
      learningPathId
        ? this.learningPathRepository.findById(learningPathId)
        : Promise.resolve(null),
      listRecentTutorTurns({
        learnerUserId,
        learningPathId,
        limit: 8
      })
    ]);
    const latestSession = sessions[0];
    let graphInsight =
      latestSession?.lessonId
        ? await this.contentKnowledgeClient.getLessonKnowledge(latestSession.lessonId)
        : latestSession?.topicId
          ? await this.contentKnowledgeClient.getTopicKnowledge(latestSession.topicId)
          : null;
    let adaptiveState = evaluateAdaptiveState({
      learnerUserId,
      learningPath,
      sessions,
      masteryStates,
      recentTutorTurns,
      graphInsight
    });

    if (
      adaptiveState.stalledLessonId &&
      adaptiveState.stalledLessonId !== latestSession?.lessonId
    ) {
      const stalledLessonInsight = await this.contentKnowledgeClient.getLessonKnowledge(
        adaptiveState.stalledLessonId
      );

      if (stalledLessonInsight) {
        graphInsight = stalledLessonInsight;
        adaptiveState = evaluateAdaptiveState({
          learnerUserId,
          learningPath,
          sessions,
          masteryStates,
          recentTutorTurns,
          graphInsight
        });
      }
    }

    const retrievedContext = retrieveAdaptiveContext({
      learningPath,
      sessions,
      masteryStates,
      recentTutorTurns,
      graphInsight,
      estimatedMastery: adaptiveState.estimatedMastery,
      adaptiveGuidance: adaptiveState.adaptiveGuidance
    });
    adaptiveState = evaluateAdaptiveState({
      learnerUserId,
      learningPath,
      sessions,
      masteryStates,
      recentTutorTurns,
      graphInsight,
      retrievedContext
    });

    const recommendationState = generateRecommendations({
      learnerUserId,
      learningPath,
      sessions,
      estimatedMastery: adaptiveState.estimatedMastery,
      adaptiveGuidance: adaptiveState.adaptiveGuidance,
      recentTutorTurns,
      graphInsight,
      stalledLessonId: adaptiveState.stalledLessonId,
      stalledTopicId: adaptiveState.stalledTopicId,
      nextLessonId: adaptiveState.nextLessonId,
      shouldAskTutor: adaptiveState.shouldAskTutor,
      retrievedContext
    });
    const progressPercent =
      sessions.length > 0
        ? sessions.reduce((sum, session) => sum + session.progressPercent, 0) /
          sessions.length
        : 0;

    return {
      learnerUserId,
      learningPathId,
      progressPercent: round(progressPercent),
      recentSessionStatus: latestSession?.status,
      recentSessionId: latestSession?.id,
      currentLessonId: latestSession?.lessonId,
      currentTopicId: latestSession?.topicId,
      tutorUsageCount: recentTutorTurns.length,
      estimatedMastery: adaptiveState.estimatedMastery,
      nextBestAction: recommendationState.nextBestAction,
      adaptiveGuidance: adaptiveState.adaptiveGuidance,
      strugglingConcept: adaptiveState.recommendedReviewConcept,
      recommendedReviewTopicId: adaptiveState.reviewTopicId,
      recommendedReviewLessonId: adaptiveState.reviewLessonId,
      sessions,
      masteryStates,
      recommendations: recommendationState.recommendations
    };
  }

  private async resolveClassroomOverview(classroomId: string): Promise<ClassroomOverview> {
    const classroom = await this.ensureClassroom(classroomId);
    const [roster, nextMeeting] = await Promise.all([
      this.classroomRepository.listRoster(classroomId),
      this.classroomRepository.getLatestMeeting(classroomId)
    ]);

    return {
      classroom,
      roster,
      assignedModuleIds: classroom.assignedModuleIds ?? [],
      assignedLearningPathIds: classroom.assignedLearningPathIds ?? [],
      nextMeeting: nextMeeting ?? undefined
    };
  }

  async deleteClassroom(classroomId: string): Promise<{ deleted: true; classroomId: string }> {
    await this.ensureClassroom(classroomId);
    await this.classroomRepository.deleteClassroom(classroomId);
    return { deleted: true, classroomId };
  }

  async searchStudentUsers(
    query: string
  ): Promise<{ users: { id: string; displayName: string; email: string; primaryRole: string }[] }> {
    const profiles = await this.classroomRepository.searchStudentProfiles(query);
    return {
      users: profiles.map((p) => ({
        id: p.linkedUserId ?? p.id,
        displayName: p.name,
        email: p.email ?? "",
        primaryRole: "student"
      }))
    };
  }

  private async ensureClassroom(classroomId: string) {
    const classroom = await this.classroomRepository.findClassroomById(classroomId);

    if (!classroom) {
      throw new NotFoundError("Classroom was not found.");
    }

    return classroom;
  }
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function buildClassCode(name: string, subject: string) {
  const stem = `${name}-${subject}`
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "")
    .slice(0, 8);

  return `${stem}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function buildGeneratedCredential(name: string) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 10);

  return `${slug || "student"}-${Math.random().toString(36).slice(2, 8)}`;
}

function buildSyntheticStudentEmail(name: string, classCode: string) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/(^\.|\.$)/g, "")
    .slice(0, 24);

  return `${slug || "student"}.${classCode.toLowerCase()}@cumbre.local`;
}

function parseStudentCsv(csvContent: string) {
  const lines = csvContent
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const [, ...rows] = lines;

  return rows
    .map((line) => {
      const [name, email, gradeLevel] = line.split(",").map((part) => part.trim());
      return { name, email, gradeLevel };
    })
    .filter((row) => row.name);
}

function buildMeetingUrl(provider: string, classroomId: string) {
  const slug = classroomId.slice(0, 8);

  if (provider === "zoom") {
    return `https://zoom.us/j/${slug}`;
  }

  if (provider === "google_meet") {
    return `https://meet.google.com/${slug}`;
  }

  if (provider === "microsoft_teams") {
    return `https://teams.microsoft.com/l/meetup-join/${slug}`;
  }

  return `https://meet.cumbre.local/${slug}`;
}

function buildClassroomAnalytics(
  classroomId: string,
  roster: ClassroomRosterEntry[],
  learnerSummaries: Array<
    LearnerProgressSummary & {
      recommendations?: GetLearningProgressResponse["recommendations"];
    }
  >
): ClassroomAnalytics {
  const conceptStruggles = Array.from(
    learnerSummaries.reduce((map, summary) => {
      const concept = summary.strugglingConcept;

      if (!concept) {
        return map;
      }

      const current = map.get(concept.id) ?? {
        concept,
        learnerCount: 0,
        tutorUsageCount: 0,
        averageProgressPercent: 0
      };

      current.learnerCount += 1;
      current.tutorUsageCount += summary.tutorUsageCount;
      current.averageProgressPercent += summary.progressPercent;
      map.set(concept.id, current);
      return map;
    }, new Map<string, { concept: ClassroomAnalytics["conceptStruggles"][number]["concept"]; learnerCount: number; tutorUsageCount: number; averageProgressPercent: number }>())
  ).map(([, value]) => ({
    ...value,
    averageProgressPercent: round(value.averageProgressPercent / value.learnerCount)
  }));

  const lessonCompletionMap = new Map<string, { lessonTitle: string; completedLearnerCount: number; activeLearnerCount: number }>();
  for (const summary of learnerSummaries) {
    const lessonId = summary.currentLessonId ?? "lesson-unassigned";
    const entry = lessonCompletionMap.get(lessonId) ?? {
      lessonTitle: lessonId,
      completedLearnerCount: 0,
      activeLearnerCount: 0
    };
    if (summary.recentSessionStatus === "completed") {
      entry.completedLearnerCount += 1;
    } else {
      entry.activeLearnerCount += 1;
    }
    lessonCompletionMap.set(lessonId, entry);
  }

  const recommendationCounts = learnerSummaries.reduce((map, summary) => {
    for (const recommendation of summary.recommendations ?? []) {
      map.set(
        recommendation.recommendationType,
        (map.get(recommendation.recommendationType) ?? 0) + 1
      );
    }
    return map;
  }, new Map<string, number>());

  const averageProgressPercent =
    learnerSummaries.length > 0
      ? round(
          learnerSummaries.reduce((sum, summary) => sum + summary.progressPercent, 0) /
            learnerSummaries.length
        )
      : 0;

  return {
    id: `classroom-analytics-${classroomId}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    classroomId,
    rosterCount: roster.length,
    joinedLearnerCount: roster.filter((entry) => entry.enrollment.status === "joined").length,
    averageProgressPercent,
    tutorUsageTotal: learnerSummaries.reduce(
      (sum, summary) => sum + summary.tutorUsageCount,
      0
    ),
    conceptStruggles,
    lessonCompletion: Array.from(lessonCompletionMap.entries()).map(([lessonId, value]) => ({
      lessonId,
      ...value
    })),
    recommendationDistribution: Array.from(recommendationCounts.entries()).map(
      ([recommendationType, count]) => ({
        recommendationType,
        count
      })
    ),
    adaptiveGuidanceHighlights: learnerSummaries
      .flatMap((summary) => summary.adaptiveGuidance ?? [])
      .slice(0, 6)
  };
}
