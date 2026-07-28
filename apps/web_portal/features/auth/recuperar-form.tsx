"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useMarca } from "@cumbre/brands/client";
import { requestAppApi } from "@/lib/app-http";

export function RecuperarForm() {
  const marca = useMarca();
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setEnviando(true);

    try {
      await requestAppApi("/api/auth/password/forgot", {
        method: "POST",
        body: JSON.stringify({ email })
      });
      setEnviado(true);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "No fue posible procesar la solicitud."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="login-page">
      <header className="login-nav">
        <Link href="/" className="login-nav__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={marca.logo.principal}
            alt={marca.nombre}
            className="login-logo"
            draggable={false}
          />
        </Link>
        <Link href="/login" className="login-nav__back">
          Volver al ingreso
        </Link>
      </header>

      <div className="login-layout">
        <section className="login-page__hero">
          <p className="eyebrow">Recuperar acceso</p>
          <h2>
            Te ayudamos
            <br />a entrar.
          </h2>
        </section>

        {enviado ? (
          /* Se confirma sin decir si el correo existe: revelarlo permitiría
             averiguar qué cuentas están registradas. */
          <div className="auth-card">
            <div>
              <p className="eyebrow">Listo</p>
              <h1>Revisa tu correo</h1>
            </div>

            <p>
              Si <strong>{email}</strong> está registrado, te llegará un enlace
              para crear una contraseña nueva. Vence en 30 minutos.
            </p>

            <p>
              ¿No te llegó? Revisa la carpeta de correo no deseado
              {marca.contacto?.correo ? (
                <>
                  , o escribe a <strong>{marca.contacto.correo}</strong>
                </>
              ) : null}
              .
            </p>

            <Link className="button" href="/login">
              Volver al ingreso
            </Link>
          </div>
        ) : (
          <form className="auth-card" onSubmit={onSubmit}>
            <div>
              <p className="eyebrow">Recuperar acceso</p>
              <h1>¿Olvidaste tu contraseña?</h1>
            </div>

            <p>Pasa seguido. Te mandamos un enlace para crear una nueva.</p>

            <label className="field">
              <span>Correo</span>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                autoComplete="email"
                required
                autoFocus
              />
            </label>

            {error ? (
              <div className="field-error-block" role="alert">
                <p className="field-error">{error}</p>
              </div>
            ) : null}

            <button className="button" disabled={enviando} type="submit">
              {enviando ? "Enviando..." : "Enviarme el enlace"}
            </button>

            <p className="auth-switch">
              ¿Ya la recordaste? <Link href="/login">Iniciar sesión</Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
