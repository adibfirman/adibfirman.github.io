import path from "path";
import fs from "fs";
import mimeTypes from "mime-types";

import type { Route } from "./+types/get-image-article";

export function loader({ request: req }: Route.LoaderArgs) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const pathParams = searchParams.get("path") || "";
    const pathImage = path.join(pathParams);

    if (!pathImage) {
      return new Response("error params 'path' not found", { status: 500 });
    }

    const image = fs.readFileSync(pathImage);
    const contentType = mimeTypes.lookup(pathImage);

    return new Response(image as unknown as BodyInit, {
      headers: {
        "Content-Type": contentType || "",
        "Cache-Control": "public, max-age=604800",
      },
    });
  } catch (err) {
    console.error("Error serving image:", err);
    return new Response(err as unknown as BodyInit, { status: 500 });
  }
}
