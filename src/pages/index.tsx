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
  const [adm, setAdm] = React.useState("");

  React.useEffect(() => {
    (async function getADM() {
      const fetching = await fetch(`/api/testing${location.search}`);
      const data = await fetching.json();

      setAdm(data.data.adm);
    })();
  }, []);

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
      <div dangerouslySetInnerHTML={{ __html: adm }} />
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
