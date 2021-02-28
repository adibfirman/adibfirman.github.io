import * as React from "react";
import { Link as ChakraUILink, LinkProps } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

type Props = { children?: React.ReactNode } & LinkProps;

const Link = <T extends unknown>(props: T & Props) => {
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
    >
      {props.children}
    </ChakraUILink>
  );
};

export default Link;
