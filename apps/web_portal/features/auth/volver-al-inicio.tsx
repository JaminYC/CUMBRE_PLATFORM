import Link from "next/link";

/**
 * Enlace de vuelta a la portada.
 *
 * La flecha es un SVG y no el carácter "←" porque un glifo se dibuja con la
 * tipografía que toque —cambia de peso y de alineación entre fuentes— y no se
 * puede animar por separado del texto. Aquí se desplaza sola al pasar el
 * puntero, que es lo que convierte un enlace en un gesto de volver.
 *
 * Vive en su propio archivo porque lo usan el acceso, el registro y el alta.
 */
export function VolverAlInicio({ texto = "Volver al inicio" }: { texto?: string }) {
  return (
    <Link href="/" className="volver">
      <span className="volver__flecha" aria-hidden="true">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
          <path
            d="M10 3.5 5.5 8l4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* La raya solo aparece al pasar el puntero: en reposo el gesto es
              una punta de flecha; al activarse se estira y se lee "volver". */}
          <path
            className="volver__raya"
            d="M5.5 8h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {texto}
    </Link>
  );
}
