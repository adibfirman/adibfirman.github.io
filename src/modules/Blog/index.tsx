import * as React from "react";
import { Box, Stack, useTheme, Text } from "@chakra-ui/react";

import { Page } from "@components";
import { useDarkMode } from "@utils/useDarkMode";

import * as Types from "./types";
import Card from "./Card";
import { DESC_PAGE, TITLE_PAGE } from "./constants";

const BlogPage = ({ mapListBlogsPerYears }: Types.Props) => {
  const theme = useTheme();
  const { colorMode } = useDarkMode();
  const years = Object.keys(mapListBlogsPerYears).sort((n1, n2) => {
    if (n1 > n2) return -1;
    if (n1 < n2) return 1;

    return 0;
  });

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
        {years.map(year => (
          <Box key={year}>
            <Text fontWeight={600} fontSize="2xl" color={text}>
              {year}
            </Text>
            <Box
              mt={1}
              mb={2}
              borderColor="light.300"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
            />
            <Stack spacing={3}>
              {mapListBlogsPerYears[year].map((blog, i) => (
                <Card {...blog} key={i} />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Page>
  );
};

export default BlogPage;
