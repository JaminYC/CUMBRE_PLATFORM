"use client";

import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel
} from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { fetchStudentClassroomMeetings } from "@/services/client/student-api";

export function ClassroomMeetingsView() {
  const resource = useAsyncResource(() => fetchStudentClassroomMeetings(), []);

  if (resource.isLoading) {
    return (
      <LoadingPanel
        message="Cargando reuniones..."
        detail="Revisando cada aula para encontrar la siguiente sesion programada por el docente."
      />
    );
  }

  if (resource.error || !resource.data) {
    return (
      <ErrorPanel
        message={resource.error ?? "No fue posible cargar las reuniones del aula."}
        onRetry={resource.reload}
      />
    );
  }

  const meetings = resource.data.workspaces.filter((workspace) => workspace.nextMeeting);

  return (
    <AppShell
      title="Reuniones del aula"
      description="Sesiones en vivo programadas por tus docentes para las aulas a las que perteneces."
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        { label: "Aula", href: "/classroom" },
        { label: "Reuniones" }
      ]}
    >
      <ContentCard
        title="Proximas sesiones"
        subtitle="Los enlaces de reunion son generados por la automatizacion base del aula."
        accent="mint"
      >
        {meetings.length ? (
          <div className="tile-grid">
            {meetings.map((workspace) => (
              <article className="tile" key={workspace.classroom.id}>
                <h4>{workspace.classroom.name}</h4>
                <ul className="detail-list">
                  <li><strong>Sesion:</strong> {workspace.nextMeeting?.title}</li>
                  <li><strong>Cuando:</strong> {workspace.nextMeeting ? new Date(workspace.nextMeeting.scheduledAt).toLocaleString() : "N/D"}</li>
                  <li><strong>Enlace:</strong> {workspace.nextMeeting?.meetingUrl}</li>
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No hay reuniones programadas."
            description="Cuando tu docente cree una sesion de clase, aparecera aqui."
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
