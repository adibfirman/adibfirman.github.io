import * as React from "react";
import { format as formatDate } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Flex, Text, Icon, useTheme } from "@chakra-ui/react";
import { Calendar } from "react-feather";

import { Page } from "@components";
import { Hr } from "@components/UI";
import markdownParser from "@utils/markdownParser";

import * as Types from "./types";

function BlogPage({ frontMatter, source, pathname }: Types.Props) {
  const theme = useTheme();
  const createdAt = new Date(frontMatter.data.date);

  return (
    <Page
      path={`/blog/${pathname}`}
      title={frontMatter.data.title}
      SEO={{ title: frontMatter.data.title, desc: frontMatter.data.spoiler }}
      bodyStyle={{ mx: [null, `calc(-1*${theme.space[20]})`] }}
    >
      <Hr />
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Text fontSize="sm" color="light.400">
            Diterbitkan pada:
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={Calendar} color="light.400" justifySelf="center" mr={1} />
          <Text fontSize="sm" color="light.400">
            {formatDate(createdAt, "dd MMMM yyyy")}
          </Text>
        </Flex>
      </Flex>
      <Hr />
      <ReactMarkdown renderers={markdownParser}>{source}</ReactMarkdown>
    </Page>
  );
}

export default BlogPage;
