import * as React from "react";
import { Heading as ChakraUIReact } from "@chakra-ui/react";

type MapHeading = {
  [key: number]: { fontSize: string; fontWeight: string };
};

const MAP_HEADING = {
  1: { fontSize: "3xl", fontWeight: "medium" },
  2: { fontSize: "2xl", fontWeight: "medium" }
} as MapHeading;

const Heading: React.FC<{ level: number }> = props => {
  const as = `h${props.level}` as React.ElementType;
  const fontWeight = MAP_HEADING[props.level]?.fontWeight ?? "";
  const fontSize = MAP_HEADING[props.level]?.fontSize ?? "";

  return <ChakraUIReact as={as} fontSize={fontSize} my={4} fontWeight={fontWeight} {...props} />;
};

export default Heading;
