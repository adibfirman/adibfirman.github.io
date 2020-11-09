import * as React from "react";
import { Box } from "@chakra-ui/core";

import { Page } from "@components";

const DESC_PAGE = `So in this page, it's just an open space where I share my knowledge or let say "seeds" of my thoughts to be cultivated in public, *most of these seeds writed in 🇮🇩 `;
const TITLE_PAGE = "I'm a Digital Gardeners";

const BlogPage = () => {
	return (
		<Page title={TITLE_PAGE} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
			<Box mt={8}>hellow</Box>
		</Page>
	);
};

export default BlogPage;
