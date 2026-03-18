"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { requestAppApi } from "@/lib/app-http";

export function LoginForm() {
  const router = useRouter();
  const { t } = useAppLocale();
  const [email, setEmail] = useState("admin@example.com");
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
          requestedRole: "administrator"
        })
      });

      router.replace("/dashboard");
      router.refresh();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "No fue posible iniciar sesion en la aplicacion administrativa."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <section className="auth-page__hero">
        <p className="auth-page__eyebrow">
          {t({ es: "Portal administrativo", en: "Admin portal" })}
        </p>
        <h1>
          {t({
            es: "Opera la plataforma con visibilidad de contenido y grafo.",
            en: "Operate the platform with graph and content visibility."
          })}
        </h1>
        <p className="auth-page__copy">
          {t({
            es: "Ingresa con la cuenta administrativa sembrada para inspeccionar la estructura de contenido, los enlaces del grafo y las senales de integridad de la plataforma.",
            en: "Sign in with the seeded admin account to inspect content structure, graph linkage, and platform integrity signals."
          })}
        </p>
        <div className="auth-page__tip">
          <span>{t({ es: "Acceso demo", en: "Demo login" })}</span>
          <strong>admin@example.com / placeholder</strong>
        </div>
      </section>

      <form className="auth-card" onSubmit={onSubmit}>
        <div>
          <p className="auth-card__eyebrow">{t({ es: "Ingreso", en: "Login" })}</p>
          <h2>
            {t({ es: "Continuar como administrador", en: "Continue as an administrator" })}
          </h2>
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
            : t({ es: "Abrir panel administrativo", en: "Open admin dashboard" })}
        </button>
      </form>
    </div>
  );
}
