import Link from "next/link";
import type { PortalRoleTarget } from "@/lib/role-targets";
import type { Marca } from "@cumbre/brands";
import { Reveal } from "./reveal";
import { TituloAnimado } from "./titulo-animado";

/*
 * Portada editorial: titular serif, fondo claro, mucho aire y numeros
 * grandes como estructura de seccion.
 *
 * Se construyo para Academia Bryce, pero no sabe nada de Bryce: el nombre,
 * el logo y los datos de contacto salen del registro de marcas, y los
 * colores de los tokens. La elige cualquier institucion que declare
 * `landing: "editorial"`.
 */

/*
 * Las tres areas son las mismas que evalua la UNSA y las mismas que pide el
 * motor de practica al entrar. No hay que traducir nada entre lo que la
 * academia vende y lo que el campus hace.
 */
const areas = [
  {
    id: "ingenierias",
    nombre: "Ingenierías",
    detalle: "Matemática pesa 25% y Ciencia y Tecnología otro 25% del examen."
  },
  {
    id: "biomedicas",
    nombre: "Biomédicas",
    detalle: "Ciencia y Tecnología pesa 35%, con Biología como asignatura principal."
  },
  {
    id: "sociales",
    nombre: "Sociales",
    detalle: "Comunicación pesa 22% y Ciencias Sociales 23% del examen."
  }
];

/*
 * Ingresantes con primer puesto, tal como los publica la academia en su web.
 *
 * Viven aqui y no en el registro de marcas porque cambian cada proceso de
 * admision: es lo primero que hay que actualizar cuando salgan los resultados
 * del siguiente. Conviene confirmarlos con Direccion antes de cada campana.
 */
const ingresantes = [
  { nombre: "Hector Cabrera", carrera: "Medicina" },
  { nombre: "Johan Machaca", carrera: "Ing. Civil" },
  { nombre: "Sofia Alvarez", carrera: "Arquitectura" },
  { nombre: "Michael Torres", carrera: "Derecho" },
  { nombre: "Gabriel Anco", carrera: "Biología" },
  { nombre: "Lesli Viza", carrera: "Enfermería" },
  { nombre: "Jorge Aguilar", carrera: "Psicología" },
  { nombre: "Albert Ticona", carrera: "Ing. Minas" },
  { nombre: "Yemili Maraza", carrera: "Contabilidad" },
  { nombre: "Lesly Castro", carrera: "Ing. Sanitaria" }
];

const PROCESO = "UNSA 2025";

const pasos = [
  {
    n: "01",
    titulo: "Recibe tu correo",
    texto: "La academia te entrega un correo institucional al matricularte."
  },
  {
    n: "02",
    titulo: "Entra una sola vez",
    texto: "El sistema reconoce tu perfil y te lleva a tu espacio, sin elegir nada."
  },
  {
    n: "03",
    titulo: "Sigue tu ruta",
    texto: "Ves qué tema toca, cómo vas y a quién preguntarle cuando te trabas."
  }
];

