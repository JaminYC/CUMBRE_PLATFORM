import { expect, test } from "@playwright/test";

/**
 * Barra lateral del campus de Bryce: pliegue, iconos y cortina al cambiar de
 * pestaña. La sesion se inyecta con la cookie que emite la API en vez de pasar
 * por el formulario, para que esta prueba mida la barra y no el acceso.
 */

const PORTAL = "http://bryce.localhost:3005";
const CAMPUS = "http://bryce.localhost:3100";

/*
 * Se accede desde el propio navegador, no con el cliente HTTP de Playwright:
 * ese usa el DNS de Node, que no resuelve los subdominios de localhost —solo
 * el nombre pelado— y falla con ENOTFOUND. Chromium si los resuelve.
 */
test.beforeEach(async ({ page, context }) => {
  await page.goto(`${PORTAL}/login`, { waitUntil: "domcontentloaded" });

  const acceso = await page.evaluate(async () => {
    const r = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: "student@bryce.edu.pe",
        credential: "placeholder"
      })
    });
    return { estado: r.status, cuerpo: await r.json() };
  });

  expect(acceso.estado, "la API de acceso debe responder 200").toBe(200);
  const galletas = await context.cookies();
  expect(
    galletas.some((c) => c.name === "cumbre_student_session"),
    "el navegador debe guardar la cookie de sesion"
  ).toBeTruthy();
});

test("la barra se pliega y despliega", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });

  const barra = page.locator("aside.barra");
  await expect(barra).toBeVisible();

  const raiz = page.locator("html");
  await expect(raiz).toHaveAttribute("data-barra", "abierta");

  const anchoAbierta = (await barra.boundingBox())!.width;
  await expect(page.locator(".barra__logo-completo")).toBeVisible();
  await page.screenshot({ path: "test-results/barra-abierta.png", fullPage: false });

  await page.locator(".barra__pliegue").click();
  await page.waitForTimeout(420);

  await expect(raiz).toHaveAttribute("data-barra", "plegada");
  const anchoPlegada = (await barra.boundingBox())!.width;
  await expect(page.locator(".barra__logo-marca")).toBeVisible();
  await page.screenshot({ path: "test-results/barra-plegada.png", fullPage: false });

  console.log(`  ancho: abierta ${anchoAbierta}px -> plegada ${anchoPlegada}px`);
  expect(anchoPlegada, "plegada debe ser mucho mas estrecha").toBeLessThan(
    anchoAbierta / 2
  );

  // Y se recuerda al recargar.
  await page.reload({ waitUntil: "networkidle" });
  await expect(raiz).toHaveAttribute("data-barra", "plegada");
});

test("al cambiar de pestaña barre la cortina y la barra no se mueve", async ({
  page
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });

  const cortina = page.locator(".cortina");
  await expect(cortina).toHaveCount(1);
  await expect(cortina).toBeHidden();

  await page.evaluate(() => {
    const nodo = document.querySelector(".cortina")!;
    (window as unknown as { _e: string[] })._e = [];
    new MutationObserver(() => {
      (window as unknown as { _e: string[] })._e.push(
        nodo.getAttribute("data-estado") ?? "?"
      );
    }).observe(nodo, { attributes: true, attributeFilter: ["data-estado"] });
  });

  const cajaAntes = (await page.locator("aside.barra").boundingBox())!;

  await page.locator('.barra__enlace[href="/progress"]').click();

  // A mitad del barrido: la cortina tapa el contenido, no la barra.
  await page.waitForTimeout(150);
  const recorte = await page.locator(".cortina").boundingBox();
  await page.screenshot({ path: "test-results/barra-cortina.png" });

  await page.waitForURL("**/progress", { timeout: 8000 });
  await page.waitForTimeout(700);

  const estados = await page.evaluate(
    () => (window as unknown as { _e: string[] })._e
  );
  console.log(`  estados: ${estados.join(" -> ") || "(ninguno)"}`);
  console.log(
    `  barra ancho ${cajaAntes.width}px; la cortina empieza en x=${recorte?.x}`
  );

  expect(estados, "debe cubrir").toContain("cubriendo");
  expect(estados, "y descubrir").toContain("descubriendo");
  expect(estados.at(-1), "y quedarse quieta").toBe("quieta");

  // Lo que pidio el cliente: el logo se queda.
  expect(recorte, "la cortina debe existir a mitad de camino").not.toBeNull();
  expect(
    recorte!.x,
    "la cortina no debe invadir la barra lateral"
  ).toBeGreaterThanOrEqual(cajaAntes.width - 1);

  await expect(page.locator("aside.barra")).toBeVisible();
  await expect(page.locator('.barra__enlace[href="/progress"]')).toHaveAttribute(
    "data-activo",
    "si"
  );
});

