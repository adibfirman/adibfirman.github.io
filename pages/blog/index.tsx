import * as React from "react";
import NextLink from "next/link";
import { format as formatDate } from "date-fns";
import { Heart } from "react-feather";
import { Box, PseudoBox, Icon, Grid, Stack, useTheme } from "@chakra-ui/core";
import { Text } from "@chakra-ui/react";

import { Page } from "@components";
import { listBlogs } from "@utils/blogs";

const DESC_PAGE = `So in this page, it's just an open space where I share my knowledge or let say "seeds" of my thoughts to be cultivated in public, *most of these seeds writed in 🇮🇩 `;
const TITLE_PAGE = "I'm a Digital Gardeners";

type MapListBlogsPerYears = {
  [year: string]: Array<{ monthCreated: string; dayCreated: string } & typeof listBlogs[0]>;
};

type Props = {
  mapListBlogsPerYears: MapListBlogsPerYears;
};

const BlogPage = ({ mapListBlogsPerYears }: Props) => {
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
                <PseudoBox key={i} role="group" cursor="pointer" py={2} px={[2, 8]}>
                  <NextLink href={`/blog/${blog.pathname}`}>
                    <Grid gridAutoFlow="column" gridTemplateColumns="93% 1fr" gap="1">
                      <Box>
                        <PseudoBox
                          fontWeight="bolder"
                          _groupHover={{ textDecoration: "underline" }}
                          fontSize="lg"
                        >
                          {blog.data.title}
                        </PseudoBox>
                        <Text
                          color="azure.600"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {blog.data.spoiler}
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
                            123
                          </Text>
                        </Grid>
                      </Box>
                      <Grid
                        gap="1"
                        mt="1"
                        justifyContent="flex-end"
                        alignItems="center"
                        alignContent="center"
                      >
                        <Text>{blog.monthCreated}</Text>
                        <Box
                          borderColor="azure.300"
                          borderBottomWidth="1px"
                          borderBottomStyle="solid"
                        />
                        <Text textAlign="center">{blog.dayCreated}</Text>
                      </Grid>
                    </Grid>
                  </NextLink>
                </PseudoBox>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Page>
  );
};

export const getStaticProps = () => {
  const mapListBlogsPerYears = listBlogs.reduce((acc, blog) => {
    const date = new Date(blog.data.date);
    const year = formatDate(date, "yyyy");
    const detail = {
      ...blog,
      monthCreated: formatDate(date, "MMM"),
      dayCreated: formatDate(date, "dd")
    };

    if (!acc[year]) acc[year] = [];
    acc[year].push(detail);

    return acc;
  }, {} as MapListBlogsPerYears);

  return { props: { mapListBlogsPerYears } };
};

export default BlogPage;
