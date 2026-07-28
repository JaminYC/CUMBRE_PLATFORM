"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { requestAppApi } from "@/lib/app-http";
import { useMarca } from "@cumbre/brands/client";

function StudentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function TeacherIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8h10M7 11h6" />
    </svg>
  );
}

const ROLES = [
  { id: "student", icon: <StudentIcon />, label: "Estudiante", desc: "Aprendo con CUMBRE" },
  { id: "teacher", icon: <TeacherIcon />, label: "Docente",    desc: "Enseño con CUMBRE" }
];

interface PortalSignupResponse {
  redirectTo: string;
}

export function SignupForm() {
  const marca = useMarca();
  const params = useSearchParams();
  const [name, setName]           = useState("");
  const [email, setEmail]         = useState(params.get("email") ?? "");
  const [password, setPassword]   = useState("");
  const [role, setRole]           = useState<string | null>(null);
  const [error, setError]           = useState<string | null>(null);
  const [accountExists, setAccountExists] = useState(false);
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
      const msg = caughtError instanceof Error ? caughtError.message : "";
      const alreadyExists =
        msg.toLowerCase().includes("already exists") ||
        msg.toLowerCase().includes("conflict");
      setError(
        alreadyExists
          ? "Ya existe una cuenta con ese correo."
          : msg || "No fue posible crear la cuenta."
      );
      setAccountExists(alreadyExists);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <header className="login-nav">
        <Link href="/" className="login-nav__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={marca.logo.principal} alt={marca.nombre} className="login-logo" draggable={false} />
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
                <span className="signup-role-btn__icon" aria-hidden="true">{r.icon}</span>
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

          {error ? (
            <div className="field-error-block">
              <p className="field-error">{error}</p>
              {accountExists ? (
                <Link href={`/login?email=${encodeURIComponent(email)}`} className="field-error-action">
                  Iniciar sesión con esta cuenta →
                </Link>
              ) : null}
            </div>
          ) : null}

          <button className="button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          </button>

          <div className="auth-divider"><span>o</span></div>

          <a className="button button--google" href="/api/auth/google">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continuar con Google
          </a>

          <p className="auth-switch">
            ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
