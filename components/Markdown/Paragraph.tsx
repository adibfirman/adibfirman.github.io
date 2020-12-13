import * as React from "react";
import { Text } from "@chakra-ui/react";

const Paragraph: React.FC<{ as: React.ElementType }> = ({ children, as }) => (
  <Text
    as={as}
    fontWeight="normal"
    lineHeight="32px"
    wordBreak="break-word"
    fontFamily="merriweather"
    fontSize="1.1rem"
    color="azure.700"
  >
    {children}
  </Text>
);

export default Paragraph;
