export type Locale = "nl" | "en";
export const LOCALES: Locale[] = ["nl", "en"];
export const DEFAULT_LOCALE: Locale = "nl";

export type Translatable<T = string> = Record<Locale, T>;

export const t = <T,>(value: Translatable<T>, locale: Locale): T =>
  value[locale] ?? value[DEFAULT_LOCALE];