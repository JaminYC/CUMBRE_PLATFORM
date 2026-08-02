/**
 * Iconos de la barra lateral.
 *
 * Todos comparten caja de 24, trazo redondeado y `currentColor`. Lo del color
 * importa: el estado activo se pinta desde el CSS con `color`, sin que el
 * componente sepa nada de si esta activo. La alternativa —pasarle el color
 * calculado por props— obliga a que React vuelva a dibujar el icono en cada
 * cambio de ruta y deja el hover fuera del alcance del CSS.
 *
 * El grosor si viaja por props porque el item activo lo engorda un poco, y eso
 * no se puede heredar.
 */

type Props = { grosor?: number };

function Trazo({ grosor = 1.7, children }: Props & { children: React.ReactNode }) {
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

export function IconoInicio(p: Props) {
  return (
    <Trazo {...p}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </Trazo>
  );
}

/** Diana: la practica apunta a un examen concreto, no es estudio libre. */
export function IconoPractica(p: Props) {
  return (
    <Trazo {...p}>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </Trazo>
  );
}

export function IconoProgreso(p: Props) {
  return (
    <Trazo {...p}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M21.5 20h-19" />
    </Trazo>
  );
}

export function IconoAula(p: Props) {
  return (
    <Trazo {...p}>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16.5V20" />
    </Trazo>
  );
}

export function IconoUnirse(p: Props) {
  return (
    <Trazo {...p}>
      <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H6a3.5 3.5 0 0 0-3.5 3.5V20" />
      <circle cx="9" cy="8" r="3.5" />
      <path d="M18.5 7.5v6" />
      <path d="M21.5 10.5h-6" />
    </Trazo>
  );
}

export function IconoGenerador(p: Props) {
  return (
    <Trazo {...p}>
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.6 10.4 12.2 5 10.6 10.4 9Z" />
      <path d="M18.5 16.5 19 18.4l1.9.6-1.9.6-.5 1.9-.5-1.9-1.9-.6 1.9-.6Z" />
    </Trazo>
  );
}

/** Ruta: los hitos encadenados del recorrido asignado. */
export function IconoRuta(p: Props) {
  return (
    <Trazo {...p}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.5" />
    </Trazo>
  );
}

/**
 * El icono del pliegue: un panel con su columna marcada. Es el mismo simbolo
 * que usan los editores para esto, asi que se reconoce sin etiqueta.
 */
export function IconoPliegue({ grosor = 1.75 }: Props) {
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
