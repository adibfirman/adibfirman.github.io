import type { GetStaticProps, NextPage } from "next";

import * as React from "react";
import { Heading, Box, Grid } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/core";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { listBlogs } from "@utils/blogs";
import { useDarkMode } from "@utils/useDarkMode";

type HomePageProps = {
  recentBlogs: typeof listBlogs;
};

const DESC_PAGE = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day working and learn a fun things about web development, and occasionally planting seed on my own digital garden.`;
const TITLE_PAGE = "Hello There...!!";

const HomePage: NextPage<HomePageProps> = ({ recentBlogs }) => {
  const theme = useTheme();
  const { colorText } = useDarkMode();
  const [abc, setAbc] = React.useState(false);

  React.useEffect(() => {
    console.log(abc, setAbc);
  }, [abc]);

  return (
    <Page title={TITLE_PAGE + "👋"} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
      <Box my={16}>
        <Heading as="h2" mb={4} fontSize="xl" color={colorText}>
          Recents blogs* 🇮🇩
        </Heading>
        <Grid
          mx={[null, `calc(-1*${theme.space[56]})`]}
          gridAutoFlow={["row", "column"]}
          gridTemplateColumns={[null, "repeat(3, minmax(1em, 1fr))"]}
          gap={4}
        >
          {recentBlogs.map(({ data, pathname }, i) => (
            <NavigationCard
              key={i}
              title={data.title}
              desc={data.spoiler}
              href={`/blog/${pathname}`}
            />
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const threeRecentBlogs = listBlogs.slice(0, 3);

  return {
    props: {
      recentBlogs: threeRecentBlogs
    }
  };
};

export default HomePage;
