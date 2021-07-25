import * as React from "react";
import NextLink from "next/link";
import { Box, Text, Grid } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

import * as Types from "./types";

const BlogCard = (props: Types.MapListBlogsPerYears[0][0]) => {
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

export default BlogCard;
