import * as React from "react";
import { GitHub, Twitter, Linkedin, Rss } from "react-feather";
import {
  Link,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Grid,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";

const SOCIAL_MEDIA = [
  {
    link: "https://github.com/adibfirman",
    text: "Checkout my Github",
    customIcon: GitHub
  },
  {
    link: "https://twitter.com/adibfirman_",
    text: "Follow me on Twitter",
    customIcon: Twitter
  },
  {
    link: "https://www.linkedin.com/in/adibfirman/",
    text: "Connect through Linkedin",
    customIcon: Linkedin
  },
  {
    link: "https://adibfirman.medium.com/feed",
    text: "Subscribe with RSS Feed",
    customIcon: Rss
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /** @start dark mode data needed */
  const bg = useColorModeValue("white", "dark.bg2");
  const textColor = useColorModeValue("gray.600", "dark.text");
  /** @end */

  return (
    <Box backgroundColor={bg} boxShadow="#00000026 0px 1px 4px 0px" py="12">
      <Grid
        gridAutoFlow={["row", "column"]}
        maxWidth={[null, "lg"]}
        gridAutoColumns={["1fr", null]}
        mx="auto"
        justifyContent="space-between"
        px={[4, 0]}
      >
        <Box display={["none", "block"]} alignSelf="center">
          <Text fontSize="xs" color={textColor}>
            © {currentYear}. All Rights Reserved.
          </Text>
        </Box>
        <Grid>
          <Heading as="h2" fontSize="md" lineHeight="15px" mb="2" color={textColor}>
            Get In Touch.
          </Heading>
          <List>
            {SOCIAL_MEDIA.map((media, i) => (
              <ListItem key={i.toString()}>
                <Grid
                  gridAutoFlow="column"
                  gap="1"
                  alignItems="center"
                  gridAutoColumns="max-content"
                >
                  <Icon as={media.customIcon} color={textColor} />
                  <Link textAlign="left" color={textColor} isExternal href={media.link} rel="me">
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
