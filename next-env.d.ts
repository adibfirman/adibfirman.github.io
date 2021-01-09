/// <reference types="next" />
/// <reference types="next/types/global" />

import type { DefaultTheme as ChakraUIDefaultTheme } from "@chakra-ui/core";

type ParamsMetaImage = {
  title: string;
  pathURL: string;
};

type CustomizeAppProps = {
  host: string;
  origin: string;
};

interface CustomDefaultTheme extends ChakraUIDefaultTheme {
  colors: ChakraUIDefaultTheme["colors"] & { dark: any };
}
