import * as React from "react";
import { Flex, Grid, useTheme } from "@chakra-ui/core";

import { Page } from "@components";
import { NavigationCard } from "@components/UI";

const DESC_PAGE = `In here just a list of little fun stuff learning by doing on the web platform, so creating something on Open-Source Software it's like I've been created a fun things and learning at the same time.`;
const TITLE_PAGE = "My OSS Project";

const OSSPage = () => {
	const theme = useTheme();

	return (
		<Page title={TITLE_PAGE} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
			<Grid
				gridTemplateColumns="repeat(2, 1fr)"
				gridAutoColumns="19rem"
				gap="4"
				mx={`calc(-1*${theme.space[20]})`}
				mt="8"
				justifyContent="center"
			>
				<NavigationCard
					title="react-lazy-viewport"
					desc="⚛️ Load your react component based on viewport browser"
					href="https://github.com/adibfirman/react-lazy-viewport"
				/>
				<NavigationCard
					title="react-lazy-viewport"
					desc="⚛️ Load your react component based on viewport browser"
					href="https://github.com/adibfirman/react-lazy-viewport"
				/>
				<NavigationCard
					title="react-lazy-viewport"
					desc="⚛️ Load your react component based on viewport browser"
					href="https://github.com/adibfirman/react-lazy-viewport"
				/>
			</Grid>
		</Page>
	);
};

export default OSSPage;
