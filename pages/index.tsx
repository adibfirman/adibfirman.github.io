import * as React from "react";
import { NextSeo } from "next-seo";
import type { NextPage } from "next";
import { Heading, useTheme, Flex, Text } from "@chakra-ui/core";
import qs from "querystring";
import absoluteURL from "next-absolute-url";

import { Page } from "@components";
import { URL as siteURL } from "@/next-seo.config";

interface HomePageProps {
	origin: string;
}

const queryStringMetaImage = {
	title: "Hi, There",
	pathURL: siteURL
} as ParamsMetaImage;

const descPage = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day I'm working
especially with web development, learn something fun with web development stuff and
occasionally I write on my blog when I was finished learn it.`;

const HomePage: NextPage<HomePageProps> = ({ origin }) => {
	const theme = useTheme();

	return (
		<Page>
			<NextSeo
				title="Hi, There...!!"
				description={descPage}
				openGraph={{
					description: descPage,
					images: [{ url: `${origin}/api/meta-image?${qs.stringify(queryStringMetaImage)}` }]
				}}
			/>
			<Flex
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				height={`calc(100vh - ${theme.space[16]})`}
			>
				<Heading as="h1">Hi, There 👋</Heading>
				<Text textAlign="justify" fontSize="lg" mt="6">
					{descPage}
				</Text>
			</Flex>
		</Page>
	);
};

HomePage.getInitialProps = ctx => {
	const { origin } = absoluteURL(ctx.req);
	return { origin };
};

export default HomePage;
