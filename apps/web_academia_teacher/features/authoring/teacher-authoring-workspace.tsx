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
import { teacherAppConfig } from "@/lib/env";
import {
  createTeacherContentItem,
  createTeacherLesson,
  fetchTeacherAuthoringOverview,
  fetchTeacherKnowledgeExplore,
  updateTeacherLesson,
  updateTeacherLessonConceptMappings
} from "@/services/client/teacher-api";

function splitCsv(value: string) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function TeacherAuthoringWorkspace() {
  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [mappedConceptIds, setMappedConceptIds] = useState<string[]>([]);
  const [exploreAnchorType, setExploreAnchorType] = useState<"topic" | "lesson" | "concept">(
    "lesson"
  );
  const [exploreAnchorId, setExploreAnchorId] = useState("");
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const [contentDraft, setContentDraft] = useState({
    title: "",
    summary: "",
    contentType: "article",
    lessonId: "",
    topicIds: "",
    relatedLearningPathId: teacherAppConfig.defaultLearningPathId
  });

  const resource = useAsyncResource(
    () => fetchTeacherAuthoringOverview(selectedTopicId || undefined),
    [selectedTopicId]
  );

  /* Mínimo visible: sin esto, cuando los datos llegan rápido el
     indicador parpadea y el logo no alcanza a armarse. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  const knowledgeResource = useAsyncResource(
    async () => {
      if (!exploreAnchorId) {
        return null;
      }

      return fetchTeacherKnowledgeExplore(exploreAnchorType, exploreAnchorId);
    },
    [exploreAnchorType, exploreAnchorId]
  );

  const topicOptions = resource.data?.topics ?? [];
  const lessonOptions = resource.data?.lessons ?? [];
  const conceptOptions = resource.data?.concepts ?? [];
  const filteredLessons = selectedTopicId
    ? lessonOptions.filter((lesson) => lesson.topicId === selectedTopicId)
    : lessonOptions;

  useEffect(() => {
    if (!topicOptions.length) {
      return;
    }

    setLessonDraft((current) => ({
      ...current,
      topicId: current.topicId || selectedTopicId || topicOptions[0]?.id || ""
    }));
  }, [selectedTopicId, topicOptions]);

  useEffect(() => {
    if (!lessonOptions.length) {
      return;
    }

    const fallbackLessonId = selectedLessonId || filteredLessons[0]?.id || lessonOptions[0]?.id;

    if (!fallbackLessonId) {
      return;
    }

    const lesson = lessonOptions.find((candidate) => candidate.id === fallbackLessonId);

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
      learningObjectiveIds: (lesson.learningObjectiveIds ?? []).join(", "),
      prerequisiteLessonIds: (lesson.prerequisiteLessonIds ?? []).join(", "),
      estimatedDurationMinutes: "25"
    });

    const mappedConcepts = conceptOptions
      .filter((concept) =>
        resource.data?.edges.some(
          (edge) =>
            edge.edgeType === "reinforces" &&
            edge.sourceNodeId === lesson.id &&
            edge.targetNodeId === concept.id
        )
      )
      .map((concept) => concept.id);

    setMappedConceptIds(mappedConcepts);
    setExploreAnchorType("lesson");
    setExploreAnchorId(lesson.id);
    setContentDraft((current) => ({
      ...current,
      lessonId: current.lessonId || lesson.id,
      topicIds: current.topicIds || lesson.topicId
    }));
  }, [conceptOptions, filteredLessons, lessonOptions, resource.data, selectedLessonId]);

  async function runAction(work: () => Promise<void>) {
    try {
      setIsSubmitting(true);
      setActionError(null);
      setActionMessage(null);
      await work();
      await resource.reload();
      await knowledgeResource.reload();
    } catch (error) {
      setActionError(
        error instanceof Error ? error.message : "No fue posible completar esta acción."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreateLesson() {
    await runAction(async () => {
      const response = await createTeacherLesson({
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
      const response = await updateTeacherLesson({
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

  async function handleCreateContentItem() {
    await runAction(async () => {
      const response = await createTeacherContentItem({
        title: contentDraft.title,
        summary: contentDraft.summary || undefined,
        contentType: contentDraft.contentType,
        lessonId: contentDraft.lessonId || undefined,
        topicIds: splitCsv(contentDraft.topicIds),
        relatedLearningPathId: contentDraft.relatedLearningPathId || undefined
      });

      setActionMessage(`Contenido de apoyo creado: ${response.item.title}`);
      setContentDraft((current) => ({
        ...current,
        title: "",
        summary: ""
      }));
    });
  }

  async function handleUpdateMappings() {
    if (!selectedLessonId) {
      setActionError("Elige una lección antes de actualizar el mapeo de conceptos.");
      return;
    }

    await runAction(async () => {
      const response = await updateTeacherLessonConceptMappings({
        lessonId: selectedLessonId,
        conceptNodeIds: mappedConceptIds
      });

      setActionMessage(
        `Se mapearon ${response.mappedConcepts.length} conceptos a ${response.lesson.title}.`
      );
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
      <AppShell title="Estudio de autoría" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Estudio de autoría" }]}>
        <LoadingPanel message="Cargando estudio de autoría..." detail="Recuperando temas, lecciones y material de apoyo." />
      </AppShell>
    );
  }

  if (resource.error || !resource.data) {
    return (
      <AppShell title="Estudio de autoría" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Estudio de autoría" }]}>
        <ErrorPanel message={resource.error ?? "No fue posible cargar los datos de autoría docente."} onRetry={resource.reload} />
      </AppShell>
    );
  }

  const exploration = knowledgeResource.data?.exploration;

  return (
    <AppShell
      title="Estudio de autoría"
      description="Crea lecciones, prepara material de apoyo y revisa qué hay que saber antes de cada tema."
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Estudio de autoría" }
      ]}
      headerActions={
        <button className="button button--ghost" type="button" onClick={resource.reload}>
          Recargar datos de autoria
        </button>
      }
    >
      <section className="dashboard-grid">
        <MetricCard label="Temas" value={String(resource.data.topics.length)} helper="Temas en los que puedes crear lecciones" />
        <MetricCard label="Lecciones" value={String(resource.data.lessons.length)} helper="Lecciones que puedes editar aquí" />
        <MetricCard label="Conceptos" value={String(resource.data.concepts.length)} helper="Conceptos que puedes asociar a tus lecciones" />
      </section>

      {actionMessage ? (
        <div className="state-panel state-panel--success" data-testid="teacher-action-message">
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

      <div className="workspace-grid" data-testid="teacher-authoring-workspace">
        <ContentCard
          title="Creación de lecciones"
          subtitle="Crea o ajusta lecciones sin salir de esta pantalla."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Tema de enfoque</span>
              <select
                value={selectedTopicId}
                onChange={(event) => setSelectedTopicId(event.target.value)}
              >
                <option value="">Todos los temas</option>
                {topicOptions.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Título de la lección</span>
              <input
                value={lessonDraft.title}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, title: event.target.value }))
                }
                placeholder="Fundamentos del pensamiento estrategico"
              />
            </label>
            <label className="field field--full">
              <span>Resumen</span>
              <textarea
                value={lessonDraft.summary}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, summary: event.target.value }))
                }
                placeholder="Describe para qué sirve esta lección."
              />
            </label>
            <label className="field">
              <span>Tema</span>
              <select
                value={lessonDraft.topicId}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, topicId: event.target.value }))
                }
              >
                <option value="">Selecciona un tema</option>
                {topicOptions.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Tipo de lección</span>
              <input
                value={lessonDraft.lessonType}
                onChange={(event) =>
                  setLessonDraft((current) => ({ ...current, lessonType: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Minutos estimados</span>
              <input
                value={lessonDraft.estimatedDurationMinutes}
                onChange={(event) =>
                  setLessonDraft((current) => ({
                    ...current,
                    estimatedDurationMinutes: event.target.value
                  }))
                }
              />
            </label>
            <label className="field field--full">
              <span>Objetivos de aprendizaje</span>
              <input
                value={lessonDraft.learningObjectiveIds}
                onChange={(event) =>
                  setLessonDraft((current) => ({
                    ...current,
                    learningObjectiveIds: event.target.value
                  }))
                }
                placeholder="objective-critical-thinking, objective-reflection"
              />
            </label>
            <label className="field field--full">
              <span>Lecciones previas</span>
              <input
                value={lessonDraft.prerequisiteLessonIds}
                onChange={(event) =>
                  setLessonDraft((current) => ({
                    ...current,
                    prerequisiteLessonIds: event.target.value
                  }))
                }
                placeholder="lesson-strategy-basics, lesson-observation"
              />
            </label>
          </div>
          <button
            className="button"
            data-testid="teacher-create-lesson"
            type="button"
            disabled={isSubmitting || !lessonDraft.title || !lessonDraft.topicId}
            onClick={handleCreateLesson}
          >
            Crear lección
          </button>
        </ContentCard>

        <ContentCard
          title="Edición de lecciones"
          subtitle="Ajusta la lección elegida y los temas que hay que saber antes."
          accent="sun"
        >
          {filteredLessons.length ? (
            <>
              <div className="form-grid">
                <label className="field">
                  <span>Lección</span>
                  <select
                    value={lessonEditDraft.lessonId}
                    onChange={(event) => setSelectedLessonId(event.target.value)}
                  >
                    {filteredLessons.map((lesson) => (
                      <option key={lesson.id} value={lesson.id}>
                        {lesson.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Título</span>
                  <input
                    value={lessonEditDraft.title}
                    onChange={(event) =>
                      setLessonEditDraft((current) => ({ ...current, title: event.target.value }))
                    }
                  />
                </label>
                <label className="field field--full">
                  <span>Resumen</span>
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
                <label className="field">
                  <span>Objetivos de aprendizaje</span>
                  <input
                    value={lessonEditDraft.learningObjectiveIds}
                    onChange={(event) =>
                      setLessonEditDraft((current) => ({
                        ...current,
                        learningObjectiveIds: event.target.value
                      }))
                    }
                  />
                </label>
                <label className="field">
                  <span>Lecciones previas</span>
                  <input
                    value={lessonEditDraft.prerequisiteLessonIds}
                    onChange={(event) =>
                      setLessonEditDraft((current) => ({
                        ...current,
                        prerequisiteLessonIds: event.target.value
                      }))
                    }
                  />
                </label>
              </div>
              <button
                className="button"
                data-testid="teacher-save-lesson"
                type="button"
                disabled={isSubmitting || !lessonEditDraft.lessonId}
                onClick={handleUpdateLesson}
              >
                Guardar cambios de la lección
              </button>
            </>
          ) : (
            <EmptyState
              title="Todavía no hay lecciones para editar."
              description="Crea una lección en el tema actual y aparecerá aquí para refinarla."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Mapeo de conceptos"
          subtitle="Asocia cada lección con los conceptos que refuerza, para que el sistema sepa qué repasar."
          accent="sand"
        >
          {selectedLessonId ? (
            <>
              <div className="selection-banner">
                <strong>Lección seleccionada:</strong>{" "}
                {lessonOptions.find((lesson) => lesson.id === selectedLessonId)?.title ??
                  selectedLessonId}
              </div>
              <div className="chip-grid">
                {conceptOptions.map((concept) => (
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
                className="button"
                data-testid="teacher-save-mappings"
                type="button"
                disabled={isSubmitting}
                onClick={handleUpdateMappings}
              >
                Guardar mapeo de conceptos
              </button>
            </>
          ) : (
            <EmptyState
              title="Primero elige una lección."
              description="El mapeo entre lecciones y conceptos se habilita cuando seleccionas una lección."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Material de apoyo"
          subtitle="Agrega material que refuerce esta lección."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Título del contenido</span>
              <input
                value={contentDraft.title}
                onChange={(event) =>
                  setContentDraft((current) => ({ ...current, title: event.target.value }))
                }
                placeholder="Caso de estudio: planificación bajo incertidumbre"
              />
            </label>
            <label className="field">
              <span>Tipo de contenido</span>
              <input
                value={contentDraft.contentType}
                onChange={(event) =>
                  setContentDraft((current) => ({
                    ...current,
                    contentType: event.target.value
                  }))
                }
              />
            </label>
            <label className="field field--full">
              <span>Resumen</span>
              <textarea
                value={contentDraft.summary}
                onChange={(event) =>
                  setContentDraft((current) => ({ ...current, summary: event.target.value }))
                }
              />
            </label>
            <label className="field">
              <span>Lección</span>
              <select
                value={contentDraft.lessonId}
                onChange={(event) =>
                  setContentDraft((current) => ({ ...current, lessonId: event.target.value }))
                }
              >
                <option value="">Lección (opcional)</option>
                {lessonOptions.map((lesson) => (
                  <option key={lesson.id} value={lesson.id}>
                    {lesson.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Ids de temas</span>
              <input
                value={contentDraft.topicIds}
                onChange={(event) =>
                  setContentDraft((current) => ({ ...current, topicIds: event.target.value }))
                }
                placeholder="topic-systems, topic-reflection"
              />
            </label>
          </div>
          <button
            className="button"
            type="button"
            disabled={isSubmitting || !contentDraft.title}
            onClick={handleCreateContentItem}
          >
            Crear contenido de apoyo
          </button>
        </ContentCard>
      </div>

      <div className="workspace-grid workspace-grid--secondary">
        <ContentCard
          title="Revisión de prerrequisitos"
          subtitle="Revisa qué temas hay que dominar antes de cada lección, para detectar vacíos antes de que se atoren."
          accent="sun"
        >
          <div className="form-grid">
            <label className="field">
              <span>Buscar desde</span>
              <select
                value={exploreAnchorType}
                onChange={(event) =>
                  setExploreAnchorType(event.target.value as "topic" | "lesson" | "concept")
                }
              >
                <option value="lesson">Lección</option>
                <option value="topic">Tema</option>
                <option value="concept">Concepto</option>
              </select>
            </label>
            <label className="field">
              <span>Elemento</span>
              <select
                value={exploreAnchorId}
                onChange={(event) => setExploreAnchorId(event.target.value)}
              >
                <option value="">Selecciona un elemento</option>
                {(exploreAnchorType === "lesson"
                  ? lessonOptions
                  : exploreAnchorType === "topic"
                    ? topicOptions
                    : conceptOptions
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
              message="Cargando el mapa de temas..."
              detail="Armando qué va antes de qué y el material asociado."
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
                    <li>No hay temas previos registrados.</li>
                  )}
                </ul>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Conceptos relacionados</p>
                <ul className="detail-list">
                  {exploration.relatedConcepts.length ? (
                    exploration.relatedConcepts.map((concept) => (
                      <li key={concept.id}>{concept.title}</li>
                    ))
                  ) : (
                    <li>Todavía no hay conceptos relacionados conectados.</li>
                  )}
                </ul>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Por qué se relacionan</p>
                <ul className="detail-list">
                  {exploration.explanation.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </article>
            </div>
          ) : (
            <EmptyState
              title="Todavía no has elegido un elemento."
              description="Elige una lección, un tema o un concepto para ver qué va antes y qué material lo acompaña."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Inventario actual"
          subtitle="Vista rápida operativa de lo que el docente ya puede reutilizar en este espacio."
          accent="sand"
        >
          <div className="inventory-grid">
            <article className="tile tile--dense">
              <p className="auth-card__eyebrow">Temas</p>
              <ul className="detail-list">
                {topicOptions.map((topic) => (
                  <li key={topic.id}>{topic.title}</li>
                ))}
              </ul>
            </article>
            <article className="tile tile--dense">
              <p className="auth-card__eyebrow">Lecciones</p>
              <ul className="detail-list">
                {filteredLessons.length ? (
                  filteredLessons.map((lesson) => <li key={lesson.id}>{lesson.title}</li>)
                ) : (
                  <li>No hay lecciones en el filtro de tema actual.</li>
                )}
              </ul>
            </article>
            <article className="tile tile--dense">
              <p className="auth-card__eyebrow">Contenido de apoyo</p>
              <ul className="detail-list">
                {resource.data.contentItems.length ? (
                  resource.data.contentItems.slice(0, 6).map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))
                ) : (
                  <li>Todavía no se ha creado contenido de apoyo.</li>
                )}
              </ul>
            </article>
          </div>
        </ContentCard>
      </div>
    </AppShell>
  );
}
