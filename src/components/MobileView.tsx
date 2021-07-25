import React from "react";
import { Box } from "@chakra-ui/react";

const MobileView = ({ children }: { children: React.ReactNode }) => {
  return <Box display={["unset", "none"]}>{children}</Box>;
};

export default MobileView;
