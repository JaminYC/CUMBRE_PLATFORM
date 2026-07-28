"use client";

import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import { fetchStudentClassroomModules } from "@/services/client/student-api";

export function ClassroomModulesView() {
  const resource = useAsyncResource(() => fetchStudentClassroomModules(), []);

  /* Minimo visible: sin esto, cuando los datos llegan rapido el
     indicador parpadea y se lee como un fallo de dibujo. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando modulos asignados..."
        detail="Recuperando módulos publicados para el aula y cuestionarios disponibles."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar los módulos del aula."}
        onRetry={resource.reload}
      />
    );
  }

  return (
    <AppShell
      title="Módulos del aula"
      description="Módulos y cuestionarios publicados por tu docente para el trabajo actual del aula."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Aula", href: "/classroom" },
        { label: "Módulos" }
      ]}
    >
      <div className="workspace-grid">
        <ContentCard
          title="Modulos asignados"
          subtitle="Estos módulos vienen de materiales aprobados por docentes y construcción de módulos con IA."
          accent="mint"
        >
          {resource.data.modules.length ? (
            <div className="tile-grid">
              {resource.data.modules.map((module) => (
                <article className="tile" key={module.id}>
                  <h4>{module.title}</h4>
                  <ul className="detail-list">
                    <li><strong>Estado:</strong> {module.status}</li>
                    <li><strong>Secciones:</strong> {module.sections.length}</li>
                    <li><strong>Conceptos:</strong> {module.conceptNodeIds.length}</li>
                  </ul>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Todavía no hay módulos asignados."
              description="Cuando un docente publique un módulo para tu aula, aparecerá aquí."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Cuestionarios relacionados"
          subtitle="Cuestionarios pedagogicos asociados a los módulos del aula."
          accent="sun"
        >
          {resource.data.quizzes.length ? (
            <div className="tile-grid">
              {resource.data.quizzes.map((quiz) => (
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
              title="Todavía no hay cuestionarios publicados."
              description="Los cuestionarios generados por tu docente apareceran aquí cuando esten disponibles."
            />
          )}
        </ContentCard>
      </div>
    </AppShell>
  );

}
