import React from "react";
import { Box } from "@chakra-ui/react";

const DesktopView: React.FC = ({ children }) => {
  return <Box display={["none", "unset"]}>{children}</Box>;
};

export default DesktopView;
