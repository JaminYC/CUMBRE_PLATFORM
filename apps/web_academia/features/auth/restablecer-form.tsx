"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { requestAppApi } from "@/lib/app-http";

export function RestablecerForm() {
  const params = useSearchParams();
  const token = params.get("token") ?? "";

  const [credential, setCredential] = useState("");
  const [repetida, setRepetida] = useState("");
  const [listo, setListo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const cortaDemas = credential.length > 0 && credential.length < 8;
  const noCoinciden = repetida.length > 0 && credential !== repetida;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (credential !== repetida) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setEnviando(true);

    try {
      await requestAppApi("/api/auth/password/reset", {
        method: "POST",
        body: JSON.stringify({ token, credential })
      });
      setListo(true);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "No fue posible cambiar la contraseña."
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
              Una contraseña <em>nueva</em>.
            </h2>
            <p className="bryce-login__lede">
              Elige una que puedas recordar. Al cambiarla se cierran las
              sesiones abiertas en otros dispositivos.
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

        {!token ? (
          <div className="bryce-form">
            <div>
              <p className="bryce-form__eyebrow">Enlace incompleto</p>
              <h1 className="bryce-form__title">Falta el enlace</h1>
              <p className="bryce-form__sub">
                Abre el enlace completo que recibiste por correo, o pide uno
                nuevo.
              </p>
            </div>
            <Link className="bryce-btn" href="/recuperar">
              Pedir un enlace nuevo
            </Link>
          </div>
        ) : listo ? (
          <div className="bryce-form">
            <div>
              <p className="bryce-form__eyebrow">Listo</p>
              <h1 className="bryce-form__title">Contraseña cambiada</h1>
              <p className="bryce-form__sub">
                Ya puedes entrar con tu contraseña nueva.
              </p>
            </div>
            <Link className="bryce-btn" href="/login">
              Iniciar sesión
            </Link>
          </div>
        ) : (
          <form className="bryce-form" onSubmit={onSubmit}>
            <div>
              <p className="bryce-form__eyebrow">Recuperar acceso</p>
              <h1 className="bryce-form__title">Crea tu contraseña</h1>
              <p className="bryce-form__sub">Mínimo 8 caracteres.</p>
            </div>

            <label className="bryce-field">
              <span>Contraseña nueva</span>
              <input
                value={credential}
                onChange={(event) => setCredential(event.target.value)}
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                required
                autoFocus
              />
              {cortaDemas ? (
                <small className="bryce-pista">
                  Faltan {8 - credential.length} caracteres.
                </small>
              ) : null}
            </label>

            <label className="bryce-field">
              <span>Repetir contraseña</span>
              <input
                value={repetida}
                onChange={(event) => setRepetida(event.target.value)}
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                required
              />
              {noCoinciden ? (
                <small className="bryce-pista bryce-pista--mal">
                  No coinciden.
                </small>
              ) : null}
            </label>

            {error ? (
              <div className="bryce-error" role="alert">
                <p>{error}</p>
                {error.includes("válido") || error.includes("expiró") ? (
                  <Link href="/recuperar">Pedir un enlace nuevo →</Link>
                ) : null}
              </div>
            ) : null}

            <button
              className="bryce-btn"
              disabled={enviando || cortaDemas || noCoinciden || !credential}
              type="submit"
            >
              {enviando ? "Guardando..." : "Cambiar contraseña"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
