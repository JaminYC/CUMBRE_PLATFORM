"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

export type AppLocale = "es" | "en";

export interface LocalizedText {
  es: string;
  en: string;
}

const APP_LOCALE_STORAGE_KEY = "cumbre_app_locale";

interface AppLocaleContextValue {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
  t: (text: LocalizedText) => string;
}

const AppLocaleContext = createContext<AppLocaleContextValue | null>(null);

export function resolveAppLocale(value?: string | null): AppLocale {
  return value === "en" ? "en" : "es";
}

export function AppLocaleProvider({
  children,
  initialLocale = "es"
}: {
  children: ReactNode;
  initialLocale?: AppLocale;
}) {
  const [locale, setLocaleState] = useState<AppLocale>(resolveAppLocale(initialLocale));

  useEffect(() => {
    const storedLocale =
      typeof window !== "undefined"
        ? resolveAppLocale(window.localStorage.getItem(APP_LOCALE_STORAGE_KEY))
        : "es";

    if (storedLocale !== locale) {
      setLocaleState(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(APP_LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<AppLocaleContextValue>(
    () => ({
      locale,
      setLocale: (nextLocale: AppLocale) => setLocaleState(resolveAppLocale(nextLocale)),
      t: (text: LocalizedText) => text[locale] ?? text.es
    }),
    [locale]
  );

  return <AppLocaleContext.Provider value={value}>{children}</AppLocaleContext.Provider>;
}

export function useAppLocale() {
  const context = useContext(AppLocaleContext);

  if (!context) {
    throw new Error("useAppLocale must be used within AppLocaleProvider.");
  }

  return context;
}
