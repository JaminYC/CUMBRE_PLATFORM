"use client";

import { useState, type FormEvent } from "react";
import { requestAppApi } from "@/lib/app-http";
import { useMarca } from "@cumbre/brands/client";

export function LoginForm() {
  const marca = useMarca();
  const [email, setEmail] = useState("");
  const [credential, setCredential] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await requestAppApi("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ identifier: email, credential })
      });

      window.location.assign("/dashboard");
    } catch (caughtError) {
      const msg = caughtError instanceof Error ? caughtError.message : "";
      const isInvalidCredentials =
        msg.toLowerCase().includes("invalid") ||
        msg.toLowerCase().includes("credentials") ||
        msg.toLowerCase().includes("not found") ||
        msg.toLowerCase().includes("incorrect");
      setError(
        isInvalidCredentials
          ? "Correo o contraseña incorrectos."
          : msg || "No fue posible iniciar sesión."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <header className="login-nav">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={marca.logo.principal}
          alt={marca.nombre}
          className="login-logo"
          draggable={false}
        />
      </header>

      <div className="login-layout">
        <section className="login-page__hero">
          <p className="eyebrow">Plataforma de aprendizaje</p>
          <h2>
            Bienvenido
            <br />
            de vuelta.
          </h2>
          {/* La ilustracion la elige la marca; la de CUMBRE queda de reserva
              para una institucion que aun no tenga la suya. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={marca.ilustraciones?.login ?? "/illustrations/illo-login.png"}
            alt=""
            className="login-page__illo"
            draggable={false}
          />
        </section>

        <form className="auth-card" onSubmit={onSubmit}>
          <div>
            <p className="eyebrow">Acceso estudiante</p>
            <h1>Iniciar sesión</h1>
          </div>

          <label className="field">
            <span>Correo</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              required
            />
          </label>

          <label className="field">
            <span>Contraseña</span>
            <input
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </label>

          {error ? (
            <div className="field-error-block">
              <p className="field-error">{error}</p>
            </div>
          ) : null}

          <button className="button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </main>
  );
}
