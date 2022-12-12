import React from "react";
// import Head from "next/head";

const TestAd = () => {
  // const [cookies, setCookies] = React.useState({});

  // React.useLayoutEffect(() => {
  //   window.addEventListener("message", function (e) {
  //     const _data = e.data;
  //     const source = _data.source;

  //     if (source === "tkpd-tdn-banner-cookies") setCookies(_data.cookies);
  //   });
  // }, []);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<script id="tkpd-ta-products-123" type="application/json">{ "trackingClick": "https://ta-staging.tokopedia.com/promo/v1/clicks/8a-xgVY2gmUEH_UpH_UdH_jpbm-xgVY789CBUsthbm-FQRo2PcB5QiUEHZFiPcBWgZUEH_yfopHdHsrN6mFiyRCsUstOHAnFbm-xgVYpyfYagZUEHpJabsK76_j7oAedHsnfosKDUSHp9fh5gaUEUMuNZM2jZJ2M33NGPMep_Mh-qMY2_1o-r7BW_sCsQABE3BPc8ujagfBvq1BRZ3BRq3JausujHsBN3jyN8Bja69Bq17jfZ32Cq1hAZSuiHsuk3Bo-ojBk__oou71p_1zzHjh9z92vzOV7_jPgHJO2H3xvzOJO_Vz0oJNEu92ouO2W_7zgPO2_Z9o-Q_BNyuPjrc-D63Wq3J-MyuPzq1Y2Z9P-q9P2ysoGrVtaQIuyH7-Nys-ZHujp1MgxuOV2_fB-P7B2PfBiH72F3s-DPuKp_MYiH7-MyuPzq1Y2Z9P-q9P2yOx3QcoXQcgjz7gXyRB-ojB2Z9o-QjNkysoGQVKaZSBiHfzE3Bo-ojBk_9xoq_e7_jz0o1NJ1_CvzJBR_M2goJB2PfBsHjNfyfO3gMHauMxsQ1N5Z325q1NJgRPHqBjO_32uHjOEz_VozcDF_uzuH7BXHA7ibm-Orfua9fBjUstiHZUDUMVDgaUEUSz5rch2rRzwyfVsqc1ibm-XP3Oig9-wQfgwy3zpUsthHmFiQSuWyMua9fVjrOYag9Ji6sJFbm-sy9zwq3zpUs2QHpgPbm-X9foxQMz2gcV7guYxgIHi6sJFHmFiy3-wPcupPmUEUjdibm-FQRo79fVDgaUEUMzBgiUDUSgBrSo2Qfdi6i-fHiUDUMoDP9o7g9-wq3zwPsUi6seOHAUObm-FrMBsguYiq3ei6s1FHAnDUMP5y3hwq3ei6soY?dv=android&r=https%3A%2F%2Fstaging.tokopedia.com%2Frainbowsstore%2Fproduk-wiena-baru-03a%3Fsrc%3Dtopads&src=recom_widget_pdp_3&page=1&management_type=1&t=android", "trackingImpression": "https://ta.tokoshorten/aFJK7" }</script>'
        }}
      />
      <iframe
        src="https://ta-staging.tokopedia.com/external/product?design=320x100&publisher_id=qqwer1234xgfd&product_id=123"
        width="320px"
        height="100px"
      ></iframe>
      {/* <p>{JSON.stringify(cookies, null, 2)}</p>
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
      ></el> */}
    </div>
  );
};

export default TestAd;
