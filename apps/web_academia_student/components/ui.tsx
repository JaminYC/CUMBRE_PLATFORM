"use client";

import type { ReactNode } from "react";
import { LogoBryce } from "@/components/logo-bryce";
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

export function LoadingPanel({
  message,
  detail
}: {
  message: string;
  detail?: string;
}) {
  return (
    <div className="splash-loader" role="status">
      <div className="splash-loader__rings" aria-hidden="true">
        <span className="splash-loader__ring splash-loader__ring--1" />
        <span className="splash-loader__ring splash-loader__ring--2" />
        <span className="splash-loader__ring splash-loader__ring--3" />
      </div>
      {/* En línea, no <img>: dentro de una imagen los trazados no se animan. */}
      <LogoBryce className="splash-loader__brand lb-cargando" />
      <div className="splash-loader__body">
        <p className="splash-loader__message">{message}</p>
        {detail ? <p className="splash-loader__detail">{detail}</p> : null}
        <div className="splash-loader__dots" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
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
