import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { workshops, qualifiers } from "@/content/events";
import { EventCard } from "@/components/ui-extra/EventCard";
import { SectionHeading } from "@/components/ui-extra/SectionHeading";

export const Route = createFileRoute("/programma")({
  head: () => ({
    meta: [
      { title: "Workshops & Events — tussenwoorden.be" },
      { name: "description", content: "Workshops, open podia en voorrondes van het NK Poetry Slam Vlaanderen." },
      { property: "og:title", content: "Workshops & Events" },
      { property: "og:description", content: "Workshops en voorrondes NK Poetry Slam Vlaanderen." },
    ],
    links: [{ rel: "canonical", href: "/programma" }],
  }),
  component: ProgramPage,
});

function ProgramPage() {
  const { ui, t } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <SectionHeading eyebrow={ui("nav_program")} title={t({ nl: "Schrijf, oefen, sta op het podium.", en: "Write, rehearse, take the stage." })} />
      <section className="mt-16">
        <h2 className="label-type text-ink/60">{ui("workshops")}</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {workshops().map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      </section>
      <section className="mt-24">
        <h2 className="label-type text-ink/60">{ui("qualifiers")}</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {qualifiers().map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      </section>
    </div>
  );
}