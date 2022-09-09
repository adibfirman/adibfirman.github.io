import React from "react";
import { useCookies } from "react-cookie";

const TestAd = () => {
  const [cookies] = useCookies();

  return (
    <div>
      <p>{JSON.stringify(cookies, null, 2)}</p>
      <el
        className="tdn-external-banner"
        data-external-id="1"
        data-inventory-id="203"
        data-dimen-id="3"
        // data-keywords="car charger bluetooth"
        data-keywords="bluetooth"
        data-custom-domain="https://78-staging-feature.tokopedia.com"
        // data-custom-domain="https://midas-dev.tokopedia.com"
        // data-tracking-click="https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssNuGyCyLLfrl5hZ7YegE9AMgzzsHNays-J0PuhTVrkkI2-ucE8VP-s4JKK4QEkVsn9msNBHCMt8tnnMv7ZXYAaZD6-365FqrcmwekXMt96vdtmhPeIcT8UXfx_1SzQtQupct7b4piTpjOFxUF-YdbPqr0pJ4rVfJwgnlrd_1oZzvWTiW0eCkCC&sig=Cg0ArKJSzPySjmG6BYoYEAE&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl="
        // data-tracking-impression=""
      ></el>
    </div>
  );
};

export default TestAd;
