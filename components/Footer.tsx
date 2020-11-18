import * as React from "react";
import { GitHub, Twitter, Linkedin, Rss } from "react-feather";
import { Link, useTheme, Box, Heading, Text, List, ListItem, Grid } from "@chakra-ui/core";

const SOCIAL_MEDIA = [
  {
    link: "https://github.com/adibfirman",
    text: "Checkout my Github",
    Icon: GitHub
  },
  {
    link: "https://twitter.com/dibfirman",
    text: "Follow me on Twitter",
    Icon: Twitter
  },
  {
    link: "https://twitter.com/dibfirman",
    text: "Connect through Linkedin",
    Icon: Linkedin
  },
  {
    link: "/rss",
    text: "Subscribe with RSS Feed",
    Icon: Rss
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box backgroundColor="white" boxShadow="#00000026 0px 1px 4px 0px" py="12">
      <Grid
        gridAutoFlow={["row", "column"]}
        maxWidth={[null, "lg"]}
        gridAutoColumns={["1fr", null]}
        mx="auto"
        justifyContent="space-between"
        px={[4, 0]}
      >
        <Box display={["none", "block"]} alignSelf="center">
          <Text fontSize="xs" color="gray.600">
            © {currentYear}. All Rights Reserved.
          </Text>
        </Box>
        <Grid>
          <Heading as="h2" fontSize="md" lineHeight="15px" mb="2">
            Get In Touch.
          </Heading>
          <List>
            {SOCIAL_MEDIA.map(({ Icon, ...media }, i) => (
              <ListItem key={i.toString()}>
                <Grid
                  gridAutoFlow="column"
                  gap="1"
                  alignItems="center"
                  gridAutoColumns="max-content"
                >
                  <Icon size={theme.space[4]} color={theme.colors.gray[600]} />
                  <Link textAlign="left" color="gray.600" isExternal href={media.link} rel="me">
                    {media.text}
                  </Link>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
