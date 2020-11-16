import type { Language } from "prism-react-renderer";
import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import { Flex, Text, Box } from "@chakra-ui/react";

type Props = {
  language: Language;
  value: string;
};

const HighlightCode: React.FC<Props> = ({ value, language }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={value} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const lengthTokens = tokens.length;

        return (
          <Box
            as="pre"
            borderWidth={1}
            borderStyle="solid"
            borderColor="azure.200"
            borderRadius="md"
            overflow="hidden"
            pb={1}
            my={6}
            className={className}
            style={style}
          >
            <Flex
              bgColor="azure.100"
              borderTop="inherit"
              overflow="hidden"
              borderBottomWidth={1}
              borderBottomStyle="solid"
              borderBottomColor="azure.200"
              py={2}
              px={4}
              justifyContent="space-between"
            >
              <Text color="azure.600" fontSize="xs">
                {language.toUpperCase()} Code
              </Text>
              <Text color="azure.600" fontSize="xs">
                {lengthTokens < 10 ? `0${lengthTokens}` : lengthTokens} LOC
              </Text>
            </Flex>
            <Box overflowX="auto" my="-6px" py="6px">
              {tokens.map((line, i) => (
                <Flex key={i} h="20px" {...getLineProps({ line, key: i })}>
                  <Text as="span" fontSize="sm" color="azure.200" ml={8} mr={4}>
                    {i + 1}
                  </Text>
                  {line.map((token, key) => (
                    <Text key={key} as="span" fontSize="sm" {...getTokenProps({ token, key })} />
                  ))}
                </Flex>
              ))}
            </Box>
          </Box>
        );
      }}
    </Highlight>
  );
};

export default HighlightCode;
