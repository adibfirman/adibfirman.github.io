import * as React from "react";
import { InferGetServerSidePropsType } from "next";
import { useTheme, Grid } from "@chakra-ui/react";

import { NavigationCard } from "@components/UI";
import { Page } from "@components";

import { getServerSideProps } from "@pages/blog/index";

import { DESC_PAGE, TITLE_PAGE } from "./constants";

const BlogPage = ({ blogs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();

  return (
    <Page
      path="/blog"
      title={TITLE_PAGE}
      desc={DESC_PAGE}
      SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
    >
      <Grid
        gridTemplateColumns={[null, "repeat(2, 1fr)"]}
        gridAutoColumns={[null, "19rem"]}
        gap="4"
        mx={[null, `calc(-1*${theme.space[24]})`]}
        mt="8"
        justifyContent="center"
      >
        {blogs.map(blog => (
          <NavigationCard
            key={blog.link}
            title={blog.title}
            desc={blog.content}
            footerText={blog.published}
            href={blog.link}
          />
        ))}
      </Grid>
    </Page>
  );
};

export default BlogPage;
