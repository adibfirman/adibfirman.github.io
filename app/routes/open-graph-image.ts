import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

import { loadGoogleFonts } from "@/utils/og-images/load-google-fonts";
import { constructDefaultHTML } from "@/utils/og-images/construct-default-html";
import { PARAMS_CUSTOM_OG_IMAGE } from "@/utils/og-images/constants";

import type { Route } from "./+types/open-graph-image";

export async function loader({ request: req }: Route.LoaderArgs) {
  try {
    const url = new URL(req.url);
    const search = new URLSearchParams(url.searchParams);
    const queryParams: Record<keyof typeof PARAMS_CUSTOM_OG_IMAGE, string> = {
      title: "",
      customCoverPath: "",
      excerpt: "",
      createdAt: "",
      isRegionalContent: "",
    };

    for (const searchParamsKey of search.keys()) {
      queryParams[searchParamsKey as keyof typeof PARAMS_CUSTOM_OG_IMAGE] =
        search.get(searchParamsKey) || "";
    }

    const pathBgCover = queryParams.customCoverPath
      ? `${url.origin}/api/get-image-article?path=${queryParams.customCoverPath}`
      : "og-cover.svg";

    const html = await constructDefaultHTML({
      ...queryParams,
      customCoverPath: pathBgCover,
      useArticleDetailStyle: Boolean(queryParams.customCoverPath),
      avatarImg: `${url.origin}/profile.jpg`,
    });

    const fonts = await loadGoogleFonts();
    const svg = await satori(html, {
      width: 1200,
      height: 628,
      fonts,
    });

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer as unknown as BodyInit, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (err) {
    console.error("Error serving image:", err);
    return new Response(err as unknown as BodyInit, { status: 500 });
  }
}
