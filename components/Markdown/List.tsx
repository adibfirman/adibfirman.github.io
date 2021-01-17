import * as React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";
import { Paragraph } from ".";

export const Ul: React.FC = ({ children }) => {
  const { colorText } = useDarkMode();

  return (
    <UnorderedList my={4} spacing={2} ml={10} color={colorText}>
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
