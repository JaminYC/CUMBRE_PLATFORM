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
        detail="Recuperando modulos publicados para el aula y cuestionarios disponibles."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar los modulos del aula."}
        onRetry={resource.reload}
      />
    );
  }

  return (
    <AppShell
      title="Modulos del aula"
      description="Modulos y cuestionarios publicados por tu docente para el trabajo actual del aula."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Aula", href: "/classroom" },
        { label: "Modulos" }
      ]}
    >
      <div className="workspace-grid">
        <ContentCard
          title="Modulos asignados"
          subtitle="Estos modulos vienen de materiales aprobados por docentes y construccion de modulos con IA."
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
              title="Todavia no hay modulos asignados."
              description="Cuando un docente publique un modulo para tu aula, aparecera aqui."
            />
          )}
        </ContentCard>

        <ContentCard
          title="Cuestionarios relacionados"
          subtitle="Cuestionarios pedagogicos asociados a los modulos del aula."
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
              title="Todavia no hay cuestionarios publicados."
              description="Los cuestionarios generados por tu docente apareceran aqui cuando esten disponibles."
            />
          )}
        </ContentCard>
      </div>
    </AppShell>
  );

}
