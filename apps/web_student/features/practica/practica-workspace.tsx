"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { ContentCard, EmptyState, ErrorPanel, LoadingPanel } from "@/components/ui";
import { useRequireSession } from "@/hooks/use-require-session";
import { CampoDeConocimiento } from "./campo-de-conocimiento";
import estilos from "./practica.module.css";

/**
 * Practica secuencial para la admision.
 *
 * El recorrido es el que se acordo: entras al curso y sale la pregunta, sin
 * pantallas intermedias. Las unicas interrupciones son las dos islas, y la de
 * atasco siempre deja la decision al alumno.
 *
 * Detras hay una constelacion tridimensional con los temas del curso, que se
 * encienden segun se superan. Es el grafo del temario, no un adorno: se ve el
 * avance sin tener que leer un numero.
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
  tema?: { id: string; nombre: string; romano: string; orden: number };
  pregunta?: {
    id: string;
    enunciado: string;
    /** Figura del enunciado. Solo la traen las preguntas que la necesitan. */
    imagenUrl?: string | null;
    alternativas: Record<string, string>;
  };
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
  const [rachaSube, setRachaSube] = useState(false);
  const [superados, setSuperados] = useState(0);

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
      if (d.resultado === "correcta") {
        // El latido de la racha dura lo justo para verse y no estorbar.
        setRachaSube(true);
        window.setTimeout(() => setRachaSube(false), 220);
      }
      if (d.evento === "tema_superado") {
        setSuperados((n) => n + 1);
      }
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
      <>
        <CampoDeConocimiento temas={24} superados={0} />
        <div className={estilos.sobre}>
          <AppShell
            title="Práctica"
            description="Responde preguntas del temario oficial. Tres correctas seguidas desbloquean el siguiente tema."
          >
            <ContentCard title="¿A qué área postulas?" accent="sand">
              <div className={estilos.perfiles}>
                {PERFILES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={estilos.perfil}
                    data-activo={perfil === p.id}
                    onClick={() => setPerfil(p.id)}
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
                <div className={estilos.cursos}>
                  {asignaturas.map((a, i) => {
                    const vacio = a.preguntas === 0;
                    return (
                      <button
                        key={a.id}
                        type="button"
                        className={estilos.curso}
                        style={{ "--i": i } as React.CSSProperties}
                        disabled={vacio}
                        onClick={() => {
                          setElegida(a);
                          setSuperados(a.temasSuperados);
                          void traerPregunta(a);
                        }}
                      >
                        <span>
                          <strong>{a.nombre}</strong>
                          <br />
                          <small style={{ opacity: 0.7 }}>{a.eje}</small>
                        </span>
                        <span className={estilos.cursoMeta}>
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
        </div>
      </>
    );
  }

  // ---- Practicando --------------------------------------------------------
  const volver = () => {
    setElegida(null);
    setServida(null);
    setEvaluada(null);
    pedirJson<Asignatura[]>("/api/practica/asignaturas").then(setAsignaturas).catch(() => {});
  };

  const racha = evaluada?.progreso.rachaActual ?? servida?.progreso?.rachaActual ?? 0;
  const intentos = evaluada?.progreso.intentosEnTema ?? servida?.progreso?.intentosEnTema ?? 0;

  return (
    <>
      <CampoDeConocimiento
        temas={elegida.temas}
        superados={superados}
        actual={servida?.tema ? servida.tema.orden - 1 : undefined}
      />
      <div className={estilos.sobre}>
        <AppShell
          title={elegida.nombre}
          description={
            servida?.tema ? `Tema ${servida.tema.romano} — ${servida.tema.nombre}` : undefined
          }
          headerActions={
            <button type="button" className={estilos.accion} onClick={volver}>
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
              <div className={estilos.marcador}>
                <span>
                  Racha:{" "}
                  <span className={estilos.racha} data-sube={rachaSube}>
                    {racha}
                  </span>{" "}
                  / 3
                </span>
                <span>Preguntas en este tema: {intentos}</span>
              </div>

              <ContentCard title="" accent="mint">
                <p className={estilos.enunciado}>{servida.pregunta.enunciado}</p>

                {/* La figura va debajo del enunciado y antes de las opciones,
                    que es el orden en que se lee. Sin `alt`: el enunciado ya
                    dice lo que hay que mirar y describirlo aqui seria repetirlo
                    o, peor, dar la respuesta. */}
                {servida.pregunta.imagenUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={servida.pregunta.imagenUrl}
                    alt=""
                    className={estilos.figura}
                    draggable={false}
                  />
                ) : null}

                <div className={estilos.alternativas}>
                  {Object.entries(servida.pregunta.alternativas).map(([letra, texto]) => {
                    const estado = !evaluada
                      ? undefined
                      : letra === evaluada.claveCorrecta
                        ? "correcta"
                        : letra === marcada
                          ? "fallo"
                          : undefined;
                    return (
                      <button
                        key={letra}
                        type="button"
                        className={estilos.alternativa}
                        data-estado={estado}
                        disabled={ocupado || !!evaluada}
                        onClick={() => void responder(letra)}
                      >
                        <span className={estilos.letra}>{letra}</span>
                        <span>{texto}</span>
                      </button>
                    );
                  })}
                </div>

                {!evaluada && (
                  <button
                    type="button"
                    className={estilos.enBlanco}
                    disabled={ocupado}
                    onClick={() => void responder(null)}
                  >
                    Dejar en blanco
                  </button>
                )}
              </ContentCard>

              {/* El solucionario va sin condicional: se decidio que este
                  siempre disponible tras responder, acierte o falle. */}
              {evaluada && (
                <div style={{ marginTop: "1rem" }}>
                  {evaluada.solucion ? (
                    <button
                      type="button"
                      className={estilos.verSolucion}
                      onClick={() => setVerSolucion((v) => !v)}
                    >
                      {verSolucion ? "Ocultar solución" : "Ver solución"}
                    </button>
                  ) : (
                    <small style={{ opacity: 0.6 }}>
                      Esta pregunta todavía no tiene solucionario.
                    </small>
                  )}

                  {verSolucion && evaluada.solucion && (
                    <div className={estilos.solucion}>
                      <strong style={{ display: "block", marginBottom: "0.4rem" }}>
                        Resolución — respuesta {evaluada.claveCorrecta}
                      </strong>
                      {evaluada.solucion}
                    </div>
                  )}
                </div>
              )}

              {evaluada?.evento === "tema_superado" && (
                <div className={estilos.isla}>
                  <ContentCard title="¡Tema superado!" subtitle="Tres correctas al hilo" accent="sun">
                    <p style={{ marginTop: 0 }}>Se desbloquea el siguiente tema del temario.</p>
                    <div className={estilos.acciones}>
                      <button
                        type="button"
                        className={estilos.accion}
                        data-principal="true"
                        onClick={() => void traerPregunta(elegida)}
                      >
                        Siguiente tema
                      </button>
                    </div>
                  </ContentCard>
                </div>
              )}

              {evaluada?.evento === "atasco" && (
                <div className={estilos.isla}>
                  <ContentCard title="¿Seguimos con este tema?" accent="sand">
                    <p style={{ marginTop: 0 }}>
                      Llevas {evaluada.progreso.intentosEnTema} preguntas sin superarlo. Tú decides.
                    </p>
                    <div className={estilos.acciones}>
                      <button
                        type="button"
                        className={estilos.accion}
                        data-principal="true"
                        onClick={() => void traerPregunta(elegida)}
                      >
                        Seguir intentando
                      </button>
                      <button
                        type="button"
                        className={estilos.accion}
                        onClick={() => void traerPregunta(elegida)}
                      >
                        Saltar y reforzarlo después
                      </button>
                    </div>
                  </ContentCard>
                </div>
              )}

              {evaluada && evaluada.evento === "ninguno" && (
                <div className={estilos.acciones}>
                  <button
                    type="button"
                    className={estilos.accion}
                    data-principal="true"
                    disabled={ocupado}
                    onClick={() => void traerPregunta(elegida)}
                  >
                    Siguiente pregunta
                  </button>
                </div>
              )}
            </>
          )}

          {!servida && <LoadingPanel message="Buscando tu siguiente pregunta…" />}
        </AppShell>
      </div>
    </>
  );
}
