import * as React from "react";
import { Flex, Box, Text, Grid, useTheme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";

import { DESC_PAGE, TITLE_PAGE, AUTHOR_LINK, OSS_LIST } from "./constants";

const GHButton = dynamic(() => import("react-github-btn"), { ssr: false });

const OSSPage = () => {
  const theme = useTheme();

  return (
    <Page
      path="/oss"
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
        {OSS_LIST.map((oss, i) => (
          <NavigationCard
            key={i}
            desc={oss.desc}
            href={oss?.link ?? `${AUTHOR_LINK}/${oss.title}`}
            title={<CardTitle {...oss} />}
          />
        ))}
      </Grid>
    </Page>
  );
};

const CardTitle = ({ title, ...props }: { title: string; link?: string; ariaLabel?: string }) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Text>{title}</Text>
    <Box mb="-6px">
      <GHButton
        data-text="Star"
        data-show-count
        data-icon="octicon-star"
        href={props?.link ?? `${AUTHOR_LINK}/${title}`}
      />
    </Box>
  </Flex>
);

export default OSSPage;