test("la practica ya es alcanzable desde la barra", async ({ page }) => {
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });
  await expect(page.locator('.barra__enlace[href="/practica"]')).toBeVisible();
});

test("ya no encadena la portada de carga tras la cortina", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });

  // La capa antigua tapaba la ventana entera con el logo latiendo.
  await expect(page.locator(".splash-loader")).toHaveCount(0);

  const desde = Date.now();
  await page.locator('.barra__enlace[href="/progress"]').click();
  await page.waitForURL("**/progress", { timeout: 8000 });

  // Se espera al primer contenido de verdad, no a un indicador.
  await page.locator(".page-header h2").waitFor({ state: "visible" });
  await expect(page.locator(".cortina")).toBeHidden();
  const tardo = Date.now() - desde;

  console.log(`  del clic al contenido: ${tardo} ms`);
  await expect(page.locator(".splash-loader")).toHaveCount(0);
  // La barra nunca se tapa: es la prueba de que solo hubo una transicion.
  await expect(page.locator("aside.barra")).toBeVisible();

  expect(tardo, "una sola transicion, no dos encadenadas").toBeLessThan(1200);
});

test("plegada, el hueco del carril tambien abre", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });

  const raiz = page.locator("html");
  const barra = page.locator("aside.barra");

  await page.locator(".barra__pliegue").click();
  await page.waitForTimeout(400);
  await expect(raiz).toHaveAttribute("data-barra", "plegada");

  // Un punto por debajo del ultimo icono: hueco, no enlace.
  const ultimo = (await page.locator(".barra__enlace").last().boundingBox())!;
  const caja = (await barra.boundingBox())!;
  const y = ultimo.y + ultimo.height + 60;
  expect(y, "el punto elegido debe caer dentro de la barra").toBeLessThan(
    caja.y + caja.height - 120
  );

  await barra.click({ position: { x: caja.width / 2, y: y - caja.y } });
  await page.waitForTimeout(400);
  await expect(raiz, "el hueco debe abrirla").toHaveAttribute("data-barra", "abierta");
});

test("un icono navega sin abrir la barra", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });

  await page.locator(".barra__pliegue").click();
  await page.waitForTimeout(400);

  await page.locator('.barra__enlace[href="/progress"]').click();
  await page.waitForURL("**/progress", { timeout: 8000 });
  await page.waitForTimeout(600);

  await expect(
    page.locator("html"),
    "pulsar un icono no debe desplegarla"
  ).toHaveAttribute("data-barra", "plegada");
});

test("abierta, el hueco no la cierra", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${CAMPUS}/dashboard`, { waitUntil: "networkidle" });

  const barra = page.locator("aside.barra");
  const caja = (await barra.boundingBox())!;
  await barra.click({ position: { x: caja.width / 2, y: caja.height * 0.55 } });
  await page.waitForTimeout(400);

  await expect(
    page.locator("html"),
    "solo abre; cerrar es cosa del boton"
  ).toHaveAttribute("data-barra", "abierta");
});
