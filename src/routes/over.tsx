import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui-extra/SectionHeading";

export const Route = createFileRoute("/over")({
  head: () => ({
    meta: [
      { title: "Over — tussenwoorden.be" },
      { name: "description", content: "Tussenwoorden is een platform voor woord, poëzie en podiumkunst in Vlaanderen." },
      { property: "og:title", content: "Over tussenwoorden.be" },
      { property: "og:description", content: "Platform voor woord, poëzie en podiumkunst." },
    ],
    links: [{ rel: "canonical", href: "/over" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();
  return (
    <article className="mx-auto max-w-3xl px-5 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Over"
        title={t({ nl: "Een platform voor woord, poëzie en podiumkunst.", en: "A platform for word, poetry and performance." })}
      />
      <div className="prose mt-10 space-y-6 text-lg leading-relaxed text-ink/80">
        <p>{t({ nl: "Tussenwoorden is een platform voor woord, poëzie en podiumkunst. We verbinden schrijvers, performers en publiek via workshops, open podia, evenementen en de Vlaamse voorrondes van het Nederlands Kampioenschap Poetry Slam.", en: "Tussenwoorden is a platform for word, poetry and performance. We connect writers, performers and audiences through workshops, open mics, events and the Flemish qualifiers of the Dutch Poetry Slam Championship." })}</p>
        <p>{t({ nl: "Vanuit Humus vzw bouwen we aan een plek waar taal kan bewegen tussen pagina en podium, tussen maker en publiek, tussen idee en ontmoeting.", en: "From within Humus vzw, we build a place where language can move between page and stage, between maker and audience, between idea and encounter." })}</p>
        <p>{t({ nl: "Naast live evenementen ontwikkelen we een digitaal platform waar teksten, audio, video en andere vormen van woordkunst een plaats krijgen buiten het boek of podium.", en: "Alongside live events we are developing a digital platform where texts, audio, video and other forms of word art find a place beyond the book or stage." })}</p>
        <p className="font-display text-2xl italic leading-snug text-ink">{t({ nl: "Ruimte voor nieuwe makers. Ruimte voor ervaren stemmen. Ruimte tussen woorden.", en: "Space for new makers. Space for seasoned voices. Space between words." })}</p>
      </div>
    </article>
  );
}