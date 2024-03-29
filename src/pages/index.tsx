import * as React from "react";
import { InferGetServerSidePropsType } from "next";
import { Heading, Box, Grid, useTheme } from "@chakra-ui/react";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { getListFromMedium } from "@utils/blogs";

const DESC_PAGE = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day-by-day working and learn a fun things about Web Ecosystem, and occasionally planting seed on my own digital garden.`;
const TITLE_PAGE = "Hi There...!!";

export const getServerSideProps = async () => {
  const listBlogs = await getListFromMedium();
  const threeRecentBlogs = listBlogs.slice(0, 3);

  return {
    props: {
      recentBlogs: threeRecentBlogs
    }
  };
};

const HomePage = ({ recentBlogs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          {recentBlogs.map(blog => (
            <NavigationCard
              key={blog.link}
              title={blog.title}
              desc={blog.content}
              href={blog.link}
              footerText={blog.published}
            />
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default HomePage;
