import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { site } from "@/content/site";

export function SiteFooter() {
  const { ui, t } = useLanguage();
  return (
    <footer className="mt-32 border-t border-ink/15 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <h2 className="font-display text-3xl leading-none">tussen<br />woorden<span className="font-mono-type text-base align-top">.be</span></h2>
          <p className="label-type mt-4 text-ink/60">{t(site.tagline)}</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 label-type text-ink/70">
          <Link to="/over">{ui("nav_about")}</Link>
          <Link to="/programma">{ui("nav_program")}</Link>
          <Link to="/archief">{ui("nav_archive")}</Link>
          <Link to="/platform">{ui("nav_platform")}</Link>
          <Link to="/contact">{ui("nav_contact")}</Link>
        </nav>
        <div className="space-y-2 text-sm">
          <a href={`mailto:${site.contactEmail}`} className="block underline-offset-4 hover:underline">{site.contactEmail}</a>
          <a href={site.socials.instagram} className="block underline-offset-4 hover:underline" target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.socials.facebook} className="block underline-offset-4 hover:underline" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 label-type text-ink/50 md:flex-row md:items-center lg:px-10">
          <span>© {new Date().getFullYear()} tussenwoorden.be</span>
          <span>{ui("initiative")}</span>
        </div>
      </div>
    </footer>
  );
}