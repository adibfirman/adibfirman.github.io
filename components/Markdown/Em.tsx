import * as React from "react";
import { Text } from "@chakra-ui/core";

const Em: React.FC = ({ children }) => (
	<Text as="em" textDecoration="underline" fontWeight="bold">
		{children}
	</Text>
);

export default Em;
