import * as React from "react";
import { NextSeo } from "next-seo";
import { Heading, useTheme, Flex, Text } from "@chakra-ui/core";

import { Page } from "@components";

const HomePage = () => {
	const theme = useTheme();

	return (
		<Page>
			<NextSeo title="Hi, There 👋" />
			<Flex
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				height={`calc(100vh - ${theme.space[16]})`}
			>
				<Heading as="h1">Hi, There 👋</Heading>
				<Text textAlign="justify" fontSize="lg" mt="6">
					I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day I'm working
					especially with web development, learn something fun with web development stuff and
					occasionally I write on my blog when I was finished learn it.
				</Text>
			</Flex>
		</Page>
	);
};

export default HomePage;