export function LandingEditorial({
  activeTarget,
  marca
}: {
  activeTarget: PortalRoleTarget | null;
  marca: Marca;
}) {
  return (
    <div className="ble">
      {/*
        El filtro que hace temblar los bordes. Va una vez en la pagina y lo
        referencian los estilos; el SVG no ocupa espacio ni se ve.

        baseFrequency baja da ondas largas —trazo de pluma— y no rugosidad.
        La semilla fija evita que cambie entre renders del servidor y el
        cliente, que daria un parpadeo al hidratar.
      */}
      <svg width="0" height="0" aria-hidden="true" focusable="false"
           style={{ position: "absolute" }}>
        {/* Para lados rectos largos: ahi el desplazamiento se lee como
            trazo de pluma. */}
        <filter id="ble-temblor">
          <feTurbulence type="fractalNoise" baseFrequency="0.012"
                        numOctaves="2" seed="7" result="ruido" />
          <feDisplacementMap in="SourceGraphic" in2="ruido" scale="2.2"
                             xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Para pildoras. Una curva muy cerrada no admite el mismo
            desplazamiento: en vez de ondularse, se astilla en muescas. Con
            ondas mas largas y la mitad de recorrido, el borde tiembla sin
            romperse. */}
        <filter id="ble-temblor-suave">
          <feTurbulence type="fractalNoise" baseFrequency="0.006"
                        numOctaves="1" seed="3" result="ruido" />
          <feDisplacementMap in="SourceGraphic" in2="ruido" scale="1.1"
                             xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      {/* ── Navegación ── */}
      <header className="ble-nav">
        <div className="ble-inner ble-nav__inner">
          <Link href="/" className="ble-nav__brand" aria-label={marca.nombre}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={marca.logo.principal} alt={marca.nombre} draggable={false} />
          </Link>

          <nav className="ble-nav__links">
            <a href="#areas">Las tres áreas</a>
            <a href="#ingresantes">Ingresantes</a>
            <a href="#contacto">Contacto</a>
            {marca.contacto?.webPublica ? (
              <a href={marca.contacto.webPublica} target="_blank" rel="noopener">
                Web de la academia
              </a>
            ) : null}
          </nav>

          <Link className="ble-btn ble-btn--sm" href="/login">
            {activeTarget ? "Continuar" : "Iniciar sesión"}
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="ble-hero">
        <div className="ble-inner">
          <TituloAnimado
            texto="Pon a prueba todo tu talento, todos los días."
            className="ble-hero__title"
            retardoBase={120}
          />
          <p className="ble-hero__lede">
            Practica con preguntas del temario oficial de la UNSA. El sistema
            reconoce en qué tema estás flojo y te lleva por ahí, tema a tema,
            hasta que lo dominas.
          </p>

          <div className="ble-hero__cta">
            {activeTarget ? (
              <a className="ble-btn" href={activeTarget.dashboardUrl}>
                Continuar a {activeTarget.label.toLowerCase()}
              </a>
            ) : (
              <Link className="ble-btn" href="/login">
                Entrar al campus
              </Link>
            )}
            <a className="ble-btn ble-btn--ghost" href="#areas">
              Ver las tres áreas
            </a>
          </div>
        </div>

        <div className="ble-hero__stage">
          <div className="ble-hero__plate" aria-hidden="true" />
          {/* Vectorial y en línea: escala sin pixelarse, y sus 15 piezas
              entran escalonadas al cargar la página. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={marca.logo.principal}
            alt=""
            className="ble-hero__shot"
            draggable={false}
          />
        </div>
      </section>

      {/* ── Las tres áreas ── */}
      <section className="ble-section" id="areas">
        <div className="ble-inner">
          <Reveal>
            <p className="ble-eyebrow">Las tres áreas</p>
            <h2 className="ble-h2">Cada área rinde un examen distinto.</h2>
            <p className="ble-sub">
              La UNSA reparte las mismas 80 preguntas de forma muy diferente
              según a qué postules. El campus lo sabe: eliges tu área una vez y
              todo lo demás se acomoda.
            </p>
          </Reveal>

          <div className="ble-perfiles">
            {areas.map((a, i) => (
              <Reveal key={a.id} delay={i * 70}>
                <article className="ble-perfil">
                  <p className="ble-perfil__rol">Área</p>
                  <h3 className="ble-perfil__titulo">{a.nombre}</h3>
                  <ul>
                    <li>{a.detalle}</li>
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingresantes ── */}
      <section className="ble-section ble-section--alt" id="ingresantes">
        <div className="ble-inner">
          <Reveal>
            <p className="ble-eyebrow">{PROCESO}</p>
            <h2 className="ble-h2">
              Siempre con la mayor cantidad de ingresantes.
            </h2>
            <p className="ble-sub">
              Primeros puestos del último proceso de admisión.
            </p>
          </Reveal>

          <div className="ble-ingresantes">
            {ingresantes.map((p, i) => (
              /* Escalonado corto: la lista es larga y con mas retardo la
                 ultima tarjeta se haria esperar demasiado. */
              <Reveal key={p.nombre} delay={Math.min(i, 6) * 45}>
                <article className="ble-ingresante">
                  <p className="ble-ingresante__puesto">1.<sup>er</sup> puesto</p>
                  <h3>{p.carrera}</h3>
                  <p className="ble-ingresante__nombre">{p.nombre}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="ble-cierre">
        <div className="ble-inner">
          <Reveal>
            <h2>Tu preparación no espera al lunes.</h2>
            <p>Entra con las credenciales que te dio la academia.</p>
            <Link className="ble-btn ble-btn--light" href="/login">
              Iniciar sesión
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer className="ble-foot" id="contacto">
        <div className="ble-inner">
          <div className="ble-foot__grid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={marca.logo.principal}
                alt={marca.nombre}
                className="ble-foot__logo"
                draggable={false}
              />
              <p className="ble-foot__tag">{marca.nombre}</p>
            </div>

            {marca.contacto?.direccion ? (
              <div>
                <p className="ble-foot__hd">Sede</p>
                <p>{marca.contacto.direccion}</p>
              </div>
            ) : null}

            {marca.contacto?.telefonos?.length ||
            marca.contacto?.correo ||
            marca.contacto?.central ? (
              <div>
                <p className="ble-foot__hd">Contacto</p>
                {marca.contacto.central ? (
                  <p>Central {marca.contacto.central}</p>
                ) : null}
                {marca.contacto.telefonos?.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                {marca.contacto.correo ? <p>{marca.contacto.correo}</p> : null}
              </div>
            ) : null}

            {marca.contacto?.whatsapp?.length ? (
              <div>
                <p className="ble-foot__hd">WhatsApp</p>
                {marca.contacto.whatsapp.map((w) => (
                  <p key={w}>
                    <a href={`https://wa.me/51${w.replace(/\D/g, "")}`} target="_blank" rel="noopener">
                      {w}
                    </a>
                  </p>
                ))}
              </div>
            ) : null}

            {marca.contacto?.horario ? (
              <div>
                <p className="ble-foot__hd">Atención</p>
                <p>{marca.contacto.horario}</p>
              </div>
            ) : null}
          </div>

          <p className="ble-foot__legal">
            {marca.nombre} — Grupo Bryce, Arequipa.
            {marca.contacto?.webPublica ? (
              <>
                {" "}
                <a href={marca.contacto.webPublica} target="_blank" rel="noopener">
                  academiabryce.com
                </a>
              </>
            ) : null}
          </p>
        </div>
      </footer>
    </div>
  );
}
