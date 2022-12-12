import * as React from "react";
import { Heading, Box, Grid, useTheme } from "@chakra-ui/react";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { listBlogs } from "@utils/blogs";

const DESC_PAGE = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day-by-day working and learn a fun things about Web Ecosystem, and occasionally planting seed on my own digital garden.`;
const TITLE_PAGE = "Hello There...!!";

type Props = {
  recentBlogs: typeof listBlogs;
};

const HomePage = ({ recentBlogs }: Props) => {
  const theme = useTheme();

  return (
    <Page title={TITLE_PAGE + "👋"} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
      <Box my={16}>
        <Grid gridAutoFlow="column" gridTemplateColumns="1fr 1fr" justifyContent="space-between">
          <Heading as="h2" mb={4} fontSize="xl">
            Recent blogs
          </Heading>
        </Grid>
        <Grid
          mx={[null, `calc(-1*${theme.space[56]})`]}
          gridAutoFlow={["row", "column"]}
          gridTemplateColumns={[null, "repeat(3, minmax(1em, 1fr))"]}
          gap={4}
        >
          {recentBlogs.map((blog, i) =>
            blog ? (
              // @ts-ignore
              <NavigationCard
                key={i}
                title={blog.data.title}
                desc={blog.data.spoiler}
                href={`/blog/${blog.pathname}`}
              />
            ) : null
          )}
        </Grid>
      </Box>
      <div style={{ marginTop: "100vh" }} />
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
    </Page>
  );
};

export const getServerSideProps = async () => {
  const threeRecentBlogs = listBlogs.slice(0, 3);

  return {
    props: {
      recentBlogs: threeRecentBlogs
    }
  };
};

export default HomePage;
