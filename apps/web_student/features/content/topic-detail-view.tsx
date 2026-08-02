"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import {
  ContentCard,
  EmptyState,
  ErrorPanel,
  LoadingPanel,
  QuickAction
} from "@/components/ui";
import { KnowledgeInsightPanel } from "@/features/knowledge/knowledge-insight-panel";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useRequireSession } from "@/hooks/use-require-session";
import {
  fetchLessons,
  fetchTopic,
  fetchTopicKnowledge
} from "@/services/client/student-api";

export function TopicDetailView({ topicId }: { topicId: string }) {
  const auth = useRequireSession();
  const resource = useAsyncResource(
    async () => {
      const [topic, lessons, topicKnowledge] = await Promise.all([
        fetchTopic(topicId),
        fetchLessons(topicId),
        fetchTopicKnowledge(topicId)
      ]);

      return {
        topic,
        lessons,
        topicKnowledge
      };
    },
    [topicId]
  );

  const mostrandoCarga = resource.isLoading;

  useEffect(() => {
    auth.patchSession({
      lastTopicId: topicId
    });
  }, [topicId]);

  if (!auth.isHydrated || !auth.session) {
    return (
      <AppShell title="Tema">
        <LoadingPanel
          message="Preparando detalle del tema..."
          detail="Reconectando tu sesión antes de cargar el contenido del tema."
        />
      </AppShell>
    );
  }

  if (mostrandoCarga) {
    return (
      <AppShell title="Tema">
        <LoadingPanel
          message="Cargando tema y lecciones..."
          detail="Leyendo metadatos del tema y lista de lecciones desde content_service."
        />
      </AppShell>
    );
  }

  if (resource.error || !resource.data) {
    return (
      <AppShell title="Tema">
        <ErrorPanel
          message={resource.error ?? "No fue posible cargar el detalle del tema."}
          onRetry={resource.reload}
        />
      </AppShell>
    );
  }

  const { topic, lessons, topicKnowledge } = resource.data;
  const firstLesson = lessons.items[0];

  return (
    <AppShell
      title={topic.topic.title}
      description={topic.topic.summary ?? "Vista del tema respaldada por content_service."}
      breadcrumbs={[
        { label: "Inicio", href: "/dashboard" },
        {
          label: "Ruta de aprendizaje",
          href: `/learning-path/${auth.session.defaultLearningPathId}`
        },
        { label: topic.topic.title }
      ]}
      headerActions={
        firstLesson ? (
          <Link className="button" href={`/topics/${topicId}/lessons/${firstLesson.id}`}>
            Abrir primera leccion
          </Link>
        ) : undefined
      }
    >
      <ContentCard
        title="Resumen del tema"
        subtitle="Esta pagina conecta la exploración del panel con la ejecución de lecciones."
        accent="mint"
      >
        <ul className="detail-list">
          <li>
            <strong>ID del tema:</strong> {topic.topic.id}
          </li>
          <li>
            <strong>Habilidades:</strong> {topic.topic.skillIds?.join(", ") || "Sin habilidades listadas"}
          </li>
          <li>
            <strong>Prerequisitos:</strong>{" "}
            {topic.topic.prerequisiteTopicIds?.join(", ") || "Sin prerrequisitos"}
          </li>
        </ul>
      </ContentCard>

      <ContentCard
        title="Acciones del recorrido"
        subtitle="Mantiene al estudiante avanzando desde el contexto del tema hacia el trabajo en lección."
        accent="sand"
      >
        <div className="quick-actions-grid">
          <QuickAction
            title="Volver a la ruta"
            description="Regresar a la vista de ruta y comparar este tema con la secuencia completa."
            href={`/learning-path/${auth.session.defaultLearningPathId}`}
          />
          <QuickAction
            title={firstLesson ? "Empezar con la primera lección" : "Abrir progreso"}
            description={
              firstLesson
                ? "Entrar al detalle de la lección y disparar el flujo de sesión."
                : "Aun no hay lecciones, así que revisa el progreso."
            }
            href={firstLesson ? `/topics/${topicId}/lessons/${firstLesson.id}` : "/progress"}
          />
          <QuickAction
            title="Volver al inicio"
            description="Usar el panel como espacio principal del estudiante."
            href="/dashboard"
          />
        </div>
      </ContentCard>

      <KnowledgeInsightPanel insight={topicKnowledge.insight} />

      <ContentCard
        title="Lecciones"
        subtitle="Selecciona una lección para revisar su detalle e iniciar una sesión de aprendizaje."
        accent="sun"
      >
        {lessons.items.length ? (
          <div className="tile-grid">
            {lessons.items.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/topics/${topicId}/lessons/${lesson.id}`}
                className="tile"
              >
                <h4>{lesson.title}</h4>
                <p>{lesson.summary ?? "Abre la lección para iniciar una sesión."}</p>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Todavía no hay lecciones publicadas para este tema."
            description="Cuando haya lecciones disponibles, apareceran aquí como siguiente paso del recorrido de aprendizaje."
            actionLabel="Volver a la ruta"
            actionHref={`/learning-path/${auth.session.defaultLearningPathId}`}
          />
        )}
      </ContentCard>
    </AppShell>
  );
}
