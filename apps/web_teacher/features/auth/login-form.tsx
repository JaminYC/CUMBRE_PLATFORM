"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { requestAppApi } from "@/lib/app-http";

export function LoginForm() {
  const router = useRouter();
  const { t } = useAppLocale();
  const [email, setEmail] = useState("teacher@example.com");
  const [credential, setCredential] = useState("placeholder");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await requestAppApi("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          identifier: email,
          credential,
          requestedRole: "teacher"
        })
      });

      router.replace("/dashboard");
      router.refresh();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "No fue posible iniciar sesion en la aplicacion docente."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <section className="auth-page__hero">
        <p className="auth-page__eyebrow">{t({ es: "Portal docente", en: "Teacher portal" })}</p>
        <h1>
          {t({
            es: "Visibilidad operativa para el seguimiento del aula.",
            en: "Operational visibility for classroom follow-through."
          })}
        </h1>
        <p className="auth-page__copy">
          {t({
            es: "Ingresa con la cuenta docente sembrada para revisar el avance del estudiante, las salidas adaptativas, el uso del tutor y las dificultades con prerequisitos.",
            en: "Sign in with the seeded teacher account to review learner momentum, adaptive outputs, tutor usage, and prerequisite struggle."
          })}
        </p>
        <div className="auth-page__tip">
          <span>{t({ es: "Acceso demo", en: "Demo login" })}</span>
          <strong>teacher@example.com / placeholder</strong>
        </div>
      </section>

      <form className="auth-card" onSubmit={onSubmit}>
        <div>
          <p className="auth-card__eyebrow">{t({ es: "Ingreso", en: "Login" })}</p>
          <h2>{t({ es: "Continuar como docente", en: "Continue as a teacher" })}</h2>
        </div>

        <label className="field">
          <span>{t({ es: "Correo", en: "Email" })}</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="field">
          <span>{t({ es: "Contrasena", en: "Password" })}</span>
          <input
            value={credential}
            onChange={(event) => setCredential(event.target.value)}
            type="password"
            autoComplete="current-password"
            required
          />
        </label>

        {error ? <p className="field-error">{error}</p> : null}

        <button className="button" disabled={isSubmitting} type="submit">
          {isSubmitting
            ? t({ es: "Ingresando...", en: "Signing in..." })
            : t({ es: "Abrir panel docente", en: "Open teacher dashboard" })}
        </button>
      </form>
    </div>
  );
}
