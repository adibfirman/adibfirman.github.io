import type { Article } from "@/utils/articles";
import { useMemo } from "react";

type Props = {
  article: Article;
};

type Item = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({ article }: Props) {
  const tocItems = useMemo(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: Item[] = [];
    let match;

    while ((match = headingRegex.exec(article.content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      items.push({
        id,
        title,
        level,
      });
    }

    return items;
  }, [article.content]);

  return (
    <div className="sticky">
      <h1 className="uppercase">table of contents</h1>
      {JSON.stringify(tocItems)}
    </div>
  );
}
