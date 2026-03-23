"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import {
  fetchTeacherMaterials,
  fetchTeachingModules,
  fetchTeachingQuizzes,
  generateTeacherModule,
  generateTeacherQuiz
} from "@/services/client/teacher-api";

export function TeacherModuleBuilderWorkspace() {
  const resource = useAsyncResource(
    async () => {
      const [materials, modules, quizzes] = await Promise.all([
        fetchTeacherMaterials(),
        fetchTeachingModules(),
        fetchTeachingQuizzes()
      ]);

      return { materials, modules, quizzes };
    },
    []
  );
  const [materialId, setMaterialId] = useState("");
  const [approveModule, setApproveModule] = useState(true);
  const [moduleProposal, setModuleProposal] = useState<Awaited<ReturnType<typeof generateTeacherModule>> | null>(null);
  const [quizDraft, setQuizDraft] = useState({
    moduleId: "",
    title: ""
  });
  const [quizProposal, setQuizProposal] = useState<Awaited<ReturnType<typeof generateTeacherQuiz>> | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerateModule() {
    try {
      setError(null);
      const response = await generateTeacherModule({
        materialId,
        approve: approveModule
      });
      setModuleProposal(response);
      await resource.reload();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "No fue posible generar el modulo."
      );
    }
  }

  async function handleGenerateQuiz() {
    try {
      setError(null);
      const response = await generateTeacherQuiz({
        moduleId: quizDraft.moduleId || undefined,
        title: quizDraft.title || undefined
      });
      setQuizProposal(response);
      await resource.reload();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "No fue posible generar el cuestionario."
      );
    }
  }

  if (resource.isLoading) {
    return (
      <AppShell title="Constructor de módulos" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Constructor de módulos" }]}>
        <LoadingPanel message="Cargando constructor de modulos..." detail="Recuperando materiales analizados, modulos propuestos y cuestionarios generados." />
      </AppShell>
    );
  }

  if (resource.error || !resource.data) {
    return (
      <AppShell title="Constructor de módulos" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Constructor de módulos" }]}>
        <ErrorPanel message={resource.error ?? "No fue posible cargar los datos del constructor de modulos."} onRetry={resource.reload} />
      </AppShell>
    );
  }

  return (
    <AppShell
      title="Constructor de modulos"
      description="Transforma materiales docentes analizados en modulos propuestos y cuestionarios equilibrados pedagogicamente antes de publicarlos al aula."
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Constructor de modulos" }
      ]}
    >
      {error ? (
        <div className="state-panel state-panel--error">
          <div className="state-panel__content">
            <p className="state-panel__title">La generacion fallo</p>
            <p className="state-panel__detail">{error}</p>
          </div>
        </div>
      ) : null}

      <div className="workspace-grid">
        <ContentCard
          title="Generar modulo"
          subtitle="Usa el material analizado, los conceptos vinculados y las lecciones de apoyo para construir un modulo de aula."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Material</span>
              <select value={materialId} onChange={(event) => setMaterialId(event.target.value)}>
                <option value="">Selecciona un material</option>
                {resource.data.materials.items.map((material) => (
                  <option key={material.id} value={material.id}>
                    {material.fileName}
                  </option>
                ))}
              </select>
            </label>
            <label className="toggle-chip">
              <input
                type="checkbox"
                checked={approveModule}
                onChange={(event) => setApproveModule(event.target.checked)}
              />
              <span>Aprobar y guardar modulo</span>
            </label>
          </div>
          <button className="button" type="button" disabled={!materialId} onClick={handleGenerateModule}>
            Generar modulo
          </button>
          {moduleProposal ? (
            <div className="tile-grid">
              <article className="tile tile--dense">
                <h4>{moduleProposal.proposal.module.title}</h4>
                <p>{moduleProposal.proposal.module.summary}</p>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Coincidencias de conceptos</p>
                <ul className="detail-list">
                  {moduleProposal.proposal.conceptMatches.map((concept) => (
                    <li key={concept.id}>{concept.title}</li>
                  ))}
                </ul>
              </article>
            </div>
          ) : null}
        </ContentCard>

        <ContentCard
          title="Generar cuestionario"
          subtitle="Crea la mezcla base de 5 preguntas mecanicas, 3 contextuales y 2 de desafio."
          accent="sun"
        >
          <div className="form-grid">
            <label className="field">
              <span>Modulo</span>
              <select
                value={quizDraft.moduleId}
                onChange={(event) =>
                  setQuizDraft((current) => ({ ...current, moduleId: event.target.value }))
                }
              >
                <option value="">Selecciona un modulo</option>
                {resource.data.modules.items.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Titulo del cuestionario</span>
              <input
                value={quizDraft.title}
                onChange={(event) =>
                  setQuizDraft((current) => ({ ...current, title: event.target.value }))
                }
                placeholder="Checkpoint del modulo"
              />
            </label>
          </div>
          <button className="button" type="button" onClick={handleGenerateQuiz}>
            Generar cuestionario
          </button>
          {quizProposal ? (
            <div className="tile tile--dense">
              <h4>{quizProposal.proposal.quiz.title}</h4>
              <p>{quizProposal.proposal.quiz.questions.length} preguntas generadas</p>
            </div>
          ) : null}
        </ContentCard>
      </div>

      <div className="workspace-grid workspace-grid--secondary">
        <ContentCard
          title="Modulos guardados"
          subtitle="Modulos aprobados o propuestos disponibles para asignar a las aulas."
          accent="sand"
        >
          {resource.data.modules.items.length ? (
            <div className="tile-grid">
              {resource.data.modules.items.map((module) => (
                <article className="tile" key={module.id}>
                  <h4>{module.title}</h4>
                  <ul className="detail-list">
                    <li><strong>Estado:</strong> {module.status}</li>
                    <li><strong>Lecciones:</strong> {module.lessonIds.length}</li>
                    <li><strong>Conceptos:</strong> {module.conceptNodeIds.length}</li>
                  </ul>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Todavia no hay modulos."
              description="Genera un modulo a partir de materiales subidos para verlo disponible aqui."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Cuestionarios generados"
          subtitle="Recursos de evaluacion listos para publicar o usar en seguimiento."
          accent="mint"
        >
          {resource.data.quizzes.items.length ? (
            <div className="tile-grid">
              {resource.data.quizzes.items.map((quiz) => (
                <article className="tile" key={quiz.id}>
                  <h4>{quiz.title}</h4>
                  <ul className="detail-list">
                    <li><strong>Preguntas:</strong> {quiz.questions.length}</li>
                    <li><strong>Modulo:</strong> {quiz.moduleId ?? "Independiente"}</li>
                  </ul>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Todavia no hay cuestionarios."
              description="Genera un cuestionario pedagogico y aparecera aqui."
            />
          )}
        </ContentCard>
      </div>
    </AppShell>
  );
}
