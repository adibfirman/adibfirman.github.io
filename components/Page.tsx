import * as React from "react";
import { Box } from "@chakra-ui/core";

import { Header, Footer } from "./";

const LayoutPage: React.FC = ({ children }) => (
	<Box backgroundColor="azure.50">
		<Box maxWidth="lg" m="0 auto" px="4" pt="16">
			<Header />
			<Box>{children}</Box>
		</Box>
		<Footer />
	</Box>
);

export default LayoutPage;
