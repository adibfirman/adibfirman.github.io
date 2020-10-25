import React, { useEffect, useState } from "react";
import { Text, BoxProps, Box, Flex, Grid, Link } from "@chakra-ui/core";

import { isBrowser } from "@utils";

const transition = "all 350ms ease-in-out 0s";
const textProps = {
	transition,
	position: "absolute",
	fontFamily: "grandstander",
	fontSize: "xl"
} as BoxProps;

const Header = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScrollBrowser = () => {
			if (window.pageYOffset > 0) setIsScrolling(true);
			else setIsScrolling(false);
		};

		if (isBrowser) window.addEventListener("scroll", handleScrollBrowser, false);
		return () => window.removeEventListener("scroll", handleScrollBrowser);
	}, []);

	return (
		<Box
			as="nav"
			zIndex={1}
			transition={transition}
			position="fixed"
			top="0"
			left="0"
			width="100%"
			backgroundColor={isScrolling ? "white" : "azure.50"}
			boxShadow={!isScrolling ? "unset" : "rgba(0, 0, 0, 0.15) 0px 1px 4px 0px"}
		>
			<Flex
				position="relative"
				maxWidth="lg"
				m="0 auto"
				p="4"
				justifyContent="space-between"
				alignItems="center"
			>
				<Text {...textProps} top="15px" left="-2px" opacity={isScrolling ? 1 : 0}>
					@
				</Text>
				<Text {...textProps} opacity={!isScrolling ? 1 : 0}>
					a
				</Text>
				<Text {...textProps} left={isScrolling ? "16px" : "29px"}>
					dib
				</Text>
				<Text {...textProps} left={isScrolling ? "46px" : "65px"}>
					firman
				</Text>
				<div />
				<Grid gridAutoFlow="column" gap={6}>
					<Link>Blog</Link>
					<Link>Talks</Link>
					<Link>OSS</Link>
				</Grid>
			</Flex>
		</Box>
	);
};

export default Header;
