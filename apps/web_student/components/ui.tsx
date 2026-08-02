"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { commonMessages, useAppLocale } from "@cumbre/app-runtime/client";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function ContentCard({
  title,
  subtitle,
  children,
  accent = "mint"
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  accent?: "mint" | "sun" | "sand";
}) {
  return (
    <section className={`card card--${accent}`}>
      <div className="card__header">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export function MetricCard({
  label,
  value,
  helper
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <article className="metric-card">
      <p className="metric-card__label">{label}</p>
      <p className="metric-card__value">{value}</p>
      {helper ? <p className="metric-card__helper">{helper}</p> : null}
    </article>
  );
}

export function StatCard({
  label,
  value,
  icon,
  accent = "primary"
}: {
  label: string;
  value: string;
  icon: ReactNode;
  accent?: "primary" | "secondary" | "success";
}) {
  return (
    <article className="stat-card">
      <div className={`stat-card__icon stat-card__icon--${accent}`}>{icon}</div>
      <div className="stat-card__info">
        <p className="stat-card__label">{label}</p>
        <p className="stat-card__value">{value}</p>
      </div>
    </article>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const clampedValue = Math.max(0, Math.min(100, value));
  const { t } = useAppLocale();

  return (
    <div
      className="progress-bar"
      aria-label={t({ es: `Progreso ${clampedValue}%`, en: `Progress ${clampedValue}%` })}
    >
      <span style={{ width: `${clampedValue}%` }} />
    </div>
  );
}

/** Antes de este tiempo no se enseña nada: una espera asi no se percibe. */
const ANTES_DE_AVISAR = 180;

/**
 * Aviso de que algo se esta cargando.
 *
 * Antes era una portada a pantalla completa —degradado, tres anillos
 * expandiendose y el logo latiendo— que se comia la ventana entera. Con la
 * cortina puesta se veian dos animaciones seguidas para un solo cambio de
 * pantalla, y la segunda ademas volvia a presentar la marca de alguien que ya
 * habia entrado.
 *
 * Ahora vive dentro del contenido y se limita a decir que hay algo en camino.
 *
 * Dos detalles deliberados:
 *
 *   - No aparece hasta pasados 180 ms. Una respuesta de 120 ms con indicador
 *     se lee como un parpadeo, y un parpadeo se percibe como un fallo, no como
 *     una carga. El retraso es en APARECER, nunca en desaparecer: en cuanto
 *     hay datos se quitan, sin minimos que cumplir.
 *   - El hueco se reserva desde el principio, aunque el aviso aun no se vea,
 *     para que al aparecer no empuje lo que hay debajo.
 */
export function LoadingPanel({
  message,
  detail
}: {
  message: string;
  detail?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const temporizador = window.setTimeout(() => setVisible(true), ANTES_DE_AVISAR);
    return () => window.clearTimeout(temporizador);
  }, []);

  return (
    <div
      className="cargando"
      data-visible={visible ? "si" : undefined}
      role="status"
      aria-live="polite"
    >
      <span className="cargando__aro" aria-hidden="true" />
      <p className="cargando__mensaje">{message}</p>
      {detail ? <p className="cargando__detalle">{detail}</p> : null}
    </div>
  );
}

export function ErrorPanel({
  message,
  onRetry,
  actionLabel = "Try again"
}: {
  message: string;
  onRetry?: () => void;
  actionLabel?: string;
}) {
  const { t } = useAppLocale();

  return (
    <div className="state-panel state-panel--error">
      <div className="state-panel__content">
        <p className="state-panel__title">{t(commonMessages.viewLoadErrorTitle)}</p>
        <p className="state-panel__detail">{message}</p>
      </div>
      {onRetry ? (
        <button className="button button--ghost" onClick={onRetry} type="button">
          {actionLabel === "Try again" ? t(commonMessages.retry) : actionLabel}
        </button>
      ) : null}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
  actionTestId
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  actionTestId?: string;
}) {
  return (
    <div className="state-panel state-panel--empty">
      <div className="state-panel__content">
        <p className="state-panel__title">{title}</p>
        <p className="state-panel__detail">{description}</p>
      </div>
      {actionLabel && actionHref ? (
        <Link className="button button--ghost" data-testid={actionTestId} href={actionHref}>
          {actionLabel}
        </Link>
      ) : null}
      {actionLabel && onAction ? (
        <button
          className="button button--ghost"
          data-testid={actionTestId}
          onClick={onAction}
          type="button"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { t } = useAppLocale();

  return (
    <nav className="breadcrumbs" aria-label={t(commonMessages.breadcrumbLabel)}>
      {items.map((item, index) => (
        <span className="breadcrumbs__item" key={`${item.label}-${index}`}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="breadcrumbs__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function QuickAction({
  title,
  description,
  href
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="quick-action">
      <strong>{title}</strong>
      <span>{description}</span>
    </Link>
  );
}
