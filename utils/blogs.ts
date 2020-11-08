import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";

export const BLOG_PATH = path.join(process.cwd(), "blogs");
export const blogsFilePaths = fs.readdirSync(BLOG_PATH);

export const markdownToHTML = async (markdown: string) => {
	const remarkedMarkdown = await remark().use(html).process(markdown);
	const htmlContent = remarkedMarkdown.toString();

	return htmlContent;
};
