import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui-extra/SectionHeading";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — tussenwoorden.be" },
      { name: "description", content: "Neem contact op met Tussenwoorden, een initiatief van Humus vzw." },
      { property: "og:title", content: "Contact — tussenwoorden.be" },
      { property: "og:description", content: "Een initiatief van Humus vzw." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { ui, t } = useLanguage();
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-2 lg:px-10">
      <div>
        <SectionHeading
          eyebrow={ui("nav_contact")}
          title={t({ nl: "Schrijf ons.", en: "Write to us." })}
          intro={t({ nl: "Tussenwoorden is een initiatief van Humus vzw.", en: "Tussenwoorden is an initiative of Humus vzw." })}
        />
        <ul className="mt-8 space-y-2 text-lg">
          <li><a className="underline-offset-4 hover:underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
          <li><a className="underline-offset-4 hover:underline" href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a className="underline-offset-4 hover:underline" href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="space-y-5"
      >
        <label className="block">
          <span className="label-type text-ink/60">{ui("name")}</span>
          <input required className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-ink focus:outline-none" />
        </label>
        <label className="block">
          <span className="label-type text-ink/60">{ui("email")}</span>
          <input required type="email" className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-ink focus:outline-none" />
        </label>
        <label className="block">
          <span className="label-type text-ink/60">{ui("message")}</span>
          <textarea required rows={6} className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-ink focus:outline-none" />
        </label>
        <button type="submit" className="inline-flex items-center gap-3 bg-ink px-6 py-4 label-type text-paper hover:bg-ink/85">
          {ui("send")} <span aria-hidden>→</span>
        </button>
        {sent && <p className="label-type text-ink/70">{ui("form_thanks")}</p>}
      </form>
    </div>
  );
}