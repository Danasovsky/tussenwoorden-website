import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

interface Props {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
}

const cls = (v: Variant) => v === "primary"
  ? "inline-flex items-center gap-3 bg-ink px-6 py-4 label-type text-paper transition-colors hover:bg-ink/85"
  : "inline-flex items-center gap-3 border border-ink/30 px-6 py-4 label-type text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper";

export function CTAButton({ to, href, variant = "primary", children }: Props) {
  const className = cls(variant);
  const inner = <>{children} <span aria-hidden>→</span></>;
  if (to) return <Link to={to} className={className}>{inner}</Link>;
  return <a href={href ?? "#"} className={className}>{inner}</a>;
}