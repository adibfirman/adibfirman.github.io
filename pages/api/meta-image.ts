/**
 * thanks @grikomsn
 * the origin source code from https://github.com/grikomsn/nextplate/blob/master/src/pages/api/social-image.ts
 * with sligtly change
 */
import type { Browser } from "puppeteer";
import type { NextApiHandler } from "next";
import chrome from "chrome-aws-lambda";
import pptr from "puppeteer";
import qs from "querystring";
import absoluteURL from "next-absolute-url";

const isDev = process.env.NODE_ENV === "development";
let browser: Browser;

const handler: NextApiHandler = async (req, res) => {
	try {
		const title = req.query.title as string;
		const pathURL = req.query.pathURL as string;
		const query = qs.stringify({ title, pathURL });

		const { origin } = absoluteURL(req);
		const url = `${origin}/meta-image?${query}`;

		browser = await chrome.puppeteer.launch({
			ignoreDefaultArgs: ["--disable-extensions"],
			args: isDev ? [] : chrome.args,
			defaultViewport: chrome.defaultViewport,
			executablePath: isDev ? pptr.executablePath() : await chrome.executablePath,
			headless: isDev ? true : chrome.headless,
			ignoreHTTPSErrors: true
		});

		const page = await browser.newPage();

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
