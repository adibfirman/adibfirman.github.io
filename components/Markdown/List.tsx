import * as React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/core";

import { Paragraph } from ".";

export const Ul: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  // === dark mode need's ===
  const color = { light: "#1a202c", dark: "dark.text" }[colorMode];
  // ========================
  return (
    <UnorderedList my={4} spacing={2} ml={10} color={color}>
      {children}
    </UnorderedList>
  );
};

export const Li: React.FC = ({ children }) => {
  return (
    <ListItem>
      <Paragraph as="span">{children}</Paragraph>
    </ListItem>
  );
};
