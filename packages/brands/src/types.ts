/**
 * Forma de una marca.
 *
 * Todo lo que distingue a una institución de otra vive aquí. Si algo de una
 * academia no cabe en este objeto, es que se coló lógica de negocio en la
 * capa de marca — y ahí es donde estos sistemas se vuelven inmantenibles.
 */

/**
 * Los tokens de color, con los mismos nombres que ya usan las hojas de
 * estilo. Cambian los valores, nunca las claves.
 *
 * `mint`, `sun` y `sand` vienen de la paleta original de CUMBRE y suenan
 * raros para una marca azul. Se conservan igual: renombrarlos obliga a
 * revisar novecientas líneas de CSS heredado en cada aplicación, y el
 * beneficio seria solo cosmetico. Lo que importa es que las claves sean
 * las mismas en todas las marcas.
 */
export interface TokensDeMarca {
  paper: string;
  paperStrong: string;
  ink: string;
  inkMuted: string;
  mint: string;
  mintStrong: string;
  sun: string;
  sand: string;
  error: string;
  border: string;
  shadow: string;

  /**
   * Arranque del degradado claro del acceso, por encima de `paper`.
   * Estaba escrito a mano en el CSS y era lo que dejaba el fondo crema de
   * CUMBRE detrás del logo de otra institución.
   */
  paperTop: string;

  /** Acompaña a `mintStrong` en los degradados de botones y barras. */
  mintAlt: string;

  /**
   * El acento de la institución: el color con el que se subraya, no con el
   * que se pinta. En Bryce es el naranja del logo.
   *
   * Faltaba en la primera version del registro y se noto al migrar la
   * portada editorial: los botones quedaban con el fondo sin definir.
   */
  accent: string;

  /**
   * El mismo acento, oscurecido lo justo para leerse sobre fondo claro.
   * El naranja puro sobre blanco no llega al contraste minimo.
   */
  accentText: string;

  /**
   * Los tres cortes del degradado oscuro de la pantalla de carga, de arriba
   * a abajo. Es la única superficie oscura del producto, y la que más canta
   * si se queda con los colores de otra marca.
   */
  cargaGradiente: [string, string, string];
}

export interface Marca {
  /**
   * Identificador interno. Es el mismo valor que la columna `tenant` de
   * `auth_users`: lo que separa los datos de cada institución.
   */
  id: string;

  /** Nombre visible. Aparece en títulos, correos y pies de página. */
  nombre: string;

  /** Nombre corto, para espacios estrechos como la barra lateral. */
  nombreCorto: string;

  /** Descripción para la etiqueta <meta> y para compartir enlaces. */
  descripcion: string;

  /** Rutas de los logos dentro de la carpeta `public` de cada aplicación. */
  logo: {
    /** Logo completo, con texto. */
    principal: string;
    /** Versión compacta, para la barra plegada. */
    marca: string;
  };

  tokens: TokensDeMarca;

  /**
   * Si desde esta marca alguien puede crearse una cuenta solo.
   *
   * Las academias van en `false`: sus alumnos reciben la cuenta de la
   * institución, y un registro abierto significaria gente al azar
   * apareciendo en la lista de estudiantes de un cliente.
   *
   * No basta con esconder el enlace — la ruta tambien lo comprueba, porque
   * esconder un boton no impide que alguien llame al endpoint.
   */
  permiteRegistroPublico: boolean;

  /**
   * Cual de las dos portadas usa.
   *
   * `producto` es la de CUMBRE: explica la plataforma a quien todavia no
   * la conoce. `editorial` es mas sobria —titular serif, mucho aire— y
   * encaja mejor con una institucion que ya tiene su prestigio y solo
   * necesita una puerta de entrada.
   *
   * Es una propiedad de la marca y no un `if` con el nombre de una
   * academia dentro: la siguiente elige la suya sin tocar codigo.
   */
  landing: "producto" | "editorial";

  /** Aparece en la landing y el pie de página. */
  contacto?: {
    direccion?: string;
    telefonos?: string[];
    correo?: string;
    horario?: string;
  };
}
