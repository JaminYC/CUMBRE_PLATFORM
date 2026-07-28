/**
 * Limitador de intentos de inicio de sesión.
 *
 * Sin esto, cualquiera puede probar contraseñas contra una cuenta conocida
 * sin ningún freno. Con datos de menores eso no es aceptable.
 *
 * Estrategia: ventana deslizante en memoria. Tras N fallos dentro de la
 * ventana, la clave queda bloqueada por un tiempo de enfriamiento que crece
 * con la reincidencia.
 *
 * Límite conocido: el estado vive en el proceso. Con varias instancias del
 * servicio detrás de un balanceador, cada una lleva su propia cuenta — el
 * límite efectivo se multiplica por la cantidad de instancias. Para eso hace
 * falta un almacén compartido (Redis). A la escala actual (una instancia)
 * esto es correcto y no agrega dependencias.
 */

export interface LoginThrottleOptions {
  /** Fallos tolerados dentro de la ventana antes de bloquear. */
  maxIntentos: number;
  /** Ventana de observación, en segundos. */
  ventanaSegundos: number;
  /** Enfriamiento base al bloquear, en segundos. */
  bloqueoSegundos: number;
  /** Tope del enfriamiento tras bloqueos sucesivos, en segundos. */
  bloqueoMaximoSegundos: number;
}

const OPCIONES_POR_DEFECTO: LoginThrottleOptions = {
  maxIntentos: 5,
  ventanaSegundos: 15 * 60,
  bloqueoSegundos: 5 * 60,
  bloqueoMaximoSegundos: 60 * 60
};

interface Registro {
  fallos: number[];
  bloqueadoHasta: number;
  bloqueosSeguidos: number;
}

export class LoginThrottle {
  private readonly registros = new Map<string, Registro>();
  private readonly opciones: LoginThrottleOptions;

  constructor(opciones: Partial<LoginThrottleOptions> = {}) {
    this.opciones = { ...OPCIONES_POR_DEFECTO, ...opciones };
  }

  /**
   * Devuelve los segundos que faltan para poder reintentar, o `null` si la
   * clave no está bloqueada.
   */
  segundosRestantes(clave: string): number | null {
    const registro = this.registros.get(this.normalizar(clave));

    if (!registro || registro.bloqueadoHasta <= Date.now()) {
      return null;
    }

    return Math.ceil((registro.bloqueadoHasta - Date.now()) / 1000);
  }

  /** Registra un intento fallido. Devuelve `true` si el bloqueo se activó. */
  registrarFallo(clave: string): boolean {
    const id = this.normalizar(clave);
    const ahora = Date.now();
    const registro = this.registros.get(id) ?? {
      fallos: [],
      bloqueadoHasta: 0,
      bloqueosSeguidos: 0
    };

    const desde = ahora - this.opciones.ventanaSegundos * 1000;
    registro.fallos = registro.fallos.filter((t) => t > desde);
    registro.fallos.push(ahora);

    let seBloqueo = false;

    if (registro.fallos.length >= this.opciones.maxIntentos) {
      registro.bloqueosSeguidos += 1;
      // Cada bloqueo consecutivo duplica el enfriamiento, hasta el tope.
      const espera = Math.min(
        this.opciones.bloqueoSegundos * 2 ** (registro.bloqueosSeguidos - 1),
        this.opciones.bloqueoMaximoSegundos
      );
      registro.bloqueadoHasta = ahora + espera * 1000;
      registro.fallos = [];
      seBloqueo = true;
    }

    this.registros.set(id, registro);
    this.limpiarVencidos();
    return seBloqueo;
  }

  /** Un ingreso correcto borra el historial de esa clave. */
  registrarExito(clave: string): void {
    this.registros.delete(this.normalizar(clave));
  }

  /** Solo para pruebas. */
  reiniciar(): void {
    this.registros.clear();
  }

  private normalizar(clave: string): string {
    return clave.trim().toLowerCase();
  }

  /**
   * Evita que el mapa crezca sin límite. Se ejecuta al registrar un fallo,
   * que es poco frecuente comparado con los ingresos correctos.
   */
  private limpiarVencidos(): void {
    if (this.registros.size < 1000) return;

    const ahora = Date.now();
    const desde = ahora - this.opciones.ventanaSegundos * 1000;

    for (const [id, registro] of this.registros) {
      const sinFallosVigentes = registro.fallos.every((t) => t <= desde);
      const sinBloqueo = registro.bloqueadoHasta <= ahora;

      if (sinFallosVigentes && sinBloqueo) {
        this.registros.delete(id);
      }
    }
  }
}
