import type { Marca } from "./types";

/**
 * Las instituciones que atiende la plataforma.
 *
 * Sumar una academia o un colegio se hace aquí: una entrada, sus colores y
 * sus logos. No se copian aplicaciones, no se crean proyectos nuevos en
 * Vercel, no se levanta otro servidor. Un solo despliegue las sirve a todas.
 */

/** CUMBRE, la marca propia. Es la que se usa cuando el dominio no coincide. */
export const CUMBRE: Marca = {
  id: "cumbre",
  nombre: "CUMBRE",
  nombreCorto: "CUMBRE",
  descripcion:
    "Plataforma de aprendizaje con rutas de estudio, seguimiento y aulas.",
  logo: {
    // Ruta unica en todas las aplicaciones: `public/brand/`. Antes cada app
    // guardaba sus logos donde caia, y una ruta que existia en una faltaba
    // en otra.
    principal: "/brand/cumbre.png",
    marca: "/brand/cumbre.png"
  },
  tokens: {
    paper: "#f6f0e4",
    paperStrong: "#fffaf1",
    ink: "#22323b",
    inkMuted: "#5a6c75",
    mint: "#c9ebe5",
    mintStrong: "#0d7a71",
    sun: "#f2c88e",
    sand: "#ead8bf",
    error: "#b24f4f",
    border: "rgba(34, 50, 59, 0.12)",
    shadow: "0 24px 60px rgba(34, 50, 59, 0.1)",
    paperTop: "#fcf8f0",
    mintAlt: "#18a68f",
    accent: "#f2c88e",
    accentText: "#a37020",
    cargaGradiente: ["#0d1f28", "#122c38", "#0d4c48"]
  },
  permiteRegistroPublico: true,
  landing: "producto",
  funcionalidades: {
    yarinet: true
  }
};

/** Academia Preuniversitaria Bryce — Arequipa. */
export const BRYCE: Marca = {
  id: "bryce",
  nombre: "Academia Bryce",
  nombreCorto: "Bryce",
  descripcion:
    "Campus virtual de la Academia Preuniversitaria Bryce. Un solo acceso para estudiantes, docentes y administración.",
  logo: {
    principal: "/brand/bryce.png",
    marca: "/brand/bryce-marca.svg"
  },
  // Colores muestreados de los pixeles del logo oficial, no estimados.
  tokens: {
    paper: "#f4f7fc",
    paperStrong: "#ffffff",
    ink: "#16233d",
    inkMuted: "#5a6782",
    mint: "#dce6f7",
    mintStrong: "#193f8e",
    sun: "#ffd9bf",
    sand: "#e8eef9",
    error: "#c0392b",
    border: "rgba(22, 35, 61, 0.12)",
    shadow: "0 24px 60px rgba(13, 44, 99, 0.12)",
    paperTop: "#ffffff",
    mintAlt: "#2a5cc4",
    accent: "#ff7a33",
    accentText: "#c74e12",
    cargaGradiente: ["#0d2c63", "#14356f", "#193f8e"]
  },
  // Las cuentas de Bryce las crea Dirección desde su panel.
  permiteRegistroPublico: false,
  landing: "editorial",
  funcionalidades: {
    yarinet: false
  },
  contacto: {
    direccion: "Santa Marta 209, Cercado — Arequipa",
    telefonos: ["940 161 725", "054 263701"],
    correo: "academia@bryce.edu.pe",
    horario: "Lunes a sábado, 7:00 a. m. — 8:00 p. m."
  }
};

export const MARCAS: Marca[] = [CUMBRE, BRYCE];

/**
 * Qué dominio pertenece a qué marca.
 *
 * Se compara por sufijo, así que una entrada cubre todos los subdominios de
 * una institución: `academiabryce.com` vale para `campus.`, `alumno.`,
 * `docente.` y `direccion.`. Sumar una academia son una o dos líneas.
 */
const DOMINIOS: Array<{ sufijo: string; marca: Marca }> = [
  { sufijo: "academiabryce.com", marca: BRYCE },
  { sufijo: "bryce.edu.pe", marca: BRYCE },
  /* Bajo nuestro dominio, para poder lanzar sin esperar a que el cliente
     delegue el suyo. Cuando firmen se agrega el suyo y este puede quedarse:
     una institución puede tener varios dominios. */
  { sufijo: "bryce.teamvastoria.com", marca: BRYCE },
  // Para probar en local sin tocar el DNS: cualquier host que empiece por
  // "bryce." — por ejemplo bryce.localhost:3100.
  { sufijo: "bryce.localhost", marca: BRYCE }
];

/**
 * Resuelve la marca a partir del host de la petición.
 *
 * Si el dominio no está registrado devuelve CUMBRE. Ese valor por defecto es
 * deliberado: mientras se migra, cualquier dominio que todavía no se haya
 * dado de alta sigue viéndose exactamente como antes, en vez de quedarse sin
 * colores ni logo.
 */
export function marcaPorHost(host: string | null | undefined): Marca {
  if (!host) return CUMBRE;

  // El host trae el puerto en desarrollo (`bryce.localhost:3100`).
  const limpio = host.split(":")[0].toLowerCase().trim();

  for (const { sufijo, marca } of DOMINIOS) {
    if (limpio === sufijo || limpio.endsWith(`.${sufijo}`)) {
      return marca;
    }
  }

  return CUMBRE;
}

/** Busca por identificador. Útil para el backend y los scripts. */
export function marcaPorId(id: string): Marca | undefined {
  return MARCAS.find((m) => m.id === id);
}
