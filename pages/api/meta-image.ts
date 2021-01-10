import type { NextApiHandler } from "next";
import qs from "querystring";
import absoluteURL from "next-absolute-url";

import { getPage } from "./_lib/chromium";

const isDev = process.env.NODE_ENV === "development";
let browser: any;

const handler: NextApiHandler = async (req, res) => {
  try {
    const title = req.query.title as string;
    const pathURL = req.query.pathURL as string;
    const query = qs.stringify({ title, pathURL });

    const { origin } = absoluteURL(req);

    const page = await getPage(isDev);
    const url = `${origin}/meta-image?${query}`;

    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(url, { waitUntil: "load" });

    const screenshot = await page.screenshot({ encoding: "binary" });

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=604800");
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (browser) await browser.close();
  }
};

export default handler;
