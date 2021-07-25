import type { Language } from "prism-react-renderer";
import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/github";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import rangeNumber from "parse-numeric-range";
import { Flex, Text, Box } from "@chakra-ui/react";

import { useDarkMode } from "@utils/useDarkMode";

type Props = {
  language: string;
  value: string;
};

type TypeWrapperCode = {
  isHighlightCode: boolean;
  bgColor: string;
  boxShadowColor: string;
};

const WrapperCode = styled.div<TypeWrapperCode>`
  ${props =>
    props.isHighlightCode &&
    css`
      /* box-sizing: border-box;
      box-shadow: inset 4px 0 0 ${props.boxShadowColor};
      background-color: ${props.bgColor}; */

      position: relative;
      background-color: ${props.bgColor};

      &::before {
        content: "+";
        color: ${props.boxShadowColor};
        position: absolute;
        left: -15px;
      }
    `}
`;

const HighlightCode: React.FC<Props> = ({ value, language }) => {
  const langName = language.replace(/{([^}]+)}/gi, "") as Language;
  const { colorMode } = useDarkMode();
  const theme = { light: lightTheme, dark: darkTheme }[colorMode];

  // === dark mode need's ===
  const bgHeader = { light: "light.100", dark: "dark.bg2" }[colorMode];
  const bordercolor = { light: "light.200", dark: "dark.bg4" }[colorMode];
  const headerText = { light: "light.600", dark: "dark.text" }[colorMode];
  const numberCode = { light: "light.200", dark: "dark.text2" }[colorMode];
  // ========================

  return (
    <Highlight {...defaultProps} theme={theme} code={value} language={langName}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const lengthTokens = tokens.length;

        return (
          <Box
            as="pre"
            borderWidth={1}
            borderStyle="solid"
            borderColor={bordercolor}
            borderRadius="6px"
            overflow="hidden"
            pb={1}
            my={6}
            className={className}
            style={style}
          >
            <Flex
              bgColor={bgHeader}
              borderTop="inherit"
              overflow="hidden"
              borderBottomWidth={1}
              borderBottomStyle="solid"
              borderBottomColor={bordercolor}
              py={2}
              px={4}
              justifyContent="space-between"
            >
              <Text color={headerText} fontSize="xs">
                {langName.toUpperCase()} Code
              </Text>
              <Text color={headerText} fontSize="xs">
                {lengthTokens < 10 ? `0${lengthTokens}` : lengthTokens} LOC
              </Text>
            </Flex>
            <Box overflowX="auto" my="-6px" py="6px" fontFamily="inputMono">
              {tokens.map((line, i) => {
                const number = i + 1;
                let shouldHighlightCode = false;

                if (language.search(/({)|(})/gm) > -1) {
                  const highlightCode = language.replace(/^[a-z]+({)|(})/gm, "");
                  const highlightRows = rangeNumber(highlightCode);

                  if (highlightRows.some(row => row === number)) shouldHighlightCode = true;
                }

                const highlightColor = { light: "#fffbdd", dark: "#bb80091a" }[colorMode];
                const boxShadow = { light: "unset", dark: "#bb8009" }[colorMode];

                return (
                  <Flex key={i} {...getLineProps({ line, key: i })} alignItems="center">
                    <Text as="span" fontSize="xs" color={numberCode} ml={8} mr={4}>
                      {number}
                    </Text>
                    <WrapperCode
                      bgColor={highlightColor}
                      isHighlightCode={shouldHighlightCode}
                      boxShadowColor={boxShadow}
                    >
                      {line.map((token, key) => (
                        <Text
                          key={key}
                          as="span"
                          fontSize="xs"
                          {...getTokenProps({ token, key })}
                        />
                      ))}
                    </WrapperCode>
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
