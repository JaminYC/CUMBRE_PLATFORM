"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppLocale } from "@cumbre/app-runtime/client";
import { useAuthSession } from "./auth-session";
import { loginStudent } from "@/services/client/student-api";

export function LoginForm() {
  const router = useRouter();
  const { t } = useAppLocale();
  const { isHydrated, session, signIn } = useAuthSession();
  const [email, setEmail] = useState("student@example.com");
  const [credential, setCredential] = useState("placeholder");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isHydrated && session) {
      router.replace(session.lastVisitedPath ?? "/dashboard");
    }
  }, [isHydrated, router, session]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await loginStudent({
        identifier: email,
        credential,
        requestedRole: "student"
      });

      await signIn();

      router.push(session?.lastVisitedPath ?? "/dashboard");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "No fue posible iniciar sesión con el backend actual."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <section className="auth-page__hero">
        <p className="auth-page__eyebrow">{t({ es: "Portal del estudiante", en: "Student portal" })}</p>
        <h1>
          {t({
            es: "Avanza dentro de tu siguiente paso de aprendizaje.",
            en: "Stay inside your next learning move."
          })}
        </h1>
        <p className="auth-page__copy">
          {t({
            es: "Ingresa con la cuenta sembrada, revisa tu ruta adaptativa, inicia una sesión y sigue tu progreso contra el backend en vivo.",
            en: "Start with the seeded learner account, inspect your adaptive path, launch a session, and track progress against the live backend."
          })}
        </p>
        <div className="auth-page__tip">
          <span>{t({ es: "Acceso demo", en: "Demo login" })}</span>
          <strong>student@example.com / placeholder</strong>
        </div>
      </section>

      <form className="auth-card" onSubmit={onSubmit}>
        <div>
          <p className="auth-card__eyebrow">{t({ es: "Ingreso", en: "Login" })}</p>
          <h2>{t({ es: "Continuar como estudiante", en: "Continue as a student" })}</h2>
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
            : t({ es: "Abrir panel", en: "Open dashboard" })}
        </button>
      </form>
    </div>
  );
}
