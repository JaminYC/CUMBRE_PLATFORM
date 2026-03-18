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
  const [email, setEmail] = useState("student@example.com");
  const [credential, setCredential] = useState("placeholder");
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
      <section className="login-page__hero">
        <p className="eyebrow">Entrada unificada</p>
        <h2>Inicia sesion una vez y CUMBRE te envia al espacio correcto.</h2>
        <p className="hero-copy">
          El portal detecta tu rol despues de autenticarte y redirige automaticamente
          al entorno de estudiante, docente o administracion, reutilizando la sesion
          real del sistema.
        </p>
        <div className="demo-stack">
          <div>
            <span>Estudiante</span>
            <strong>student@example.com / placeholder</strong>
          </div>
          <div>
            <span>Docente</span>
            <strong>teacher@example.com / placeholder</strong>
          </div>
          <div>
            <span>Administrador</span>
            <strong>admin@example.com / placeholder</strong>
          </div>
        </div>
        <Link className="button button--ghost" href="/">
          Volver al inicio
        </Link>
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
      </form>
    </main>
  );
}
