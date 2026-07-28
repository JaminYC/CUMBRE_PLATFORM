import { ValidationError } from "@cumbre/api-runtime";
import {
  createTutorInteraction,
  getTutorSession,
  startTutorSession,
  streamTutorInteraction
} from "@cumbre/tutor-engine";
import type {
  CreateTutorInteractionRequest,
  CreateTutorInteractionResponse,
  GetTutorSessionRequest,
  GetTutorSessionResponse,
  StartTutorSessionRequest,
  StartTutorSessionResponse
} from "@cumbre/schemas";
import type { TutorAction } from "@cumbre/types";
import type { ContentClient } from "./content-client.js";
import type { ContentKnowledgeClient } from "./content-knowledge-client.js";
import type { LearningApplicationService } from "./learning-service.js";

/**
 * El tutor, del lado del servidor.
 *
 * Esto vivia dentro del portal del alumno, en Next.js. Funcionaba en local y
 * no podia funcionar en Vercel: el motor abre su propia conexion a la base, y
 * desde Vercel no hay forma de alcanzar Cloud SQL sin exponer la base a
 * internet. En produccion las tres rutas del tutor devolvian 500.
 *
 * Aqui si: learning_service ya corre en Cloud Run, ya tiene la conexion y ya
 * conoce el progreso del estudiante, que es la mitad del contexto que el
 * tutor necesita. La otra mitad —tema, leccion, grafo, busqueda— se le pide a
 * content_service.
 */
export class TutorService {
  constructor(
    private readonly learningService: LearningApplicationService,
    private readonly contentClient: ContentClient,
    private readonly knowledgeClient: ContentKnowledgeClient
  ) {}

  async startSession(
    request: StartTutorSessionRequest,
    autorizacion?: string
  ): Promise<StartTutorSessionResponse> {
    this.exigirIdentificadores(request, "iniciar una sesión de tutor");

    const context = await this.armarContexto({
      learnerUserId: request.learnerUserId,
      topicId: request.topicId!,
      lessonId: request.lessonId!,
      learningPathId: request.learningPathId,
      autorizacion
    });

    return startTutorSession(request, context);
  }

  async getSession(
    request: GetTutorSessionRequest
  ): Promise<GetTutorSessionResponse> {
    this.exigirIdentificadores(request, "consultar una sesión de tutor");
    return getTutorSession(request);
  }

  async respond(
    request: CreateTutorInteractionRequest,
    autorizacion?: string
  ): Promise<CreateTutorInteractionResponse> {
    const context = await this.contextoDeInteraccion(request, autorizacion);
    return createTutorInteraction(request, context);
  }

  async *respondStream(
    request: CreateTutorInteractionRequest,
    autorizacion?: string
  ) {
    const context = await this.contextoDeInteraccion(request, autorizacion);
    yield* streamTutorInteraction(request, context);
  }

  private async contextoDeInteraccion(
    request: CreateTutorInteractionRequest,
    autorizacion?: string
  ) {
    this.exigirIdentificadores(request, "interactuar con el tutor");

    if (!request.action) {
      throw new ValidationError("Se requiere action para la interacción con el tutor.");
    }

    if (request.action === "ask_question" && !request.prompt?.trim()) {
      throw new ValidationError("Se requiere prompt cuando action es ask_question.");
    }

    return this.armarContexto({
      learnerUserId: request.learnerUserId,
      topicId: request.topicId,
      lessonId: request.lessonId,
      learningPathId: request.learningPathId,
      prompt: request.prompt,
      action: request.action,
      autorizacion
    });
  }

  /**
   * Reune todo lo que el tutor necesita saber antes de abrir la boca.
   *
   * Las piezas se piden en paralelo porque son independientes entre si; en
   * serie esto tardaria la suma de las seis. La busqueda va despues, y no en
   * el mismo grupo, porque la consulta se construye con el titulo del tema y
   * de la leccion: hay que tenerlos antes.
   */
  private async armarContexto(input: {
    learnerUserId: string;
    topicId: string;
    lessonId: string;
    learningPathId?: string;
    prompt?: string;
    action?: TutorAction;
    autorizacion?: string;
  }) {
    const [topic, lesson, learningPath, relatedLessons, progress, graphInsight] =
      await Promise.all([
        this.contentClient.getTopic(input.topicId, input.autorizacion),
        this.contentClient.getLesson(
          input.topicId,
          input.lessonId,
          input.autorizacion
        ),
        input.learningPathId
          ? this.learningService
              .getLearningPath({ learningPathId: input.learningPathId })
              .then((respuesta) => respuesta.learningPath)
          : Promise.resolve(undefined),
        this.contentClient.listLessons(input.topicId, input.autorizacion),
        this.learningService.getLearningProgress({
          learnerUserId: input.learnerUserId,
          learningPathId: input.learningPathId
        }),
        this.knowledgeClient.getLessonKnowledge(
          input.lessonId,
          input.autorizacion
        )
      ]);

    const contentItems = await this.contentClient.search(
      {
        query: this.consultaDeRecuperacion({
          prompt: input.prompt,
          action: input.action,
          topicTitle: topic.title,
          lessonTitle: lesson.title
        }),
        topicId: input.topicId,
        limit: 4
      },
      input.autorizacion
    );

    return {
      topic,
      lesson,
      learningPath,
      relatedLessons,
      contentItems,
      graphInsight: graphInsight ?? undefined,
      adaptiveContext: {
        progressPercent: progress.progressPercent,
        nextBestAction: progress.nextBestAction,
        adaptiveGuidance: progress.adaptiveGuidance
      }
    };
  }

  private consultaDeRecuperacion(input: {
    prompt?: string;
    action?: TutorAction;
    topicTitle: string;
    lessonTitle: string;
  }) {
    const porAccion =
      input.action === "summarize_lesson"
        ? "resumen general"
        : input.action === "give_hint"
          ? "pista primer paso"
          : input.action === "ask_question"
            ? "aclaracion de pregunta"
            : "explicacion de concepto";

    return [input.prompt, porAccion, input.topicTitle, input.lessonTitle]
      .filter(Boolean)
      .join(" ");
  }

  private exigirIdentificadores(
    request: {
      learnerUserId?: string;
      lessonId?: string;
      topicId?: string;
    },
    proposito: string
  ) {
    if (!request.learnerUserId || !request.lessonId || !request.topicId) {
      throw new ValidationError(
        `Se requieren learnerUserId, lessonId y topicId para ${proposito}.`
      );
    }
  }
}
