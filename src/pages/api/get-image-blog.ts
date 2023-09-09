import type { NextApiHandler } from "next";
import path from "path";
import fs from "fs";

import { BLOG_PATH } from "@utils/blogs";

const handler: NextApiHandler = async (req, res) => {
  try {
    const fileName = req.query.fileName as string;
    const dirFolder = req.query.dirFolder as string;
    const pathImage = path.join(BLOG_PATH, dirFolder, fileName);
    const image = fs.readFileSync(pathImage);

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=604800");
    res.send(image);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export default handler;
