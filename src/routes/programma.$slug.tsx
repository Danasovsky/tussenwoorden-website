import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { getEvent } from "@/content/events";
import { CTAButton } from "@/components/ui-extra/CTAButton";

export const Route = createFileRoute("/programma/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.event.title.nl} — tussenwoorden.be` },
      { name: "description", content: loaderData.event.description.nl },
    ] : [],
  }),
  component: EventPage,
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const { t, ui, locale } = useLanguage();
  const date = event.dateLabel ? t(event.dateLabel) : event.date
    ? new Date(event.date + "T00:00:00").toLocaleDateString(locale === "nl" ? "nl-BE" : "en-GB", { day: "2-digit", month: "long", year: "numeric" })
    : ui("tba");
  return (
    <article className="mx-auto max-w-4xl px-5 py-20 lg:px-10">
      <Link to="/programma" className="label-type text-ink/60 hover:text-ink">← {ui("back")}</Link>
      <p className="label-type mt-8 text-ink/60">{date} · {event.city}{event.venue ? ` · ${event.venue}` : ""}</p>
      <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t(event.title)}</h1>
      {event.image && (
        <div className="mt-10 aspect-[16/10] overflow-hidden bg-stone">
          <img src={event.image.url} alt={t(event.image.alt)} className="h-full w-full object-cover" />
        </div>
      )}
      <p className="mt-10 max-w-prose text-lg text-ink/80">{t(event.description)}</p>
      <div className="mt-10"><CTAButton to="/contact">{ui("cta_signup")}</CTAButton></div>
    </article>
  );
}