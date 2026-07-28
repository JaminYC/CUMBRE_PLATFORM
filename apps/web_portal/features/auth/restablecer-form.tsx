"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMarca } from "@cumbre/brands/client";
import { requestAppApi } from "@/lib/app-http";

export function RestablecerForm() {
  const marca = useMarca();
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
            Una contraseña
            <br />nueva.
          </h2>
          <p>
            Al cambiarla se cierran las sesiones abiertas en otros
            dispositivos.
          </p>
        </section>

        {!token ? (
          <div className="auth-card">
            <div>
              <p className="eyebrow">Enlace incompleto</p>
              <h1>Falta el enlace</h1>
              <p className="">
                Abre el enlace completo que recibiste por correo, o pide uno
                nuevo.
              </p>
            </div>
            <Link className="button" href="/recuperar">
              Pedir un enlace nuevo
            </Link>
          </div>
        ) : listo ? (
          <div className="auth-card">
            <div>
              <p className="eyebrow">Listo</p>
              <h1>Contraseña cambiada</h1>
              <p className="">
                Ya puedes entrar con tu contraseña nueva.
              </p>
            </div>
            <Link className="button" href="/login">
              Iniciar sesión
            </Link>
          </div>
        ) : (
          <form className="auth-card" onSubmit={onSubmit}>
            <div>
              <p className="eyebrow">Recuperar acceso</p>
              <h1>Crea tu contraseña</h1>
              <p className="">Mínimo 8 caracteres.</p>
            </div>

            <label className="field">
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
                <small className="field-hint">
                  Faltan {8 - credential.length} caracteres.
                </small>
              ) : null}
            </label>

            <label className="field">
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
                <small className="field-error">
                  No coinciden.
                </small>
              ) : null}
            </label>

            {error ? (
              <div className="field-error-block" role="alert">
                <p>{error}</p>
                {error.includes("válido") || error.includes("expiró") ? (
                  <Link href="/recuperar">Pedir un enlace nuevo →</Link>
                ) : null}
              </div>
            ) : null}

            <button
              className="button"
              disabled={enviando || cortaDemas || noCoinciden || !credential}
              type="submit"
            >
              {enviando ? "Guardando..." : "Cambiar contraseña"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
