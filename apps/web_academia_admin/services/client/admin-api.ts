"use client";

import type {
  AuthSignupRequest,
  CreateLessonRequest,
  CreateLessonResponse,
  CreateKnowledgeEdgeRequest,
  CreateKnowledgeEdgeResponse,
  CreateKnowledgeNodeRequest,
  CreateKnowledgeNodeResponse,
  CreateTopicRequest,
  CreateTopicResponse,
  GetAdminOverviewResponse,
  GetKnowledgeExploreResponse,
  RunIntegrityFixResponse,
  UpdateLessonConceptMappingsRequest,
  UpdateLessonConceptMappingsResponse,
  UpdateLessonRequest,
  UpdateLessonResponse
} from "@cumbre/schemas";
import type { User } from "@cumbre/types";
import { requestAppApi } from "@/lib/app-http";

export function fetchAdminOverview() {
  return requestAppApi<GetAdminOverviewResponse>("/api/admin/overview");
}

export function fetchAdminManagementOverview() {
  return requestAppApi<{
    overview: GetAdminOverviewResponse["overview"];
    topics: { id: string; title: string; summary?: string }[];
    lessons: { id: string; title: string; topicId: string; summary?: string }[];
    nodes: { id: string; title: string; nodeType: string; sourceEntityId?: string }[];
    edges: { id: string; edgeType: string; sourceNodeId: string; targetNodeId: string }[];
  }>("/api/admin/management/overview");
}

export function createAdminTopic(request: CreateTopicRequest) {
  return requestAppApi<CreateTopicResponse>("/api/admin/topics", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createAdminLesson(request: CreateLessonRequest) {
  return requestAppApi<CreateLessonResponse>("/api/admin/lessons", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateAdminLesson(request: UpdateLessonRequest) {
  return requestAppApi<UpdateLessonResponse>("/api/admin/lessons/update", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createAdminConcept(request: CreateKnowledgeNodeRequest) {
  return requestAppApi<CreateKnowledgeNodeResponse>("/api/admin/concepts", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function createAdminEdge(request: CreateKnowledgeEdgeRequest) {
  return requestAppApi<CreateKnowledgeEdgeResponse>("/api/admin/edges", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function updateAdminLessonMappings(
  request: UpdateLessonConceptMappingsRequest
) {
  return requestAppApi<UpdateLessonConceptMappingsResponse>(
    "/api/admin/lesson-mappings",
    {
      method: "POST",
      body: JSON.stringify(request)
    }
  );
}

export function runAdminIntegrityFix(issueType: string, entityId: string) {
  return requestAppApi<RunIntegrityFixResponse>("/api/admin/integrity/fix", {
    method: "POST",
    body: JSON.stringify({
      issueType,
      entityId
    })
  });
}

export function createAdminUser(request: AuthSignupRequest) {
  return requestAppApi<{ user: User }>("/api/admin/users", {
    method: "POST",
    body: JSON.stringify(request)
  });
}

export function fetchAdminKnowledgeExplore(
  anchorEntityType: "topic" | "lesson" | "concept",
  anchorEntityId: string
) {
  const query = new URLSearchParams({
    anchorEntityType,
    anchorEntityId
  });

  return requestAppApi<GetKnowledgeExploreResponse>(
    `/api/admin/knowledge/explore?${query.toString()}`
  );
}

/* ── Gestión de usuarios de la academia ─────────────────────────────── */

export interface UsuarioDeAcademia {
  id: string;
  nombre: string;
  correo: string | null;
  rol: string;
  estado: string;
  creado: string;
}

export interface ListadoDeUsuarios {
  usuarios: UsuarioDeAcademia[];
  total: number;
  porRol: Record<string, number>;
}

export function fetchUsuarios(filtro?: { rol?: string; busqueda?: string }) {
  const parametros = new URLSearchParams();
  if (filtro?.rol) parametros.set("rol", filtro.rol);
  if (filtro?.busqueda) parametros.set("busqueda", filtro.busqueda);
  const consulta = parametros.toString();

  return requestAppApi<ListadoDeUsuarios>(
    `/api/admin/usuarios${consulta ? `?${consulta}` : ""}`
  );
}

export function cambiarEstadoDeUsuario(
  id: string,
  estado: "active" | "suspended"
) {
  return requestAppApi<{ actualizado: true; estado: string }>(
    "/api/admin/usuarios",
    {
      method: "PATCH",
      body: JSON.stringify({ id, estado })
    }
  );
}

export function crearPersona(input: {
  displayName: string;
  email: string;
  credential: string;
  requestedRole: "student" | "teacher" | "administrator";
}) {
  return requestAppApi<{ user: User }>("/api/admin/users", {
    method: "POST",
    body: JSON.stringify(input)
  });
}

export function generarContrasenaTemporal(id: string) {
  return requestAppApi<{ contrasenaTemporal: string; nombre: string }>(
    "/api/admin/usuarios/clave",
    {
      method: "POST",
      body: JSON.stringify({ id })
    }
  );
}
