import fetch from "isomorphic-fetch";
import { URL as ownDomain } from "../next-seo.config";

export default async function getCountMention(pathname: string) {
  const URLWeb = new URL(ownDomain);
  const target = URLWeb.origin + pathname;
  const webmentionURL = `https://webmention.io/api/mentions.jf2?per-page=1000&target=${target}`;
  const configs = { headers: { "Content-Type": "application/json" } };

  const getWebmentionCount = await fetch(webmentionURL, configs);

  const webmention = await getWebmentionCount.json();

  return webmention.count as number;
}
