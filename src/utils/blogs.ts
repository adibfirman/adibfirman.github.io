import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import { getUnixTime } from "date-fns";
import matter from "gray-matter";

export const BLOG_PATH = path.join("_blog");
export const blogsFilePaths = fs.readdirSync(BLOG_PATH);

export const markdownToHTML = async (markdown: string) => {
  const remarkedMarkdown = await remark().use(html).process(markdown);
  const htmlContent = remarkedMarkdown.toString();

  return htmlContent;
};

export function getPostByPath(pathBlog: string) {
  const fullPath = path.join(BLOG_PATH, pathBlog, `index.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Data = {
    content: string;
    data: typeof listBlogs[0]["data"];
  };

  return { data, content } as Data;
}

// get list blogs
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
        title: data.title as string,
        spoiler: data.spoiler as string,
        date: blogDate.toDateString(),
        timestamps: getUnixTime(blogDate)
      }
    };
  })
  .sort((a, b) => b.data.timestamps - a.data.timestamps);
