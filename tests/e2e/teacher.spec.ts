import { expect, test } from "@playwright/test";
import { loginTeacher } from "./helpers";

test("teacher journey: authoring lesson and concept mapping", async ({ page }) => {
  const uniqueSuffix = Date.now().toString();
  const lessonTitle = `E2E Teacher Lesson ${uniqueSuffix}`;
  const updatedLessonTitle = `${lessonTitle} Updated`;

  await loginTeacher(page);

  await page.getByRole("link", { name: "Estudio de autoria", exact: true }).click();
  await expect(page).toHaveURL(/\/authoring$/);
  await expect(page.getByTestId("teacher-authoring-workspace")).toBeVisible();

  const lessonCreation = page.locator("section").filter({ hasText: "Creacion de lecciones" }).first();
  await lessonCreation.getByLabel("Titulo de la leccion").fill(lessonTitle);
  await lessonCreation
    .getByRole("combobox", { name: "Tema", exact: true })
    .selectOption("topic-placeholder");
  await page.getByTestId("teacher-create-lesson").click();

  await expect(page.getByTestId("teacher-action-message")).toContainText("Leccion creada");

  const lessonEditing = page.locator("section").filter({ hasText: "Edicion de lecciones" }).first();
  await lessonEditing
    .getByRole("combobox", { name: "Leccion", exact: true })
    .selectOption({ label: lessonTitle });
  await lessonEditing.getByLabel("Titulo").fill(updatedLessonTitle);
  await page.getByTestId("teacher-save-lesson").click();

  await expect(page.getByTestId("teacher-action-message")).toContainText("Leccion actualizada");

  const conceptMapping = page.locator("section").filter({ hasText: "Mapeo de conceptos" }).first();
  await conceptMapping.getByLabel("Systems thinking").check();
  await page.getByTestId("teacher-save-mappings").click();

  await expect(page.getByTestId("teacher-action-message")).toContainText(/Se mapearon \d+ conceptos/);
});
