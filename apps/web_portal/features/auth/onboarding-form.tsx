"use client";

import { useState } from "react";
import Link from "next/link";

const ROLES = [
  {
    id: "student",
    emoji: "🎓",
    label: "Estudiante",
    desc: "Accede a rutas de aprendizaje adaptativas, tutor IA y seguimiento de tu progreso."
  },
  {
    id: "teacher",
    emoji: "📚",
    label: "Docente",
    desc: "Crea aulas, publica materiales, gestiona estudiantes y sigue su avance en tiempo real."
  }
];

export function OnboardingForm() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleContinue() {
    if (!selected || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/set-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selected })
      });

      if (!res.ok) throw new Error("No se pudo configurar el rol.");

      const { redirectTo } = await res.json() as { redirectTo: string };
      window.location.assign(redirectTo);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="onboarding-page">
      <header className="login-nav">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/illustrations/LOGONEGRO.png" alt="CUMBRE" className="login-logo" draggable={false} />
        <Link href="/" className="login-nav__back">Volver al inicio</Link>
      </header>

      <div className="onboarding-body">
        <p className="eyebrow">Bienvenido a CUMBRE</p>
        <h1>¿Cómo vas a usar la plataforma?</h1>
        <p className="onboarding-subtitle">
          Elige tu rol para personalizar tu espacio. Puedes cambiar esto más adelante contactando a soporte.
        </p>

        <div className="onboarding-cards">
          {ROLES.map(role => (
            <button
              key={role.id}
              type="button"
              className={`onboarding-card ${selected === role.id ? "onboarding-card--selected" : ""}`}
              onClick={() => setSelected(role.id)}
            >
              <span className="onboarding-card__emoji" aria-hidden="true">{role.emoji}</span>
              <strong className="onboarding-card__label">{role.label}</strong>
              <p className="onboarding-card__desc">{role.desc}</p>
            </button>
          ))}
        </div>

        {error ? <p className="field-error">{error}</p> : null}

        <button
          className="button"
          disabled={!selected || isSubmitting}
          onClick={handleContinue}
          type="button"
        >
          {isSubmitting ? "Configurando tu espacio..." : "Continuar"}
        </button>
      </div>
    </main>
  );
}
