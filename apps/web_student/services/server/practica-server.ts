import { fetchBackendData } from "@/lib/backend-http";

/**
 * Cliente del motor de practica.
 *
 * Vive en el servidor porque el token de sesion no debe llegar al navegador:
 * las paginas y rutas de este app lo adjuntan solas al llamar al backend.
 */

export interface AsignaturaResumen {
  id: string;
  eje: string;
  nombre: string;
  temas: number;
  temasConPreguntas: number;
  preguntas: number;
  temasSuperados: number;
}

export interface PreguntaServida {
  estado: "ok" | "sin_preguntas" | "asignatura_completa";
  asignatura?: { id: string; nombre: string; eje: string };
  tema?: { id: string; nombre: string; romano: string; orden: number };
  pregunta?: {
    id: string;
    enunciado: string;
    alternativas: Record<string, string>;
  };
  progreso?: {
    rachaActual: number;
    intentosEnTema: number;
    practicado: boolean;
    consolidado: boolean;
  };
}

export interface RespuestaEvaluada {
  resultado: "correcta" | "incorrecta" | "blanco";
  claveCorrecta: string;
  solucion: string | null;
  progreso: {
    rachaActual: number;
    intentosEnTema: number;
    practicado: boolean;
    consolidado: boolean;
  };
  evento: "ninguno" | "tema_superado" | "atasco";
}

export function listarAsignaturas() {
  return fetchBackendData<AsignaturaResumen[]>("learning", "/practica/asignaturas");
}

export function pedirSiguiente(params: {
  asignaturaId: string;
  perfil: string;
  modo?: string;
  temaId?: string;
}) {
  const query = new URLSearchParams({
    asignaturaId: params.asignaturaId,
    perfil: params.perfil,
    modo: params.modo ?? "secuencial"
  });
  if (params.temaId) {
    query.set("temaId", params.temaId);
  }
  return fetchBackendData<PreguntaServida>(
    "learning",
    `/practica/siguiente?${query.toString()}`
  );
}

export function enviarRespuesta(cuerpo: {
  preguntaId: string;
  respuesta: string | null;
  tiempoMs: number;
  modo: string;
  perfil: string;
}) {
  return fetchBackendData<RespuestaEvaluada>("learning", "/practica/responder", {
    method: "POST",
    body: JSON.stringify(cuerpo)
  });
}
