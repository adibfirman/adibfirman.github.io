import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  light: {
    "50": "#f6f7f8",
    "100": "#d9d9da",
    "200": "#c0c1c2",
    "300": "#a7a8a9",
    "400": "#8e8f90",
    "500": "#757677",
    "600": "#5d5d5e",
    "700": "#444445",
    "800": "#2b2b2c",
    "900": "#121213"
  },
  dark: {
    bg: "#0d1117",
    bg1: "#4c659c",
    bg2: "#161b22",
    bg3: "#f0f6fc26",
    bg4: "#1c2127",
    bg5: "#30363d",
    bg6: "#21262d",
    text: "#c9d1d9",
    text1: "#3871b3",
    text2: "#4f5459",
    linkTxt: "#58a6ff"
  }
};

const fonts = {
  grandstander: "'Grandstander', cursive",
  merriweather: "'Merriweather', serif",
  inputMono: "InputMono-Medium"
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true
};

const theme = extendTheme({ config, colors, fonts });
export default theme;
