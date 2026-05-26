// services/content_generator_service/src/generators/latex-template.ts
import type { ResearchOutput } from "../agents/research-agent.js";

function escapeTex(text: string): string {
  return text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

export function buildLatexDocument(research: ResearchOutput): string {
  const sections = research.sections.map(s => `
\\section{${escapeTex(s.heading)}}
${escapeTex(s.content)}
${s.keyPoints.length > 0 ? `
\\subsection*{Puntos clave}
\\begin{itemize}
${s.keyPoints.map(p => `  \\item ${escapeTex(p)}`).join("\n")}
\\end{itemize}` : ""}
`).join("\n");

  const bibliography = research.bibliography.length > 0
    ? `\\section*{Bibliografía}
\\begin{itemize}
${research.bibliography.map(b => `  \\item ${escapeTex(b)}`).join("\n")}
\\end{itemize}`
    : "";

  return `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage{geometry}
\\usepackage{hyperref}
\\usepackage{parskip}
\\geometry{margin=2.5cm}

\\title{${escapeTex(research.title)}}
\\author{CUMBRE Platform}
\\date{\\today}

\\begin{document}
\\maketitle

\\begin{abstract}
${escapeTex(research.abstract)}
\\end{abstract}

\\tableofcontents
\\newpage

${sections}

${bibliography}

\\end{document}
`;
}
