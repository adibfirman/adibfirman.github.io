import * as React from "react";
import NextLink from "next/link";
import * as DOMPurify from "dompurify";

import { Grid, Text, Flex, Box, useTheme, useColorModeValue } from "@chakra-ui/react";
import { ArrowRight as IconArrowRight } from "react-feather";

type Props = {
  title: string | React.ReactElement;
  desc: string;
  href: string;
  footerText?: string;
};

const NavigationCard = ({ title, desc, href, footerText }: Props) => {
  const theme = useTheme();

  /** @start dark mode data needed */
  const titleText = useColorModeValue("unset", "dark.text");
  const icon = useColorModeValue(theme.colors.black, theme.colors.dark.text);
  const bg = useColorModeValue("white", "dark.bg2");
  /** @end */

  return (
    <NextLink href={href + window.location.search}>
      <Box
        role="group"
        backgroundColor={bg}
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
            color={titleText}
          >
            {title}
          </Box>
          <Text
            fontSize="sm"
            mb={6}
            color={titleText}
            data-testid="desc"
            noOfLines={2}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(desc, { USE_PROFILES: { html: false } })
            }}
          />
          <Flex alignItems="center">
            {footerText && (
              <Box mr={2} fontSize="xs" mt="auto" fontWeight={700} color={titleText}>
                {footerText}
              </Box>
            )}
            <Box
              mr={2}
              fontSize="sm"
              mt="auto"
              ml="auto"
              fontWeight={700}
              _groupHover={{ textDecoration: "underline" }}
              color={titleText}
            >
              See Detail
            </Box>
            <IconArrowRight color={icon} size={theme.fontSizes.lg} />
          </Flex>
        </Grid>
      </Box>
    </NextLink>
  );
};

export default NavigationCard;
