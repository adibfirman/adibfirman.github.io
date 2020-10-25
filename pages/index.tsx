import React from "react";
import { NextSeo } from "next-seo";

import { Page } from "@components";

const HomePage = () => {
	return (
		<Page>
			<NextSeo title="Welcome👋" />
			<h1 style={{ marginTop: "400vh" }}>hello world</h1>
		</Page>
	);
};

export default HomePage;
