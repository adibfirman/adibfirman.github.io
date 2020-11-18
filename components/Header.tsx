import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Text, BoxProps, Box, Flex, Grid, Link as UILink } from "@chakra-ui/core";

import isBrowser from "@utils/isBrowser";

const transition = "all 350ms ease-in-out 0s";
const textProps = {
  transition,
  position: "absolute",
  fontFamily: "grandstander",
  fontSize: "xl",
  fontWeight: "normal"
} as BoxProps;

const Link: React.FC<{ href: string }> = ({ children, href }) => {
  const router = useRouter();
  const regex = new RegExp(href, "gi");
  const isActive = router.pathname.search(regex) > -1;

  return (
    <UILink
      as="div"
      backgroundColor={isActive ? "azure.200" : "unset"}
      py={1}
      px={3}
      borderRadius="md"
      color={isActive ? "gray.700" : "gray.500"}
      fontWeight={isActive ? "bold" : "normal"}
      _hover={{ color: "gray.600", textDecoration: "underline" }}
    >
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </UILink>
  );
};

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScrollBrowser = () => {
      if (window.pageYOffset > 0) setIsScrolling(true);
      else setIsScrolling(false);
    };

    if (isBrowser) window.addEventListener("scroll", handleScrollBrowser, false);
    return () => window.removeEventListener("scroll", handleScrollBrowser);
  }, []);

  return (
    <Box
      as="nav"
      zIndex={1}
      transition={transition}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      backgroundColor={["white", isScrolling ? "white" : "azure.50"]}
      boxShadow={[
        "#00000026 0px 1px 4px 0px",
        !isScrolling ? "unset" : "#00000026 0px 1px 4px 0px"
      ]}
    >
      <Flex maxWidth="lg" m="0 auto" p={[6, 4]} justifyContent="space-between" alignItems="center">
        <NextLink href="/">
          <a>
            <Box position="relative" pb="27px">
              <Text {...textProps} top="2px" left="0" opacity={isScrolling ? 1 : 0}>
                @
              </Text>
              <Text {...textProps} left={[isScrolling ? "1.1rem" : 0]}>
                adib
              </Text>
              <Text {...textProps} left={isScrolling ? "3.7rem" : 12}>
                firman
              </Text>
            </Box>
          </a>
        </NextLink>
        <Grid gridAutoFlow="column" gap={6}>
          <Link href="/blog">Blog</Link>
          <Link href="/talks">Talks</Link>
          <Link href="/oss">OSS</Link>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Header;