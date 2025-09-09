const AVIF = "image/avif";
const WEBP = "image/webp";
const APNG = "image/apng";
const PNG = "image/png";
const JPEG = "image/jpeg";
const GIF = "image/gif";
const SVG = "image/svg+xml";

function getExtensionFromPath(path: string): string | null {
  const parts = path.split(".");
  return parts.length > 1 ? (parts.pop() ?? null) : null;
}

export async function getImageAsBase64(url: string) {
  try {
    const imageType = (() => {
      const extension = getExtensionFromPath(url);

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

    console.log("----url----", url);

    const getImage = await fetch(url);
    const bufferImage = await getImage.arrayBuffer();
    const imageBase64 = Buffer.from(bufferImage).toString("base64");
    const imageBase64Url = `data:${imageType};base64,${imageBase64}`;

    return imageBase64Url;
  } catch (err) {
    throw err;
  }
}
