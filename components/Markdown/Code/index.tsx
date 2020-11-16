import type { Language } from "prism-react-renderer";
import * as React from "react";
import { Code as ChakraUICode } from "@chakra-ui/core";

import HighlightCode from "./HighlightCode";

export type Props = {
  className?: string;
};

const Code: React.FC<Props> = props => {
  const { children, className } = props;
  const language = className?.replace(/language-/gi, "") as Language;

  if (!className)
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

  return <HighlightCode {...props} language={language} />;
};

export default Code;
