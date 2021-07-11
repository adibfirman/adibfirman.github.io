import React from "react";
import { Box } from "@chakra-ui/react";

const DesktopView = ({ children }: { children: React.ReactNode }) => {
  return <Box display={["none", "unset"]}>{children}</Box>;
};

export default DesktopView;
