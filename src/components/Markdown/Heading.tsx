import * as React from "react";
import { Heading as ChakraUIReact } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

const MAP_HEADING = {
  1: { fontSize: "4xl" },
  2: { fontSize: "3xl" },
  3: { fontSize: "xl" }
} as any;

const Heading: React.FC<{ level: number }> = props => {
  const { colorMode, colorText } = useDarkMode();
  const as = `h${props.level}` as React.ElementType;
  const defaultStyle = MAP_HEADING[props.level];

  // === dark mode need's ===
  const borderColor = { light: "unset", dark: "dark.bg6" }[colorMode];
  // ========================

  return (
    <ChakraUIReact
      as={as}
      {...defaultStyle}
      {...props}
      color={colorText}
      marginTop="10"
      marginBottom="0"
      fontWeight="bold"
      borderColor={borderColor}
    />
  );
};

export default Heading;
