import type { NextApiHandler } from "next";

const generateSocialImage = ({
  title = "",
  pathURL = "",
  cloudName = "adibfirman",
  imagePublicID = "meta-image_h22h0y",
  cloudinaryUrlBase = "https://res.cloudinary.com",
  imageWidth = 1280,
  imageHeight = 669
}) => {
  // configure social media image dimensions, quality, and format
  const imageConfig = [`w_${imageWidth}`, `h_${imageHeight}`].join(",");

  // configure the title text
  const titleConfig = [
    `w_900`,
    "c_fit",
    "x_48",
    `l_text:arial_48:${encodeURIComponent(title)}`,
    "g_west"
  ].join(",");

  // configure the tagline text
  const pathURLConfig = [
    "g_south",
    "y_16",
    `l_text:arial_40_light:${encodeURIComponent(pathURL)}`
  ].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    titleConfig,
    pathURLConfig,
    imagePublicID
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
};

const handler: NextApiHandler = async (req, res) => {
  try {
    const title = req.query.title as string;
    const pathURL = req.query.pathURL as string;

    const getImage = generateSocialImage({
      title: encodeURIComponent(title),
      pathURL: encodeURIComponent(pathURL)
    });

    const fetchImage = await fetch(getImage);
    const blobImg = await fetchImage.arrayBuffer();
    const bufferBase64 = Buffer.from(blobImg);

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=86400");
    res.send(bufferBase64);
    res.send(getImage);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
