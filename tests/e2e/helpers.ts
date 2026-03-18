import { expect, type Page } from "@playwright/test";

export async function loginStudent(page: Page) {
  await page.goto("http://localhost:3100/login");
  await expect(page.getByRole("heading", { name: /continuar como estudiante/i })).toBeVisible();
  await page.getByLabel(/correo|email/i).fill("student@example.com");
  await page.getByLabel(/contrasena|password/i).fill("placeholder");
  await page.getByRole("button", { name: /abrir panel/i }).click();
  await expect(page).toHaveURL(/\/dashboard/);
}

export async function loginTeacher(page: Page) {
  await page.goto("http://localhost:3110/login");
  await expect(page.getByRole("heading", { name: /continuar como docente/i })).toBeVisible();
  await page.getByLabel(/correo|email/i).fill("teacher@example.com");
  await page.getByLabel(/contrasena|password/i).fill("placeholder");
  await page.getByRole("button", { name: /abrir panel docente/i }).click();
  await expect(page).toHaveURL(/\/dashboard/);
}

export async function loginAdmin(page: Page) {
  await page.goto("http://localhost:3111/login");
  await expect(page.getByRole("heading", { name: /continuar como administrador/i })).toBeVisible();
  await page.getByLabel(/correo|email/i).fill("admin@example.com");
  await page.getByLabel(/contrasena|password/i).fill("placeholder");
  await page.getByRole("button", { name: /abrir panel administrativo/i }).click();
  await expect(page).toHaveURL(/\/dashboard/);
}
