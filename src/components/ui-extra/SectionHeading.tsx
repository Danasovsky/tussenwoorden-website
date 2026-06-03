import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, intro, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="label-type text-ink/60">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      {intro && <div className="mt-4 text-lg text-ink/70 md:text-xl">{intro}</div>}
    </div>
  );
}