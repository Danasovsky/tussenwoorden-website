import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, type Locale, type Translatable, t as translate } from "./types";
import { ui } from "./strings";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <T>(value: Translatable<T>) => T;
  ui: (key: keyof typeof ui) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "tussenwoorden.locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && LOCALES.includes(stored)) setLocaleState(stored);
    } catch {}
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    setLocale,
    t: (value) => translate(value, locale),
    ui: (key) => translate(ui[key], locale),
  }), [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}