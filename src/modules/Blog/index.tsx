import * as React from "react";
import { Box, Stack, useTheme, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { NavigationCard } from "@components/UI";
import { Page } from "@components";
import { useDarkMode } from "@utils/useDarkMode";

import * as Types from "./types";
import { DESC_PAGE, TITLE_PAGE } from "./constants";

const Card = dynamic(() => import("./Card"), { ssr: false });

const BlogPage = ({ blogs }: Types.Props) => {
  const theme = useTheme();
  const { colorMode } = useDarkMode();

  // === dark mode need's ===
  const text = { light: "unset", dark: "dark.text" }[colorMode];
  // ========================

  return (
    <Page
      path="/blog"
      title={TITLE_PAGE}
      desc={DESC_PAGE}
      SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
    >
      <Stack mt={8} mx={[null, `calc(-1*${theme.space[12]})`]} spacing={10}>
        {blogs.map(
          blog =>
            blog.link && <NavigationCard key={blog.link} title={blog.title} desc={blog.content} />
        )}
      </Stack>
    </Page>
  );
};

export default BlogPage;
