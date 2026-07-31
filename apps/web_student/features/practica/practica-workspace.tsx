"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { ContentCard, EmptyState, ErrorPanel, LoadingPanel } from "@/components/ui";
import { useRequireSession } from "@/hooks/use-require-session";

/**
 * Practica secuencial para la admision.
 *
 * El recorrido es el que se acordo: entras al curso y sale la pregunta, sin
 * pantallas intermedias. Las unicas interrupciones son las dos islas, y la de
 * atasco siempre deja la decision al alumno.
 */

type Perfil = "ingenierias" | "biomedicas" | "sociales";

interface Asignatura {
  id: string;
  eje: string;
  nombre: string;
  temas: number;
  temasConPreguntas: number;
  preguntas: number;
  temasSuperados: number;
}

interface Servida {
  estado: "ok" | "sin_preguntas" | "asignatura_completa";
  tema?: { id: string; nombre: string; romano: string };
  pregunta?: { id: string; enunciado: string; alternativas: Record<string, string> };
  progreso?: { rachaActual: number; intentosEnTema: number };
}

interface Evaluada {
  resultado: "correcta" | "incorrecta" | "blanco";
  claveCorrecta: string;
  solucion: string | null;
  progreso: { rachaActual: number; intentosEnTema: number };
  evento: "ninguno" | "tema_superado" | "atasco";
}

const PERFILES: { id: Perfil; nombre: string }[] = [
  { id: "ingenierias", nombre: "Ingenierías" },
  { id: "biomedicas", nombre: "Biomédicas" },
  { id: "sociales", nombre: "Sociales" }
];

async function pedirJson<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, init);
  const cuerpo = await r.json();
  if (!r.ok || cuerpo?.success === false) {
    throw new Error(cuerpo?.error?.message ?? "No se pudo completar la operación.");
  }
  return cuerpo.data as T;
}

