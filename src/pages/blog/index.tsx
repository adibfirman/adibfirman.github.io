import type { InferGetStaticPropsType } from "next";

import * as React from "react";
import NextLink from "next/link";
import { format as formatDate } from "date-fns";
import { Box, Grid, Stack, useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { Page } from "@components";
import { listBlogs } from "@utils/blogs";
import { useDarkMode } from "@utils/useDarkMode";

const DESC_PAGE = `So in this page, it's just an open space where I share my knowledge or let say "seeds" of my thoughts to be cultivated in public, *most of these seeds writed in 🇮🇩 `;
const TITLE_PAGE = "I'm a Digital Gardeners";

type MapListBlogsPerYears = {
  [year: string]: Array<{ monthCreated: string; dayCreated: string } & typeof listBlogs[0]>;
};

const BlogCard = (props: MapListBlogsPerYears[0][0]) => {
  const { colorMode } = useDarkMode();

  // === dark mode need's ===
  const text = { light: "unset", dark: "dark.text" }[colorMode];
  const spoilerText = { light: "light.600", dark: "dark.text" }[colorMode];
  // ========================

  return (
    <Box role="group" cursor="pointer" py={2} px={[2, 8]}>
      <NextLink href={`/blog/${props.pathname}`}>
        <Grid gridAutoFlow="column" gridTemplateColumns="85% 1fr" gap="1">
          <Box>
            <Box
              fontWeight="bolder"
              _groupHover={{ textDecoration: "underline" }}
              fontSize="lg"
              color={text}
            >
              {props.data.title}
            </Box>
            <Text
              color={spoilerText}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {props.data.spoiler}
            </Text>
          </Box>
          <Grid
            gap="1"
            mt="-5px"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
          >
            <Text color={text}>{props.monthCreated}</Text>
            <Box borderColor="light.300" borderBottomWidth="1px" borderBottomStyle="solid" />
            <Text textAlign="center" color={text}>
              {props.dayCreated}
            </Text>
          </Grid>
        </Grid>
      </NextLink>
    </Box>
  );
};

const BlogPage = ({ mapListBlogsPerYears }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                <BlogCard {...blog} key={i} />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Page>
  );
};

export async function getStaticProps() {
  const mapListBlogsPerYears: MapListBlogsPerYears = {};

  for (let i = 0; i < listBlogs.length; i++) {
    const blog = listBlogs[i];
    const date = new Date(blog.data.date);
    const year = formatDate(date, "yyyy");

    const detail = {
      ...blog,
      monthCreated: formatDate(date, "MMM"),
      dayCreated: formatDate(date, "dd")
    };

    if (!mapListBlogsPerYears[year]) mapListBlogsPerYears[year] = [];
    mapListBlogsPerYears[year].push(detail);
  }

  return { props: { mapListBlogsPerYears } };
}

export default BlogPage;
