import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { type Article, normalizeDate } from "@/utils/articles";
import { SubHeader, MarkdownParser, TableOfContents } from "@/components";

type Props = {
  article: Article;
  totalViews: number;
  coverIMG: string;
};

export function ArticleDetail({ article, totalViews, coverIMG }: Props) {
  return (
    <>
      <SubHeader>
        <div
          className={`absolute top-0 left-0 w-full h-[99%] bg-cover bg-center`}
          style={{ backgroundImage: `url(${coverIMG})` }}
        >
          <div className="w-full h-full bg-gray-900/30 backdrop-blur-md" />
        </div>
        <div className="absolute inset-0 flex items-center pt-7 lg:pt-0 lg:items-end lg:pb-36 justify-left z-10 max-w-4xl mx-auto px-8">
          <div className="text-left pr-6 xs:mt-20 sm:pr-8 md:pr-12 max-w-4xl">
            <h1 className="text-xl lg:text-4xl mb-2 font-bold font-heading text-mystic-text-secondary text-shadow-mystic-bg text-shadow-2xs">
              {article.title}
            </h1>
            <p className="text-xs text-gray-300 leading-relaxed font-heading">
              <span className="italic">Created on&nbsp;</span>
              <span className="text-mystic-text-primary">
                {normalizeDate(article.createdAt)}.&nbsp;
              </span>
              <span className="italic">Last updated on&nbsp;</span>
              <span className="text-mystic-text-primary">
                {normalizeDate(article.updatedAt)}.
              </span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-20 max-w-4xl flex mr-3 mb-3">
          <p
            className="text-[9px] text-gray-300 leading-relaxed font-heading [&>a]:italic [&>a]:text-mystic-accent [&>a]:hover:underline"
            dangerouslySetInnerHTML={{ __html: article.copyrightCover }}
          />
        </div>
      </SubHeader>

      <main className="grid grid-cols-12 gap-4 lg:max-w-5xl lg:mx-auto px-4 lg:px-6 py-8">
        <article className="text-mystic-text-primary/85 lg:pr-2.5 lg:px-0 col-start-1 col-end-13 lg:col-end-11">
          {/* article header */}
          <div className="flex justify-between text-xs col-start-1 col-end-11 pb-2">
            <p className="text-gray-300 leading-relaxed font-body font-semibold">
              <span className="text-mystic-accent-light mr-1">
                {totalViews}
              </span>
              views
            </p>
            {article.isRegional && (
              <p className="text-gray-300 leading-relaxed font-body font-semibold">
                You are reading
                <span className="italic ml-1 text-mystic-accent-light">
                  Regional / Indonesian article
                </span>
              </p>
            )}
          </div>

          <hr className="w-full col-start-1 col-end-13 mb-14 border-mystic-purple-soft" />

          {/* article content */}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={MarkdownParser({ article })}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        <div className="hidden lg:block col-start-11 col-end-12">
          <TableOfContents article={article} />
        </div>
      </main>
    </>
  );
}
