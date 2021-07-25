import type { NextApiHandler } from "next";
import path from "path";
import fs from "fs";

// import { BLOG_PATH } from "@utils/blogs";

const handler: NextApiHandler = async (req, res) => {
  try {
    // const fileName = req.query.fileName as string;
    // const dirFolder = req.query.dirFolder as string;
    // const pathImage = path.join(BLOG_PATH, dirFolder, fileName);
    // const image = fs.readFileSync(pathImage);

    const a = path.join(__dirname);
    console.log(a);

    const asa = fs.readdirSync(a);

    asa.forEach(file => {
      console.log(file);
    });

    res.status(200).json({ hello: "world" });

    // res.setHeader("content-type", "image/png");
    // res.setHeader("cache-control", "public, max-age=604800");
    // res.send(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default handler;
