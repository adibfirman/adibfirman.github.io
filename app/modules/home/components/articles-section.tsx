import { useState } from "react";
import { Link } from "react-router";

import type { Article } from "@/utils/articles";

type Props = {
  totalArticle: number;
  mainArticles: Article[];
  restOfArticles: Props["mainArticles"];
};

export function ArticleSection(props: Props) {
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const groupArticles = (() => {
    return [
      ...props.mainArticles,
      ...(loadMoreClicked ? props.restOfArticles : []),
    ];
  })();

  return (
    <>
      <h1 className="text-base font-semibold mb-6 flex items-center gap-2 font-heading uppercase text-mystic-accent">
        corner of thoughts ({props.totalArticle}) 🧠
      </h1>

      <div className="space-y-6">
        {groupArticles.map((article) => (
          <article key={article.slug}>
            {/* Article content */}
            <div className="pb-6">
              {article.isRegional && (
                <span className="text-xs font-semibold font-heading italic text-mystic-mid">
                  *Regional / (Indonesian Article)
                </span>
              )}
              <h2 className="text-xl font-bold hover:underline hover:decoration-mystic-accent-hover font-body">
                <Link to={`/articles/${article.slug}`} viewTransition>
                  {article.title}
                </Link>
              </h2>

              <p className="text-gray-300 my-4 leading-relaxed font-body">
                {article.excerpt}
              </p>

              <Link
                to={`/articles/${article.slug}`}
                viewTransition
                className="text-base inline-flex items-center gap-1 font-body font-bold hover:underline hover:decoration-mystic-accent-hover"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>

      {!loadMoreClicked && props.restOfArticles.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setLoadMoreClicked(true)}
            className="relative cursor-pointer inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-mystic-purple-mid to-mystic-accent-light group-hover:from-mystic-purple-mid group-hover:to-mystic-accent-light hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-15 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              LOAD MORE
            </span>
          </button>
        </div>
      )}
    </>
  );
}
