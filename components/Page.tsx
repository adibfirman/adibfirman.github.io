import type { BoxProps } from "@chakra-ui/react";

import * as React from "react";
import { NextSeo } from "next-seo";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import qs from "querystring";

import { Header, Footer } from ".";
import { URL as URLApp } from "next-seo.config";

type PropsLayoutPage = {
  path?: string;
  title: string;
  desc?: string;
  bodyStyle?: BoxProps;
  SEO: {
    title: string;
    desc: string;
  };
};

const LayoutPage: React.FC<PropsLayoutPage> = ({
  children,
  title,
  desc,
  SEO,
  path = "",
  bodyStyle
}) => {
  const { host, origin, pathname, href } = new URL(URLApp + path);
  const paramsMetaImage = qs.stringify({
    title: SEO.title,
    pathURL: host + (pathname === "/" ? "" : pathname)
  } as ParamsMetaImage);

  return (
    <Box backgroundColor="azure.50">
      <NextSeo
        title={SEO.title}
        description={SEO.desc}
        openGraph={{
          url: href,
          description: SEO.desc,
          images: [{ url: `${origin}/api/meta-image?${paramsMetaImage}` }]
        }}
      />
      <Box maxWidth="lg" m="0 auto" px="4" pt="16">
        <Header />
        <Flex flexDirection="column" py={[12, null]} {...bodyStyle}>
          <Heading as="h1" fontSize="4xl" textAlign="center" fontWeight="bold">
            {title}
          </Heading>

          {desc && (
            <Text textAlign="justify" fontSize="lg" mt="6">
              {desc}
            </Text>
          )}

          {children}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutPage;
