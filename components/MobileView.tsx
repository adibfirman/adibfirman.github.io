import React from "react";
import { Box } from "@chakra-ui/react";

const MobileView: React.FC = ({ children }) => {
  return <Box display={["unset", "none"]}>{children}</Box>;
};

export default MobileView;
