"use client";
import { useState, useCallback, useRef } from "react";
import type { GenerateRequest } from "@/services/client/generator-api";

interface DroppedFile {
  name: string;
  text: string;
  size: number;
  pageCount?: number;
}

interface Props {
  onSubmit: (req: GenerateRequest) => void;
  isLoading: boolean;
}

// Máximo de caracteres por archivo antes de recortar (~8k tokens ≈ 32k chars)
// Suficiente para el contexto académico sin explotar el límite TPM
const MAX_CHARS_PER_FILE = 32_000;

/** Extrae texto real de un PDF usando pdf.js — funciona con PDFs seleccionables */
async function extractPdfText(file: File): Promise<DroppedFile> {
  // Importación dinámica para no bloquear el bundle inicial
  const pdfjsLib = await import("pdfjs-dist");

  // Worker: en Next.js apuntamos al archivo del paquete directamente
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.mjs",
    import.meta.url
  ).toString();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pageCount = pdf.numPages;

  const textParts: string[] = [];
  let totalChars = 0;

  for (let i = 1; i <= pageCount; i++) {
    if (totalChars >= MAX_CHARS_PER_FILE) break;
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    textParts.push(pageText);
    totalChars += pageText.length;
  }

  let fullText = textParts.join("\n\n");
  const wasTruncated = fullText.length > MAX_CHARS_PER_FILE;
  if (wasTruncated) {
    fullText = fullText.slice(0, MAX_CHARS_PER_FILE) +
      `\n\n[... PDF recortado — se procesaron las primeras ${Math.round(MAX_CHARS_PER_FILE / 1000)}k caracteres de ${pageCount} páginas]`;
  }

  // Si el PDF es escaneado (sin texto seleccionable), avisar al usuario
  if (fullText.trim().length < 50) {
    return {
      name: file.name,
      text: `[PDF escaneado o sin texto seleccionable: ${file.name} — el contenido no pudo extraerse automáticamente]`,
      size: file.size,
      pageCount,
    };
  }

  return { name: file.name, text: fullText, size: file.size, pageCount };
}

