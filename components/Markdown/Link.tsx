import * as React from "react";
import { Link as ChakraUILink } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

const Link = <T extends unknown>(props: T) => {
  const { colorMode } = useDarkMode();

  // === dark mode need's ===
  const color = { light: "#0366d6", dark: "dark.linkTxt" }[colorMode];
  // ========================

  return (
    <ChakraUILink
      {...props}
      isExternal
      color={color}
      cursor="pointer"
      _hover={{ textDecoration: "underline" }}
    />
  );
};

export default Link;
