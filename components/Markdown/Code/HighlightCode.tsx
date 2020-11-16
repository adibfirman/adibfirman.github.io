import type { Language } from "prism-react-renderer";
import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import rangeNumber from "parse-numeric-range";
import { Flex, Text, Box } from "@chakra-ui/react";

type Props = {
  language: string;
  value: string;
};

const HighlightCode: React.FC<Props> = ({ value, language }) => {
  const langName = language.replace(/{([^}]+)}/gi, "") as Language;

  return (
    <Highlight {...defaultProps} theme={theme} code={value} language={langName}>
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
                {langName.toUpperCase()} Code
              </Text>
              <Text color="azure.600" fontSize="xs">
                {lengthTokens < 10 ? `0${lengthTokens}` : lengthTokens} LOC
              </Text>
            </Flex>
            <Box overflowX="auto" my="-6px" py="6px">
              {tokens.map((line, i) => {
                const number = i + 1;
                let shouldHighlightCode = false;

                if (language.search(/({)|(})/gm) > -1) {
                  const highlightCode = language.replace(/^[a-z]+({)|(})/gm, "");
                  const highlightRows = rangeNumber(highlightCode);

                  if (highlightRows.some(row => row === number)) shouldHighlightCode = true;
                }

                return (
                  <Flex
                    key={i}
                    display="table-row"
                    bgColor={shouldHighlightCode ? "#fffbdd" : "unset"}
                    {...getLineProps({ line, key: i })}
                  >
                    <Text as="span" fontSize="sm" color="azure.200" ml={8} mr={4}>
                      {number}
                    </Text>
                    {line.map((token, key) => (
                      <Text key={key} as="span" fontSize="sm" {...getTokenProps({ token, key })} />
                    ))}
                  </Flex>
                );
              })}
            </Box>
          </Box>
        );
      }}
    </Highlight>
  );
};

export default HighlightCode;
