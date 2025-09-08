import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

import type { Route } from "./+types/open-graph-image";
import { loadGoogleFonts } from "@/utils/og-images/load-google-fonts";
import { constructDefaultHTML } from "@/utils/og-images/construct-default-html";

export async function loader({ request: req }: Route.LoaderArgs) {
  try {
    const search = new URLSearchParams(new URL(req.url).searchParams);
    const customCoverPath = search.get("customCoverPath") || "";

    const fonts = await loadGoogleFonts();
    const html = await constructDefaultHTML({ customCoverPath });
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
