import type { NextApiHandler } from "next";
import path from "path";
import fs from "fs";
import chrome from "chrome-aws-lambda";
import pptr from "puppeteer";
import qs from "querystring";
import absoluteURL from "next-absolute-url";

import { blogsFilePaths, BLOG_PATH } from "@utils/blogs";

const handler: NextApiHandler = async (req, res) => {
  try {
    const fileName = req.query.fileName as string;
    const dirFolder = req.query.dirFolder as string;
    let image;

    blogsFilePaths.forEach(dirBlog => {
      if (dirBlog === dirFolder) {
        const removeSlashFileName = fileName.replace("./", "");
        const pathImage = path.join(BLOG_PATH, dirBlog, removeSlashFileName);
        const readImage = fs.readFileSync(pathImage);

        image = readImage;
      }
    });

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=604800");
    res.send(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default handler;
