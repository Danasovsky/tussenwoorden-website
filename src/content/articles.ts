import type { Article } from "./types";
export const articles: Article[] = [];
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);