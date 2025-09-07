import type { Route } from "./+types/meta-tags-images";
import satori, { type Font } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

async function loadGoogleFonts() {
  const cssUrl =
    "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap";

  // 1. Fetch CSS
  const css = await fetch(cssUrl).then((res) => res.text());

  // 2. Extract all font URLs
  const fontUrls = Array.from(css.matchAll(/url\((.*?)\)/g)).map(
    (match) => match[1],
  );

  // 3. Fetch all fonts as ArrayBuffers
  const fontDataList = await Promise.all(
    fontUrls.map(async (url) => {
      const res = await fetch(url);
      return res.arrayBuffer();
    }),
  );

  // 4. Map manually to font configs
  // (order depends on the CSS, check weights!)
  const fonts: Font[] = [
    {
      name: "Fira Code",
      data: fontDataList[0],
      weight: 400,
      style: "normal",
    },
    {
      name: "Fira Code",
      data: fontDataList[1],
      weight: 500,
      style: "normal",
    },
    {
      name: "Lato",
      data: fontDataList[2],
      weight: 400,
      style: "normal",
    },
    {
      name: "Lato",
      data: fontDataList[3],
      weight: 700,
      style: "normal",
    },
    {
      name: "Montserrat",
      data: fontDataList[4],
      weight: 600,
      style: "normal",
    },
    {
      name: "Montserrat",
      data: fontDataList[5],
      weight: 700,
      style: "normal",
    },
  ];

  return fonts;
}

export async function loader({ request: req }: Route.LoaderArgs) {
  try {
    const search = new URLSearchParams(new URL(req.url).searchParams);
    const title = search.get("title");

    const fonts = await loadGoogleFonts();
    const svg = await satori(
      html`<div class="flex w-full h-full bg-yellow-300">
        <span
          class="text-sm text-indigo-400 font-bold"
          style="font-family:'Montserrat'"
          >${title}</span
        >
      </div>` as React.ReactNode,
      {
        width: 1200,
        height: 628,
        embedFont: false,
        fonts,
      },
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer as unknown as BodyInit, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (err) {
    console.error("Error serving image:", err);
    return new Response("Image generate error", { status: 500 });
  }
}
