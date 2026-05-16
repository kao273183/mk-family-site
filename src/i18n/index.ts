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

/** Build the URL for the same page in the opposite locale. */
export function toggleLocaleHref(currentPath: string, currentLang: Lang): string {
  if (currentLang === "en") {
    // /qa-master → /zh-tw/qa-master ; / → /zh-tw/
    if (currentPath === "/" || currentPath === "") return "/zh-tw/";
    return `/zh-tw${currentPath}`;
  }
  // zh-tw → en: strip /zh-tw prefix
  const stripped = currentPath.replace(/^\/zh-tw/, "");
  return stripped || "/";
}

/** Build links to family deep pages in the same locale. */
export function localePath(lang: Lang, slug: string): string {
  const cleaned = slug.startsWith("/") ? slug : `/${slug}`;
  if (lang === "en") return cleaned === "/" ? "/" : cleaned;
  return cleaned === "/" ? "/zh-tw/" : `/zh-tw${cleaned}`;
}
