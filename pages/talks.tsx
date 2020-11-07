import * as React from "react";
import { Box, Grid, Flex, Text, List, ListItem, useTheme, Link } from "@chakra-ui/core";
import { Award, ExternalLink } from "react-feather";

import { Page } from "@components";

const DESC_PAGE = `By the way in below here, I have become a speaker and sharing according the theme of talk, so It's amazing moment meet a new friends, sharing new technology, and so on.`;
const TITLE_PAGE = "Yeahh, I was in here..!!";
const LiST_TALK = [
	{
		when: "January 31, 2020",
		title: "Deep Dive with useCallback and useMemo",
		at: "Facebook Lab Innovation Indonesia",
		resource: "https://github.com/adibfirman/deep-dive-with-usecallback-usememo"
	},
	{
		when: "September 25, 2019",
		title: "Avoid these when using hooks",
		at: "Shopee Indonesia",
		resource: "https://avoid-these-when-using-hooks.netlify.app/"
	}
];

const OSSPage = () => {
	const theme = useTheme();

	return (
		<Page title={TITLE_PAGE} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
			<Box mt="8">
				<List spacing={6}>
					{LiST_TALK.map(talk => (
						<ListItem key={talk.when}>
							<Grid
								gridAutoFlow="column"
								gridTemplateColumns="max-content 1fr max-content"
								alignItems="center"
								gap={theme.space[2]}
							>
								<Award size={theme.space[6]} color={theme.colors.green[500]} />
								<Flex flexDirection="column">
									<Text>{talk.title}</Text>
									<Text fontWeight={600} mt="-3px" fontSize="sm">
										{talk.when},{" "}
										<Text as="span" fontStyle="italic">
											{talk.at}
										</Text>
									</Text>
								</Flex>
								<Link href={talk.resource} isExternal>
									<ExternalLink size={theme.space[6]} color={theme.colors.blue[500]} />
								</Link>
							</Grid>
						</ListItem>
					))}
				</List>
			</Box>
		</Page>
	);
};

export default OSSPage;
