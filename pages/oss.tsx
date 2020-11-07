import * as React from "react";
import { Flex, Box, Text, Grid, useTheme } from "@chakra-ui/core";
import GHButton from "react-github-btn";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";

const DESC_PAGE = `In here just a list of little fun stuff learning by doing on the web platform, so creating something on Open-Source Software it's like I've been created a fun things and learning at the same time.`;
const TITLE_PAGE = "My OSS Project";
const AUTHOR_LINK = "https://github.com/adibfirman";
const OSS_LIST = [
	{
		title: "react-lazy-viewport",
		desc: "⚛️ Load your react component based on viewport browser"
	},
	{
		title: "reducer-logger",
		desc: "⚛️ Hooks for debug your awesome useReducer React API"
	},
	{
		title: "react-datepicker",
		desc: "⚛️ A React Datepicker Component"
	},
	{
		title: "ReactJS ID Website",
		desc: "An Official ReactJS Indonesia",
		link: "https://github.com/reactjs-id/website",
		ariaLabel: "reactjs-id/website"
	}
];

const OSSPage = () => {
	const theme = useTheme();

	return (
		<Page title={TITLE_PAGE} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
			<Grid
				gridTemplateColumns="repeat(2, 1fr)"
				gridAutoColumns="19rem"
				gap="4"
				mx={`calc(-1*${theme.space[24]})`}
				mt="8"
				justifyContent="center"
			>
				{OSS_LIST.map((oss, i) => (
					<NavigationCard
						key={i}
						desc={oss.desc}
						href={oss?.link ?? `${AUTHOR_LINK}/${oss.title}`}
						title={<CardTitle {...oss} />}
					/>
				))}
			</Grid>
		</Page>
	);
};

const CardTitle = ({ title, ...props }: { title: string; link?: string; ariaLabel?: string }) => (
	<Flex alignItems="center" justifyContent="space-between">
		<Text>{title}</Text>
		<Box mb="-6px">
			<GHButton
				data-text="Star"
				data-show-count
				data-icon="octicon-star"
				href={props?.link ?? `${AUTHOR_LINK}/${title}`}
			/>
		</Box>
	</Flex>
);

export default OSSPage;
