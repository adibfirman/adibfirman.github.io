import * as React from "react";
import { useTheme, Icon, Grid, Box } from "@chakra-ui/core";
import { Wind } from "react-feather";

const Blockquote: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Grid
      mx={[`calc(-1*${theme.space[3]})`, `calc(-1*${theme.space[20]})`]}
      mr={[0, null]}
      my={[6, 4]}
      gridAutoFlow="column"
      alignItems="center"
      gap={[3, 6]}
      fontStyle="italic"
    >
      <Grid justifyItems="center" gap={2}>
        <Box h={10} w={1} borderRadius="md" backgroundColor="azure.400" />
        <Icon as={Wind} color="azure.300" size="30px" />
        <Box h={10} w={1} borderRadius="md" backgroundColor="azure.400" />
      </Grid>
      {children}
    </Grid>
  );
};

export default Blockquote;
