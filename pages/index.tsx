import type { GetStaticProps, NextPage } from "next";

import * as React from "react";
import { Heading, Grid, useTheme } from "@chakra-ui/core";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { listBlogs } from "@utils/blogs";

interface HomePageProps {
	origin: string;
	recentBlogs: typeof listBlogs;
}

const DESC_PAGE = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day working and learn a fun things about web development, and occasionally write a blog too and sometimes write about what I've done learn on web things.`;
const TITLE_PAGE = "Hi, There...!!";

const HomePage: NextPage<HomePageProps> = ({ recentBlogs }) => {
	const theme = useTheme();

	return (
		<Page title={TITLE_PAGE + "👋"} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
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

export const getStaticProps: GetStaticProps = async () => {
	const threeRecentBlogs = listBlogs.slice(0, 3);

	return {
		props: {
			recentBlogs: threeRecentBlogs
		}
	};
};

export default HomePage;
