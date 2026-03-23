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
  uploadTeacherMaterialFile
} from "@/services/client/teacher-api";

export function TeacherMaterialsWorkspace() {
  const resource = useAsyncResource(() => fetchTeacherMaterials(), []);
  const [draft, setDraft] = useState({
    fileName: "",
    mimeType: "text/plain",
    textContent: "",
    ocrTextHint: ""
  });
  const [proposal, setProposal] = useState<Awaited<ReturnType<typeof uploadTeacherMaterialFile>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    let textContent = "";

    try {
      textContent = await file.text();
    } catch {
      textContent = "";
    }

    setDraft({
      fileName: file.name,
      mimeType: file.type || "application/octet-stream",
      textContent,
      ocrTextHint: ""
    });
  }

  async function handleUpload() {
    try {
      setIsSubmitting(true);
      setError(null);
      const response = await uploadTeacherMaterialFile(draft);
      setProposal(response);
      await resource.reload();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "No fue posible subir el material."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (resource.isLoading) {
    return (
      <AppShell title="Materiales" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Materiales" }]}>
        <LoadingPanel message="Cargando materiales..." detail="Recuperando materiales subidos y sus estructuras analizadas." />
      </AppShell>
    );
  }

  if (resource.error || !resource.data) {
    return (
      <AppShell title="Materiales" breadcrumbs={[{ label: "Panel docente", href: "/dashboard" }, { label: "Materiales" }]}>
        <ErrorPanel message={resource.error ?? "No fue posible cargar los materiales docentes."} onRetry={resource.reload} />
      </AppShell>
    );
  }

  return (
    <AppShell
      title="Materiales"
      description="Sube materiales fuente, analiza su estructura y revisa las sugerencias de IA antes de construir modulos de aula."
      breadcrumbs={[
        { label: "Panel docente", href: "/dashboard" },
        { label: "Materiales" }
      ]}
    >
      <div className="workspace-grid">
        <ContentCard
          title="Subir material"
          subtitle="Usa el selector de archivos para capturar metadatos de origen y agrega pistas OCR o de texto cuando el analisis binario sea limitado."
          accent="mint"
        >
          <div className="form-grid">
            <label className="field">
              <span>Archivo fuente</span>
              <input type="file" accept=".pdf,.txt,.md,.csv,image/*,.ppt,.pptx" onChange={handleFile} />
            </label>
            <label className="field">
              <span>Nombre del archivo</span>
              <input
                value={draft.fileName}
                onChange={(event) => setDraft((current) => ({ ...current, fileName: event.target.value }))}
              />
            </label>
            <label className="field">
              <span>Tipo MIME</span>
              <input
                value={draft.mimeType}
                onChange={(event) => setDraft((current) => ({ ...current, mimeType: event.target.value }))}
              />
            </label>
            <label className="field field--full">
              <span>Texto extraido</span>
              <textarea
                value={draft.textContent}
                onChange={(event) => setDraft((current) => ({ ...current, textContent: event.target.value }))}
                rows={10}
              />
            </label>
            <label className="field field--full">
              <span>Pista OCR</span>
              <textarea
                value={draft.ocrTextHint}
                onChange={(event) => setDraft((current) => ({ ...current, ocrTextHint: event.target.value }))}
                rows={5}
              />
            </label>
          </div>
          {error ? <p className="field-error">{error}</p> : null}
          <button className="button" type="button" disabled={isSubmitting || !draft.fileName} onClick={handleUpload}>
            Subir y analizar
          </button>
        </ContentCard>

        <ContentCard
          title="Ultima propuesta analizada"
          subtitle="Previsualiza la salida estructurada que alimentara el constructor de modulos."
          accent="sun"
        >
          {proposal ? (
            <div className="tile-grid">
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Titulo</p>
                <h4>{proposal.material.parsedStructure.title}</h4>
                <p>{proposal.material.fileName}</p>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Conceptos</p>
                <ul className="detail-list">
                  {proposal.material.parsedStructure.concepts.map((concept) => (
                    <li key={concept}>{concept}</li>
                  ))}
                </ul>
              </article>
              <article className="tile tile--dense">
                <p className="auth-card__eyebrow">Lecciones sugeridas</p>
                <ul className="detail-list">
                  {proposal.proposal.suggestedLessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </article>
            </div>
          ) : (
            <EmptyState
              title="Todavia no hay material analizado."
              description="Sube material para previsualizar secciones extraidas, conceptos y lecciones sugeridas."
            />
          )}
        </ContentCard>
      </div>

      <ContentCard
        title="Materiales subidos"
        subtitle="Inventario operativo de lo disponible para generar modulos."
        accent="sand"
      >
        {resource.data.items.length ? (
          <div className="tile-grid">
            {resource.data.items.map((item) => (
              <article className="tile" key={item.id}>
                <h4>{item.fileName}</h4>
                <ul className="detail-list">
                  <li><strong>Estado:</strong> {item.status}</li>
                  <li><strong>Tipo:</strong> {item.materialKind}</li>
                  <li><strong>Conceptos:</strong> {item.parsedStructure.concepts.length}</li>
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavia no se han subido materiales."
            description="Cuando un docente suba un libro, guia, presentacion o escaneo, aparecera aqui."
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
