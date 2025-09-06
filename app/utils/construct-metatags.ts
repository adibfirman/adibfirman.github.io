import { DEFAULT_META } from "./constants";

type Options = Partial<{
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image: string;
  locale: string;
}>;

function returnSafeArray<T extends unknown>(source: unknown, data: T) {
  const isSafe =
    (typeof source === "string" || Array.isArray(source)) &&
    source !== undefined;

  return isSafe ? data : [];
}

export function constructMetaTags(options: Options) {
  const {
    title = DEFAULT_META.TITLE,
    description = DEFAULT_META.DESCRIPTION,
    keywords,
    url,
    image,
    locale = "en",
  } = options;

  return [
    ...returnSafeArray(keywords, [
      { name: "keywords", content: keywords?.join(", ") },
    ]),
    ...returnSafeArray(url, [{ property: "og:url", content: url }]),
    ...returnSafeArray(image, [
      { property: "og:image", content: image },
      { property: "twitter:image", content: image },
    ]),
    { title },
    { name: "description", content: description },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
    { property: "og:title", content: title },
    { property: "og:site_name", content: DEFAULT_META.TITLE },
    { property: "og:locale", content: locale },
    { property: "og:description", content: description },
  ];
}
