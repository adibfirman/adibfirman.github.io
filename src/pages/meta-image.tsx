import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import * as React from "react";
import Image from "next/image";

import { Heading, Flex, Text, Grid, Box, useTheme } from "@chakra-ui/react";

const MetaImagePage = ({
  title,
  pathURL
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme();

  return (
    <Grid
      p="4"
      backgroundColor="light.50"
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
        <Text color="light.700" fontSize="6xl" maxWidth="74%">
          {title}
        </Text>
        <Box position="absolute" width="21%" right={16} top="5rem">
          <Image src="/character.png" alt="character" />
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

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const title = (query.title as string) || "";
  const pathURL = (query.pathURL as string) || "";

  return {
    props: { title, pathURL }
  };
}

export default MetaImagePage;
