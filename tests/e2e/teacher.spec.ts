import { expect, test } from "@playwright/test";
import { loginTeacher, t, te, SEMILLA } from "./helpers";

test("teacher journey: authoring lesson and concept mapping", async ({ page }) => {
  const uniqueSuffix = Date.now().toString();
  const lessonTitle = `E2E Teacher Lesson ${uniqueSuffix}`;
  const updatedLessonTitle = `${lessonTitle} Updated`;

  await loginTeacher(page);

  await page.getByRole("link", { name: te("Estudio de autoria") }).click();
  await expect(page).toHaveURL(/\/authoring$/);
  await expect(page.getByTestId("teacher-authoring-workspace")).toBeVisible();

  const lessonCreation = page.locator("section").filter({ hasText: t("Creacion de lecciones") }).first();
  await lessonCreation.getByLabel(t("Titulo de la leccion")).fill(lessonTitle);
  await lessonCreation
    .getByRole("combobox", { name: te("Tema") })
    .selectOption(SEMILLA.temaPrincipal);
  await page.getByTestId("teacher-create-lesson").click();

  await expect(page.getByTestId("teacher-action-message")).toContainText(t("Leccion creada"));

  const lessonEditing = page.locator("section").filter({ hasText: t("Edicion de lecciones") }).first();
  await lessonEditing
    .getByRole("combobox", { name: te("Leccion") })
    .selectOption({ label: lessonTitle });
  await lessonEditing.getByLabel(t("Titulo")).fill(updatedLessonTitle);
  await page.getByTestId("teacher-save-lesson").click();

  await expect(page.getByTestId("teacher-action-message")).toContainText(t("Leccion actualizada"));

  const conceptMapping = page.locator("section").filter({ hasText: t("Mapeo de conceptos") }).first();
  await conceptMapping.getByLabel(t("Systems thinking")).check();
  await page.getByTestId("teacher-save-mappings").click();

  await expect(page.getByTestId("teacher-action-message")).toContainText(/S[eé] m[aá]p[eé][aá]r[oó][nñ] \d+ c[oó][nñ]c[eé]pt[oó]s/i);
});
