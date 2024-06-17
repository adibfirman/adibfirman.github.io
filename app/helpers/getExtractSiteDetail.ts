import { JSDOM } from "jsdom";

export function getExtractSiteDetail(domAsText: string) {
  try {
    const dom = new JSDOM(domAsText);
    const document = dom.window.document;
    const metaTagsDOM = document.querySelectorAll("meta");

    const metaTags = Array.from(metaTagsDOM).reduce(
      (tags: Record<string, string>, meta) => {
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop");

        const content = meta.getAttribute("content");

        if (name && content) tags[name] = content;
        return tags;
      },
      {}
    );

    const icon =
      document.querySelector('[rel="icon"]')?.getAttribute("href") || "";
    const siteName = metaTags["og:site_name"];
    const title = metaTags["og:title"];
    const url = metaTags["og:url"];

    return { icon, siteName, title, url };
  } catch (error) {
    throw new Error(`is not valid HTML DOM -- detail: ${error}`);
  }
}
