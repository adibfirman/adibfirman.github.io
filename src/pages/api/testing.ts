import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    res.json({
      data: {
        adm:
          '<iframe src="/test-iframe?design=320x100&publisher_id=123&product_id=123" width="320px" height="100px"></iframe><script id="tkpd-ta-products-123" type="application/json">{ "imgURL": "https://via.placeholder.com/320x100", "title": "Samsung Galaxy S22 - Green", "disc": 50, "price": 100000, "rating": 4.6, "isFreeShipping": true, "trackingClick": "https://ta.tokoshorten/aFJK7", "trackingImpression": "https://ta.tokoshorten/aFJK7" }</script>'
      }
    });
  } catch (err) {
    // res.status(500).json({ error: err.message });
  }
};

export default handler;
