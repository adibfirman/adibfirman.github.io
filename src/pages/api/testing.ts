import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const { pid, trackingClick, trackingImpression, publisherID, design } = req.query;
    const [width, height] = (design as string).split("x");

    res.json({
      data: {
        adm: `
          <iframe
            onload="this.contentWindow.postMessage(JSON.stringify({ variant: 'tkpd-products-${pid}', data: { trackingClick: '${trackingClick}', trackingImpression: '${trackingImpression}' } }), '*')"
            src="https://15-beta-feature.tokopedia.com/external/product?design=${design}&publisher_id=${publisherID}&product_id=${pid}"
            width="${width}"
            height="${height}"
          ></iframe>`
      }
    });
  } catch (err) {
    // res.status(500).json({ error: err.message });
    // onload="this.contentWindow.postMessage(JSON.stringify({ variant: 'tkpd-products-${pid}', data: { trackingClick: '${trackingClick}', trackingImpression: '${trackingImpression}' } }), '*')"
  }
};

export default handler;
