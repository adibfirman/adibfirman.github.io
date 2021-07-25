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

export async function putImageIntoPublic(pathBlog: string) {
  const blogFolder = path.join(BLOG_PATH, pathBlog);
  const publicPathImg = path.join(process.cwd(), `public/${IMAGES_PATH_NAME}/${pathBlog}`);
  const copyImages = () => {
    return new Promise<void>(resolve => {
      const readFOlder = fs.readdirSync(blogFolder);

      for (const file of readFOlder) {
        if (file.match(/.*\.(gif|jpe?g|bmp|png)$/gim)) {
          const fromDir = path.join(blogFolder, file);
          const toDir = path.join(publicPathImg, file);

          fs.copyFile(fromDir, toDir, err => {
            if (err) throw err;
            else resolve();
          });
        }
      }
    });
  };

  if (fs.existsSync(publicPathImg)) {
    console.log(`===== Public dir blog "${pathBlog}" exists, try put all images =====`);

    await copyImages();

    console.log(`===== Images for blog "${pathBlog}" copied to public dir =====`);
  } else {
    console.log(`===== Public dir blog "${pathBlog}" doesn't exists, create it one =====`);

    fs.mkdirSync(publicPathImg);
    await copyImages();

    console.log(`===== Public dir already created and all images already copied =====`);
  }
}

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
