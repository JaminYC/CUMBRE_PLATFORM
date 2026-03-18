import { expect, test } from "@playwright/test";
import { loginStudent, loginTeacher } from "./helpers";

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

  await page.getByRole("link", { name: "Aulas", exact: true }).click();
  await expect(page).toHaveURL(/\/classrooms$/);

  const createCard = page.locator("section").filter({ hasText: "Crear aula" }).first();
  const importCard = page.locator("section").filter({ hasText: "Importacion masiva de estudiantes" }).first();

  await createCard.getByRole("textbox", { name: "Nombre" }).fill(classroomName);
  await createCard.getByRole("textbox", { name: "Grado" }).fill("8");
  await createCard.getByRole("textbox", { name: "Asignatura" }).fill("Science");
  await createCard.getByRole("button", { name: "Crear aula" }).click();
  await expect(page.getByText("Actualizacion aplicada")).toBeVisible();
  await expect(page.getByRole("heading", { name: classroomName })).toBeVisible();

  await importCard.getByRole("textbox", { name: "Contenido CSV" }).fill(
    `name,email,gradeLevel\nE2E Imported Student,e2e-imported-${uniqueSuffix}@example.com,8`
  );
  await importCard.getByRole("button", { name: "Confirmar importacion" }).click();
  await expect(page.getByText(/Se importaron 1 estudiantes/)).toBeVisible();

  const classroomCard = page.locator("article.tile").filter({ hasText: classroomName }).first();
  const classCodeLine = classroomCard.locator("li").filter({ hasText: "Codigo de clase:" }).first();
  const classCodeText = await classCodeLine.textContent();
  const classCodeMatch = classCodeText?.match(/Codigo de clase:\s*([A-Z0-9-]+)/i);
  expect(classCodeMatch?.[1]).toBeTruthy();
  const classCode = classCodeMatch![1];

  await classroomCard.getByRole("link", { name: "Abrir aula" }).click();
  await expect(page).toHaveURL(/\/classrooms\//);

  await page.getByRole("link", { name: "Materiales", exact: true }).click();
  await expect(page).toHaveURL(/\/materials$/);
  await page.getByLabel("Nombre del archivo").fill(materialName);
  await page.getByLabel("Tipo MIME").fill("text/plain");
  await page
    .getByLabel("Texto extraido")
    .fill(`${materialTitle}\n\nSystems thinking foundations with guided practice.`);
  await page.getByRole("button", { name: /Upload and parse|Subir y analizar/i }).click();
  await expect(page.getByText(materialTitle)).toBeVisible();

  await page.getByRole("link", { name: "Constructor de modulos", exact: true }).click();
  await expect(page).toHaveURL(/\/module-builder$/);
  const generateModuleCard = page.locator("section").filter({ hasText: /Generar modulo/i }).first();
  const materialSelect = generateModuleCard.getByRole("combobox", { name: "Material" });
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
  await generateModuleCard.getByRole("button", { name: /Generar modulo/i }).click();
  const persistedModulesCard = page.locator("section").filter({ hasText: /Modulos guardados/i }).first();
  const generatedHeading = persistedModulesCard.locator("article").first().getByRole("heading").first();
  await expect(generatedHeading).toBeVisible();
  generatedModuleTitle = (await generatedHeading.textContent())?.trim() ?? "";
  expect(generatedModuleTitle).toBeTruthy();

  await page.getByRole("link", { name: "Aulas", exact: true }).click();
  await page.getByRole("link", { name: "Abrir aula" }).first().click();
  await expect(page).toHaveURL(/\/classrooms\//);
  await page.getByLabel(generatedModuleTitle).first().check();
  await page.getByRole("button", { name: /Guardar asignaciones del aula/i }).click();
  await expect(page.getByText(/Se asignaron \d+ modulos/i)).toBeVisible();

  const studentPage = await browser.newPage();
  await loginStudent(studentPage);
  await studentPage.goto("http://localhost:3100/join-class");
  await studentPage.getByLabel(/Codigo de clase|Class code/i).fill(classCode);
  await studentPage.getByRole("button", { name: /Unirme al aula|Join classroom/i }).click();
  await expect(studentPage.getByText(`Te uniste a ${classroomName}.`)).toBeVisible();

  await studentPage.goto("http://localhost:3100/classroom/modules");
  await expect(studentPage.getByRole("heading", { name: generatedModuleTitle }).first()).toBeVisible();
});
