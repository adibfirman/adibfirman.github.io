import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export async function getListBlog() {
  try {
    const entries = await readdir("./public/blog", { withFileTypes: true });
    const dirs = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    const fileContents = await Promise.all(
      dirs.map((dir) =>
        readFile("./public/blog/" + dir + "/index.mdx", "utf8"),
      ),
    );

    const posts = dirs.map((slug, i) => {
      const fileContent = fileContents[i];
      const { data } = matter(fileContent);
      const { date, draft, title, excerpt, tags } = data;

      return {
        slug,
        date: String(date),
        draft: Boolean(draft),
        title: String(title),
        excerpt: String(excerpt),
        tags: tags || [],
      };
    });

    posts.sort((a, b) => (Date.parse(a.date) < Date.parse(b.date) ? 1 : -1));

    return posts.filter((post) => !post.draft);
  } catch (err) {
    return [];
  }
}
