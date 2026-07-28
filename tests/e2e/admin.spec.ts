import { expect, test } from "@playwright/test";
import { loginAdmin, t, te, SEMILLA } from "./helpers";

test("admin journey: manage graph entities and run an integrity fix", async ({ page }) => {
  const uniqueSuffix = Date.now().toString();
  const topicTitle = `E2E Admin Topic ${uniqueSuffix}`;
  const lessonTitle = `E2E Admin Lesson ${uniqueSuffix}`;
  const conceptTitle = `E2E Admin Concept ${uniqueSuffix}`;

  await loginAdmin(page);

  await page.getByRole("link", { name: te("Espacio de gestion") }).click();
  await expect(page).toHaveURL(/\/management$/);
  await expect(page.getByTestId("admin-management-workspace")).toBeVisible();

  const topicManagement = page
    .locator("section")
    .filter({ hasText: t("Gestion de temas y lecciones") })
    .first();
  await topicManagement.getByLabel(t("Titulo del nuevo tema")).fill(topicTitle);
  await topicManagement.getByLabel(t("Resumen del tema")).fill("Tema creado desde Playwright.");
  await page.getByTestId("admin-create-topic").click();
  await expect(page.getByTestId("admin-action-message")).toContainText(t("Tema creado"));

  await topicManagement.getByLabel(t("Titulo de la nueva leccion")).fill(lessonTitle);
  await topicManagement.locator("select").nth(0).selectOption(SEMILLA.temaPrincipal);
  await topicManagement.getByLabel(t("Resumen de la leccion")).fill("Leccion creada desde Playwright.");
  await page.getByTestId("admin-create-lesson").click();
  await expect(page.getByTestId("admin-action-message")).toContainText(t("Leccion creada"));

  const graphManagement = page.locator("section").filter({ hasText: t("Gestion del grafo") }).first();
  await graphManagement.getByLabel(t("Titulo del concepto")).fill(conceptTitle);
  await graphManagement.getByLabel(t("Tipo de entidad origen")).selectOption("topic");
  await graphManagement.getByLabel(t("Id de la entidad origen")).fill(SEMILLA.temaPrincipal);
  await graphManagement.getByLabel(t("Resumen del concepto")).fill("Concepto creado desde Playwright.");
  await page.getByTestId("admin-create-concept").click();
  await expect(page.getByTestId("admin-action-message")).toContainText(t("Nodo conceptual creado"));

  await graphManagement.getByLabel(t("Nodo origen")).selectOption({ label: "Pattern recognition" });
  await graphManagement.getByLabel(t("Nodo destino")).selectOption({ label: "Systems thinking" });
  await graphManagement.getByLabel(t("Etiqueta")).fill(`Enlace E2E ${uniqueSuffix}`);
  await page.getByTestId("admin-create-edge").click();
  await expect(page.getByTestId("admin-action-message")).toContainText(t("Relacion de conocimiento creada"));

  await page.getByRole("button", { name: te("Recargar datos de gestion") }).click();
  await expect(page.getByTestId("admin-fix-orphan_lesson").first()).toBeVisible();
  await page.getByTestId("admin-fix-orphan_lesson").first().click();
  await expect(page.getByTestId("admin-action-message")).toContainText(/c[oó]rr[eé]cc[ií][oó][nñ]|fix/i);
});
