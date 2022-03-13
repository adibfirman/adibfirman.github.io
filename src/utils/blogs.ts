import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import { getUnixTime } from "date-fns";
import matter from "gray-matter";

export const BLOG_PATH = path.join(process.cwd(), "_blog-contents");
export const blogsFilePaths = fs.readdirSync(BLOG_PATH);
export const IMAGES_PATH_NAME = "images-blog";

export const markdownToHTML = async (markdown: string) => {
  const remarkedMarkdown = await remark().use(html).process(markdown);
  const htmlContent = remarkedMarkdown.toString();

  return htmlContent;
};

export function getPostByPath(pathBlog: string, contentLang: string) {
  const langExtension = contentLang === "id" ? "" : "." + contentLang;
  const fullPath = path.join(BLOG_PATH, pathBlog, `index${langExtension}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Data = {
    content: string;
    data: typeof listBlogs[0]["data"];
  };

  return { data, content } as Data;
}

export const getBlogs = (lang: string = "id") => {
  let constructBlogs = blogsFilePaths
    .map(blogFolder => {
      const langExtension = lang === "id" ? "" : "." + lang;
      const filePath = path.join(BLOG_PATH, blogFolder, `index${langExtension}.md`);
      let source;

      try {
        source = fs.readFileSync(filePath);
      } catch (err) {
        source = "";
      }

      if (source) {
        const { data, content } = matter(source);
        const blogDate = new Date(data.date || "2999");

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
      }

      return "";
    })
    .filter(Boolean);

  constructBlogs = constructBlogs.sort((a, b) => {
    if (a && b) return b.data.timestamps - a.data.timestamps;
    return 0;
  });

  return constructBlogs;
};

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
