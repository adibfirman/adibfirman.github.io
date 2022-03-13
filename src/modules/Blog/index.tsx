import * as React from "react";
import { Box, Stack, useTheme, Text, Radio, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Page } from "@components";
import { useDarkMode } from "@utils/useDarkMode";

import * as Types from "./types";
import Card from "./Card";
import { DESC_PAGE, TITLE_PAGE } from "./constants";

const BlogPage = ({ mapListBlogsPerYears }: Types.Props) => {
  const route = useRouter();
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

  const param = route.query;
  const getContent = param.content || "id";
  const languages = [
    { val: "en", text: "EN", isChecked: getContent === "en" },
    { val: "id", text: "ID", isChecked: getContent === "id" }
  ];

  return (
    <Page
      path="/blog"
      title={TITLE_PAGE}
      desc={DESC_PAGE}
      SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
    >
      <Stack mt={8} mx={[null, `calc(-1*${theme.space[12]})`]} spacing={10}>
        <Grid gridAutoFlow="column" gridTemplateColumns="1fr 1fr" justifyContent="space-between">
          <Text fontWeight={600} color={text}>
            Available contents:
          </Text>
          <Stack direction="row" justifySelf="end">
            {languages.map(language => (
              <Radio
                onClick={() => route.replace({ query: { content: language.val } })}
                key={language.val}
                isChecked={language.isChecked}
                value={language.val}
              >
                {language.text}
              </Radio>
            ))}
          </Stack>
        </Grid>
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
