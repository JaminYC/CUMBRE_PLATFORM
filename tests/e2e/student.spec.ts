import { expect, test } from "@playwright/test";
import { loginStudent, SEMILLA, t, te } from "./helpers";

test("student journey: login to tutor-backed progress flow", async ({ page }) => {
  await loginStudent(page);

  await expect(
    page.getByRole("heading", { name: t("Bienvenido, Demo Student") })
  ).toBeVisible();

  /* El panel ya no lista los temas: se entra por la ruta de aprendizaje. */
  await page.getByRole("link", { name: te("Ruta de aprendizaje") }).first().click();
  await expect(page).toHaveURL(/\/learning-path\//);

  /* El titulo del tema es un encabezado, no un enlace: se entra por el
     boton de la tarjeta. */
  await page.getByRole("link", { name: te("Abrir primer tema") }).first().click();
  await expect(page).toHaveURL(new RegExp(`/topics/${SEMILLA.temaPrincipal}$`));

  await page.getByRole("link", { name: t("Thinking in Systems") }).first().click();
  await expect(page).toHaveURL(new RegExp(`/topics/${SEMILLA.temaPrincipal}/lessons/${SEMILLA.leccionPrincipal}$`));

  await page.getByTestId("student-start-session").click();
  await expect(page.getByText(/s[eé] [ií][nñ][ií]c[ií][oó] c[oó]rr[eé]ct[aá]m[eé][nñ]t[eé]/i)).toBeVisible();

  await page.getByTestId("student-open-tutor").click();
  await page.getByTestId("student-tutor-input").fill("Que deberia entender primero?");
  await page.getByTestId("student-tutor-send").click();

  await expect(page.getByTestId("student-tutor-thread")).toBeVisible();
  await expect(page.getByTestId("student-tutor-thread")).toContainText(/Tutor|Contexto recuperado/i);

  await page.getByRole("link", { name: te("Abrir progreso") }).click();
  await expect(page).toHaveURL(/\/progress$/);
  await expect(page.getByRole("heading", { name: te("Progreso") })).toBeVisible();
});
