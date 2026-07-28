"use client";

import Link from "next/link";
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
import { fetchStudentClassroomWorkspace } from "@/services/client/student-api";

export function ClassroomWorkspaceView() {
  const resource = useAsyncResource(() => fetchStudentClassroomWorkspace(), []);

  /* Mínimo visible: evita el parpadeo cuando los datos llegan rápido. */
  const mostrandoCarga = useCargaMinima(resource.isLoading);

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando aulas..."
        detail="Recuperando aulas unidas, proximas reuniones y acceso a módulos asignados."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar el espacio de aula."}
        onRetry={resource.reload}
      />
    );
  }

  const upcomingMeetings = resource.data.workspaces.filter((workspace) => workspace.nextMeeting);
  const totalAssignedModules = resource.data.workspaces.reduce(
    (sum, workspace) => sum + workspace.assignedModuleIds.length,
    0
  );

  /* Mínimo visible: sin esto, cuando los datos llegan rápido el
     indicador parpadea y el logo no alcanza a armarse. */

  return (
    <AppShell
      title="Espacio de aula"
      description="Revisa tus aulas, módulos asignados, proximas reuniones y siguiente paso adaptativo sin ranking competitivo."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Aula" }
      ]}
      headerActions={
        <Link className="button" href="/join-class">
          Unirme a otra clase
        </Link>
      }
    >
      <section className="dashboard-grid">
        <MetricCard label="Aulas unidas" value={String(resource.data.workspaces.length)} helper="Espacios de aprendizaje vinculados a docentes" />
        <MetricCard label="Modulos asignados" value={String(totalAssignedModules)} helper="Trabajo de aula publicado y disponible" />
        <MetricCard label="Proximas reuniones" value={String(upcomingMeetings.length)} helper="Sesiones en vivo programadas por docentes" />
      </section>

      {resource.data.workspaces.length ? (
        <div className="tile-grid">
          {resource.data.workspaces.map((workspace) => (
            <ContentCard
              key={workspace.classroom.id}
              title={workspace.classroom.name}
              subtitle={`${workspace.classroom.subject} · ${workspace.classroom.gradeLevel}`}
              accent="mint"
            >
              <ul className="detail-list">
                <li><strong>Estado:</strong> {workspace.enrollment.status}</li>
                <li><strong>Modulos:</strong> {workspace.assignedModuleIds.length}</li>
                <li><strong>Reunion:</strong> {workspace.nextMeeting?.title ?? "Sin programar"}</li>
                <li><strong>Siguiente accion:</strong> {workspace.nextBestAction?.title ?? "Continuar trabajo actual"}</li>
              </ul>
              <div className="card-actions">
                <Link className="button" href="/classroom/modules">
                  Abrir modulos
                </Link>
                <Link className="button button--ghost" href="/classroom/meetings">
                  Ver reuniones
                </Link>
              </div>
            </ContentCard>
          ))}
        </div>
      ) : (
        <EmptyState
          title="Todavía no te has unido a ningún aula."
          description="Usa un código de clase que te comparta tu docente para desbloquear módulos y enlaces de reunion."
        />
      )}
    </AppShell>
  );
}
