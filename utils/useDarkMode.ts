import { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/core";

export const useDarkMode = () => {
  const { colorMode } = useColorMode();
  const [bg, setBG] = useState("");
  const [colorText, setColorText] = useState("");

  useEffect(() => {
    const titleText = { light: "unset", dark: "dark.text" }[colorMode];
    const bg = { light: "azure.50", dark: "dark.bg" }[colorMode];
    setBG(bg);
    setColorText(titleText);
  }, []);

  return { bg, colorText } as const;
};
