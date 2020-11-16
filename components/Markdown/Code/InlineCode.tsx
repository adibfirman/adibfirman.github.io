import * as React from "react";
import { Code as ChakraUICode } from "@chakra-ui/core";

const InlineCode: React.FC = ({ children }) => {
  return (
    <ChakraUICode
      fontFamily="inputMono"
      backgroundColor="#F6F8FA"
      borderWidth={1}
      borderStyle="solid"
      borderColor="azure.200"
      borderRadius="md"
      color="#e3116c"
      py="4px"
      px="6px"
      lineHeight={1}
      fontSize="sm"
    >
      {children}
    </ChakraUICode>
  );
};

export default InlineCode;
