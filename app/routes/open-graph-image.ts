import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

import { loadGoogleFonts } from "@/utils/og-images/load-google-fonts";
import { constructDefaultHTML } from "@/utils/og-images/construct-default-html";
import { getImageAsBase64 } from "@/utils/og-images/get-image-as-base64";
import { PARAMS_CUSTOM_OG_IMAGE } from "@/utils/og-images/constants";

import type { Route } from "./+types/open-graph-image";

export async function loader({ request: req }: Route.LoaderArgs) {
  try {
    const url = new URL(req.url);
    const search = new URLSearchParams(url.searchParams);

    const title = search.get(PARAMS_CUSTOM_OG_IMAGE.title) || "";
    const excerpt = search.get(PARAMS_CUSTOM_OG_IMAGE.excerpt) || "";
    const createdAt = search.get(PARAMS_CUSTOM_OG_IMAGE.createdAt) || "";
    const customCoverPath =
      search.get(PARAMS_CUSTOM_OG_IMAGE.customCoverPath) || "";

    const pathBgCover = customCoverPath || "og-cover.svg";
    const bgCoverBase64 = await getImageAsBase64(
      `${url.origin}/${pathBgCover}`,
    );

    const avatarImg = await getImageAsBase64(`${url.origin}/profile.jpg`);

    const html = await constructDefaultHTML({
      customCoverPath: bgCoverBase64,
      useArticleDetailStyle: Boolean(customCoverPath),
      title,
      excerpt,
      createdAt,
      avatarImg,
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
