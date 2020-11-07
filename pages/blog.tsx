import * as React from "react";
import { Box } from "@chakra-ui/core";

import { Page } from "@components";

const DESC_PAGE = `So in this page I was writing my little knowledge about a web things, all by blogs writed with 🇮🇩 content, but for the further I will trying to translate it 🙏.`;
const TITLE_PAGE = "A knowledge werehouse ";

const BlogPage = () => {
	return (
		<Page title={TITLE_PAGE} desc={DESC_PAGE} SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}>
			<Box mt={8}>hellow</Box>
		</Page>
	);
};

export default BlogPage;
