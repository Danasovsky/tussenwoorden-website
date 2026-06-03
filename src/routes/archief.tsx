import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { archive } from "@/content/archive";
import { SectionHeading } from "@/components/ui-extra/SectionHeading";

export const Route = createFileRoute("/archief")({
  head: () => ({
    meta: [
      { title: "Archief — tussenwoorden.be" },
      { name: "description", content: "Beelden, video's en verslagen van workshops, open mics en de Vlaamse Finale NK Poetry Slam." },
      { property: "og:title", content: "Archief — tussenwoorden.be" },
      { property: "og:description", content: "Foto's, video's en verslagen." },
    ],
    links: [{ rel: "canonical", href: "/archief" }],
  }),
  component: ArchivePage,
});

const SPAN: Record<string, string> = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-1 md:row-span-2",
  lg: "md:col-span-2 md:row-span-2",
  xl: "md:col-span-2 md:row-span-3",
};

function ArchivePage() {
  const { t, ui } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <SectionHeading eyebrow={ui("archive")} title={t({ nl: "Beelden tussen woorden.", en: "Images between words." })} />
      <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px]">
        {archive.map((item) => (
          <figure key={item.slug} className={`relative overflow-hidden bg-stone ${SPAN[item.span ?? "md"]}`}>
            <img src={item.image.url} alt={t(item.image.alt)} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            <figcaption className="absolute bottom-2 left-2 label-type bg-paper/90 px-2 py-1 text-ink">{t(item.title)} · {item.year}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}