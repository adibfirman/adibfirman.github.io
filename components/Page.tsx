import type { BoxProps } from "@chakra-ui/react";

import * as React from "react";
import { NextSeo } from "next-seo";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import qs from "querystring";
import { ParamsMetaImage } from "@/next-env";

import { Header, Footer } from ".";
import { URL as URLApp } from "next-seo.config";
import { useDarkMode } from "@utils/useDarkMode";

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
  const { bg, colorText } = useDarkMode();
  const { host, origin, pathname, href } = new URL(URLApp + path);
  const paramsMetaImage = qs.stringify({
    title: SEO.title,
    pathURL: host + (pathname === "/" ? "" : pathname)
  } as ParamsMetaImage);

  return (
    <Box backgroundColor={bg}>
      <NextSeo
        title={SEO.title}
        description={SEO.desc}
        openGraph={{
          url: href,
          description: SEO.desc,
          images: [
            {
              url: `${origin}/api/meta-image?${paramsMetaImage}`,
              width: 1280,
              height: 669,
              alt: SEO.title
            }
          ]
        }}
      />
      <Box maxWidth="lg" m="0 auto" px="4" pt="16">
        <Header />
        <Flex
          flexDirection="column"
          py={[12, null]}
          minHeight="calc(100vh - 18rem)"
          {...bodyStyle}
        >
          <Heading as="h1" fontSize="4xl" textAlign="center" fontWeight="bold" color={colorText}>
            {title}
          </Heading>
          {desc && (
            <Text textAlign="justify" fontSize="lg" mt="6" color={colorText}>
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
