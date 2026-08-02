import { expect, test } from "@playwright/test";

/**
 * Pantalla de acceso del campus.
 *
 * El componente llego copiado del portal con sus nombres de clase pero sin las
 * reglas de estilo, asi que la tarjeta salia a sangre y pegada al borde. Estas
 * comprobaciones miden la caja, que es lo que se rompio, en vez de comparar
 * imagenes: una captura de referencia fallaria con cualquier retoque de color.
 */

const ACCESO = "http://bryce.localhost:3100/login";

test("la tarjeta es una tarjeta, no una franja a todo lo ancho", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ACCESO, { waitUntil: "networkidle" });

  const tarjeta = page.locator(".auth-card");
  const caja = (await tarjeta.boundingBox())!;

  console.log(`  tarjeta: x=${Math.round(caja.x)} ancho=${Math.round(caja.width)}`);
  expect(caja.width, "no debe ocupar toda la ventana").toBeLessThan(600);
  expect(caja.x, "no debe estar pegada al borde").toBeGreaterThan(40);

  await expect(page.locator(".login-logo")).toBeVisible();
  await expect(page.locator(".login-page__illo")).toBeVisible();
});

test("en movil se queda el formulario y se va la ilustracion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(ACCESO, { waitUntil: "networkidle" });

  await expect(page.locator(".login-page__illo")).toBeHidden();
  await expect(page.locator(".login-logo")).toBeVisible();

  const caja = (await page.locator(".auth-card").boundingBox())!;
  expect(caja.width, "la tarjeta debe caber en la pantalla").toBeLessThanOrEqual(390);
});

test("en ventana baja el boton de entrar sigue a la vista", async ({ page }) => {
  // Ancha y baja: como queda un portatil con marcadores y consola abiertos.
  await page.setViewportSize({ width: 1900, height: 620 });
  await page.goto(ACCESO, { waitUntil: "networkidle" });

  const boton = (await page.locator('button[type="submit"]').boundingBox())!;
  console.log(`  boton acaba en y=${Math.round(boton.y + boton.height)} de 620`);
  expect(
    boton.y + boton.height,
    "el boton no debe quedar por debajo del pliegue"
  ).toBeLessThan(620);
});

test("y sigue entrando", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(ACCESO, { waitUntil: "networkidle" });

  await page.locator('input[type="email"]').fill("student@bryce.edu.pe");
  await page.locator('input[type="password"]').fill("placeholder");
  await page.locator('button[type="submit"]').click();

  await page.waitForURL("**/dashboard", { timeout: 15000 });
  await expect(page.locator("aside.barra")).toBeVisible();
});
