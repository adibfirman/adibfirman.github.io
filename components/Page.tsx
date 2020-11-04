import * as React from "react";
import { NextSeo } from "next-seo";
import { Box, Heading, Text, Flex } from "@chakra-ui/core";
import qs from "querystring";

import { Header, Footer } from ".";
import { isBrowser } from "utils";

type PropsLayoutPage = {
	title: string;
	desc: string;
	SEO: {
		title: string;
		desc: string;
	};
};

const LayoutPage: React.FC<PropsLayoutPage> = ({ children, title, desc, SEO }) => {
	const host = !isBrowser ? "" : window.location.host;
	const pathname = !isBrowser ? "" : window.location.pathname;
	const origin = !isBrowser ? "" : window.location.origin;
	const paramsMetaImage = qs.stringify({
		title: SEO.title,
		pathURL: host + (pathname === "/" ? "" : pathname)
	} as ParamsMetaImage);

	return (
		<Box backgroundColor="azure.50">
			<NextSeo
				title={SEO.title}
				description={SEO.desc}
				openGraph={{
					description: SEO.desc,
					images: [{ url: `${origin}/api/meta-image?${paramsMetaImage}` }]
				}}
			/>
			<Box maxWidth="lg" m="0 auto" px="4" pt="16">
				<Header />
				<Flex flexDirection="column" py={[12, null]}>
					<Heading textAlign="center" as="h1">
						{title}
					</Heading>
					<Text textAlign="justify" fontSize="lg" mt="6">
						{desc}
					</Text>
					{children}
				</Flex>
			</Box>
			<Footer />
		</Box>
	);
};

export default LayoutPage;
