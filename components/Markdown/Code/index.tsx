import * as React from "react";
import { Fragment } from "react";
import { Code as ChakraUICode } from "@chakra-ui/core";

type Props = {
	className?: string;
};

const Code: React.FC<Props> = ({ children, className }) => {
	if (!className)
		return (
			<ChakraUICode
				fontFamily="inputMono"
				backgroundColor="#515a6b"
				borderRadius="5px"
				color="white"
				py="4px"
				px="6px"
				lineHeight={1}
				fontSize="sm"
			>
				{children}
			</ChakraUICode>
		);
	return <Fragment>{children}</Fragment>;
};

export default Code;
