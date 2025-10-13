import { Minus } from "phosphor-react";
import type { Article } from "@/utils/articles";
import { useConstructTableOfcontents } from "../hooks/use-construct-table-of-contents";

type Props = {
  article: Article;
};

export function TableOfContents({ article }: Props) {
  const {
    isBtnTncShow,
    isContentTncShow,
    isHighlightedSection,
    minLevelToc,
    setIsBtnTncShow,
    tncRefDOM,
    tocItems,
  } = useConstructTableOfcontents({ article });

  return (
    <div
      ref={tncRefDOM}
      className="hidden fixed left-0 lg:flex items-center h-screen top-0"
    >
      {isBtnTncShow && (
        <button
          onClick={() => setIsBtnTncShow(!isContentTncShow)}
          className="flex flex-col max-h-52 cursor-pointer hover:bg-gray-500/20 rounded-md py-2 ml-2"
        >
          {tocItems.map((toc) => (
            <Minus
              key={toc.id}
              weight={isHighlightedSection(toc.id) ? "bold" : "light"}
            />
          ))}
        </button>
      )}
      <div className="absolute top-0 left-14 h-screen flex items-center overflow-hidden">
        {tocItems.length > 0 && (
          <nav
            className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl py-2 px-4 w-max transition-all duration-300 ease-in-out ${isContentTncShow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
          >
            <ul className="space-y-1">
              {tocItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className={`${isHighlightedSection(item.id) ? "text-mystic-accent-hover" : "hover:text-mystic-accent-hover"} hover:underline transition-colors block py-1 font-body text-xs font-semibold`}
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
        )}
      </div>
    </div>
  );
}
