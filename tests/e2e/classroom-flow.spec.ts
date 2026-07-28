import { expect, test } from "@playwright/test";
import { loginStudent, loginTeacher, t, te } from "./helpers";

test("teacher creates a classroom workflow and student joins assigned modules", async ({
  browser,
  page
}) => {
  const uniqueSuffix = Date.now().toString();
  const classroomName = `E2E Classroom ${uniqueSuffix}`;
  const materialName = `e2e-material-${uniqueSuffix}.txt`;
  const materialTitle = `E2E Material ${uniqueSuffix}`;
  let generatedModuleTitle = "";

  await loginTeacher(page);

  await page.getByRole("link", { name: te("Aulas") }).click();
  await expect(page).toHaveURL(/\/classrooms$/);

  /* El formulario vive en un panel que se despliega: antes estaba siempre
     visible en la pagina. */
  await page.getByRole("button", { name: te("Nueva aula") }).click();
  /* El panel es un div con clase propia, no un <section>. */
  const createCard = page.locator(".create-aula-panel").first();
  /* Por clase y no por texto: filtrar `div` por contenido acaba
     eligiendo un contenedor anidado que tiene el texto pero no los campos. */
  const importCard = page.locator(".aula-card--import").first();

  await createCard.getByRole("textbox", { name: te("Nombre del aula") }).fill(classroomName);
  await createCard.getByRole("combobox", { name: te("Grado") }).selectOption("2° sec");
  await createCard.getByRole("combobox", { name: te("Asignatura") }).selectOption("Matemática");
  await createCard.getByRole("button", { name: te("Crear aula") }).click();
  await expect(page.getByText(t("creada con código"))).toBeVisible();
  await expect(page.getByRole("heading", { name: classroomName })).toBeVisible();

  await importCard.getByRole("textbox", { name: t("Contenido CSV") }).fill(
    `name,email,gradeLevel\nE2E Imported Student,e2e-imported-${uniqueSuffix}@example.com,8`
  );
  await importCard.getByRole("button", { name: t("Confirmar importacion") }).click();
  await expect(page.getByText(/S[eé] [ií]mp[oó]rt[aá]r[oó][nñ] 1 [eé]st[uúü]d[ií][aá][nñ]t[eé]s/i)).toBeVisible();

  /* La tarjeta se rediseño: era `article.tile` con el codigo en una lista
     etiquetada, ahora es `article.aula-card` con el codigo suelto en una
     insignia. */
  const classroomCard = page.locator("article.aula-card").filter({ hasText: classroomName }).first();
  const classCode = (await classroomCard.locator(".aula-code-badge").first().textContent())?.trim();
  expect(classCode!).toBeTruthy();

  await classroomCard.getByRole("link", { name: te("Abrir aula") }).click();
  await expect(page).toHaveURL(/\/classrooms\//);

  await page.getByRole("link", { name: te("Materiales") }).click();
  await expect(page).toHaveURL(/\/materials$/);
  await page.getByLabel(t("Nombre del archivo")).fill(materialName);
  await page.getByLabel(t("Tipo MIME")).fill("text/plain");
  await page
    .getByLabel(t("Texto extraido"))
    .fill(`${materialTitle}\n\nSystems thinking foundations with guided practice.`);
  await page.getByRole("button", { name: /Upload and parse|Subir y analizar/i }).click();
  await expect(page.getByText(materialTitle)).toBeVisible();

  await page.getByRole("link", { name: te("Constructor de modulos") }).click();
  await expect(page).toHaveURL(/\/module-builder$/);
  const generateModuleCard = page.locator("section").filter({ hasText: /G[eé][nñ][eé]r[aá]r m[oó]d[uúü]l[oó]/i }).first();
  const materialSelect = generateModuleCard.getByRole("combobox", { name: te("Material") });
  await expect
    .poll(
      async () =>
        materialSelect.locator("option").evaluateAll((options) =>
          options
            .map((option) => (option as HTMLOptionElement).value)
            .filter((value) => Boolean(value)).length
        ),
      { timeout: 15000 }
    )
    .toBeGreaterThan(0);
  const materialValues = await materialSelect.locator("option").evaluateAll((options) =>
    options
      .map((option) => (option as HTMLOptionElement).value)
      .filter((value) => Boolean(value))
  );
  const selectedMaterialValue = materialValues[0];
  expect(selectedMaterialValue).toBeTruthy();
  await materialSelect.selectOption(selectedMaterialValue!);
  await generateModuleCard.getByRole("button", { name: /G[eé][nñ][eé]r[aá]r m[oó]d[uúü]l[oó]/i }).click();
  const persistedModulesCard = page.locator("section").filter({ hasText: /M[oó]d[uúü]l[oó]s g[uúü][aá]rd[aá]d[oó]s/i }).first();
  const generatedHeading = persistedModulesCard.locator("article").first().getByRole("heading").first();
  await expect(generatedHeading).toBeVisible();
  generatedModuleTitle = (await generatedHeading.textContent())?.trim() ?? "";
  expect(generatedModuleTitle).toBeTruthy();

  await page.getByRole("link", { name: te("Aulas") }).click();
  await page.getByRole("link", { name: te("Abrir aula") }).first().click();
  await expect(page).toHaveURL(/\/classrooms\//);
  await page.getByLabel(generatedModuleTitle).first().check();
  await page.getByRole("button", { name: /G[uúü][aá]rd[aá]r [aá]s[ií]g[nñ][aá]c[ií][oó][nñ][eé]s/i }).click();
  await expect(page.getByText(/S[eé] [aá]s[ií]g[nñ][aá]r[oó][nñ] \d+ m[oó]d[uúü]l[oó]s/i)).toBeVisible();

  const studentPage = await browser.newPage();
  await loginStudent(studentPage);
  await studentPage.goto("http://localhost:3100/join-class");
  await studentPage.getByLabel(/C[oó]d[ií]g[oó] d[eé] cl[aá]s[eé]|Class code/i).fill(classCode!);
  await studentPage.getByRole("button", { name: /Unirme al aula|Join classroom/i }).click();
  await expect(studentPage.getByText(`Te uniste a ${classroomName}.`)).toBeVisible();

  await studentPage.goto("http://localhost:3100/classroom/modules");
  await expect(studentPage.getByRole("heading", { name: generatedModuleTitle }).first()).toBeVisible();
});
