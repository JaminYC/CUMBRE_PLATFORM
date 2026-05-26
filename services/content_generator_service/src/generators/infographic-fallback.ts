// services/content_generator_service/src/generators/infographic-fallback.ts
// Fallback cuando NotebookLM está offline: genera infografía HTML→PNG con Playwright
import type { ResearchOutput } from "../agents/research-agent.js";

function buildHtml(research: ResearchOutput): string {
  const { title, abstract, sections } = research;
  const sectionsHtml = sections.slice(0, 4).map(s => `
    <div class="card">
      <h3>${s.heading}</h3>
      <p>${s.content.slice(0, 250)}${s.content.length > 250 ? "..." : ""}</p>
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 1600px; overflow: hidden;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: white; font-family: 'Segoe UI', sans-serif; padding: 48px; }
  h1 { font-size: 52px; font-weight: 800; color: #A78BFA; margin-bottom: 16px; text-align: center; }
  .abstract { font-size: 20px; color: #C4B5FD; text-align: center; margin-bottom: 48px; max-width: 900px; margin-left: auto; margin-right: auto; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .card { background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.4); border-radius: 16px; padding: 24px; }
  .card h3 { color: #A78BFA; font-size: 22px; margin-bottom: 12px; }
  .card p { color: #DDD6FE; font-size: 16px; line-height: 1.7; }
  .footer { text-align: center; color: #6D28D9; font-size: 14px; margin-top: 48px; }
</style></head>
<body>
  <h1>${title}</h1>
  <p class="abstract">${abstract}</p>
  <div class="grid">${sectionsHtml}</div>
  <div class="footer">Generado por CUMBRE Platform</div>
</body></html>`;
}

export async function generateInfographicFallback(research: ResearchOutput): Promise<Buffer> {
  const { chromium } = await import("playwright");
  const html = buildHtml(research);
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 1600 });
    await page.setContent(html, { waitUntil: "networkidle" });
    const screenshot = await page.screenshot({ type: "png", fullPage: false });
    return Buffer.from(screenshot);
  } finally {
    await browser.close();
  }
}
