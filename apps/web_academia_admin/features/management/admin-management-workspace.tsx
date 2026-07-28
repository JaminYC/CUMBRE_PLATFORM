"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel,
  MetricCard
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import {
  createAdminConcept,
  createAdminEdge,
  createAdminLesson,
  createAdminTopic,
  createAdminUser,
  fetchAdminKnowledgeExplore,
  fetchAdminManagementOverview,
  runAdminIntegrityFix,
  updateAdminLesson,
  updateAdminLessonMappings
} from "@/services/client/admin-api";

function splitCsv(value: string) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function AdminManagementWorkspace() {
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [mappedConceptIds, setMappedConceptIds] = useState<string[]>([]);
  const [exploreAnchorType, setExploreAnchorType] = useState<"topic" | "lesson" | "concept">(
    "concept"
  );
  const [exploreAnchorId, setExploreAnchorId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [topicDraft, setTopicDraft] = useState({ title: "", summary: "" });
  const [lessonDraft, setLessonDraft] = useState({
    title: "",
    summary: "",
    lessonType: "lesson",
    topicId: "",
    learningObjectiveIds: "",
    prerequisiteLessonIds: "",
    estimatedDurationMinutes: "25"
  });
  const [lessonEditDraft, setLessonEditDraft] = useState({
    lessonId: "",
    title: "",
    summary: "",
    lessonType: "lesson",
    topicId: "",
    learningObjectiveIds: "",
    prerequisiteLessonIds: "",
    estimatedDurationMinutes: "25"
  });
  const [conceptDraft, setConceptDraft] = useState({
    title: "",
    summary: "",
    nodeType: "concept",
    sourceEntityType: "",
    sourceEntityId: ""
  });
  const [edgeDraft, setEdgeDraft] = useState({
    sourceNodeId: "",
    targetNodeId: "",
    edgeType: "prerequisite_of",
    label: ""
  });
  const [userDraft, setUserDraft] = useState({
    displayName: "",
    email: "",
    credential: "",
    requestedRole: "student"
  });

  const resource = useAsyncResource(() => fetchAdminManagementOverview(), []);

  const knowledgeResource = useAsyncResource(
    async () => {
      if (!exploreAnchorId) {
        return null;
      }

      return fetchAdminKnowledgeExplore(exploreAnchorType, exploreAnchorId);
    },
    [exploreAnchorType, exploreAnchorId]
  );

  /* Mínimo visible: sin esto, cuando los datos llegan rápido el
     indicador parpadea y el logo no alcanza a armarse. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  const overview = resource.data?.overview;
  const topics = resource.data?.topics ?? [];
  const lessons = resource.data?.lessons ?? [];
  const nodes = resource.data?.nodes ?? [];
  const concepts = nodes.filter((node) => node.nodeType === "concept");
  const edges = resource.data?.edges ?? [];

  useEffect(() => {
    if (!topics.length) {
      return;
    }

    setLessonDraft((current) => ({
      ...current,
      topicId: current.topicId || topics[0]?.id || ""
    }));
  }, [topics]);

  useEffect(() => {
    if (!lessons.length) {
      return;
    }

    const nextLessonId = selectedLessonId || lessons[0]?.id;

    if (!nextLessonId) {
      return;
    }

    const lesson = lessons.find((candidate) => candidate.id === nextLessonId);

    if (!lesson) {
      return;
    }

    setSelectedLessonId(lesson.id);
    setLessonEditDraft({
      lessonId: lesson.id,
      title: lesson.title,
      summary: lesson.summary ?? "",
      lessonType: "lesson",
      topicId: lesson.topicId,
      learningObjectiveIds: "",
      prerequisiteLessonIds: "",
      estimatedDurationMinutes: "25"
    });
    setExploreAnchorType("lesson");
    setExploreAnchorId(lesson.id);
  }, [lessons, selectedLessonId]);

  async function runAction(work: () => Promise<void>) {
    try {
      setIsSubmitting(true);
      setActionError(null);
      setActionMessage(null);
      await work();
      await resource.reload();
      await knowledgeResource.reload();
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "No fue posible completar esta acción.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreateTopic() {
    await runAction(async () => {
      const response = await createAdminTopic({
        title: topicDraft.title,
        summary: topicDraft.summary || undefined
      });

      setActionMessage(`Tema creado: ${response.topic.title}`);
      setTopicDraft({ title: "", summary: "" });
    });
  }

  async function handleCreateLesson() {
    await runAction(async () => {
      const response = await createAdminLesson({
        title: lessonDraft.title,
        summary: lessonDraft.summary || undefined,
        lessonType: lessonDraft.lessonType,
        topicId: lessonDraft.topicId,
        learningObjectiveIds: splitCsv(lessonDraft.learningObjectiveIds),
        prerequisiteLessonIds: splitCsv(lessonDraft.prerequisiteLessonIds),
        estimatedDurationMinutes: Number(lessonDraft.estimatedDurationMinutes) || undefined
      });

      setActionMessage(`Lección creada: ${response.lesson.title}`);
      setLessonDraft((current) => ({
        ...current,
        title: "",
        summary: "",
        learningObjectiveIds: "",
        prerequisiteLessonIds: ""
      }));
    });
  }

  async function handleUpdateLesson() {
    if (!lessonEditDraft.lessonId) {
      setActionError("Elige una lección antes de actualizarla.");
      return;
    }

    await runAction(async () => {
      const response = await updateAdminLesson({
        lessonId: lessonEditDraft.lessonId,
        title: lessonEditDraft.title,
        summary: lessonEditDraft.summary || undefined,
        lessonType: lessonEditDraft.lessonType,
        topicId: lessonEditDraft.topicId,
        learningObjectiveIds: splitCsv(lessonEditDraft.learningObjectiveIds),
        prerequisiteLessonIds: splitCsv(lessonEditDraft.prerequisiteLessonIds),
        estimatedDurationMinutes: Number(lessonEditDraft.estimatedDurationMinutes) || undefined
      });

      setActionMessage(`Lección actualizada: ${response.lesson.title}`);
    });
  }

  async function handleCreateConcept() {
    await runAction(async () => {
      const response = await createAdminConcept({
        title: conceptDraft.title,
        summary: conceptDraft.summary || undefined,
        nodeType: conceptDraft.nodeType,
        sourceEntityType: conceptDraft.sourceEntityType || undefined,
        sourceEntityId: conceptDraft.sourceEntityId || undefined
      });

      setActionMessage(`Nodo conceptual creado: ${response.node.title}`);
      setConceptDraft((current) => ({
        ...current,
        title: "",
        summary: ""
      }));
    });
  }

  async function handleCreateEdge() {
    await runAction(async () => {
      const response = await createAdminEdge({
        sourceNodeId: edgeDraft.sourceNodeId,
        targetNodeId: edgeDraft.targetNodeId,
        edgeType: edgeDraft.edgeType,
        label: edgeDraft.label || undefined,
        directed: true
      });

      setActionMessage(`Relación de conocimiento creada: ${response.edge.edgeType}`);
      setEdgeDraft((current) => ({
        ...current,
        label: ""
      }));
    });
  }

  async function handleUpdateLessonMappings() {
    if (!selectedLessonId) {
      setActionError("Elige una lección antes de actualizar el mapeo de conceptos.");
      return;
    }

    await runAction(async () => {
      const response = await updateAdminLessonMappings({
        lessonId: selectedLessonId,
        conceptNodeIds: mappedConceptIds
      });

      setActionMessage(
        `Se mapearon ${response.mappedConcepts.length} conceptos a ${response.lesson.title}.`
      );
    });
  }

  async function handleRunFix(issueType: string, entityId?: string) {
    if (!entityId) {
      setActionError("Este problema de integridad no tiene el ID de entidad objetivo.");
      return;
    }

    await runAction(async () => {
      const response = await runAdminIntegrityFix(issueType, entityId);
      setActionMessage(response.summary);
    });
  }

  async function handleCreateUser() {
    await runAction(async () => {
      const response = await createAdminUser({
        displayName: userDraft.displayName,
        email: userDraft.email,
        credential: userDraft.credential,
        requestedRole: userDraft.requestedRole as "student" | "teacher" | "administrator"
      });

      setActionMessage(`Usuario creado: ${response.user.displayName} (${response.user.email})`);
      setUserDraft({ displayName: "", email: "", credential: "", requestedRole: "student" });
    });
  }

  function toggleMappedConcept(conceptId: string) {
    setMappedConceptIds((current) =>
      current.includes(conceptId)
        ? current.filter((entry) => entry !== conceptId)
        : [...current, conceptId]
    );
  }

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando el contenido..."
        detail="Recuperando temas, lecciones, nodos conceptuales, relaciones del grafo y señales de integridad."
      />
    );
  }

  if (resource.error || !resource.data || !overview) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar los datos de contenido."}
        onRetry={resource.reload}
      />
    );
  }

  const exploration = knowledgeResource.data?.exploration;

  return (
    <AppShell
      title="Contenido"
      description="Gestiona temas, lecciones y conceptos, y revisa las alertas de contenido incompleto."
      breadcrumbs={[
        { label: "Panel administrativo", href: "/dashboard" },
        { label: "Contenido" }
      ]}
      headerActions={
        <button className="button button--ghost" type="button" onClick={resource.reload}>
          Recargar datos de gestion
        </button>
      }
    >
      <section className="dashboard-grid">
        <MetricCard label="Temas" value={String(topics.length)} helper="Registros de temas que se pueden gestionar" />
        <MetricCard label="Lecciones" value={String(lessons.length)} helper="Lecciones que puedes supervisar y corregir" />
        <MetricCard label="Problemas de integridad" value={String(overview.integrityIssues.length)} helper="Alertas corregibles o manuales detectadas" />
      </section>

      {actionMessage ? (
        <div className="state-panel state-panel--success" data-testid="admin-action-message">
          <p className="state-panel__title">Actualizacion aplicada</p>
          <p className="state-panel__detail">{actionMessage}</p>
        </div>
      ) : null}

      {actionError ? (
        <div className="state-panel state-panel--error">
          <p className="state-panel__title">La acción fallo</p>
          <p className="state-panel__detail">{actionError}</p>
        </div>
      ) : null}

      <div className="workspace-grid" data-testid="admin-management-workspace">
        <ContentCard
          title="Temas y lecciones"
          subtitle="Agrega temas y corrige los datos de cada lección desde aquí."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Título del nuevo tema</span>
              <input
                value={topicDraft.title}
                onChange={(event) =>
                  setTopicDraft((current) => ({ ...current, title: event.target.value }))
                }
              />
            </label>
            <label className="field field--full">
              <span>Resumen del tema</span>
              <textarea
                value={topicDraft.summary}
                onChange={(event) =>
                  setTopicDraft((current) => ({ ...current, summary: event.target.value }))
                }
              />
            </label>
          </div>
          <button
            className="button"
            data-testid="admin-create-topic"
            type="button"
            disabled={isSubmitting || !topicDraft.title}
            onClick={handleCreateTopic}
          >
            Crear tema
          </button>

          <hr className="section-divider" />

          <div className="form-grid">
            <label className="field">
              <span>Título de la nueva lección</span>
              <input
                value={lessonDraft.title}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, title: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Topic</span>
              <select
                value={lessonDraft.topicId}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, topicId: event.target.value }))
                }
              >
                <option value="">Selecciona un tema</option>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field field--full">
              <span>Resumen de la lección</span>
              <textarea
                value={lessonDraft.summary}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, summary: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Objetivos de aprendizaje</span>
              <input
                value={lessonDraft.learningObjectiveIds}
                onChange={(event) =>
                  setLessonDraft((current) => ({
                    ...current,
                    learningObjectiveIds: event.target.value
                  }))
                }
              />
            </label>
            <label className="field">
              <span>Lecciones previas</span>
              <input
                value={lessonDraft.prerequisiteLessonIds}
                onChange={(event) =>
                  setLessonDraft((current) => ({
                    ...current,
                    prerequisiteLessonIds: event.target.value
                  }))
                }
              />
            </label>
          </div>
          <button
            className="button"
            data-testid="admin-create-lesson"
            type="button"
            disabled={isSubmitting || !lessonDraft.title || !lessonDraft.topicId}
            onClick={handleCreateLesson}
          >
            Crear lección
          </button>
        </ContentCard>

        <ContentCard
          title="Conceptos y relaciones"
          subtitle="Agrega conceptos y sus relaciones para que el contenido quede bien enlazado."
          accent="sun"
        >
          <div className="form-grid">
            <label className="field">
              <span>Título del concepto</span>
              <input
                value={conceptDraft.title}
                onChange={(event) =>
                  setConceptDraft((current) => ({ ...current, title: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Tipo de entidad origen</span>
              <select
                value={conceptDraft.sourceEntityType}
                onChange={(event) =>
                  setConceptDraft((current) => ({
                    ...current,
                    sourceEntityType: event.target.value
                  }))
                }
              >
                <option value="">Sin entidad origen</option>
                <option value="topic">Tema</option>
                <option value="lesson">Lección</option>
              </select>
            </label>
            <label className="field">
              <span>Id de la entidad origen</span>
              <input
                value={conceptDraft.sourceEntityId}
                onChange={(event) =>
                  setConceptDraft((current) => ({
                    ...current,
                    sourceEntityId: event.target.value
                  }))
                }
              />
            </label>
            <label className="field field--full">
              <span>Resumen del concepto</span>
              <textarea
                value={conceptDraft.summary}
                onChange={(event) =>
                  setConceptDraft((current) => ({ ...current, summary: event.target.value }))
                }
              />
            </label>
          </div>
          <button
            className="button"
            data-testid="admin-create-concept"
            type="button"
            disabled={isSubmitting || !conceptDraft.title}
            onClick={handleCreateConcept}
          >
            Crear concepto
          </button>

          <hr className="section-divider" />

          <div className="form-grid">
            <label className="field">
              <span>Nodo origen</span>
              <select
                value={edgeDraft.sourceNodeId}
                onChange={(event) =>
                  setEdgeDraft((current) => ({
                    ...current,
                    sourceNodeId: event.target.value
                  }))
                }
              >
                <option value="">Selecciona el elemento de origen</option>
                {nodes.map((node) => (
                  <option key={node.id} value={node.id}>
                    {node.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Nodo destino</span>
              <select
                value={edgeDraft.targetNodeId}
                onChange={(event) =>
                  setEdgeDraft((current) => ({
                    ...current,
                    targetNodeId: event.target.value
                  }))
                }
              >
                <option value="">Selecciona el elemento de destino</option>
                {nodes.map((node) => (
                  <option key={node.id} value={node.id}>
                    {node.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Tipo de relación</span>
              <select
                value={edgeDraft.edgeType}
                onChange={(event) =>
                  setEdgeDraft((current) => ({ ...current, edgeType: event.target.value }))
                }
              >
                <option value="prerequisite_of">prerequisite_of</option>
                <option value="relates_to">relates_to</option>
                <option value="reinforces">reinforces</option>
                <option value="part_of">part_of</option>
              </select>
            </label>
            <label className="field">
              <span>Etiqueta</span>
              <input
                value={edgeDraft.label}
                onChange={(event) =>
                  setEdgeDraft((current) => ({ ...current, label: event.target.value }))
                }
              />
            </label>
          </div>
          <button
            className="button"
            data-testid="admin-create-edge"
            type="button"
            disabled={
              isSubmitting || !edgeDraft.sourceNodeId || !edgeDraft.targetNodeId || !edgeDraft.edgeType
            }
            onClick={handleCreateEdge}
          >
            Crear relacion
          </button>
        </ContentCard>

        <ContentCard
          title="Vinculación entre lección y concepto"
          subtitle="Ajusta cómo se relaciona el contenido de cada lección con los conceptos."
          accent="sand"
        >
          {lessons.length ? (
            <>
              <div className="form-grid">
                <label className="field">
                  <span>Lección</span>
                  <select
                    value={lessonEditDraft.lessonId}
                    onChange={(event) => setSelectedLessonId(event.target.value)}
                  >
                    {lessons.map((lesson) => (
                      <option key={lesson.id} value={lesson.id}>
                        {lesson.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Título de la lección</span>
                  <input
                    value={lessonEditDraft.title}
                    onChange={(event) =>
                      setLessonEditDraft((current) => ({ ...current, title: event.target.value }))
                    }
                  />
                </label>
                <label className="field field--full">
                  <span>Resumen de la lección</span>
                  <textarea
                    value={lessonEditDraft.summary}
                    onChange={(event) =>
                      setLessonEditDraft((current) => ({
                        ...current,
                        summary: event.target.value
                      }))
                    }
                  />
                </label>
              </div>
              <button
                className="button"
                data-testid="admin-save-lesson"
                type="button"
                disabled={isSubmitting || !lessonEditDraft.lessonId}
                onClick={handleUpdateLesson}
              >
                Guardar cambios de la lección
              </button>
              <div className="chip-grid">
                {concepts.map((concept) => (
                  <label className="toggle-chip" key={concept.id}>
                    <input
                      type="checkbox"
                      checked={mappedConceptIds.includes(concept.id)}
                      onChange={() => toggleMappedConcept(concept.id)}
                    />
                    <span>{concept.title}</span>
                  </label>
                ))}
              </div>
              <button
                className="button button--ghost"
                data-testid="admin-save-mappings"
                type="button"
                disabled={isSubmitting || !selectedLessonId}
                onClick={handleUpdateLessonMappings}
              >
                Guardar los conceptos de la lección
              </button>
            </>
          ) : (
            <EmptyState
              title="Todavía no hay lecciones disponibles."
              description="Crea primero una lección y aparecerá aquí para gestionar su vinculación con el grafo."
            />
          )}
        </ContentCard>
      </div>

      <div className="workspace-grid workspace-grid--secondary">
        <ContentCard
          title="Crear usuario"
          subtitle="Registra un nuevo estudiante, docente o administrador directamente desde el panel. El usuario podra iniciar sesión con las credenciales ingresadas."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Nombre completo</span>
              <input
                value={userDraft.displayName}
                onChange={(event) =>
                  setUserDraft((current) => ({ ...current, displayName: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Correo electronico</span>
              <input
                type="email"
                value={userDraft.email}
                onChange={(event) =>
                  setUserDraft((current) => ({ ...current, email: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Contrasena inicial</span>
              <input
                type="password"
                value={userDraft.credential}
                onChange={(event) =>
                  setUserDraft((current) => ({ ...current, credential: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Rol</span>
              <select
                value={userDraft.requestedRole}
                onChange={(event) =>
                  setUserDraft((current) => ({ ...current, requestedRole: event.target.value }))
                }
              >
                <option value="student">Estudiante</option>
                <option value="teacher">Docente</option>
                <option value="administrator">Administrador</option>
              </select>
            </label>
          </div>
          <button
            className="button"
            data-testid="admin-create-user"
            type="button"
            disabled={
              isSubmitting ||
              !userDraft.displayName ||
              !userDraft.email ||
              !userDraft.credential
            }
            onClick={handleCreateUser}
          >
            Crear usuario
          </button>
        </ContentCard>

        <ContentCard
          title="Acciones de integridad"
          subtitle="Aplica reparaciones automaticas base cuando sea posible y deja claro cuando se requiere trabajo manual."
          accent="mint"
        >
          {overview.integrityIssues.length ? (
            <div className="inventory-grid">
              {overview.integrityIssues.map((issue, index) => (
                <article className="tile tile--dense" key={`${issue.issueType}-${issue.entityId ?? index}`}>
                  <p className="auth-card__eyebrow">{issue.severity}</p>
                  <h4>{issue.issueType}</h4>
                  <p className="muted-copy">{issue.message}</p>
                  {issue.fixable ? (
                    <button
                      className="button button--ghost"
                      data-testid={`admin-fix-${issue.issueType}`}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleRunFix(issue.issueType, issue.entityId)}
                    >
                      {issue.suggestedActionLabel ?? "Ejecutar correccion"}
                    </button>
                  ) : (
                    <p className="muted-copy">Se requiere revisión manual.</p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No se detectaron problemas de integridad."
              description="El contenido y los conceptos están bien enlazados."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Brechas de cobertura"
          subtitle="Aquí aparece el contenido incompleto o sin conceptos asociados."
          accent="sun"
        >
          {overview.coverageGaps.length ? (
            <ul className="detail-list">
              {overview.coverageGaps.map((gap) => (
                <li key={`${gap.gapType}-${gap.entityId ?? gap.message}`}>
                  <strong>{gap.gapType}:</strong> {gap.message}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="No hay contenido incompleto."
              description="La cobertura de temas, la vinculación conceptual y el mapeo de lecciones cumplen con los chequeos base."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Exploración del conocimiento"
          subtitle="Revisa los conceptos, qué va antes de qué y el contenido asociado antes de cambiar la estructura."
          accent="sand"
        >
          <div className="form-grid">
            <label className="field">
              <span>Tipo de ancla</span>
              <select
                value={exploreAnchorType}
                onChange={(event) =>
                  setExploreAnchorType(event.target.value as "topic" | "lesson" | "concept")
                }
              >
                <option value="concept">Concepto</option>
                <option value="lesson">Lección</option>
                <option value="topic">Tema</option>
              </select>
            </label>
            <label className="field">
              <span>Entidad ancla</span>
              <select
                value={exploreAnchorId}
                onChange={(event) => setExploreAnchorId(event.target.value)}
              >
                <option value="">Selecciona un ancla</option>
                {(exploreAnchorType === "lesson"
                  ? lessons
                  : exploreAnchorType === "topic"
                    ? topics
                    : concepts
                ).map((entity) => (
                  <option key={entity.id} value={entity.id}>
                    {entity.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {knowledgeResource.isLoading ? (
            <LoadingPanel
              message="Cargando contexto del grafo..."
              detail="Armando cadenas de prerrequisitos, clusters de conceptos y contenido mapeado."
            />
          ) : knowledgeResource.error ? (
            <ErrorPanel message={knowledgeResource.error} onRetry={knowledgeResource.reload} />
          ) : exploration ? (
            <div className="knowledge-grid">
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Cadena de prerrequisitos</p>
                <ul className="detail-list">
                  {exploration.prerequisiteChain.length ? (
                    exploration.prerequisiteChain.map((concept) => (
                      <li key={concept.id}>{concept.title}</li>
                    ))
                  ) : (
                    <li>No se encontro una cadena de prerrequisitos.</li>
                  )}
                </ul>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Cluster de conceptos</p>
                <ul className="detail-list">
                  {exploration.conceptCluster.length ? (
                    exploration.conceptCluster.map((concept) => (
                      <li key={concept.id}>{concept.title}</li>
                    ))
                  ) : (
                    <li>Todavía no se ha formado un cluster de conceptos.</li>
                  )}
                </ul>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Lecciones mapeadas</p>
                <ul className="detail-list">
                  {exploration.mappedLessons.length ? (
                    exploration.mappedLessons.map((lesson) => (
                      <li key={lesson.id}>{lesson.title}</li>
                    ))
                  ) : (
                    <li>No se encontraron mapeos de lecciones.</li>
                  )}
                </ul>
              </article>
            </div>
          ) : (
            <EmptyState
              title="Todavía no has seleccionado un ancla."
              description="Elige un tema, una lección o un concepto para inspeccionar la estructura del grafo."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Contenido registrado"
          subtitle="Inventario operativo ligero de temas, conceptos y relaciones."
          accent="mint"
        >
          <div className="inventory-grid">
            <article className="tile tile--dense">
              <p className="auth-card__eyebrow">Temas</p>
              <ul className="detail-list">
                {topics.map((topic) => (
                  <li key={topic.id}>{topic.title}</li>
                ))}
              </ul>
            </article>
            <article className="tile tile--dense">
              <p className="auth-card__eyebrow">Conceptos</p>
              <ul className="detail-list">
                {concepts.slice(0, 10).map((concept) => (
                  <li key={concept.id}>{concept.title}</li>
                ))}
              </ul>
            </article>
            <article className="tile tile--dense">
              <p className="auth-card__eyebrow">Relaciones</p>
              <ul className="detail-list">
                {edges.slice(0, 10).map((edge) => (
                  <li key={edge.id}>
                    {edge.edgeType}: {edge.sourceNodeId} → {edge.targetNodeId}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </ContentCard>
      </div>
    </AppShell>
  );
}
