import type { InferGetStaticPropsType } from "next";

import * as React from "react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { format as formatDate } from "date-fns";
import { Heart } from "react-feather";
import { Box, PseudoBox, Icon, Grid, Stack, useTheme } from "@chakra-ui/core";
import { Text } from "@chakra-ui/react";

import { Page } from "@components";
import { listBlogs } from "@utils/blogs";
import getCountMention from "@utils/getCountMention";

const DESC_PAGE = `So in this page, it's just an open space where I share my knowledge or let say "seeds" of my thoughts to be cultivated in public, *most of these seeds writed in 🇮🇩 `;
const TITLE_PAGE = "I'm a Digital Gardeners";

type MapListBlogsPerYears = {
  [year: string]: Array<{ monthCreated: string; dayCreated: string } & typeof listBlogs[0]>;
};

const BlogCard = (props: MapListBlogsPerYears[0][0]) => {
  const [webmentionCount, setWebmentionCount] = useState(0);

  useEffect(() => {
    (async function getwebmentionCount() {
      try {
        const getCount = await getCountMention(`/blog/${props.pathname}`);
        setWebmentionCount(getCount);
      } catch (error) {
        console.log("-- There's error on getwebmentionCount --");
      }
    })();
  }, []);

  return (
    <PseudoBox role="group" cursor="pointer" py={2} px={[2, 8]}>
      <NextLink href={`/blog/${props.pathname}`}>
        <Grid gridAutoFlow="column" gridTemplateColumns="93% 1fr" gap="1">
          <Box>
            <PseudoBox
              fontWeight="bolder"
              _groupHover={{ textDecoration: "underline" }}
              fontSize="lg"
            >
              {props.data.title}
            </PseudoBox>
            <Text color="azure.600" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
              {props.data.spoiler}
            </Text>
            <Grid
              mt="2"
              gridAutoFlow="column"
              gridAutoColumns="max-content"
              alignItems="center"
              gap="1"
            >
              <Icon as={Heart} color="azure.400" justifySelf="center" />
              <Text fontSize="sm" color="azure.400">
                {webmentionCount}
              </Text>
            </Grid>
          </Box>
          <Grid gap="1" mt="1" justifyContent="flex-end" alignItems="center" alignContent="center">
            <Text>{props.monthCreated}</Text>
            <Box borderColor="azure.300" borderBottomWidth="1px" borderBottomStyle="solid" />
            <Text textAlign="center">{props.dayCreated}</Text>
          </Grid>
        </Grid>
      </NextLink>
    </PseudoBox>
  );
};

const BlogPage = ({ mapListBlogsPerYears }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useTheme();
  const years = Object.keys(mapListBlogsPerYears).sort((n1, n2) => {
    if (n1 > n2) return -1;
    if (n1 < n2) return 1;

    return 0;
  });

  return (
    <Page
      path="/blog"
      title={TITLE_PAGE}
      desc={DESC_PAGE}
      SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
    >
      <Stack mt={8} mx={[null, `calc(-1*${theme.space[20]})`]} spacing={10}>
        {years.map(year => (
          <Box key={year}>
            <Text fontWeight={600} fontSize="2xl">
              {year}
            </Text>
            <Box
              mt={1}
              borderColor="azure.300"
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
