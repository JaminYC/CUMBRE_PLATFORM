import { expect, test } from "@playwright/test";
import { loginAdmin } from "./helpers";

test("admin journey: manage graph entities and run an integrity fix", async ({ page }) => {
  const uniqueSuffix = Date.now().toString();
  const topicTitle = `E2E Admin Topic ${uniqueSuffix}`;
  const lessonTitle = `E2E Admin Lesson ${uniqueSuffix}`;
  const conceptTitle = `E2E Admin Concept ${uniqueSuffix}`;

  await loginAdmin(page);

  await page.getByRole("link", { name: "Espacio de gestion", exact: true }).click();
  await expect(page).toHaveURL(/\/management$/);
  await expect(page.getByTestId("admin-management-workspace")).toBeVisible();

  const topicManagement = page
    .locator("section")
    .filter({ hasText: "Gestion de temas y lecciones" })
    .first();
  await topicManagement.getByLabel("Titulo del nuevo tema").fill(topicTitle);
  await topicManagement.getByLabel("Resumen del tema").fill("Tema creado desde Playwright.");
  await page.getByTestId("admin-create-topic").click();
  await expect(page.getByTestId("admin-action-message")).toContainText("Tema creado");

  await topicManagement.getByLabel("Titulo de la nueva leccion").fill(lessonTitle);
  await topicManagement.locator("select").nth(0).selectOption("topic-placeholder");
  await topicManagement.getByLabel("Resumen de la leccion").fill("Leccion creada desde Playwright.");
  await page.getByTestId("admin-create-lesson").click();
  await expect(page.getByTestId("admin-action-message")).toContainText("Leccion creada");

  const graphManagement = page.locator("section").filter({ hasText: "Gestion del grafo" }).first();
  await graphManagement.getByLabel("Titulo del concepto").fill(conceptTitle);
  await graphManagement.getByLabel("Tipo de entidad origen").selectOption("topic");
  await graphManagement.getByLabel("Id de la entidad origen").fill("topic-placeholder");
  await graphManagement.getByLabel("Resumen del concepto").fill("Concepto creado desde Playwright.");
  await page.getByTestId("admin-create-concept").click();
  await expect(page.getByTestId("admin-action-message")).toContainText("Nodo conceptual creado");

  await graphManagement.getByLabel("Nodo origen").selectOption({ label: "Pattern recognition" });
  await graphManagement.getByLabel("Nodo destino").selectOption({ label: "Systems thinking" });
  await graphManagement.getByLabel("Etiqueta").fill(`Enlace E2E ${uniqueSuffix}`);
  await page.getByTestId("admin-create-edge").click();
  await expect(page.getByTestId("admin-action-message")).toContainText("Relacion de conocimiento creada");

  await page.getByRole("button", { name: "Recargar datos de gestion" }).click();
  await expect(page.getByTestId("admin-fix-orphan_lesson").first()).toBeVisible();
  await page.getByTestId("admin-fix-orphan_lesson").first().click();
  await expect(page.getByTestId("admin-action-message")).toContainText(/correccion|fix/i);
});
