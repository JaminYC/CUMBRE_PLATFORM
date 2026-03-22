"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { requestAppApi } from "@/lib/app-http";

const ROLES = [
  { id: "student", label: "Estudiante", desc: "Aprendo con CUMBRE" },
  { id: "teacher", label: "Docente",    desc: "Enseño con CUMBRE" }
];

interface PortalSignupResponse {
  redirectTo: string;
}

export function SignupForm() {
  const [name, setName]           = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [role, setRole]           = useState<string | null>(null);
  const [error, setError]         = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!role) { setError("Elige tu rol para continuar."); return; }
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await requestAppApi<PortalSignupResponse>("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          displayName: name,
          email,
          credential: password,
          requestedRole: role
        })
      });

      window.location.assign(response.redirectTo);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "No fue posible crear la cuenta."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <header className="login-nav">
        <Link href="/" className="login-nav__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/illustrations/LOGONEGRO.png" alt="CUMBRE" className="login-logo" draggable={false} />
        </Link>
        <Link href="/" className="login-nav__back">Volver al inicio</Link>
      </header>

      <div className="login-layout">
        <section className="login-page__hero">
          <p className="eyebrow">Comienza hoy</p>
          <h2>Tu espacio<br />te espera.</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/illustrations/illo-login.png" alt="" className="login-page__illo" draggable={false} />
        </section>

        <form className="auth-card" onSubmit={onSubmit}>
          <div>
            <p className="eyebrow">Registro</p>
            <h1>Crear cuenta</h1>
          </div>

          {/* Role selector */}
          <div className="signup-role-row">
            {ROLES.map(r => (
              <button
                key={r.id}
                type="button"
                className={`signup-role-btn ${role === r.id ? "signup-role-btn--active" : ""}`}
                onClick={() => setRole(r.id)}
              >
                <strong>{r.label}</strong>
                <span>{r.desc}</span>
              </button>
            ))}
          </div>

          <label className="field">
            <span>Nombre</span>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              autoComplete="name"
              required
            />
          </label>

          <label className="field">
            <span>Correo</span>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="field">
            <span>Contraseña</span>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>

          {error ? <p className="field-error">{error}</p> : null}

          <button className="button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          </button>

          <p className="auth-switch">
            ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