export function PracticaWorkspace() {
  const { isHydrated, session } = useRequireSession();
  const autenticado = isHydrated && Boolean(session);
  const [perfil, setPerfil] = useState<Perfil>("ingenierias");
  const [asignaturas, setAsignaturas] = useState<Asignatura[] | null>(null);
  const [elegida, setElegida] = useState<Asignatura | null>(null);
  const [servida, setServida] = useState<Servida | null>(null);
  const [marcada, setMarcada] = useState<string | null>(null);
  const [evaluada, setEvaluada] = useState<Evaluada | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ocupado, setOcupado] = useState(false);
  const [verSolucion, setVerSolucion] = useState(false);

  // Cuanto tarda en responder es un dato del examen real, no un adorno.
  const inicio = useRef<number>(Date.now());

  useEffect(() => {
    if (!autenticado) return;
    pedirJson<Asignatura[]>("/api/practica/asignaturas")
      .then(setAsignaturas)
      .catch((e: Error) => setError(e.message));
  }, [autenticado]);

  const traerPregunta = useCallback(
    async (asignatura: Asignatura) => {
      setOcupado(true);
      setEvaluada(null);
      setMarcada(null);
      setVerSolucion(false);
      try {
        const d = await pedirJson<Servida>(
          `/api/practica/siguiente?asignaturaId=${asignatura.id}&perfil=${perfil}`
        );
        setServida(d);
        inicio.current = Date.now();
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setOcupado(false);
      }
    },
    [perfil]
  );

  async function responder(letra: string | null) {
    if (!servida?.pregunta || evaluada) return;
    setOcupado(true);
    setMarcada(letra);
    try {
      const d = await pedirJson<Evaluada>("/api/practica/responder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          preguntaId: servida.pregunta.id,
          respuesta: letra,
          tiempoMs: Date.now() - inicio.current,
          modo: "secuencial",
          perfil
        })
      });
      setEvaluada(d);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setOcupado(false);
    }
  }

  if (!autenticado) return <LoadingPanel message="Verificando tu sesión…" />;
  if (error) return <ErrorPanel message={error} />;

  // ---- Elegir curso -------------------------------------------------------
  if (!elegida) {
    return (
      <AppShell
        title="Práctica"
        description="Responde preguntas del temario oficial. Tres correctas seguidas desbloquean el siguiente tema."
      >
        <ContentCard title="¿A qué área postulas?" accent="sand">
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {PERFILES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPerfil(p.id)}
                style={{
                  padding: "0.55rem 1.1rem",
                  borderRadius: "999px",
                  border: "1px solid var(--borde, #d5dbe3)",
                  background: perfil === p.id ? "var(--marca, #1B2A41)" : "transparent",
                  color: perfil === p.id ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                {p.nombre}
              </button>
            ))}
          </div>
        </ContentCard>

        {!asignaturas ? (
          <LoadingPanel message="Cargando cursos…" />
        ) : (
          <ContentCard title="Cursos" subtitle="Elige uno para empezar">
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {asignaturas.map((a) => {
                const vacio = a.preguntas === 0;
                return (
                  <button
                    key={a.id}
                    type="button"
                    disabled={vacio}
                    onClick={() => {
                      setElegida(a);
                      void traerPregunta(a);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.85rem 1rem",
                      borderRadius: "12px",
                      border: "1px solid var(--borde, #e2e6ec)",
                      background: vacio ? "#f6f7f9" : "#fff",
                      opacity: vacio ? 0.55 : 1,
                      cursor: vacio ? "not-allowed" : "pointer",
                      textAlign: "left"
                    }}
                  >
                    <span>
                      <strong>{a.nombre}</strong>
                      <br />
                      <small style={{ opacity: 0.7 }}>{a.eje}</small>
                    </span>
                    <span style={{ fontSize: "0.85rem", opacity: 0.75, whiteSpace: "nowrap" }}>
                      {vacio
                        ? "sin preguntas aún"
                        : `${a.preguntas} preguntas · ${a.temasSuperados}/${a.temasConPreguntas} temas`}
                    </span>
                  </button>
                );
              })}
            </div>
          </ContentCard>
        )}
      </AppShell>
    );
  }

  // ---- Practicando --------------------------------------------------------
  const volver = () => {
    setElegida(null);
    setServida(null);
    setEvaluada(null);
    pedirJson<Asignatura[]>("/api/practica/asignaturas").then(setAsignaturas).catch(() => {});
  };

  return (
    <AppShell
      title={elegida.nombre}
      description={servida?.tema ? `Tema ${servida.tema.romano} — ${servida.tema.nombre}` : undefined}
      headerActions={
        <button type="button" onClick={volver} style={{ cursor: "pointer" }}>
          Cambiar curso
        </button>
      }
    >
      {servida?.estado === "asignatura_completa" && (
        <EmptyState
          title="Curso completo"
          description="No quedan temas pendientes con preguntas cargadas."
        />
      )}
      {servida?.estado === "sin_preguntas" && (
        <EmptyState
          title="Este tema todavía no tiene preguntas"
          description="El banco aún no cubre todo el temario."
        />
      )}

      {servida?.estado === "ok" && servida.pregunta && (
        <>
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "0.9rem", fontSize: "0.9rem" }}>
            <span>
              Racha: <strong>{evaluada?.progreso.rachaActual ?? servida.progreso?.rachaActual ?? 0}</strong> / 3
            </span>
            <span style={{ opacity: 0.7 }}>
              Preguntas en este tema: {evaluada?.progreso.intentosEnTema ?? servida.progreso?.intentosEnTema ?? 0}
            </span>
          </div>

          <ContentCard title="" accent="mint">
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, marginTop: 0 }}>
              {servida.pregunta.enunciado}
            </p>

            <div style={{ display: "grid", gap: "0.5rem", marginTop: "1rem" }}>
              {Object.entries(servida.pregunta.alternativas).map(([letra, texto]) => {
                const esCorrecta = evaluada && letra === evaluada.claveCorrecta;
                const esMiFallo = evaluada && letra === marcada && letra !== evaluada.claveCorrecta;
                return (
                  <button
                    key={letra}
                    type="button"
                    disabled={ocupado || !!evaluada}
                    onClick={() => void responder(letra)}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      padding: "0.75rem 0.9rem",
                      borderRadius: "10px",
                      border: `1px solid ${esCorrecta ? "#1a7f4b" : esMiFallo ? "#a52834" : "#e2e6ec"}`,
                      background: esCorrecta ? "#e8f6ee" : esMiFallo ? "#fdeced" : "#fff",
                      cursor: evaluada ? "default" : "pointer",
                      textAlign: "left"
                    }}
                  >
                    <strong style={{ minWidth: "1.2rem" }}>{letra}</strong>
                    <span>{texto}</span>
                  </button>
                );
              })}
            </div>

            {!evaluada && (
              <button
                type="button"
                disabled={ocupado}
                onClick={() => void responder(null)}
                style={{
                  marginTop: "0.9rem",
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer",
                  opacity: 0.7,
                  padding: 0
                }}
              >
                Dejar en blanco
              </button>
            )}
          </ContentCard>

          {/* ---- Islas ---- */}
          {evaluada?.evento === "tema_superado" && (
            <ContentCard title="¡Tema superado!" subtitle="Tres correctas al hilo" accent="sun">
              <p style={{ marginTop: 0 }}>Se desbloquea el siguiente tema del temario.</p>
              <button type="button" onClick={() => void traerPregunta(elegida)} style={{ cursor: "pointer" }}>
                Siguiente tema
              </button>
            </ContentCard>
          )}

          {evaluada?.evento === "atasco" && (
            <ContentCard title="¿Seguimos con este tema?" accent="sand">
              <p style={{ marginTop: 0 }}>
                Llevas {evaluada.progreso.intentosEnTema} preguntas sin superarlo. Tú decides.
              </p>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <button type="button" onClick={() => void traerPregunta(elegida)} style={{ cursor: "pointer" }}>
                  Seguir intentando
                </button>
                <button type="button" onClick={() => void traerPregunta(elegida)} style={{ cursor: "pointer" }}>
                  Saltar y reforzarlo después
                </button>
              </div>
            </ContentCard>
          )}

          {/* El solucionario va sin condicional: se decidio que este siempre
              disponible tras responder, acierte o falle. Favorece al alumno y
              ahorra una rama de logica. */}
          {evaluada && (
            <div style={{ marginTop: "1rem" }}>
              {evaluada.solucion ? (
                <button
                  type="button"
                  onClick={() => setVerSolucion((v) => !v)}
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "underline",
                    cursor: "pointer",
                    padding: 0,
                    marginBottom: verSolucion ? "0.7rem" : 0
                  }}
                >
                  {verSolucion ? "Ocultar solución" : "Ver solución"}
                </button>
              ) : (
                <small style={{ opacity: 0.6 }}>
                  Esta pregunta todavía no tiene solucionario.
                </small>
              )}

              {verSolucion && evaluada.solucion && (
                <div
                  style={{
                    padding: "0.9rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid #e2e6ec",
                    background: "#fafbfc",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap"
                  }}
                >
                  <strong style={{ display: "block", marginBottom: "0.4rem" }}>
                    Resolución — respuesta {evaluada.claveCorrecta}
                  </strong>
                  {evaluada.solucion}
                </div>
              )}
            </div>
          )}

          {evaluada && evaluada.evento === "ninguno" && (
            <div style={{ marginTop: "1rem" }}>
              <button type="button" disabled={ocupado} onClick={() => void traerPregunta(elegida)} style={{ cursor: "pointer" }}>
                Siguiente pregunta
              </button>
            </div>
          )}
        </>
      )}

      {!servida && <LoadingPanel message="Buscando tu siguiente pregunta…" />}
    </AppShell>
  );
}
