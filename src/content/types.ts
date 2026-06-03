import type { Translatable } from "@/lib/i18n/types";

export type EventKind = "workshop" | "qualifier" | "open-mic" | "finale" | "other";

export interface EventItem {
  slug: string;
  kind: EventKind;
  title: Translatable;
  city: string;
  venue?: string;
  date?: string;
  dateLabel?: Translatable;
  description: Translatable;
  image?: { url: string; alt: Translatable };
  ctaUrl?: string;
  accent?: "red" | "blue" | "green" | "yellow" | "purple";
}

export interface ArchiveItem {
  slug: string;
  title: Translatable;
  section: "finale" | "workshops" | "open-mic" | "community";
  year: number;
  type: "photo" | "video" | "aftermovie" | "article";
  image: { url: string; alt: Translatable };
  href?: string;
  span?: "sm" | "md" | "lg" | "xl";
}

export interface Article {
  slug: string;
  title: Translatable;
  excerpt: Translatable;
  body: Translatable;
  author?: string;
  publishedAt: string;
  cover?: { url: string; alt: Translatable };
}

export interface Performer {
  slug: string;
  name: string;
  bio: Translatable;
  city?: string;
  image?: { url: string; alt: Translatable };
}

export interface Partner {
  name: string;
  url?: string;
}