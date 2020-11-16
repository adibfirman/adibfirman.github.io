import * as React from "react";
import { Link as ChakraUILink } from "@chakra-ui/react";

const Link = <T extends unknown>(props: T) => (
  <ChakraUILink
    {...props}
    isExternal
    color="#0366d6"
    cursor="pointer"
    _hover={{ textDecoration: "underline" }}
  />
);

export default Link;
