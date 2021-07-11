import * as React from "react";
import { Grid, Text, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/core";

import { RightHr, LeftHr } from "./style";

const Hr = () => {
  const { colorMode } = useColorMode();

  if (colorMode === "dark") {
    return <Box backgroundColor="dark.bg5" height=".25em" my="24px" />;
  }

  return (
    <Grid
      py={4}
      alignItems="center"
      gridAutoFlow="column"
      gridTemplateColumns="1fr max-content 1fr"
    >
      <LeftHr />
      <Text color="light.200">{"<hr />"}</Text>
      <RightHr />
    </Grid>
  );
};

export default Hr;
