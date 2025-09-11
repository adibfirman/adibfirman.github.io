import {
  type Article,
  createHashArticleFromTitle,
  childrenToText,
} from "@/utils/articles";
import { useActiveId } from "./hooks/useActiveId";
import { useScrollToHash } from "./hooks/useScrollToHash";

type Props = {
  article: Article;
};

type Item = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({ article }: Props) {
  useScrollToHash();

  const tocItems = (() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: Item[] = [];
    let match;

    while ((match = headingRegex.exec(article.content)) !== null) {
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

  const minLevelToc = (() => {
    return tocItems.reduce((acc, item) => {
      return Math.min(acc, item.level);
    }, 6);
  })();

  const activeId = useActiveId(tocItems.map((item) => item.id));

  return (
    <div className="hidden lg:block sticky top-32 self-start">
      {tocItems.length > 0 && (
        <div className="w-max">
          <h2 className="text-base font-semibold text-mystic-accent-light mb-4 flex items-center gap-2 font-heading uppercase">
            Table of Contents
          </h2>
          <nav>
            <ul className="space-y-1">
              {tocItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className={`${activeId === item.id ? "text-mystic-accent-hover" : "hover:text-mystic-accent-hover"} hover:underline transition-colors block py-1 font-body text-xs font-semibold`}
                    style={{
                      paddingLeft: `${(item.level - minLevelToc) * 0.75}rem`,
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
