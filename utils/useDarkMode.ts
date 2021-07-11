import { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

export const useDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [colorModeState, setColorModeState] = useState<typeof colorMode>("light");
  const [bg, setBG] = useState("");
  const [colorText, setColorText] = useState("");

  useEffect(() => {
    const titleText = { light: "unset", dark: "dark.text" }[colorMode];
    const bg = { light: "light.50", dark: "dark.bg" }[colorMode];
    setBG(bg);
    setColorText(titleText);
    setColorModeState(colorMode);
  }, [colorMode]);

  return { bg, colorText, colorMode: colorModeState, toggleColorMode } as const;
};