async function extractTextFromFile(file: File): Promise<DroppedFile> {
  if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
    return extractPdfText(file);
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = (e.target?.result as string) ?? "";
      resolve({ name: file.name, text, size: file.size });
    };
    reader.onerror = reject;
    reader.readAsText(file, "utf-8");
  });
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function GeneratorForm({ onSubmit, isLoading }: Props) {
  const [topic, setTopic] = useState("");
  const [depth, setDepth] = useState<"summary" | "deep">("summary");
  const [outputs, setOutputs] = useState<string[]>(["pdf"]);
  const [extraText, setExtraText] = useState("");
  const [files, setFiles] = useState<DroppedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [parsingFile, setParsingFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function toggleOutput(o: string) {
    setOutputs((prev) =>
      prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]
    );
  }

  const processFiles = useCallback(async (rawFiles: File[]) => {
    const accepted = rawFiles.filter(
      (f) =>
        f.type === "text/plain" ||
        f.type === "application/pdf" ||
        f.name.endsWith(".txt") ||
        f.name.endsWith(".md") ||
        f.name.endsWith(".pdf")
    );

    for (const f of accepted) {
      setParsingFile(f.name);
      try {
        const result = await extractTextFromFile(f);
        setFiles((prev) => [...prev, result]);
      } catch {
        setFiles((prev) => [
          ...prev,
          { name: f.name, text: `[Error al leer ${f.name}]`, size: f.size },
        ]);
      }
    }
    setParsingFile(null);
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      await processFiles(Array.from(e.dataTransfer.files));
    },
    [processFiles]
  );

  async function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    await processFiles(Array.from(e.target.files ?? []));
    e.target.value = "";
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim() || outputs.length === 0) return;
    const sources: GenerateRequest["sources"] = [];
    if (extraText.trim()) sources.push({ type: "text", data: extraText.trim() });
    for (const f of files) sources.push({ type: "text", data: f.text });
    onSubmit({ topic: topic.trim(), depth, sources, outputs });
  }

  const outputOptions = [
    { key: "pdf", label: "PDF Académico", desc: "Documento LaTeX formal" },
    { key: "podcast", label: "Podcast", desc: "Audio con NotebookLM" },
    { key: "infographic", label: "Infografía", desc: "Visual del tema" },
  ];

  const canSubmit = topic.trim().length > 0 && outputs.length > 0 && !parsingFile;

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

      {/* Tema */}
      <div>
        <label style={labelStyle}>Tema</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Ej: La fotosíntesis en plantas tropicales"
          required
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
          onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
        />
      </div>

      {/* Profundidad */}
      <div>
        <label style={labelStyle}>Profundidad</label>
        <div style={{ display: "flex", gap: "10px" }}>
          {(["summary", "deep"] as const).map((d) => (
            <button key={d} type="button" onClick={() => setDepth(d)} style={{
              flex: 1, padding: "11px 16px", borderRadius: "10px", fontSize: "14px",
              fontWeight: depth === d ? 600 : 400, cursor: "pointer", transition: "all 0.2s",
              background: depth === d ? "#6366f1" : "#f8fafc",
              color: depth === d ? "#fff" : "#64748b",
              border: `2px solid ${depth === d ? "#6366f1" : "#e2e8f0"}`,
            }}>
              {d === "summary" ? "Resumen rápido" : "Investigación profunda"}
            </button>
          ))}
        </div>
      </div>

      {/* Qué generar */}
      <div>
        <label style={labelStyle}>¿Qué generar?</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {outputOptions.map((o) => {
            const active = outputs.includes(o.key);
            return (
              <button key={o.key} type="button" onClick={() => toggleOutput(o.key)} style={{
                padding: "14px 12px", borderRadius: "10px", border: `2px solid ${active ? "#6366f1" : "#e2e8f0"}`,
                background: active ? "#eef2ff" : "#f8fafc", cursor: "pointer",
                textAlign: "left", transition: "all 0.2s", position: "relative",
              }}>
                {active && (
                  <span style={{
                    position: "absolute", top: "8px", right: "8px",
                    width: "16px", height: "16px", borderRadius: "50%",
                    background: "#6366f1", color: "#fff",
                    fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700,
                  }}>✓</span>
                )}
                <div style={{ fontSize: "13px", fontWeight: 700, color: active ? "#4f46e5" : "#1e293b", marginBottom: "2px" }}>
                  {o.label}
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8" }}>{o.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Drag & Drop */}
      <div>
        <label style={labelStyle}>
          Documentos de referencia{" "}
          <span style={{ color: "#94a3b8", fontWeight: 400, textTransform: "none", fontSize: "12px" }}>
            — .txt, .md, .pdf (opcional)
          </span>
        </label>

        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => !parsingFile && fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${isDragging ? "#6366f1" : parsingFile ? "#fbbf24" : "#cbd5e1"}`,
            borderRadius: "10px", padding: "28px", textAlign: "center",
            cursor: parsingFile ? "wait" : "pointer", transition: "all 0.2s",
            background: isDragging ? "rgba(99,102,241,0.04)" : parsingFile ? "#fffbeb" : "#fafafa",
          }}
        >
          {parsingFile ? (
            <div>
              <div style={{ fontSize: "13px", color: "#92400e", fontWeight: 600, marginBottom: "4px" }}>
                Extrayendo texto del PDF...
              </div>
              <div style={{ fontSize: "12px", color: "#b45309" }}>
                {parsingFile}
              </div>
              <div style={{
                marginTop: "12px", height: "3px", borderRadius: "2px",
                background: "#fde68a", overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", width: "60%", borderRadius: "2px",
                  background: "#f59e0b",
                  animation: "none",
                }} />
              </div>
            </div>
          ) : (
            <>
              <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                Arrastra archivos aquí
              </div>
              <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
                o haz clic para seleccionar · PDF, TXT, MD
              </div>
              <div style={{ fontSize: "11px", color: "#c4b5fd", marginTop: "6px" }}>
                El texto de los PDFs se extrae automáticamente
              </div>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,.md,.pdf,text/plain,application/pdf"
            multiple
            onChange={handleFileInput}
            style={{ display: "none" }}
          />
        </div>

        {files.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px" }}>
            {files.map((f, i) => {
              const isPdf = f.name.endsWith(".pdf");
              const isScanned = f.text.includes("escaneado o sin texto");
              const charCount = f.text.length;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", justifyContent: "space-between",
                  padding: "10px 13px", borderRadius: "8px",
                  background: isScanned ? "#fff7ed" : "#f1f5f9",
                  border: `1px solid ${isScanned ? "#fed7aa" : "#e2e8f0"}`,
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flex: 1 }}>
                    <span style={{
                      padding: "2px 6px", borderRadius: "4px",
                      background: isPdf ? "#fee2e2" : "#e0e7ff",
                      color: isPdf ? "#dc2626" : "#4f46e5",
                      fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                      flexShrink: 0, marginTop: "1px",
                    }}>
                      {f.name.split(".").pop()}
                    </span>
                    <div>
                      <div style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{f.name}</div>
                      <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>
                        {formatSize(f.size)}
                        {f.pageCount && ` · ${f.pageCount} págs`}
                        {isPdf && !isScanned && ` · ${Math.round(charCount / 1000)}k chars extraídos`}
                        {isScanned && (
                          <span style={{ color: "#ea580c", fontWeight: 600 }}> · PDF escaneado — sin texto</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="button" onClick={() => removeFile(i)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "#94a3b8", fontSize: "18px", lineHeight: 1, padding: "0 4px", flexShrink: 0,
                  }}>×</button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Texto adicional */}
      <div>
        <label style={labelStyle}>
          Texto adicional{" "}
          <span style={{ color: "#94a3b8", fontWeight: 400, textTransform: "none", fontSize: "12px" }}>
            (opcional)
          </span>
        </label>
        <textarea
          value={extraText}
          onChange={(e) => setExtraText(e.target.value)}
          placeholder="Pega aquí notas, apuntes o extractos de referencia..."
          rows={4}
          style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit", lineHeight: "1.6" }}
          onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
          onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading || !canSubmit}
        style={{
          padding: "15px 32px", borderRadius: "10px", fontSize: "15px", fontWeight: 700,
          border: "none", cursor: canSubmit ? "pointer" : "not-allowed", transition: "all 0.2s",
          background: canSubmit
            ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
            : "#e2e8f0",
          color: canSubmit ? "#fff" : "#94a3b8",
          boxShadow: canSubmit ? "0 4px 14px rgba(99,102,241,0.35)" : "none",
        }}
      >
        {isLoading ? "Iniciando..." : parsingFile ? "Procesando archivo..." : "Generar contenido"}
      </button>
    </form>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "12px", fontWeight: 700,
  color: "#374151", marginBottom: "8px",
  letterSpacing: "0.5px", textTransform: "uppercase",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px", borderRadius: "10px",
  border: "2px solid #e2e8f0", fontSize: "14px", color: "#1e293b",
  background: "#fff", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};
