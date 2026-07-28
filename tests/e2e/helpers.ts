import { expect, type Page } from "@playwright/test";

/**
 * Convierte texto en un patrón que ignora las tildes.
 *
 * Estas pruebas buscaban las cadenas literales de la interfaz, así que un
 * barrido de ortografía —cambiar "Titulo" por "Título", "autoria" por
 * "autoría"— las rompía todas sin que nada estuviera mal en el producto.
 *
 * Con esto, `t("Titulo del nuevo tema")` encuentra igual la versión con
 * tilde y sin ella. Una prueba de extremo a extremo debe fallar cuando algo
 * deja de funcionar, no cuando alguien corrige una falta.
 */
function flexible(texto: string): string {
  return (
    texto
      // Primero se escapan los caracteres con significado en una expresión
      // regular; si no, un "¿" o un "(" del texto la romperían.
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/[aá]/gi, "[aá]")
      .replace(/[eé]/gi, "[eé]")
      .replace(/[ií]/gi, "[ií]")
      .replace(/[oó]/gi, "[oó]")
      .replace(/[uúü]/gi, "[uúü]")
      .replace(/[nñ]/gi, "[nñ]")
  );
}

/** Coincidencia parcial: sirve para `hasText` y para textos largos. */
export function t(texto: string): RegExp {
  return new RegExp(flexible(texto), "i");
}

/**
 * Coincidencia exacta, para `getByRole({ name })`.
 *
 * Playwright trata distinto una cadena y una expresión regular en `name`:
 * la cadena compara el nombre completo, la expresión busca dentro. Además
 * `exact: true` **se ignora** cuando el nombre es una expresión.
 *
 * Sin esto, cambiar `name: "Tema"` por una expresión hacía que casara
 * también "Temas" — y Playwright aborta cuando un selector encuentra más
 * de un elemento.
 */
export function te(texto: string): RegExp {
  return new RegExp(`^\\s*${flexible(texto)}\\s*$`, "i");
}

/**
 * El acceso de cada portal.
 *
 * Los tres formularios no dicen lo mismo: el del estudiante se rediseñó y
 * usa "Iniciar sesión" / "Ingresar", mientras docente y dirección conservan
 * "Continuar como…" / "Abrir panel…". Las alternativas cubren ambos, para
 * que un rediseño de uno no tumbe la prueba del otro.
 */
async function entrar(
  page: Page,
  url: string,
  correo: string,
  titulo: RegExp,
  boton: RegExp
) {
  await page.goto(url);
  await expect(page.getByRole("heading", { name: titulo })).toBeVisible();
  await page.getByLabel(/correo|email/i).fill(correo);
  await page.getByLabel(/contrase[nñ]a|password/i).fill("placeholder");
  await page.getByRole("button", { name: boton }).click();
  await expect(page).toHaveURL(/\/dashboard/);
}

export async function loginStudent(page: Page) {
  await entrar(
    page,
    "http://localhost:3100/login",
    "student@example.com",
    /iniciar sesi[oó]n|continuar como estudiante/i,
    /ingresar|abrir panel/i
  );
}

export async function loginTeacher(page: Page) {
  await entrar(
    page,
    "http://localhost:3110/login",
    "teacher@example.com",
    /iniciar sesi[oó]n|continuar como docente/i,
    /ingresar|abrir panel docente/i
  );
}

export async function loginAdmin(page: Page) {
  await entrar(
    page,
    "http://localhost:3111/login",
    "admin@example.com",
    /iniciar sesi[oó]n|continuar como administrador/i,
    /ingresar|abrir panel administrativo/i
  );
}

/**
 * Los identificadores que crean las semillas.
 *
 * Las pruebas usaban "topic-placeholder" y "lesson-placeholder", que las
 * semillas *borran* antes de sembrar: migraron a UUID estables hace tiempo y
 * nadie actualizo las pruebas. Se ponen aqui para que el dia que vuelvan a
 * cambiar se toquen en un solo sitio.
 *
 * Salen de `services/content_service/prisma/seed.ts`.
 */
export const SEMILLA = {
  temaPrincipal: "30000000-0000-0000-0000-000000000002",
  temaPrevio: "30000000-0000-0000-0000-000000000001",
  leccionPrincipal: "40000000-0000-0000-0000-000000000002",
  leccionPrevia: "40000000-0000-0000-0000-000000000001",
  rutaDeAprendizaje: "20000000-0000-0000-0000-000000000001"
} as const;
