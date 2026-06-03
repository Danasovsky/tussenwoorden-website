import type { ArchiveItem } from "./types";
import { photos } from "./assets";

export const archive: ArchiveItem[] = [
  { slug: "finale-2025-lineup", title: { nl: "Line-up Vlaamse Finale", en: "Flemish Final Line-up" }, section: "finale", year: 2025, type: "photo", image: { url: photos.lineup, alt: { nl: "Performers op podium", en: "Performers on stage" } }, span: "lg" },
  { slug: "open-mic-mic", title: { nl: "Microfoon", en: "Microphone" }, section: "open-mic", year: 2025, type: "photo", image: { url: photos.mic, alt: { nl: "Microfoon", en: "Microphone" } }, span: "sm" },
  { slug: "open-mic-performer", title: { nl: "Performer", en: "Performer" }, section: "open-mic", year: 2025, type: "photo", image: { url: photos.performerOrange, alt: { nl: "Performer", en: "Performer" } }, span: "md" },
  { slug: "community-audience", title: { nl: "Publiek", en: "Audience" }, section: "community", year: 2025, type: "photo", image: { url: photos.audience, alt: { nl: "Publiek in zaal", en: "Audience" } }, span: "md" },
  { slug: "community-hearts", title: { nl: "Stemmen met hartjes", en: "Voting with hearts" }, section: "community", year: 2025, type: "photo", image: { url: photos.hearts, alt: { nl: "Hartjes", en: "Hearts" } }, span: "xl" },
  { slug: "workshops-jury", title: { nl: "Jury", en: "Jury" }, section: "workshops", year: 2025, type: "photo", image: { url: photos.jury, alt: { nl: "Jury", en: "Jury" } }, span: "md" },
  { slug: "workshops-speaker", title: { nl: "Spreker", en: "Speaker" }, section: "workshops", year: 2025, type: "photo", image: { url: photos.speakerProfile, alt: { nl: "Spreker", en: "Speaker" } }, span: "md" },
  { slug: "finale-stage", title: { nl: "Hoofdpodium", en: "Main stage" }, section: "finale", year: 2025, type: "photo", image: { url: photos.stageWide, alt: { nl: "Podium", en: "Stage" } }, span: "lg" },
];