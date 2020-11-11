import type { DefaultSeoProps } from "next-seo";

const description = "Web Development, Software Engineering and Jr Developer For Life";
const title = "Adib Firman";
export const URL = "https://adibfirman-dev.dibfirman.vercel.app";

export default {
	title,
	description,
	titleTemplate: "%s · (@adibfirman)",
	openGraph: {
		title,
		description,
		url: URL,
		type: "website"
	},
	twitter: {
		cardType: "summary_large_image",
		site: "@dibfirman",
		handle: "@dibfirman"
	}
} as DefaultSeoProps;
