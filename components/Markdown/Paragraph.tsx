import * as React from "react";
import { Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/core";

const Paragraph: React.FC<{ as: React.ElementType }> = ({ children, as }) => {
  const { colorMode } = useColorMode();

  // === dark mode need's ===
  const titleText = { light: "azure.700", dark: "dark.text" }[colorMode];
  // ========================

  return (
    <Text
      as={as}
      fontWeight="normal"
      lineHeight="32px"
      wordBreak="break-word"
      fontFamily="merriweather"
      fontSize="1.1rem"
      color={titleText}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
