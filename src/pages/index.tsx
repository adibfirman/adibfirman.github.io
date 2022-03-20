import type { NextPageContext } from "next";

import * as React from "react";
import { Heading, Box, Grid, useTheme, Radio, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { getBlogs } from "@utils/blogs";

const DESC_PAGE = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day-by-day working and learn a fun things about Web Ecosystem, and occasionally planting seed on my own digital garden.`;
const TITLE_PAGE = "Hello There...!!";

type Props = {
  recentBlogs: ReturnType<typeof getBlogs>;
};

const HomePage = ({ recentBlogs }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const param = router.query;
  const getContent = param.content || "id";
  const languages = [
    { val: "en", text: "EN", isChecked: getContent === "en" },
    { val: "id", text: "ID", isChecked: getContent === "id" }
  ];

  return (
    <Page title={TITLE_PAGE + "👋"} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
      <Box my={16}>
        <Grid gridAutoFlow="column" gridTemplateColumns="1fr 1fr" justifyContent="space-between">
          <Heading as="h2" mb={4} fontSize="xl">
            Recent blogs
          </Heading>
          <Stack direction="row" justifySelf="end">
            {languages.map(language => (
              <Radio
                onClick={() => router.replace({ query: { content: language.val } })}
                key={language.val}
                isChecked={language.isChecked}
                value={language.val}
              >
                {language.text}
              </Radio>
            ))}
          </Stack>
        </Grid>
        <Grid
          mx={[null, `calc(-1*${theme.space[56]})`]}
          gridAutoFlow={["row", "column"]}
          gridTemplateColumns={[null, "repeat(3, minmax(1em, 1fr))"]}
          gap={4}
        >
          {recentBlogs.map((blog, i) =>
            blog ? (
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
    </Page>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const getListBlog = getBlogs(query.content as string);
  const threeRecentBlogs = getListBlog.slice(0, 3);

  return {
    props: {
      recentBlogs: threeRecentBlogs
    }
  };
};

export default HomePage;
