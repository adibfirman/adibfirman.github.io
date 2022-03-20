import * as React from "react";
import { Code as ChakraUICode } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

const InlineCode: React.FC = ({ children }) => {
  const { colorMode } = useDarkMode();

  // === dark mode need's ===
  const titleText = { light: "light.700", dark: "dark.text" }[colorMode];
  const bgColor = { light: "#F6F8FA", dark: "dark.bg3" }[colorMode];
  // ========================

  return (
    <ChakraUICode
      fontFamily="inputMono"
      backgroundColor={bgColor}
      borderWidth={1}
      borderStyle="solid"
      borderColor={bgColor}
      borderRadius="md"
      color={titleText}
      lineHeight={1}
      fontSize="sm"
      textColor="#ffcb8b"
      py="3px"
    >
      `{children}`
    </ChakraUICode>
  );
};

export default InlineCode;
