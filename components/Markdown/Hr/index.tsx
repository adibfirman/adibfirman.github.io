import * as React from "react";
import { Grid, Text } from "@chakra-ui/core";

import { RightHr, LeftHr } from "./style";

const Hr = () => (
	<Grid py={4} alignItems="center" gridAutoFlow="column" gridTemplateColumns="1fr max-content 1fr">
		<LeftHr />
		<Text color="azure.200">{"<hr />"}</Text>
		<RightHr />
	</Grid>
);

export default Hr;
