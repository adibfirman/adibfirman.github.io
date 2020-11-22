import * as React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

import { Paragraph } from ".";

export const Ul: React.FC = ({ children }) => (
  <UnorderedList my={4} spacing={2} ml={10}>
    {children}
  </UnorderedList>
);

export const Li: React.FC = ({ children }) => (
  <ListItem>
    <Paragraph as="span">{children}</Paragraph>
  </ListItem>
);
