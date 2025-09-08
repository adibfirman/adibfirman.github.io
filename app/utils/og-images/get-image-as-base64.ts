import fs from "fs/promises";
import path from "path";

const AVIF = "image/avif";
const WEBP = "image/webp";
const APNG = "image/apng";
const PNG = "image/png";
const JPEG = "image/jpeg";
const GIF = "image/gif";
const SVG = "image/svg+xml";

export async function getImageAsBase64(imagePath: string) {
  try {
    const getPath = path.join(process.cwd(), imagePath);
    const imageData = await fs.readFile(getPath);
    const imageType = (() => {
      const extension = path
        .extname(imagePath)
        .toLocaleLowerCase()
        .replace(".", "");

      switch (extension) {
        case "svg":
          return SVG;
        case "gif":
          return GIF;
        case "png":
          return PNG;
        case "avif":
          return AVIF;
        case "apng":
          return APNG;
        case "webp":
          return WEBP;
        case "jpg":
        case "jpeg":
          return JPEG;
        default:
          throw new Error("Image Extension Not Supported Yet");
      }
    })();

    const imageBase64 = Buffer.from(imageData).toString("base64");
    const imageBase64Url = `data:${imageType};base64,${imageBase64}`;

    return imageBase64Url;
  } catch (err) {
    throw err;
  }
}
