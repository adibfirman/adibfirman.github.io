import * as React from "react";
import { Text } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

const Paragraph: React.FC<{ as: React.ElementType }> = ({ children, as }) => {
  const { colorText } = useDarkMode();

  return (
    <Text
      as={as}
      fontWeight="normal"
      lineHeight="32px"
      wordBreak="break-word"
      fontFamily="merriweather"
      fontSize="1em"
      color={colorText}
      mt="8"
    >
      {children}
    </Text>
  );
};

export default Paragraph;
