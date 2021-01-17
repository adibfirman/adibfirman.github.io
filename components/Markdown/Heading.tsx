import * as React from "react";
import { Heading as ChakraUIReact } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

type MapHeading = {
  [key: number]: { fontSize: string; fontWeight: string };
};

const MAP_HEADING = {
  1: { fontSize: "3xl", fontWeight: "bold", borderBottom: "1px solid" },
  2: {
    fontSize: "2xl",
    fontWeight: "bold",
    borderBottom: "1px solid",
    marginTop: "24px",
    marginBottom: "16px"
  },
  3: { fontSize: "xl", fontWeight: "bold" }
} as MapHeading;

const Heading: React.FC<{ level: number }> = props => {
  const { colorMode, colorText } = useDarkMode();
  const as = `h${props.level}` as React.ElementType;
  const defaultStyle = MAP_HEADING[props.level];

  // === dark mode need's ===
  const borderColor = { light: "unset", dark: "dark.bg6" }[colorMode];
  // ========================

  return (
    <ChakraUIReact
      color={colorText}
      as={as}
      my={4}
      {...defaultStyle}
      borderColor={borderColor}
      {...props}
    />
  );
};

export default Heading;
