import type { GetStaticProps, NextPage } from "next";

import * as React from "react";
import { Heading, Box, Grid, useTheme } from "@chakra-ui/core";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";
import { listBlogs } from "@utils/blogs";

interface HomePageProps extends CustomizeAppProps {
	recentBlogs: typeof listBlogs;
}

const DESC_PAGE = `I'm Adib Firman, I'm software engineer from 🇮🇩 (Indonesia) day by day working and learn a fun things about web development, and occasionally plant seeds on my own digital garden.`;
const TITLE_PAGE = "Hi, There...!!";

const HomePage: NextPage<HomePageProps> = ({ recentBlogs, host, origin }) => {
	const theme = useTheme();

	return (
		<Page
			host={host}
			origin={origin}
			title={TITLE_PAGE + "👋"}
			desc={DESC_PAGE}
			SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
		>
			<Box my={16}>
				<Heading as="h2" mb={4} fontSize="xl">
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
			</Box>
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
