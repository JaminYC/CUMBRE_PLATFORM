import { expect, test } from "@playwright/test";

/**
 * Puerta unica de acceso.
 *
 * Las tres aplicaciones de rol ya no dibujan su propio formulario: mandan al
 * portal de SU institucion. Lo que se comprueba aqui es justamente eso —que la
 * institucion sobrevive al salto—, porque el fallo original era mandar a todo
 * el mundo al portal de CUMBRE desde una variable de entorno global.
 *
 * Este archivo sustituye a campus-acceso.spec.ts: aquella medía el formulario
 * del campus, que ahora solo aparece con la salida AUTH_USE_PORTAL=false.
 */

const PORTAL_BRYCE = "http://bryce.localhost:3005";
const PORTAL_CUMBRE = "http://localhost:3005";

const APLICACIONES = [
  { rol: "alumno", puerto: 3100 },
  { rol: "profesor", puerto: 3110 },
  { rol: "administracion", puerto: 3111 }
] as const;

for (const { rol, puerto } of APLICACIONES) {
  test(`${rol}: sin sesion, Bryce va al portal de Bryce`, async ({ page }) => {
    await page.goto(`http://bryce.localhost:${puerto}/login`, {
      waitUntil: "domcontentloaded"
    });
    await expect(page).toHaveURL(`${PORTAL_BRYCE}/login`);
    await expect(page.locator("html")).toHaveAttribute("data-marca", "bryce");
  });

  test(`${rol}: sin sesion, CUMBRE va al portal de CUMBRE`, async ({ page }) => {
    await page.goto(`http://localhost:${puerto}/login`, {
      waitUntil: "domcontentloaded"
    });
    await expect(page).toHaveURL(`${PORTAL_CUMBRE}/login`);
    await expect(page.locator("html")).toHaveAttribute("data-marca", "cumbre");
  });
}

test("ninguna aplicacion de rol lleva a la puerta de otra institucion", async ({
  page
}) => {
  // El fallo que esto vigila: un unico PORTAL_URL global mandaba a los alumnos
  // de Bryce al portal de CUMBRE, y con el se perdian los colores y el nombre.
  for (const { puerto } of APLICACIONES) {
    await page.goto(`http://bryce.localhost:${puerto}/login`, {
      waitUntil: "domcontentloaded"
    });
    const texto = await page.locator("body").innerText();
    expect(
      texto.toLowerCase(),
      `el puerto ${puerto} no debe mostrar CUMBRE a un usuario de Bryce`
    ).not.toContain("cumbre");
  }
});

test("la puerta de Bryce es una tarjeta, no una franja a todo lo ancho", async ({
  page
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${PORTAL_BRYCE}/login`, { waitUntil: "networkidle" });

  const caja = (await page.locator(".auth-card").boundingBox())!;
  console.log(`  tarjeta: x=${Math.round(caja.x)} ancho=${Math.round(caja.width)}`);
  expect(caja.width, "no debe ocupar toda la ventana").toBeLessThan(600);
  expect(caja.x, "no debe estar pegada al borde").toBeGreaterThan(40);

  await expect(page.locator(".login-logo")).toBeVisible();
  await expect(page.locator(".login-page__illo")).toBeVisible();
});

test("en ventana baja el boton de entrar sigue a la vista", async ({ page }) => {
  // Ancha y baja: como queda un portatil con marcadores y consola abiertos.
  await page.setViewportSize({ width: 1900, height: 620 });
  await page.goto(`${PORTAL_BRYCE}/login`, { waitUntil: "networkidle" });

  const boton = (await page.locator('button[type="submit"]').boundingBox())!;
  console.log(`  boton acaba en y=${Math.round(boton.y + boton.height)} de 620`);
  expect(boton.y + boton.height).toBeLessThan(620);
});

test("el recorrido completo: puerta unica y de vuelta al campus de Bryce", async ({
  page
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  // Se entra por el campus, sin sesion: la puerta unica hace el resto.
  await page.goto("http://bryce.localhost:3100/dashboard", {
    waitUntil: "domcontentloaded"
  });
  await page.waitForURL(`${PORTAL_BRYCE}/login`, { timeout: 15000 });

  await page.locator('input[type="email"]').fill("student@bryce.edu.pe");
  await page.locator('input[type="password"]').fill("placeholder");
  await page.locator('button[type="submit"]').click();

  await page.waitForURL("**/bryce.localhost:3100/**", { timeout: 20000 });
  await expect(page.locator("aside.barra")).toBeVisible();
  console.log(`  destino final: ${page.url()}`);
});
