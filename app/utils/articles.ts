import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  excerpt: string;
  tags: string[];
  content: string;
  folderPath: string[];
  copyrightCover: string;
  isRegional: boolean;
};

export type TreeArticlesStructure = { [key: string]: number };

function getAllMdxFiles(
  dir: string,
  baseDir: string = dir,
): { filePath: string; folderPath: string[] }[] {
  const files: { filePath: string; folderPath: string[] }[] = [];

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        const nestedFiles = getAllMdxFiles(fullPath, baseDir);
        files.push(...nestedFiles);
      } else if (item.name.endsWith(".mdx") || item.name.endsWith(".md")) {
        const relativePath = path.relative(baseDir, dir);
        const folderPath = relativePath ? relativePath.split(path.sep) : [];
        files.push({ filePath: fullPath, folderPath });
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return files;
}

function generateTagsFromPath(folderPath: string[]): string[] {
  const tags: string[] = [];

  for (let i = 0; i < folderPath.length; i++) {
    const partialPath = folderPath.slice(0, i + 1).join("/");
    tags.push(partialPath);
  }

  return tags;
}

function getArticlesDir() {
  return path.join(process.cwd(), "content/articles");
}

export function getArticles(): Article[] {
  try {
    const articlesDirectory = getArticlesDir();
    const allFiles = getAllMdxFiles(articlesDirectory);
    const articles = allFiles
      .map(({ filePath, folderPath }) => {
        const fileContents = fs.readFileSync(filePath, "utf8");
        const fileStats = fs.statSync(filePath);
        const { data, content } = matter(fileContents);

        const fileName = path.basename(filePath).replace(/(.mdx|.md)/i, "");
        // const slug =
        //   folderPath.length > 0
        //     ? `${folderPath.join("/")}/${fileName}`
        //     : fileName;

        const folderTags = generateTagsFromPath(folderPath);
        const manualTags = data.tags || [];
        const allTags = [...folderTags, ...manualTags];

        const articleData: Article = {
          slug: fileName,
          title: data.title,
          excerpt: data.excerpt,
          tags: allTags,
          content,
          folderPath,
          copyrightCover: data.copyrightCover,
          createdAt: data.date,
          updatedAt: data.updatedAt || fileStats.mtime.toString(),
          isRegional: Boolean(data.isRegional),
        };

        return articleData;
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

    return articles;
  } catch (error) {
    console.error("Error reading articles:", error);
    return [];
  }
}

export function getSingleArticles({ slug }: Pick<Article, "slug">) {
  try {
    const articles = getArticles();
    const article = articles.find((a) => a.slug === slug);

    return article;
  } catch (err) {
    throw err;
  }
}

export function getFolderStructure(): TreeArticlesStructure {
  try {
    const articlesDirectory = getArticlesDir();
    const allFiles = getAllMdxFiles(articlesDirectory);
    const folderCounts: { [key: string]: number } = {};

    allFiles.forEach(({ folderPath }) => {
      for (let i = 0; i < folderPath.length; i++) {
        const partialPath = folderPath.slice(0, i + 1).join("/");
        folderCounts[partialPath] = (folderCounts[partialPath] || 0) + 1;
      }
    });

    return folderCounts;
  } catch (error) {
    console.error("Error getting folder structure:", error);
    return {};
  }
}

export function normalizeDate(date: string) {
  const toDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  }).format(toDate);
}
