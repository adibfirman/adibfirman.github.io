import * as React from "react";
import type { NextPage } from "next";
import { Heading, Flex, Text, Grid, Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/core";
import { ParamsMetaImage } from "@/next-env";

const MetaImagePage: NextPage<ParamsMetaImage> = ({ title, pathURL }) => {
  const theme = useTheme();

  return (
    <Grid
      p="4"
      backgroundColor="azure.50"
      height="100vh"
      gridTemplateRows="max-content 1fr max-content"
    >
      <Heading
        textAlign="center"
        as="h2"
        fontFamily="grandstander"
        fontSize="4xl"
        fontWeight="normal"
      >
        @adibfirman
      </Heading>
      <Flex
        border={`5px solid ${theme.colors.gray[500]}`}
        borderRadius="30px"
        overflow="hidden"
        my="1rem"
        position="relative"
        p={10}
        alignItems="center"
      >
        <Text color="azure.700" fontSize="6xl" maxWidth="74%">
          {title}
        </Text>
        <Box position="absolute" width="21%" right={16} top="5rem">
          <img src="/character.png" />
        </Box>
      </Flex>
      <Heading
        textAlign="center"
        as="h2"
        fontFamily="grandstander"
        fontSize="4xl"
        fontWeight="normal"
      >
        {pathURL}
      </Heading>
    </Grid>
  );
};

MetaImagePage.getInitialProps = async ({ query }) => {
  const title = (query.title as string) || "";
  const pathURL = (query.pathURL as string) || "";

  return { title, pathURL };
};

export default MetaImagePage;
