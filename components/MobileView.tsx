import React from "react";
import { Box } from "@chakra-ui/core";

const MobileView: React.FC = ({ children }) => {
  return <Box display={["unset", "none"]}>{children}</Box>;
};

export default MobileView;
