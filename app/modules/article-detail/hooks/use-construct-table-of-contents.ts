import { useEffect, useState } from "react";

import type { Article } from "@/utils/articles";
import { childrenToText, createHashArticleFromTitle } from "@/utils/articles";

import type { TableOfContentItems } from "../types";

type Args = {
  article: Article;
};

export function useConstructTableOfcontents(args: Args) {
  const [activeId, setActiveId] = useState("");

  const tocItems = (() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: TableOfContentItems[] = [];
    let match;

    while ((match = headingRegex.exec(args.article.content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();

      items.push({
        id: createHashArticleFromTitle(childrenToText(title)),
        title,
        level,
      });
    }

    return items;
  })();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -20% 0%` },
    );

    const getEle = (id: string) => document.getElementById(id);

    tocItems.forEach((toc) => {
      const ele = getEle(toc.id);
      if (ele) {
        observer.observe(ele);
      }
    });

    return () => {
      tocItems.forEach((toc) => {
        const ele = getEle(toc.id);
        if (ele) {
          observer.unobserve(ele);
        }
      });
    };
  }, [tocItems]);

  const minLevelToc = (() => {
    return tocItems.reduce((acc, item) => {
      return Math.min(acc, item.level);
    }, 6);
  })();

  return { minLevelToc, tocItems, activeId };
}
