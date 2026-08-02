import { expect, test } from "@playwright/test";

/**
 * Comprueba que la cortina se dispara de verdad al navegar.
 *
 * Se mira el atributo data-estado, que es lo que gobierna la animacion, en vez
 * de intentar leer pixeles: si el estado cambia, el CSS que ya esta servido
 * hace el resto.
 */

const PORTADA = "http://bryce.localhost:3005/";

test("la cortina cubre y descubre al ir al login", async ({ page }) => {
  const estados: string[] = [];

  await page.goto(PORTADA, { waitUntil: "networkidle" });

  const cortina = page.locator(".ble-cortina");
  await expect(cortina).toHaveCount(1);
  // Hay que esperar a que hidrate: hasta entonces no hay escuchador y el
  // navegador seguiria el enlace por su cuenta, sin cortina.
  await page.waitForTimeout(1500);
  expect(await cortina.getAttribute("data-estado")).toBe("quieta");

  // Se vigila el atributo desde el navegador: los cambios duran cientos de
  // milisegundos y consultar desde fuera se perderia alguno.
  await page.evaluate(() => {
    const nodo = document.querySelector(".ble-cortina");
    if (!nodo) return;
    (window as unknown as { _estados: string[] })._estados = [];
    new MutationObserver(() => {
      (window as unknown as { _estados: string[] })._estados.push(
        nodo.getAttribute("data-estado") ?? "?"
      );
    }).observe(nodo, { attributes: true, attributeFilter: ["data-estado"] });
  });

  await page.locator('a[href="/login"]').first().click();

  await page.waitForURL("**/login", { timeout: 8000 });
  await page.waitForTimeout(1200);

  const vistos = await page.evaluate(
    () => (window as unknown as { _estados: string[] })._estados
  );
  estados.push(...vistos);

  console.log("  estados observados:", estados.join(" -> ") || "(ninguno)");

  expect(estados, "la cortina debe haber cubierto").toContain("cubriendo");
  expect(estados, "y luego descubierto").toContain("descubriendo");
  expect(estados.at(-1), "y quedarse quieta al final").toBe("quieta");
});

test("no se queda tapando la pantalla", async ({ page }) => {
  await page.goto(PORTADA, { waitUntil: "networkidle" });
  await page.locator('a[href="/login"]').first().click();
  await page.waitForURL("**/login", { timeout: 10000 });
  await page.waitForTimeout(1800);

  const cortina = page.locator(".ble-cortina");
  expect(await cortina.getAttribute("data-estado")).toBe("quieta");
  // display:none cuando esta quieta, asi que no intercepta nada.
  await expect(cortina).toBeHidden();
});

test("el formulario de login queda utilizable", async ({ page }) => {
  await page.goto(PORTADA, { waitUntil: "networkidle" });
  await page.locator('a[href="/login"]').first().click();
  await page.waitForURL("**/login", { timeout: 10000 });
  await page.waitForTimeout(1500);

  const campo = page.locator('input[type="email"], input[name*="mail" i]').first();
  await campo.click({ timeout: 5000 });
  await campo.fill("prueba@bryce.edu.pe");
  expect(await campo.inputValue()).toBe("prueba@bryce.edu.pe");
});

test("tambien barre al retroceder con el navegador", async ({ page }) => {
  const estados: string[] = [];

  await page.goto(PORTADA, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.locator('a[href="/login"]').first().click();
  await page.waitForURL("**/login", { timeout: 10000 });
  await page.waitForTimeout(1400);

  // Se vigila el atributo antes de retroceder.
  await page.evaluate(() => {
    const nodo = document.querySelector(".ble-cortina");
    if (!nodo) return;
    (window as unknown as { _atras: string[] })._atras = [];
    new MutationObserver(() => {
      (window as unknown as { _atras: string[] })._atras.push(
        (nodo.getAttribute("data-estado") ?? "?") + ":" +
        (nodo.getAttribute("data-sentido") ?? "?")
      );
    }).observe(nodo, { attributes: true, attributeFilter: ["data-estado", "data-sentido"] });
  });

  await page.goBack();
  await page.waitForTimeout(1600);

  const vistos = await page.evaluate(
    () => (window as unknown as { _atras: string[] })._atras ?? []
  );
  estados.push(...vistos);
  console.log("  al retroceder:", estados.join(" -> ") || "(nada)");

  expect(estados.join(" "), "debe barrer al retroceder").toContain("descubriendo");
  expect(estados.join(" "), "y hacia el otro lado").toContain("atras");

  const cortina = page.locator(".ble-cortina");
  expect(await cortina.getAttribute("data-estado")).toBe("quieta");
});
