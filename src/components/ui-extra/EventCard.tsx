import { Link } from "@tanstack/react-router";
import type { EventItem } from "@/content/types";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ACCENT_VAR: Record<NonNullable<EventItem["accent"]>, string> = {
  red: "var(--slam-red)",
  blue: "var(--slam-blue)",
  green: "var(--slam-green)",
  yellow: "var(--slam-yellow)",
  purple: "var(--slam-purple)",
};

function formatDate(iso: string | undefined, locale: string): string | null {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(locale === "nl" ? "nl-BE" : "en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

export function EventCard({ event }: { event: EventItem }) {
  const { t, ui, locale } = useLanguage();
  const accent = event.accent ? ACCENT_VAR[event.accent] : "var(--ink)";
  const dateText = event.dateLabel ? t(event.dateLabel) : formatDate(event.date, locale) ?? ui("tba");

  return (
    <Link
      to="/programma/$slug"
      params={{ slug: event.slug }}
      className="group block border-t border-ink/15 pt-6"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="label-type" style={{ color: accent }}>
          {dateText}
        </span>
        <span className="label-type text-ink/50">{event.city}{event.venue ? ` · ${event.venue}` : ""}</span>
      </div>
      <h3 className="mt-4 font-display text-3xl leading-tight transition-colors group-hover:text-ink md:text-4xl">
        {t(event.title)}
      </h3>
      {event.image && (
        <div className="mt-6 aspect-[4/3] overflow-hidden bg-stone">
          <img
            src={event.image.url}
            alt={t(event.image.alt)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <p className="mt-5 max-w-prose text-ink/70">{t(event.description)}</p>
      <span className="label-type mt-5 inline-flex items-center gap-2 text-ink">
        {ui("cta_more")} <span aria-hidden>→</span>
      </span>
    </Link>
  );
}