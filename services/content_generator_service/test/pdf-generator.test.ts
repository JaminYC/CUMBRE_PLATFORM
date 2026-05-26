// services/content_generator_service/test/pdf-generator.test.ts
import { describe, it, expect } from "vitest";
import { buildLatexDocument } from "../src/generators/latex-template.js";
import type { ResearchOutput } from "../src/agents/research-agent.js";

const sampleResearch: ResearchOutput = {
  title: "La Fotosíntesis",
  abstract: "Proceso clave de las plantas.",
  sections: [
    { heading: "Introducción", content: "Las plantas convierten luz en energía.", keyPoints: ["clorofila", "ATP"] }
  ],
  bibliography: ["Campbell, N. (2020). Biology. Pearson."],
  fullText: "La fotosíntesis es el proceso por el cual las plantas convierten luz en energía.",
};

describe("buildLatexDocument", () => {
  it("produces a string containing \\documentclass", () => {
    const tex = buildLatexDocument(sampleResearch);
    expect(tex).toContain("\\documentclass");
  });

  it("includes the title", () => {
    const tex = buildLatexDocument(sampleResearch);
    expect(tex).toContain("La Fotosíntesis");
  });

  it("includes all section headings", () => {
    const tex = buildLatexDocument(sampleResearch);
    expect(tex).toContain("Introducción");
  });

  it("escapes special LaTeX characters", () => {
    const research = { ...sampleResearch, title: "Test & Verify" };
    const tex = buildLatexDocument(research);
    expect(tex).toContain("Test \\& Verify");
  });
});
