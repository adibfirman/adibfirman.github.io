import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import { getUnixTime, format as formatDate } from "date-fns";
import matter from "gray-matter";
import RSSParser from "rss-parser";

export const BLOG_PATH = path.join(process.cwd(), "_blog-contents");
export const blogsFilePaths = fs.readdirSync(BLOG_PATH);
export const IMAGES_PATH_NAME = "images-blog";

export const markdownToHTML = async (markdown: string) => {
  const remarkedMarkdown = await remark().use(html).process(markdown);
  const htmlContent = remarkedMarkdown.toString();

  return htmlContent;
};

export function getPostByPath(pathBlog: string, contentLang: string) {
  const langExtension = contentLang === "en" ? "" : "." + contentLang;
  const blogPathFolder = path.join(BLOG_PATH, pathBlog);
  console.log("langExtension:", langExtension);
  const fullPath = path.join(blogPathFolder, `index${langExtension}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const availableTranslations = fs
    .readdirSync(blogPathFolder)
    .map(fileName => {
      if (fileName.includes("md")) {
        const getTranslation = fileName.replace(/(index.|md|.md)/gm, "");

        return getTranslation || "en";
      }

      return "";
    })
    .filter(Boolean);

  return {
    data,
    content,
    availableTranslations: availableTranslations.length > 1 ? availableTranslations : []
  } as const;
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

export const getListFromMedium = async () => {
  const parser = new RSSParser();
  const fetchRSS = await parser.parseURL("https://medium.com/feed/@adibfirman");

  const data = fetchRSS.items.map(item => {
    const pubDate = new Date(item.pubDate || "");
    const content = item["content:encoded"];

    return {
      title: item.title || "",
      link: item.link || "",
      published: formatDate(pubDate, "MMM dd, yyyy"),
      content
    };
  });

  return data;
};
