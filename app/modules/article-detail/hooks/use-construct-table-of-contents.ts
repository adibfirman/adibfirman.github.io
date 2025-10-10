import { useEffect, useLayoutEffect, useState } from "react";

import type { Article } from "@/utils/articles";
import { childrenToText, createHashArticleFromTitle } from "@/utils/articles";

import type { TableOfContentItems } from "../types";

type Args = {
  article: Article;
};

export function useConstructTableOfcontents(args: Args) {
  const [activeId, setActiveId] = useState("");
  const [showToc, setShowToc] = useState(false);

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

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          const sorted = intersecting.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveId(sorted[0].target.id);
        } else {
          const [entry] = entries;
          setActiveId(entry.target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px" },
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

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.19; // Adjust threshold as needed
      setShowToc(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const minLevelToc = (() => {
    return tocItems.reduce((acc, item) => {
      return Math.min(acc, item.level);
    }, 6);
  })();

  return { minLevelToc, tocItems, activeId, showToc };
}
