import { FONT_URL } from "@/utils/constants";
import type { Font } from "satori";

export async function loadGoogleFonts() {
  const css = await fetch(FONT_URL).then((res) => res.text());

  const fontUrls = Array.from(css.matchAll(/url\((.*?)\)/g)).map(
    (match) => match[1],
  );

  const fontDataList = await Promise.all(
    fontUrls.map(async (url) => {
      const res = await fetch(url);
      return res.arrayBuffer();
    }),
  );

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
