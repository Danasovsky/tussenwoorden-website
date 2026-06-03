import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { brand } from "@/content/assets";
import { useState } from "react";

const NAV = [
  { to: "/", key: "nav_home" as const },
  { to: "/over", key: "nav_about" as const },
  { to: "/programma", key: "nav_program" as const },
  { to: "/archief", key: "nav_archive" as const },
  { to: "/platform", key: "nav_platform" as const },
  { to: "/contact", key: "nav_contact" as const },
];

export function SiteHeader() {
  const { ui, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={brand.logo} alt="tussenwoorden.be" className="h-8 w-auto" />
          <span className="sr-only">tussenwoorden.be</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-type text-ink/70 transition-colors hover:text-ink data-[status=active]:text-ink"
              activeOptions={{ exact: item.to === "/" }}
            >
              {ui(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 lg:flex" aria-label="Language switcher">
            {(["nl", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={`label-type px-2 py-1 transition-colors ${locale === code ? "text-ink" : "text-ink/40 hover:text-ink"}`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="label-type">{open ? "Sluit" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-background px-5 py-6 lg:hidden" aria-label="Mobiele navigatie">
          <ul className="flex flex-col gap-4">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="font-display text-2xl"
                  onClick={() => setOpen(false)}
                >
                  {ui(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            {(["nl", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`label-type rounded-sm border px-3 py-1 ${locale === code ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink/60"}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}