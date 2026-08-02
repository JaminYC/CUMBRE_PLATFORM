# @cumbre/ui

El armazón compartido de las aplicaciones de rol: barra lateral plegable, área
de contenido con su cabecera, y el juego de iconos.

## Por qué existe

Había una copia en cada aplicación. Compartían el mismo vocabulario de clases y
la misma firma de props, pero habían derivado por su cuenta:

- la del alumno tenía iconos de trazo sobre caja de 24 y se plegaba
- la del docente, iconos rellenos sobre caja de 15 y no se plegaba
- la de administración, ninguno

Puestas una al lado de otra se leían como tres productos distintos. Y cada
arreglo había que hacerlo tres veces, que es como se le quedó al acceso del
alumno una pantalla entera sin CSS durante meses sin que nadie lo notara.

## Cómo se usa

Cada aplicación aporta lo que de verdad la distingue —sus secciones, quién ha
entrado— y el armazón hace el resto:

```tsx
import { Armazon, IconoPanel, type ItemDeNavegacion } from "@cumbre/ui";

const items: ItemDeNavegacion[] = [
  { href: "/dashboard", etiqueta: "Panel", Icono: IconoPanel },
  // `prefijo: true` deja el item encendido tambien en sus subpaginas
];

<Armazon ambito="Espacio docente" items={items} title="…">
  {children}
</Armazon>;
```

Hacen falta tres cosas más en el `layout.tsx` de la aplicación:

```tsx
import { GUION_PLIEGUE_INICIAL } from "@cumbre/ui";
import "@cumbre/ui/armazon.css";   // antes de globals.css

// dentro del <head>, y antes de que se pinte nada:
<script dangerouslySetInnerHTML={{ __html: GUION_PLIEGUE_INICIAL }} />
// y en el <html>: suppressHydrationWarning
```

Ese script decide si la barra arranca plegada. Va síncrono y no como efecto de
React por lo mismo que los colores de la marca van en el HTML: un efecto corre
después del primer pintado, así que la barra se vería abierta y daría un salto.
De ahí también el `suppressHydrationWarning`: el script toca `<html>` antes de
que React hidrate.

## Decisiones que conviene no deshacer sin querer

**El DOM es idéntico plegada y desplegada.** Todo el cambio lo hace el CSS
desde un atributo en `<html>`. Así no hay ramas que dependan del estado al
pintar en el servidor, y el hover, el foco y el movimiento reducido se
resuelven en la hoja de estilos y no en doce manejadores de ratón.

**El ancho vive en `--barra-ancho`, en `:root`.** No es capricho: la cortina de
transición se monta en el layout y recorta su barrido justo donde acaba la
barra. Una variable compartida es el único punto de verdad; medir anchos desde
JavaScript se desincroniza en cuanto la animación está a medias.

**Se navega con `<Link>`, nunca con `router.push` desde un `<button>`.** Un
enlace admite el clic central, el ctrl+clic y el "copiar dirección" — y es lo
que la cortina escucha para dispararse.

**El interior tiene ancho fijo.** Al animar el ancho de fuera, el contenido no
se recalcula: se recorta. Sin eso las etiquetas se estrujan a mitad de
transición y el texto salta de línea.

## Qué no compila

Nada. El paquete sirve el código fuente, igual que `@cumbre/brands`. Ojo con
las importaciones internas: **sin extensión** (`"./iconos"`, no
`"./iconos.js"`). TypeScript acepta las dos con `moduleResolution: Bundler`,
pero el empaquetador de Next no resuelve `.js` contra un archivo `.tsx`.
