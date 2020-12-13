import * as React from "react";
import NextLink from "next/link";
import { Grid, Text, Flex, Box } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/core";
import { ArrowRight } from "react-feather";

type Props = {
  title: string | React.ReactElement;
  desc: string;
  href: string;
};

const NavigationCard = ({ title, desc, href }: Props) => {
  const theme = useTheme();

  return (
    <NextLink href={href}>
      <Box
        role="group"
        backgroundColor="white"
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
          >
            {title}
          </Box>
          <Text fontSize="sm" mb={6}>
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
            >
              See Detail
            </Box>
            <ArrowRight size={theme.fontSizes.lg} />
          </Flex>
        </Grid>
      </Box>
    </NextLink>
  );
};

export default NavigationCard;
