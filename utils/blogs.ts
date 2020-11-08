import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import { getUnixTime } from "date-fns";
import matter from "gray-matter";

const BLOG_PATH = "./blogs";
const blogsFilePaths = fs.readdirSync(BLOG_PATH);

export const markdownToHTML = async (markdown: string) => {
	const remarkedMarkdown = await remark().use(html).process(markdown);
	const htmlContent = remarkedMarkdown.toString();

	return htmlContent;
};

// get list blogs latest update
export const listBlogs = blogsFilePaths
	.map(blogFolder => {
		const filePath = path.join(BLOG_PATH, blogFolder, "index.md");
		const source = fs.readFileSync(filePath);
		const { data, content } = matter(source);
		const blogDate = new Date(data.date);

		return {
			content,
			pathname: blogFolder,
			data: {
				title: data.title,
				spoiler: data.spoiler,
				date: blogDate.toDateString(),
				timestamps: getUnixTime(blogDate)
			}
		};
	})
	.sort((a, b) => b.data.timestamps - a.data.timestamps);
