import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { brand, photos } from "@/content/assets";
import { site } from "@/content/site";
import { events, workshops, qualifiers } from "@/content/events";
import { EventCard } from "@/components/ui-extra/EventCard";
import { SectionHeading } from "@/components/ui-extra/SectionHeading";
import { CTAButton } from "@/components/ui-extra/CTAButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tussenwoorden.be — Ruimte voor woord, poëzie en podiumkunst" },
      { name: "description", content: "Tussenwoorden verbindt schrijvers, performers en publiek via workshops, open podia en de Vlaamse voorrondes van het NK Poetry Slam." },
      { property: "og:title", content: "tussenwoorden.be" },
      { property: "og:description", content: "Ruimte voor woord, poëzie en podiumkunst." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, ui } = useLanguage();
  const upcoming = [...workshops(), ...qualifiers()].slice(0, 6);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 grid-paper opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <div>
            <p className="label-type text-ink/60">tussenwoorden.be · Vlaanderen</p>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight">
              tussen<br /><span className="italic">woorden</span>
              <span className="font-mono-type align-top text-2xl text-ink/60">.be</span>
            </h1>
            <p className="mt-8 max-w-xl font-display text-2xl leading-snug md:text-3xl">{t(site.tagline)}</p>
            <p className="mt-6 max-w-xl text-lg text-ink/70">
              {t({
                nl: "Tussenwoorden verbindt schrijvers, performers en publiek via workshops, open podia, evenementen en de Vlaamse voorrondes van het NK Poetry Slam.",
                en: "Tussenwoorden connects writers, performers and audiences through workshops, open mics, events and the Flemish qualifiers of the NK Poetry Slam.",
              })}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTAButton to="/contact" variant="primary">{ui("cta_signup")}</CTAButton>
              <CTAButton to="/programma" variant="ghost">{ui("cta_program")}</CTAButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <img src={photos.stageWide} alt="Podium tussenwoorden" className="h-full w-full object-cover" />
            <img src={brand.logo} alt="" aria-hidden className="absolute bottom-4 right-4 h-10 w-auto opacity-90 mix-blend-difference invert" />
          </div>
        </div>
      </section>

      {/* Poetry fragment */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-10">
        <p className="font-display text-3xl italic leading-snug text-ink/80 md:text-4xl">
          “Ruimte voor nieuwe makers.<br />Ruimte voor ervaren stemmen.<br />Ruimte tussen woorden.”
        </p>
      </section>

      {/* Program preview */}
      <section className="border-t border-ink/15 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow={ui("upcoming")}
              title={t({ nl: "Workshops & voorrondes", en: "Workshops & qualifiers" })}
              intro={t({
                nl: "Schrijf je in voor een workshop of een voorronde van het NK Poetry Slam Vlaanderen.",
                en: "Sign up for a workshop or a qualifier of the NK Poetry Slam Flanders.",
              })}
            />
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {upcoming.map((e) => <EventCard key={e.slug} event={e} />)}
          </div>
          <div className="mt-12">
            <CTAButton to="/programma" variant="ghost">{ui("all_events")}</CTAButton>
          </div>
        </div>
      </section>

      {/* Why participate */}
      <section className="border-t border-ink/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 lg:px-10">
          <SectionHeading
            eyebrow="01"
            title={t({ nl: "Heb je nog nooit op een podium gestaan?", en: "Never stood on a stage?" })}
          />
          <div>
            <p className="text-lg text-ink/80">
              {t({
                nl: "Dat is geen probleem. Onze workshops en voorrondes staan open voor zowel beginnende als ervaren makers. Of je nu voor het eerst een tekst deelt of al jarenlang optreedt — Tussenwoorden biedt ruimte om te groeien, te experimenteren en andere makers te ontmoeten.",
                en: "That's no problem. Our workshops and qualifiers welcome both beginners and seasoned makers. Whether you're sharing your first text or have been performing for years — Tussenwoorden is a space to grow, experiment and meet other makers.",
              })}
            </p>
            <div className="mt-8"><CTAButton to="/contact">{ui("cta_signup")}</CTAButton></div>
          </div>
        </div>
      </section>

      {/* Digital platform */}
      <section className="border-t border-ink/15 bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 lg:px-10">
          <div>
            <p className="label-type text-paper/60">{ui("coming_soon")}</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              {t({ nl: "Woorden hoeven niet op papier te blijven.", en: "Words don't have to stay on paper." })}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-paper/80">
            <p>{t({
              nl: "Tussenwoorden ontwikkelt een digitaal platform waar teksten, audio, video en experimentele vormen van woordkunst gedeeld kunnen worden.",
              en: "Tussenwoorden is developing a digital platform where texts, audio, video and experimental forms of word art can be shared.",
            })}</p>
            <ul className="grid grid-cols-2 gap-2 label-type text-paper/70">
              <li>— Poetry</li><li>— Spoken word</li><li>— Essays</li>
              <li>— Audio</li><li>— Performances</li><li>— New voices</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
