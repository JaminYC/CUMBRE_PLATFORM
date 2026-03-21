"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { requestAppApi } from "@/lib/app-http";

interface PortalLoginResponse {
  redirectTo: string;
  role: string;
  roleLabel: string;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [credential, setCredential] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await requestAppApi<PortalLoginResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          identifier: email,
          credential
        })
      });

      window.location.assign(response.redirectTo);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "No fue posible iniciar sesion desde el portal."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">

      <header className="login-nav">
        <Link href="/" className="login-nav__logo">CUMBRE</Link>
        <Link href="/" className="login-nav__back">Volver al inicio</Link>
      </header>

      <div className="login-layout">
        <section className="login-page__hero">
          <p className="eyebrow">Entrada unificada</p>
          <h2>Un login.<br />Tu espacio.</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/illo-login.png"
            alt=""
            className="login-page__illo"
            draggable={false}
          />
        </section>

      <form className="auth-card" onSubmit={onSubmit}>
        <div>
          <p className="eyebrow">Ingreso centralizado</p>
          <h1>Continuar en CUMBRE</h1>
        </div>

        <label className="field">
          <span>Correo</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="field">
          <span>Contrasena</span>
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
          {isSubmitting ? "Redirigiendo..." : "Iniciar sesion"}
        </button>

        <div className="auth-divider">
          <span>o</span>
        </div>

        <a className="button button--google" href="/api/auth/google">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continuar con Google
        </a>
      </form>
      </div>
    </main>
  );
}
