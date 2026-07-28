import { errorResponse, successResponse } from "@/lib/backend-http";
import { requireStudentSession } from "@/lib/server-session";
import { listTeachingModules, listTeachingQuizzes } from "@/services/server/content-server";
import { getStudentClassroomWorkspace } from "@/services/server/learning-server";

export async function GET() {
  try {
    const session = await requireStudentSession(["learning:read"]);
    const [workspace, modules, quizzes] = await Promise.all([
      getStudentClassroomWorkspace(session.userId),
      listTeachingModules(),
      listTeachingQuizzes()
    ]);
    const assignedModuleIds = new Set(
      workspace.workspaces.flatMap((item) => item.assignedModuleIds ?? [])
    );
    const filteredModules = modules.items.filter((module) => assignedModuleIds.has(module.id));
    const filteredQuizzes = quizzes.items.filter(
      (quiz) => !quiz.moduleId || assignedModuleIds.has(quiz.moduleId)
    );

    return successResponse({
      workspaces: workspace.workspaces,
      modules: filteredModules,
      quizzes: filteredQuizzes
    });
  } catch (error) {
    return errorResponse(error);
  }
}
