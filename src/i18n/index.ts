import en from "./en";
import zhTw from "./zh-tw";
import type { Translation, Lang } from "./types";

export type { Translation, Lang };

const translations: Record<Lang, Translation> = {
  en,
  "zh-tw": zhTw,
};

export function t(lang: Lang): Translation {
  return translations[lang];
}

/** Build the URL for the same page in the opposite locale.
 *  Default locale (zh-tw) sits at /; English lives at /en/*. */
export function toggleLocaleHref(currentPath: string, currentLang: Lang): string {
  if (currentLang === "zh-tw") {
    // / → /en/ ; /qa-master → /en/qa-master
    if (currentPath === "/" || currentPath === "") return "/en/";
    return `/en${currentPath}`;
  }
  // en → zh-tw: strip the /en prefix
  const stripped = currentPath.replace(/^\/en/, "");
  return stripped || "/";
}

/** Build links to family deep pages in the same locale.
 *  zh-tw is the default and lives at the root; en is prefixed /en. */
export function localePath(lang: Lang, slug: string): string {
  const cleaned = slug.startsWith("/") ? slug : `/${slug}`;
  if (lang === "zh-tw") return cleaned === "/" ? "/" : cleaned;
  return cleaned === "/" ? "/en/" : `/en${cleaned}`;
}
