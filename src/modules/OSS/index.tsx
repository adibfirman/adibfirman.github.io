import * as React from "react";
import { Grid, useTheme } from "@chakra-ui/react";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";

import { DESC_PAGE, TITLE_PAGE, AUTHOR_LINK, OSS_LIST } from "./constants";
import CardTitle from "./CardTitle";

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

export default OSSPage;
