import * as React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Menu, X as CloseIcon } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";
import {
  Text,
  Box,
  Flex,
  Grid,
  Link as UILink,
  useTheme,
  useColorMode,
  Switch
} from "@chakra-ui/react";

import DesktopView from "@components/DesktopView";
import MobileView from "@components/MobileView";

import { transition, textProps, LINKS_HEADER } from "./constants";

const Link: LinkProps = ({ children, noPadding = false, href, overWriteActive = false }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const regex = new RegExp(href, "gi");
  const isActive = overWriteActive ? false : router.pathname.search(regex) > -1;

  // === dark mode need's ===
  const textColor = { light: isActive ? "gray.700" : "gray.500", dark: "dark.linkTxt" };
  const hoverableText = { light: "gray.600", dark: "dark.linkTxt" };
  const bgActive = { light: "light.200", dark: "unset" };
  const borderBottom = { light: "unset", dark: `2px solid ${theme.colors.dark.bg1}` };
  // ========================

  return (
    <UILink
      as="div"
      backgroundColor={isActive ? bgActive[colorMode] : "unset"}
      py={!noPadding ? 1 : 0}
      px={!noPadding ? 3 : 0}
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
  const [isScrolling, setIsScrolling] = React.useState(false);
  const theme = useTheme();
  const [showDraerMenu, setShowDrawerMenu] = React.useState(false);
  const toggleShowDrawer = () => setShowDrawerMenu(val => !val);

  // === dark mode need's ===
  const bg = { light: isScrolling ? "white" : "light.50", dark: "dark.bg2" }[colorMode];
  const text = { light: "unset", dark: "dark.text" }[colorMode];
  const mobileText = { light: "#1A202C", dark: theme.colors.dark.text }[colorMode];
  // ========================

  React.useEffect(() => {
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
      bg={bg}
      boxShadow={[
        "#00000026 0px 1px 4px 0px",
        !isScrolling ? "unset" : "#00000026 0px 1px 4px 0px"
      ]}
    >
      <Flex
        maxWidth={["100vw", "calc(100vw - 200px)"]}
        m="0 auto"
        p={[6, 4]}
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/">
          <a>
            <Box position="relative" pb="27px">
              <Text {...textProps} color={text} top="2px" left="0" opacity={isScrolling ? 1 : 0}>
                @
              </Text>
              <Text {...textProps} color={text} left={[isScrolling ? "1.1rem" : 0]}>
                adib
              </Text>
              <Text {...textProps} color={text} left={isScrolling ? "3.7rem" : 12}>
                firman
              </Text>
            </Box>
          </a>
        </NextLink>
        <MobileView>
          <Menu color={mobileText} onClick={toggleShowDrawer} />
          <AnimatePresence>
            {showDraerMenu && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Box
                  position="absolute"
                  w="100vw"
                  h="100vh"
                  top="0"
                  right="0"
                  backgroundColor={bg}
                  padding={4}
                >
                  <Box float="right">
                    <CloseIcon color={mobileText} onClick={toggleShowDrawer} size={36} />
                  </Box>
                  <Box
                    display="flex"
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    ml="38px"
                  >
                    <Grid
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      rowGap={4}
                    >
                      <Link overWriteActive noPadding href="/">
                        @adibfirman
                      </Link>
                      {LINKS_HEADER.map(link => (
                        <Link key={link.href} noPadding href={link.href}>
                          {link.name}
                        </Link>
                      ))}
                    </Grid>
                  </Box>
                  <Box
                    position="fixed"
                    bottom="17px"
                    right="13px"
                    display="flex"
                    alignItems="center"
                  >
                    <Switch
                      isChecked={colorMode === "dark"}
                      size="sm"
                      onChange={() => toggleColorMode()}
                      color={mobileText}
                    />
                    <Text textTransform="capitalize" color={mobileText} fontSize={12} ml={1}>
                      {colorMode}
                    </Text>
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </MobileView>

        <DesktopView>
          <Grid gridAutoFlow="column" alignItems="center">
            {LINKS_HEADER.map(link => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
            <Switch
              ml={10}
              isChecked={colorMode === "dark"}
              size="sm"
              onChange={() => toggleColorMode()}
              color="light.50"
            />
          </Grid>
        </DesktopView>
      </Flex>
    </Box>
  );
};

export default Header;
