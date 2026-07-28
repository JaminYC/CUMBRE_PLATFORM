"use client";

import { useState, type FormEvent } from "react";
import { useMarca } from "@cumbre/brands/client";
import { AppShell } from "@/components/app-shell";
import { ErrorPanel, LoadingPanel } from "@/components/ui";
import { useAsyncResource } from "@/hooks/use-async-resource";
import { useCargaMinima } from "@/hooks/use-carga-minima";
import {
  cambiarEstadoDeUsuario,
  crearPersona,
  fetchUsuarios,
  generarContrasenaTemporal,
  type UsuarioDeAcademia
} from "@/services/client/admin-api";

const ROLES: Record<string, string> = {
  student: "Estudiante",
  teacher: "Docente",
  administrator: "Administración"
};

const FILTROS = [
  { valor: "", etiqueta: "Todos" },
  { valor: "student", etiqueta: "Estudiantes" },
  { valor: "teacher", etiqueta: "Docentes" },
  { valor: "administrator", etiqueta: "Administración" }
];

function iniciales(nombre: string) {
  return nombre
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase() ?? "")
    .join("");
}

export function AdminDashboard() {
  const marca = useMarca();
  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [cambiando, setCambiando] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  const [creando, setCreando] = useState(false);
  const [nombreNuevo, setNombreNuevo] = useState("");
  const [correoNuevo, setCorreoNuevo] = useState("");
  const [rolNuevo, setRolNuevo] = useState<"student" | "teacher" | "administrator">("student");
  const [guardando, setGuardando] = useState(false);
  const [errorForm, setErrorForm] = useState<string | null>(null);

  /* La contraseña generada se muestra una sola vez: no queda guardada
     en ningún lado legible, así que si se cierra hay que generar otra. */
  const [claveGenerada, setClaveGenerada] = useState<{
    nombre: string;
    clave: string;
  } | null>(null);

  async function crear(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setErrorForm(null);
    setGuardando(true);

    /* Contraseña inicial legible para dictarla por teléfono. El prefijo
       sale de la institución: con "Bryce-" fijo, el panel de otra academia
       entregaba claves con la marca de un cliente ajeno. */
    const azar = Math.random().toString(36).slice(2, 6);
    const prefijo = marca.nombreCorto.replace(/\s+/g, "");
    const inicial = `${prefijo}-${azar}${Math.floor(Math.random() * 90 + 10)}`;

    try {
      await crearPersona({
        displayName: nombreNuevo.trim(),
        email: correoNuevo.trim().toLowerCase(),
        credential: inicial,
        requestedRole: rolNuevo
      });

      setClaveGenerada({ nombre: nombreNuevo.trim(), clave: inicial });
      setNombreNuevo("");
      setCorreoNuevo("");
      setCreando(false);
      recurso.reload();
    } catch (error) {
      setErrorForm(
        error instanceof Error ? error.message : "No fue posible crear la cuenta."
      );
    } finally {
      setGuardando(false);
    }
  }

  async function restablecer(usuario: UsuarioDeAcademia) {
    setCambiando(usuario.id);
    setAviso(null);

    try {
      const resultado = await generarContrasenaTemporal(usuario.id);
      setClaveGenerada({
        nombre: resultado.nombre,
        clave: resultado.contrasenaTemporal
      });
    } catch (error) {
      setAviso(
        error instanceof Error
          ? error.message
          : "No fue posible generar la contraseña."
      );
    } finally {
      setCambiando(null);
    }
  }

  const recurso = useAsyncResource(
    () => fetchUsuarios({ rol: filtro || undefined, busqueda: busqueda || undefined }),
    [filtro, busqueda]
  );

  /* Mínimo visible: sin esto, cuando los datos llegan rápido el
     indicador parpadea y el logo no alcanza a armarse. */
  const mostrandoCarga = useCargaMinima(recurso.isLoading);

  async function alternarEstado(usuario: UsuarioDeAcademia) {
    const nuevo = usuario.estado === "active" ? "suspended" : "active";
    setCambiando(usuario.id);
    setAviso(null);

    try {
      await cambiarEstadoDeUsuario(usuario.id, nuevo);
      setAviso(
        nuevo === "suspended"
          ? `${usuario.nombre} quedó suspendido y se cerraron sus sesiones.`
          : `${usuario.nombre} vuelve a tener acceso.`
      );
      recurso.reload();
    } catch (error) {
      setAviso(
        error instanceof Error ? error.message : "No fue posible cambiar el estado."
      );
    } finally {
      setCambiando(null);
    }
  }

  if (mostrandoCarga) {
    return (
      <LoadingPanel
        message="Cargando la academia..."
        detail="Recuperando estudiantes, docentes y administración."
      />
    );
  }

  if (recurso.error && !recurso.data) {
    return (
      <ErrorPanel
        message={recurso.error ?? "No fue posible cargar los usuarios."}
        onRetry={recurso.reload}
      />
    );
  }

  const datos = recurso.data;
  const porRol = datos?.porRol ?? {};

  return (
    <AppShell
      title="Tu academia"
      description="Estudiantes, docentes y administración en un solo lugar."
      breadcrumbs={[{ label: "Inicio" }]}
      headerActions={
        <button
          className="button"
          type="button"
          onClick={() => {
            setCreando((abierto) => !abierto);
            setErrorForm(null);
          }}
        >
          {creando ? "Cancelar" : "Agregar persona"}
        </button>
      }
    >
      {/* ── Contraseña recién generada. Se muestra una sola vez. ── */}
      {claveGenerada ? (
        <section className="clave" role="alert">
          <div>
            <p className="clave__etq">Contraseña de {claveGenerada.nombre}</p>
            <p className="clave__valor">{claveGenerada.clave}</p>
            <p className="clave__nota">
              Anótala o díctasela ahora: <strong>no se vuelve a mostrar</strong>.
              Si se pierde, genera otra.
            </p>
          </div>
          <button
            type="button"
            className="clave__cerrar"
            onClick={() => setClaveGenerada(null)}
          >
            Ya la anoté
          </button>
        </section>
      ) : null}

      {/* ── Alta de persona ── */}
      {creando ? (
        <form className="alta" onSubmit={crear}>
          <div className="alta__campos">
            <label className="alta__campo">
              <span>Nombre completo</span>
              <input
                value={nombreNuevo}
                onChange={(e) => setNombreNuevo(e.target.value)}
                placeholder="María Fernanda Salas"
                required
                autoFocus
              />
            </label>

            <label className="alta__campo">
              <span>Correo</span>
              <input
                value={correoNuevo}
                onChange={(e) => setCorreoNuevo(e.target.value)}
                type="email"
                placeholder="correo@institucion.edu.pe"
                required
              />
            </label>

            <label className="alta__campo">
              <span>Rol</span>
              <select
                value={rolNuevo}
                onChange={(e) =>
                  setRolNuevo(e.target.value as "student" | "teacher" | "administrator")
                }
              >
                <option value="student">Estudiante</option>
                <option value="teacher">Docente</option>
                <option value="administrator">Administración</option>
              </select>
            </label>
          </div>

          {errorForm ? <p className="alta__error">{errorForm}</p> : null}

          <div className="alta__pie">
            <p className="alta__nota">
              Se genera una contraseña inicial que vas a ver una sola vez.
            </p>
            <button className="button" type="submit" disabled={guardando}>
              {guardando ? "Creando..." : "Crear cuenta"}
            </button>
          </div>
        </form>
      ) : null}

      {/* ── Resumen: personas, no nodos ── */}
      <section className="resumen">
        {[
          { rol: "student", etiqueta: "Estudiantes" },
          { rol: "teacher", etiqueta: "Docentes" },
          { rol: "administrator", etiqueta: "Administración" }
        ].map(({ rol, etiqueta }) => (
          <button
            key={rol}
            type="button"
            className={filtro === rol ? "resumen__card activa" : "resumen__card"}
            onClick={() => setFiltro(filtro === rol ? "" : rol)}
          >
            <span className="resumen__num">{porRol[rol] ?? 0}</span>
            <span className="resumen__etq">{etiqueta}</span>
          </button>
        ))}
      </section>

      {aviso ? (
        <p className="aviso" role="status">
          {aviso}
        </p>
      ) : null}

      {/* ── Personas ── */}
      <section className="personas">
        <div className="personas__barra">
          <div className="personas__filtros">
            {FILTROS.map((f) => (
              <button
                key={f.valor || "todos"}
                type="button"
                className={filtro === f.valor ? "chip activo" : "chip"}
                onClick={() => setFiltro(f.valor)}
              >
                {f.etiqueta}
              </button>
            ))}
          </div>

          <input
            className="personas__buscar"
            type="search"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Buscar por nombre o correo"
            aria-label="Buscar persona"
          />
        </div>

        {datos && datos.usuarios.length > 0 ? (
          <ul className="personas__lista">
            {datos.usuarios.map((usuario) => {
              const suspendido = usuario.estado !== "active";

              return (
                <li
                  key={usuario.id}
                  className={suspendido ? "persona suspendida" : "persona"}
                >
                  <span className="persona__avatar" aria-hidden="true">
                    {iniciales(usuario.nombre)}
                  </span>

                  <div className="persona__datos">
                    <p className="persona__nombre">{usuario.nombre}</p>
                    <p className="persona__correo">{usuario.correo ?? "sin correo"}</p>
                  </div>

                  <span className={`etiqueta etiqueta--${usuario.rol}`}>
                    {ROLES[usuario.rol] ?? usuario.rol}
                  </span>

                  {suspendido ? (
                    <span className="etiqueta etiqueta--suspendido">Suspendido</span>
                  ) : null}

                  <button
                    type="button"
                    className="persona__accion"
                    disabled={cambiando === usuario.id}
                    onClick={() => restablecer(usuario)}
                    title="Genera una contraseña temporal para dictarle"
                  >
                    Restablecer clave
                  </button>

                  <button
                    type="button"
                    className="persona__accion persona__accion--riesgo"
                    disabled={cambiando === usuario.id}
                    onClick={() => alternarEstado(usuario)}
                  >
                    {cambiando === usuario.id
                      ? "..."
                      : suspendido
                        ? "Reactivar"
                        : "Suspender"}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="personas__vacio">
            {busqueda
              ? `No hay nadie que coincida con “${busqueda}”.`
              : "Todavía no hay personas registradas."}
          </p>
        )}
      </section>
    </AppShell>
  );
}
