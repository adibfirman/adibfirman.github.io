import styled from "@emotion/styled";
import { Box } from "@chakra-ui/core";

export const RightHr = styled(Box)`
	height: 1px;
	background: rgb(246, 247, 248);
	background: linear-gradient(
		90deg,
		rgba(246, 247, 248, 1) 0%,
		rgba(167, 168, 169, 1) 100%,
		rgba(167, 168, 169, 1) 100%
	);
`;

export const LeftHr = styled(Box)`
	height: 1px;
	background: rgb(167, 168, 169);
	background: linear-gradient(
		90deg,
		rgba(167, 168, 169, 1) 0%,
		rgba(167, 168, 169, 1) 0%,
		rgba(246, 247, 248, 1) 100%
	);
`;
