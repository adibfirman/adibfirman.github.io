import * as React from "react";
import NextLink from "next/link";
import { Grid, Text, Flex, useTheme, PseudoBox } from "@chakra-ui/core";
import { ArrowRight } from "react-feather";

type Props = {
	title: string | React.ReactElement;
	desc: string;
	href: string;
};

const NavigationCard = ({ title, desc, href }: Props) => {
	const theme = useTheme();

	return (
		<NextLink href={href}>
			<PseudoBox
				role="group"
				backgroundColor="white"
				borderRadius={4}
				boxShadow="xl"
				p={4}
				_hover={{ cursor: "pointer" }}
			>
				<Grid h="100%" gridTemplateRows="max-content 1fr max-content">
					<PseudoBox
						as="h2"
						fontSize="lg"
						mb={1}
						whiteSpace="nowrap"
						overflow="hidden"
						style={{ textOverflow: "ellipsis" }}
						title={title}
						fontWeight={700}
					>
						{title}
					</PseudoBox>
					<Text fontSize="sm" mb={6}>
						{desc}
					</Text>
					<Flex alignItems="center">
						<PseudoBox
							mr={2}
							fontSize="sm"
							mt="auto"
							ml="auto"
							fontWeight={700}
							_groupHover={{ textDecoration: "underline" }}
						>
							See Detail
						</PseudoBox>
						<ArrowRight size={theme.fontSizes.lg} />
					</Flex>
				</Grid>
			</PseudoBox>
		</NextLink>
	);
};

export default NavigationCard;
