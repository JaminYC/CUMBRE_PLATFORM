"use client";

import type { ReactNode } from "react";
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

export function LoadingPanel({ message, detail }: { message: string; detail?: string }) {
  return (
    <div className="state-panel state-panel--loading">
      <div className="loading-spinner" aria-hidden />
      <div className="state-panel__content">
        <p className="state-panel__title">{message}</p>
        {detail ? <p className="state-panel__detail">{detail}</p> : null}
      </div>
    </div>
  );
}

export function ErrorPanel({
  message,
  onRetry
}: {
  message: string;
  onRetry?: () => void;
}) {
  const { t } = useAppLocale();

  return (
    <div className="state-panel state-panel--error">
      <div className="state-panel__content">
        <p className="state-panel__title">{t(commonMessages.dashboardLoadErrorTitle)}</p>
        <p className="state-panel__detail">{message}</p>
      </div>
      {onRetry ? (
        <button className="button button--ghost" onClick={onRetry} type="button">
          {t(commonMessages.retry)}
        </button>
      ) : null}
    </div>
  );
}

export function EmptyState({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="state-panel state-panel--empty">
      <div className="state-panel__content">
        <p className="state-panel__title">{title}</p>
        <p className="state-panel__detail">{description}</p>
      </div>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { t } = useAppLocale();

  return (
    <nav className="breadcrumbs" aria-label={t(commonMessages.breadcrumbLabel)}>
      {items.map((item, index) => (
        <span className="breadcrumbs__item" key={`${item.label}-${index}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
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
