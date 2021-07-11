import * as React from "react";
import NextLink from "next/link";
import { Grid, Text, Flex, Box, useTheme, useColorMode } from "@chakra-ui/react";
import { ArrowRight } from "react-feather";

type Props = {
  title: string | React.ReactElement;
  desc: string;
  href: string;
};

const NavigationCard = ({ title, desc, href }: Props) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  // === dark mode need's ===
  const titleText = { light: "unset", dark: "dark.text" };
  const icon = { light: "#000", dark: theme.colors.dark.text };
  const bg = { light: "white", dark: "dark.bg2" };
  // ========================

  return (
    <NextLink href={href}>
      <Box
        role="group"
        backgroundColor={bg[colorMode]}
        borderRadius={4}
        boxShadow="xl"
        p={4}
        _hover={{ cursor: "pointer" }}
      >
        <Grid h="100%" gridTemplateRows="max-content 1fr max-content">
          <Box
            as="h2"
            fontSize="lg"
            mb={1}
            whiteSpace="nowrap"
            overflow="hidden"
            style={{ textOverflow: "ellipsis" }}
            title={typeof title !== "string" ? "" : title}
            fontWeight={700}
            color={titleText[colorMode]}
          >
            {title}
          </Box>
          <Text fontSize="sm" mb={6} color={titleText[colorMode]}>
            {desc}
          </Text>
          <Flex alignItems="center">
            <Box
              mr={2}
              fontSize="sm"
              mt="auto"
              ml="auto"
              fontWeight={700}
              _groupHover={{ textDecoration: "underline" }}
              color={titleText[colorMode]}
            >
              See Detail
            </Box>
            <ArrowRight color={icon[colorMode]} size={theme.fontSizes.lg} />
          </Flex>
        </Grid>
      </Box>
    </NextLink>
  );
};

export default NavigationCard;
