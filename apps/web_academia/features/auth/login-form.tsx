"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { requestAppApi } from "@/lib/app-http";

interface PortalLoginResponse {
  redirectTo: string;
  role: string;
  roleLabel: string;
}

export function LoginForm() {
  const params = useSearchParams();
  const [email, setEmail] = useState(params.get("email") ?? "");
  const [credential, setCredential] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
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
      const msg = caughtError instanceof Error ? caughtError.message : "";
      const isInvalidCredentials =
        msg.toLowerCase().includes("invalid") ||
        msg.toLowerCase().includes("credentials") ||
        msg.toLowerCase().includes("not found");
      setError(
        isInvalidCredentials
          ? "Correo o contraseña incorrectos. ¿Eres nuevo?"
          : msg || "No fue posible iniciar sesión."
      );
      setIsNew(isInvalidCredentials);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bryce-login">
      <section className="bryce-login__brand">
        <div className="bryce-login__brand-body">
          <Link
            href="/"
            className="bryce-logo-card"
            aria-label="Academia Bryce — ir al inicio"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-bryce-grupo.png"
              alt="Academia Bryce"
              draggable={false}
            />
          </Link>

          <div>
            <h2 className="bryce-login__headline">
              Tu campus, en un <em>solo acceso</em>.
            </h2>
            <p className="bryce-login__lede">
              Ingresa con tu correo institucional. El sistema te lleva
              automáticamente al espacio que te corresponde.
            </p>

            <ul className="bryce-roles">
              <li>Estudiantes</li>
              <li>Docentes</li>
              <li>Administración</li>
            </ul>
          </div>
        </div>

        <p className="bryce-login__foot">
          Grupo Bryce · Academia Preuniversitaria · Arequipa, Perú
        </p>
      </section>

      <section className="bryce-login__panel">
        <div className="bryce-login__panel-top">
          <Link href="/" className="bryce-back">
            Volver al inicio
          </Link>
        </div>

        <form className="bryce-form" onSubmit={onSubmit}>
          <div>
            <p className="bryce-form__eyebrow">Campus virtual</p>
            <h1 className="bryce-form__title">Iniciar sesión</h1>
            <p className="bryce-form__sub">
              Bienvenido de vuelta. Continuemos donde lo dejaste.
            </p>
          </div>

          <label className="bryce-field">
            <span>Correo</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoComplete="email"
              placeholder="alumno@bryce.edu.pe"
              required
            />
          </label>

          <label className="bryce-field">
            <span className="bryce-field__fila">
              Contraseña
              <Link href="/recuperar" className="bryce-field__ayuda">
                ¿La olvidaste?
              </Link>
            </span>
            <input
              value={credential}
              onChange={(event) => setCredential(event.target.value)}
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </label>

          {error ? (
            <div className="bryce-error" role="alert">
              <p>{error}</p>
              {isNew ? (
                <Link href={`/signup?email=${encodeURIComponent(email)}`}>
                  Crear cuenta nueva →
                </Link>
              ) : null}
            </div>
          ) : null}

          <button className="bryce-btn" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
          </button>

          <div className="bryce-divider">
            <span>o</span>
          </div>

          <a className="bryce-btn bryce-btn--google" href="/api/auth/google">
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

          <p className="bryce-switch">
            ¿No tienes cuenta? <Link href="/signup">Regístrate</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
