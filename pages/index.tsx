import type { GetServerSideProps, NextPage } from "next";

import * as React from "react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { Heading, Grid, useTheme, Flex, Text, Link } from "@chakra-ui/core";
import qs from "querystring";
import absoluteURL from "next-absolute-url";
import { ArrowRight } from "react-feather";

import { Page } from "@components";
import { listBlogs } from "@utils/blogs";

interface HomePageProps {
	origin: string;
	host: string;
	recentBlogs: typeof listBlogs;
}

const descPage = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day I'm working
especially with web development, learn something fun with web development stuff and
occasionally I write on my blog when I was finished learn it.`;

const HomePage: NextPage<HomePageProps> = ({ origin, recentBlogs, host }) => {
	const theme = useTheme();
	const queryStringMetaImage = {
		title: "Hi, There...!!",
		pathURL: host
	} as ParamsMetaImage;

	return (
		<Page>
			<NextSeo
				title={queryStringMetaImage.title}
				description={descPage}
				openGraph={{
					description: descPage,
					images: [{ url: `${origin}/api/meta-image?${qs.stringify(queryStringMetaImage)}` }]
				}}
			/>
			<Flex
				justifyContent="center"
				flexDirection="column"
				height={[null, `calc(100vh - ${theme.space[16]})`]}
				py={[12, null]}
			>
				<Heading textAlign="center" as="h1">
					Hi, There 👋
				</Heading>
				<Text textAlign="justify" fontSize="lg" mt="6">
					{descPage}
				</Text>
				<Heading as="h2" mt={16} mb={4} fontSize="xl">
					Recents blog* 🇮🇩
				</Heading>
				<Grid
					mx={[null, `calc(-1*${theme.space[56]})`]}
					gridAutoFlow={["row", "column"]}
					gridTemplateColumns={[null, "repeat(3, minmax(1em, 1fr))"]}
					gap={4}
				>
					{recentBlogs.map(({ data, pathname }, i) => (
						<Grid
							key={i}
							gridTemplateRows="max-content 1fr max-content"
							backgroundColor="white"
							p={4}
							borderRadius={4}
							boxShadow="5px 10px 14px 1px #d9d9da"
						>
							<Heading
								as="h2"
								fontSize="lg"
								mb={2}
								whiteSpace="nowrap"
								overflow="hidden"
								style={{ textOverflow: "ellipsis" }}
								title={data.title}
							>
								{data.title}
							</Heading>
							<Text fontSize="sm" mb={6}>
								{data.spoiler}
							</Text>
							<NextLink href={`/blog/${pathname}`}>
								<Link as="a" mr={2} fontSize="sm" mt="auto" ml="auto" fontWeight="bold">
									<Flex alignItems="center">
										See Detail
										<ArrowRight size={theme.fontSizes.lg} />
									</Flex>
								</Link>
							</NextLink>
						</Grid>
					))}
				</Grid>
			</Flex>
		</Page>
	);
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { origin, host } = absoluteURL(ctx.req);

	return {
		props: {
			origin,
			host,
			recentBlogs: listBlogs.slice(0, 3)
		}
	};
};

export default HomePage;
