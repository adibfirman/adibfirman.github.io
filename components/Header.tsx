import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Text, BoxProps, Box, Flex, Grid, Link as UILink } from "@chakra-ui/react";
import { useColorMode, useTheme } from "@chakra-ui/core";

const transition = "all 350ms ease-in-out 0s";
const textProps = {
  transition,
  position: "absolute",
  fontFamily: "grandstander",
  fontSize: "xl",
  fontWeight: "normal"
} as BoxProps;

const Link: React.FC<{ href: string }> = ({ children, href }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const regex = new RegExp(href, "gi");
  const isActive = router.pathname.search(regex) > -1;

  // === dark mode need's ===
  const textColor = { light: isActive ? "gray.700" : "gray.500", dark: "dark.linkTxt" };
  const hoverableText = { light: "gray.600", dark: "dark.linkTxt" };
  const bgActive = { light: "azure.200", dark: "unset" };
  const borderBottom = { light: "unset", dark: `2px solid ${theme.colors.dark.bg1}` };
  // ========================

  return (
    <UILink
      as="div"
      backgroundColor={isActive ? bgActive[colorMode] : "unset"}
      py={1}
      px={3}
      borderRadius="md"
      color={textColor[colorMode]}
      fontWeight={isActive ? "bold" : "normal"}
      borderBottom={isActive ? borderBottom[colorMode] : "unset"}
      _hover={{ color: hoverableText[colorMode], textDecoration: "underline" }}
    >
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </UILink>
  );
};

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isScrolling, setIsScrolling] = useState(false);

  // === dark mode need's ===
  const bg = { light: isScrolling ? "white" : "azure.50", dark: "dark.bg" };
  const text = { light: "unset", dark: "dark.text" };
  // ========================

  useEffect(() => {
    const handleScrollBrowser = () => {
      if (window.pageYOffset > 0) setIsScrolling(true);
      else setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScrollBrowser, false);
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
      bg={["white", bg[colorMode]]}
      boxShadow={[
        "#00000026 0px 1px 4px 0px",
        !isScrolling ? "unset" : "#00000026 0px 1px 4px 0px"
      ]}
    >
      <Flex maxWidth="lg" m="0 auto" p={[6, 4]} justifyContent="space-between" alignItems="center">
        <NextLink href="/">
          <a>
            <Box position="relative" pb="27px">
              <Text
                {...textProps}
                color={text[colorMode]}
                top="2px"
                left="0"
                opacity={isScrolling ? 1 : 0}
              >
                @
              </Text>
              <Text {...textProps} color={text[colorMode]} left={[isScrolling ? "1.1rem" : 0]}>
                adib
              </Text>
              <Text {...textProps} color={text[colorMode]} left={isScrolling ? "3.7rem" : 12}>
                firman
              </Text>
            </Box>
          </a>
        </NextLink>
        <Grid gridAutoFlow="column" gap={6}>
          <Link href="/blog">Blog</Link>
          <Link href="/talks">Talks</Link>
          <Link href="/oss">OSS</Link>
          <button onClick={() => toggleColorMode()}>💡</button>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Header;
