import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui-extra/SectionHeading";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Digitaal platform — tussenwoorden.be" },
      { name: "description", content: "Een digitaal platform voor poëzie, spoken word, essays, audio en performance." },
      { property: "og:title", content: "Digitaal platform — tussenwoorden.be" },
      { property: "og:description", content: "Binnenkort: woorden buiten boek en podium." },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  const { t, ui } = useLanguage();
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 lg:px-10">
      <p className="label-type text-ink/60">{ui("coming_soon")}</p>
      <SectionHeading
        title={t({ nl: "Woorden hoeven niet op papier te blijven.", en: "Words don't have to stay on paper." })}
        intro={t({
          nl: "Tussenwoorden ontwikkelt een digitaal platform waar teksten, audio, video en experimentele vormen van woordkunst gedeeld kunnen worden.",
          en: "Tussenwoorden is developing a digital platform where texts, audio, video and experimental forms of word art can be shared.",
        })}
      />
      <ul className="mt-10 grid grid-cols-2 gap-2 label-type text-ink/70 md:grid-cols-3">
        <li>— Poetry</li><li>— Spoken word</li><li>— Essays</li>
        <li>— Audio</li><li>— Performances</li><li>— Emerging voices</li>
      </ul>
    </section>
  );
}