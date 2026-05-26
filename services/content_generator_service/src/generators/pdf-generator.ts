// services/content_generator_service/src/generators/pdf-generator.ts
import { execFile } from "node:child_process";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";
import { buildLatexDocument } from "./latex-template.js";
import type { ResearchOutput } from "../agents/research-agent.js";

const execFileAsync = promisify(execFile);

export async function generatePdf(research: ResearchOutput): Promise<Buffer> {
  const tex = buildLatexDocument(research);
  const dir = await mkdtemp(join(tmpdir(), "cumbre-pdf-"));

  try {
    const texPath = join(dir, "document.tex");
    await writeFile(texPath, tex, "utf8");

    for (let pass = 0; pass < 2; pass++) {
      await execFileAsync("pdflatex", [
        "-interaction=nonstopmode",
        "-output-directory", dir,
        texPath,
      ], { timeout: 30_000 });
    }

    return await readFile(join(dir, "document.pdf"));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}
