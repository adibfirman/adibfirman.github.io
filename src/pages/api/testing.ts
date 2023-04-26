import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const { pid, trackingImpression, publisherID, design } = req.query;
    const [width, height] = (design as string).split("x");

    const trackingClick =
      "https://ta-staging.tokopedia.com/promo/v1/clicks/token-token?dv=android&r=https://tokopedia.link/S0mOPhDXizb&src=recom_widget_pdp_3";

    res.json({
      data: {
        adm: `
          <iframe
            onload="window.addEventListener('message', e => {if (e.data.variant === 'tkpd-pid-${pid}-design-${design}-ready') this.contentWindow.postMessage(JSON.stringify({ variant: 'tkpd-pid-${pid}-design-${design}', data: { trackingClick: '${trackingClick}', trackingImpression: '${trackingImpression}' } }), '*'); })"
            src="https://63-staging-feature.tokopedia.com/external/product?design=${design}&publisher_id=${publisherID}&product_id=${pid}"
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
