"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { requestAppApi } from "@/lib/app-http";

export function RecuperarForm() {
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
    <main className="bryce-login">
      <section className="bryce-login__brand">
        <div className="bryce-login__brand-body">
          <Link href="/" className="bryce-logo-card" aria-label="Academia Bryce">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-bryce-grupo.png" alt="Academia Bryce" draggable={false} />
          </Link>

          <div>
            <h2 className="bryce-login__headline">
              Te ayudamos a <em>entrar</em>.
            </h2>
            <p className="bryce-login__lede">
              Escribe tu correo y te enviamos un enlace para crear una
              contraseña nueva.
            </p>
          </div>
        </div>

        <p className="bryce-login__foot">
          Grupo Bryce · Academia Preuniversitaria · Arequipa, Perú
        </p>
      </section>

      <section className="bryce-login__panel">
        <div className="bryce-login__panel-top">
          <Link href="/login" className="bryce-back">
            Volver al ingreso
          </Link>
        </div>

        {enviado ? (
          /* Se confirma sin decir si el correo existe: revelarlo permitiría
             averiguar qué cuentas están registradas. */
          <div className="bryce-form">
            <div>
              <p className="bryce-form__eyebrow">Listo</p>
              <h1 className="bryce-form__title">Revisa tu correo</h1>
              <p className="bryce-form__sub">
                Si <strong>{email}</strong> está registrado, te llegará un
                enlace para crear una contraseña nueva. Vence en 30 minutos.
              </p>
            </div>

            <div className="bryce-nota">
              <p>
                ¿No te llegó? Revisa la carpeta de correo no deseado, o
                escribe a <strong>academia@bryce.edu.pe</strong>.
              </p>
            </div>

            <Link className="bryce-btn" href="/login">
              Volver al ingreso
            </Link>
          </div>
        ) : (
          <form className="bryce-form" onSubmit={onSubmit}>
            <div>
              <p className="bryce-form__eyebrow">Recuperar acceso</p>
              <h1 className="bryce-form__title">¿Olvidaste tu contraseña?</h1>
              <p className="bryce-form__sub">
                Pasa seguido. Te mandamos un enlace para crear una nueva.
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
                autoFocus
              />
            </label>

            {error ? (
              <div className="bryce-error" role="alert">
                <p>{error}</p>
              </div>
            ) : null}

            <button className="bryce-btn" disabled={enviando} type="submit">
              {enviando ? "Enviando..." : "Enviarme el enlace"}
            </button>

            <p className="bryce-switch">
              ¿Ya la recordaste? <Link href="/login">Iniciar sesión</Link>
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
