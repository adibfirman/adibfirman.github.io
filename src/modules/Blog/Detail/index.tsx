import * as React from "react";
import { format as formatDate } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Flex, Text, Icon, useTheme, Link, Stack } from "@chakra-ui/react";
import { Calendar } from "react-feather";
import { useRouter } from "next/router";

import { Page } from "@components";
import { Hr } from "@components/UI";
import markdownParser from "@utils/markdownParser";

import * as Types from "./types";

function BlogPage({ frontMatter, source, availableTranslations }: Types.Props) {
  const theme = useTheme();
  const router = useRouter();
  const createdAt = new Date(frontMatter.data.date || "2999");
  const getCurrentLang = (router.query.content || "en") as string;
  const publishedText = {
    id: "Diterbitkan pada",
    en: "Published at"
  }[getCurrentLang];

  const translationsText = {
    id: "Terjemahan yang tersedia",
    en: "Available Translations"
  }[getCurrentLang];

  const handleChangeTranslation = (lang: string) => {
    router.query.content = lang;
    router.push(router);
  };

  return (
    <Page
      path={router.asPath}
      title={frontMatter.data.title}
      SEO={{ title: frontMatter.data.title, desc: frontMatter.data.spoiler }}
      bodyStyle={{ mx: [null, `calc(-1*${theme.space[20]})`] }}
    >
      <Hr />
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Text fontSize="sm" color="light.400">
            {publishedText}:
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={Calendar} color="light.400" justifySelf="center" mr={1} />
          <Text fontSize="sm" color="light.400">
            {formatDate(createdAt, "dd MMMM yyyy")}
          </Text>
        </Flex>
      </Flex>

      {availableTranslations.length ? (
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Text fontSize="sm" color="light.400">
              {translationsText}:
            </Text>
          </Flex>
          <Stack ml="1" spacing={1} direction="row">
            {availableTranslations.map((lang, i) => (
              <Link
                key={lang}
                fontSize="md"
                color={lang === getCurrentLang ? "" : "light.600"}
                fontWeight={lang === getCurrentLang ? "bold" : "unset"}
                onClick={() => handleChangeTranslation(lang)}
              >
                {lang.toUpperCase()}
                {i === availableTranslations.length - 1 ? "" : ","}
              </Link>
            ))}
          </Stack>
        </Flex>
      ) : null}

      <Hr />
      <ReactMarkdown renderers={markdownParser}>{source}</ReactMarkdown>
    </Page>
  );
}

export default BlogPage;
