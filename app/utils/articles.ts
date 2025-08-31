import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  folderPath: string[];
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
      } else if (item.name.endsWith(".mdx")) {
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
        const { data, content } = matter(fileContents);

        const fileName = path.basename(filePath, ".mdx");
        // const slug =
        //   folderPath.length > 0
        //     ? `${folderPath.join("/")}/${fileName}`
        //     : fileName;

        const folderTags = generateTagsFromPath(folderPath);
        const manualTags = data.tags || [];
        const allTags = [...folderTags, ...manualTags];

        return {
          slug: fileName,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: allTags,
          content,
          folderPath,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return articles;
  } catch (error) {
    console.error("Error reading articles:", error);
    return [];
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
