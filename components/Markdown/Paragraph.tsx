import * as React from "react";
import { Text } from "@chakra-ui/core";

const Paragraph: React.FC = ({ children }) => (
	<Text
		fontWeight="normal"
		lineHeight="32px"
		wordBreak="break-word"
		fontFamily="merriweather"
		fontSize="1.1rem"
		color="azure.700"
		textAlign="justify"
	>
		{children}
	</Text>
);

export default Paragraph;