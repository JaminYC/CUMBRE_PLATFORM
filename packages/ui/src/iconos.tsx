import type { ReactNode } from "react";

/**
 * Iconos de la barra lateral, para las cuatro aplicaciones.
 *
 * Antes cada una traia los suyos y no se parecian: los del alumno eran de
 * trazo sobre caja de 24, los del docente rellenos sobre caja de 15, y la de
 * administracion no tenia ninguno. Puestos uno al lado del otro se leian como
 * tres productos distintos.
 *
 * Todos comparten caja, grosor y `currentColor`. Lo del color importa: el
 * estado activo lo pinta el CSS con `color`, sin que el icono sepa si esta
 * activo. Pasarle el color ya calculado obliga a redibujar en cada cambio de
 * ruta y deja el hover fuera del alcance de la hoja de estilos.
 *
 * El grosor si viaja por props, porque el item activo lo engorda un poco y eso
 * no se hereda.
 */

export type PropsIcono = { grosor?: number };

function Trazo({ grosor = 1.7, children }: PropsIcono & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth={grosor}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* ── Comunes ──────────────────────────────────────────────────────── */

export function IconoInicio(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </Trazo>
  );
}

/** Rejilla: el panel de quien supervisa, no la casa de quien estudia. */
export function IconoPanel(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
    </Trazo>
  );
}

export function IconoProgreso(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M21.5 20h-19" />
    </Trazo>
  );
}

/* ── Alumno ───────────────────────────────────────────────────────── */

/** Diana: la practica apunta a un examen concreto, no es estudio libre. */
export function IconoPractica(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </Trazo>
  );
}

export function IconoAula(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16.5V20" />
    </Trazo>
  );
}

export function IconoUnirse(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H6a3.5 3.5 0 0 0-3.5 3.5V20" />
      <circle cx="9" cy="8" r="3.5" />
      <path d="M18.5 7.5v6" />
      <path d="M21.5 10.5h-6" />
    </Trazo>
  );
}

export function IconoGenerador(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.6 10.4 12.2 5 10.6 10.4 9Z" />
      <path d="M18.5 16.5 19 18.4l1.9.6-1.9.6-.5 1.9-.5-1.9-1.9-.6 1.9-.6Z" />
    </Trazo>
  );
}

/** Ruta: los hitos encadenados del recorrido asignado. */
export function IconoRuta(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.5" />
    </Trazo>
  );
}

/* ── Docente ──────────────────────────────────────────────────────── */

export function IconoAulas(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M15 20v-1.75a3.25 3.25 0 0 0-3.25-3.25h-5.5A3.25 3.25 0 0 0 3 18.25V20" />
      <circle cx="9" cy="7.75" r="3.25" />
      <path d="M21 20v-1.75a3.25 3.25 0 0 0-2.5-3.16" />
      <path d="M16 4.75a3.25 3.25 0 0 1 0 6" />
    </Trazo>
  );
}

export function IconoMateriales(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M7.5 3.5h7L19 8v11.5a1 1 0 0 1-1 1H7.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
      <path d="M14.25 3.5V8H19" />
      <path d="M9.5 13h6" />
      <path d="M9.5 16.5h4" />
    </Trazo>
  );
}

/** Bloques que se apilan: el constructor arma la clase pieza a pieza. */
export function IconoModulos(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <rect x="3" y="3.5" width="8" height="6" rx="1.5" />
      <rect x="13" y="3.5" width="8" height="6" rx="1.5" />
      <rect x="3" y="12.5" width="8" height="8" rx="1.5" />
      <rect x="13" y="12.5" width="8" height="8" rx="1.5" />
    </Trazo>
  );
}

export function IconoExamenes(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M8 4.5H6.5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1H16" />
      <rect x="8" y="2.75" width="8" height="3.5" rx="1.2" />
      <path d="M8.75 11.5l1.5 1.5 3-3" />
      <path d="M8.75 16.5h6.5" />
    </Trazo>
  );
}

export function IconoAutoria(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M16.5 3.5 20.5 7.5 8 20H4v-4L16.5 3.5Z" />
      <path d="M14 6l4 4" />
    </Trazo>
  );
}

/** La balanza de YariNET: deliberacion, dos partes que se pesan. */
export function IconoYariNet(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M12 4.5v15" />
      <path d="M4.5 7.5h15" />
      <path d="M7 7.5 4 14a3 3 0 0 0 6 0Z" />
      <path d="M17 7.5 14 14a3 3 0 0 0 6 0Z" />
      <path d="M8.5 20h7" />
    </Trazo>
  );
}

/* ── Administracion ───────────────────────────────────────────────── */

/** Deslizadores: gestionar es ajustar, no crear. */
export function IconoGestion(p: PropsIcono) {
  return (
    <Trazo {...p}>
      <path d="M4 7h11" />
      <path d="M19 7h1" />
      <circle cx="17" cy="7" r="2" />
      <path d="M20 17H9" />
      <path d="M5 17H4" />
      <circle cx="7" cy="17" r="2" />
    </Trazo>
  );
}

/* ── De la propia barra ───────────────────────────────────────────── */

/**
 * El pliegue: un panel con su columna marcada. Es el mismo simbolo que usan
 * los editores para esto, asi que se reconoce sin etiqueta.
 */
export function IconoPliegue({ grosor = 1.75 }: PropsIcono) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth={grosor}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
      <path d="M9.25 3.5v17" />
    </svg>
  );
}

export function IconoSalir({ grosor = 1.7 }: PropsIcono) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth={grosor}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 20H6.5A1.5 1.5 0 0 1 5 18.5v-13A1.5 1.5 0 0 1 6.5 4H14" />
      <path d="M17.5 15.5 21 12l-3.5-3.5" />
      <path d="M21 12h-11" />
    </svg>
  );
}
