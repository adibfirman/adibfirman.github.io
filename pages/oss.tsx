import * as React from "react";
import { Page } from "@components";

const DESC_PAGE = `In here just my little fun stuff and learning by doing on the web platform, so creating something on Open-Source Software like you did a fun stuff and learning at once.`;

const OSSPage = () => {
	return (
		<Page
			title="My OSS Project"
			desc={DESC_PAGE}
			SEO={{ title: "My OSS Project", desc: DESC_PAGE }}
		>
			Thank you
		</Page>
	);
};

export default OSSPage;
