"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Revela su contenido cuando entra en pantalla. Una sola vez: al salir no se
 * vuelve a ocultar, porque re-animar al hacer scroll hacia arriba marea.
 *
 * Si el sistema pide menos movimiento, aparece de una y no observa nada.
 */
export function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ble-reveal ${className}`.trim()}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
