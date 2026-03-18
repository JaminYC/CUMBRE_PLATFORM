import { expect, test } from "@playwright/test";
import { loginStudent } from "./helpers";

test("student journey: login to tutor-backed progress flow", async ({ page }) => {
  await loginStudent(page);

  await expect(
    page.getByRole("heading", { name: /Bienvenido de nuevo, Seed Student/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "Learning Foundations" }).click();
  await expect(page).toHaveURL(/\/topics\/topic-placeholder$/);

  await page.getByRole("link", { name: "Thinking in Systems" }).click();
  await expect(page).toHaveURL(/\/topics\/topic-placeholder\/lessons\/lesson-placeholder$/);

  await page.getByTestId("student-start-session").click();
  await expect(page.getByText(/se inicio correctamente/i)).toBeVisible();

  await page.getByTestId("student-open-tutor").click();
  await page.getByTestId("student-tutor-input").fill("Que deberia entender primero?");
  await page.getByTestId("student-tutor-send").click();

  await expect(page.getByTestId("student-tutor-thread")).toBeVisible();
  await expect(page.getByTestId("student-tutor-thread")).toContainText(/Tutor|Contexto recuperado/i);

  await page.getByRole("link", { name: "Abrir progreso", exact: true }).click();
  await expect(page).toHaveURL(/\/progress$/);
  await expect(page.getByRole("heading", { name: "Progreso", exact: true })).toBeVisible();
});
