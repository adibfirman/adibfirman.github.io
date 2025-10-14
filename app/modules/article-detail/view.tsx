import Markdown from "markdown-to-jsx";
import Giscus from "@giscus/react";

import { type Article } from "@/utils/articles";

import { Header } from "./components/header";
import { SubHeader } from "./components/sub-header";
import { TableOfContents } from "./components/table-of-contents";
import { MarkdownParser } from "./components/markdown-parser";

import { useGetTotalView } from "./hooks/use-get-total-view";
import { useListenGiscus } from "./hooks/use-listen-giscus";

import { type ArticleDetail } from "./types";

type Props = Pick<ArticleDetail, "coverIMG"> & {
  article: Article;
};

export function ArticleDetail({ article, coverIMG }: Props) {
  const giscusData = useListenGiscus();
  const { totalView } = useGetTotalView({ slug: article.slug });

  return (
    <>
      <Header coverIMG={coverIMG} article={article} />
      <main className="grid grid-cols-12 gap-4 lg:max-w-3xl lg:mx-auto px-4 lg:px-0 py-8">
        <article className="text-mystic-text-contrast col-start-1 col-end-13">
          {article.isRegional && (
            <p className="text-mystic-text-contrast font-semibold text-xs mb-1">
              <span className="text-base text-mystic-accent-light">*</span>
              You Are Reading
              <span className="text-mystic-accent-light italic ml-1">
                Regional
              </span>
              <span className="mx-1">/</span>
              <span className="text-mystic-accent-light italic">
                Indonesian article
              </span>
            </p>
          )}

          <hr className="block w-full col-start-1 col-end-13 border-mystic-purple-soft/30" />

          <SubHeader
            article={article}
            totalDiscussion={giscusData.discussion}
            totalReaction={giscusData.reaction}
            totalView={totalView}
          />

          <hr className="block w-full col-start-1 col-end-13 mb-7 border-mystic-purple-soft/30" />

          <Markdown
            options={{ overrides: MarkdownParser({ article }) }}
            children={article.content.replace(/^\s*\\\s*$/gm, "  ")}
            className="mb-22"
          />

          <Giscus
            repo="adibfirman/adibfirman.github.io"
            repoId="MDEwOlJlcG9zaXRvcnkxNjgyODI2NDI="
            category="Articles"
            categoryId="DIC_kwDOCgfKEs4CvOGg"
            mapping="pathname"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme="dark"
            lang="en"
          />
        </article>

        <TableOfContents article={article} />
      </main>
    </>
  );
}
