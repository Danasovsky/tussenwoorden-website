import type { EventItem } from "./types";
import { photos } from "./assets";

export const events: EventItem[] = [
  {
    slug: "workshop-poetry-slam-gent",
    kind: "workshop",
    title: { nl: "Workshop Poetry Slam Gent", en: "Poetry Slam Workshop Ghent" },
    city: "Gent",
    venue: "Stadsmakers",
    date: "2026-06-14",
    description: {
      nl: "Een workshop voor wie wil proeven van poetry slam, spoken word en podiumkunst. Voor beginners én ervaren makers.",
      en: "A workshop for anyone curious about poetry slam, spoken word and stage performance. For beginners and seasoned makers alike.",
    },
    image: { url: photos.performerOrange, alt: { nl: "Performer op podium", en: "Performer on stage" } },
    accent: "red",
  },
  {
    slug: "workshop-poetry-slam-antwerpen",
    kind: "workshop",
    title: { nl: "Workshop Poetry Slam Antwerpen", en: "Poetry Slam Workshop Antwerp" },
    city: "Antwerpen",
    venue: "Zomerfabriek",
    date: "2026-06-21",
    description: {
      nl: "Werk aan tekst, stem en podiumpresentatie. We bouwen samen aan een set die klaar is voor de voorrondes.",
      en: "Work on text, voice and stage presence. Together we build a set ready for the qualifiers.",
    },
    image: { url: photos.speakerProfile, alt: { nl: "Spreker met microfoon", en: "Speaker with microphone" } },
    accent: "blue",
  },
  {
    slug: "workshop-poetry-slam-kortrijk",
    kind: "workshop",
    title: { nl: "Workshop Poetry Slam Kortrijk", en: "Poetry Slam Workshop Kortrijk" },
    city: "Kortrijk",
    dateLabel: { nl: "Datum volgt", en: "Date TBA" },
    description: {
      nl: "Praktische workshop rond schrijven, performance en stempresentatie.",
      en: "Hands-on workshop around writing, performance and vocal presence.",
    },
    image: { url: photos.jury, alt: { nl: "Jurylid aan tafel", en: "Jury member at table" } },
    accent: "green",
  },
  {
    slug: "workshop-poetry-slam-hasselt",
    kind: "workshop",
    title: { nl: "Workshop Poetry Slam Hasselt", en: "Poetry Slam Workshop Hasselt" },
    city: "Hasselt",
    dateLabel: { nl: "Datum volgt", en: "Date TBA" },
    description: {
      nl: "Schrijf, oefen en deel met andere makers. Een veilige plek om je stem te vinden.",
      en: "Write, rehearse and share with other makers. A safe space to find your voice.",
    },
    image: { url: photos.audience, alt: { nl: "Publiek in de zaal", en: "Audience in the venue" } },
    accent: "yellow",
  },
  {
    slug: "nk-poetry-slam-gent",
    kind: "qualifier",
    title: { nl: "Voorronde NK Poetry Slam — Gent", en: "NK Poetry Slam Qualifier — Ghent" },
    city: "Gent",
    date: "2026-07-01",
    description: {
      nl: "De Gentse voorronde van het Nederlands Kampioenschap Poetry Slam.",
      en: "The Ghent qualifying round of the Dutch Poetry Slam Championship.",
    },
    image: { url: photos.stageWide, alt: { nl: "Podium met performer", en: "Stage with performer" } },
    accent: "red",
  },
  {
    slug: "nk-poetry-slam-turnhout",
    kind: "qualifier",
    title: { nl: "Voorronde NK Poetry Slam — Turnhout", en: "NK Poetry Slam Qualifier — Turnhout" },
    city: "Turnhout",
    date: "2026-07-02",
    description: {
      nl: "Turnhoutse voorronde. Acht performers, drie minuten per stuk.",
      en: "Turnhout qualifier. Eight performers, three minutes each.",
    },
    image: { url: photos.mic, alt: { nl: "Microfoon onder podiumlicht", en: "Microphone under stage light" } },
    accent: "blue",
  },
  {
    slug: "nk-poetry-slam-antwerpen",
    kind: "qualifier",
    title: { nl: "Voorronde NK Poetry Slam — Antwerpen", en: "NK Poetry Slam Qualifier — Antwerp" },
    city: "Antwerpen",
    date: "2026-07-06",
    description: {
      nl: "Antwerpse voorronde van het NK Poetry Slam.",
      en: "Antwerp qualifying round of the NK Poetry Slam.",
    },
    image: { url: photos.hearts, alt: { nl: "Publiek toont hartjes", en: "Audience holding heart cards" } },
    accent: "purple",
  },
  {
    slug: "nk-poetry-slam-kortrijk",
    kind: "qualifier",
    title: { nl: "Voorronde NK Poetry Slam — Kortrijk", en: "NK Poetry Slam Qualifier — Kortrijk" },
    city: "Kortrijk",
    date: "2026-08-14",
    description: { nl: "Kortrijkse voorronde.", en: "Kortrijk qualifying round." },
    image: { url: photos.lineup, alt: { nl: "Line-up op podium", en: "Line-up on stage" } },
    accent: "green",
  },
  {
    slug: "nk-poetry-slam-hasselt",
    kind: "qualifier",
    title: { nl: "Voorronde NK Poetry Slam — Hasselt", en: "NK Poetry Slam Qualifier — Hasselt" },
    city: "Hasselt",
    dateLabel: { nl: "Augustus 2026 — datum volgt", en: "August 2026 — date TBA" },
    description: { nl: "Hasseltse voorronde van het NK Poetry Slam.", en: "Hasselt qualifying round of the NK Poetry Slam." },
    image: { url: photos.audience, alt: { nl: "Publiek in zaal", en: "Audience in the room" } },
    accent: "yellow",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
export const workshops = () => events.filter((e) => e.kind === "workshop");
export const qualifiers = () => events.filter((e) => e.kind === "qualifier");