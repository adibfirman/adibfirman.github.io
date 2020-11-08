import type { GetServerSideProps, NextPage } from "next";

import * as React from "react";
import { Heading, Grid, useTheme } from "@chakra-ui/core";
import absoluteURL from "next-absolute-url";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { getListBlogs } from "@utils/blogs";

interface HomePageProps {
	origin: string;
	host: string;
	recentBlogs: [
		{
			pathname: string;
			data: {
				title: string;
				spoiler: string;
				date: string;
			};
		}
	];
}

const descPage = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day working and learn a fun things about web development, and occasionally write a blog too and sometimes write about what I've done learn on web things.`;

const HomePage: NextPage<HomePageProps> = ({ recentBlogs, host }) => {
	const theme = useTheme();
	const queryStringMetaImage = {
		title: "Hi, There...!!",
		pathURL: host
	} as ParamsMetaImage;

	return (
		<Page
			title={queryStringMetaImage.title + "👋"}
			desc={descPage}
			SEO={{
				title: queryStringMetaImage.title,
				desc: descPage
			}}
		>
			<Heading as="h2" mt={16} mb={4} fontSize="xl">
				Recents blogs* 🇮🇩
			</Heading>
			<Grid
				mx={[null, `calc(-1*${theme.space[56]})`]}
				gridAutoFlow={["row", "column"]}
				gridTemplateColumns={[null, "repeat(3, minmax(1em, 1fr))"]}
				gap={4}
			>
				{recentBlogs.map(({ data, pathname }, i) => (
					<NavigationCard
						key={i}
						title={data.title}
						desc={data.spoiler}
						href={`/blog/${pathname}`}
					/>
				))}
			</Grid>
		</Page>
	);
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const listBlogs = getListBlogs();
	const { host } = absoluteURL(ctx.req);

	return {
		props: {
			host,
			recentBlogs: listBlogs.slice(0, 3)
		}
	};
};

export default HomePage;
