import * as React from "react";
import { Box, Grid, Flex, Text, List, ListItem, Link, useTheme } from "@chakra-ui/react";
import { Award, ExternalLink } from "react-feather";

import { Page } from "@components";
import { useDarkMode } from "@utils/useDarkMode";

import { DESC_PAGE, TITLE_PAGE, LiST_TALK } from "./constants";

const TalksPage = () => {
  const theme = useTheme();
  const { colorText } = useDarkMode();

  return (
    <Page
      path="/talks"
      title={TITLE_PAGE}
      desc={DESC_PAGE}
      SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
    >
      <Box mt="8">
        <List spacing={6}>
          {LiST_TALK.map(talk => (
            <ListItem key={talk.when}>
              <Grid
                gridAutoFlow="column"
                gridTemplateColumns="max-content 1fr max-content"
                alignItems="center"
                gap={theme.space[2]}
              >
                <Award size={theme.space[6]} color={theme.colors.green[500]} />
                <Flex flexDirection="column">
                  <Text color={colorText}>{talk.title}</Text>
                  <Text fontWeight={600} mt="-3px" fontSize="sm" color={colorText}>
                    {talk.when},{" "}
                    <Text as="span" fontStyle="italic" color={colorText}>
                      {talk.at}
                    </Text>
                  </Text>
                </Flex>
                <Link href={talk.resource} isExternal>
                  <ExternalLink size={theme.space[6]} color={theme.colors.blue[500]} />
                </Link>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Box>
    </Page>
  );
};

export default TalksPage;
