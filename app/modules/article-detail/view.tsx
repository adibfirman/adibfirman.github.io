import Markdown from "markdown-to-jsx";
import Giscus from "@giscus/react";

import { type Article } from "@/utils/articles";

import { Header } from "./components/header";
import { SubHeader } from "./components/sub-header";
import { TableOfContents } from "./components/table-of-contents";
import { MarkdownParser } from "./components/markdown-parser";

import { useGetTotalView } from "./hooks/use-get-total-view";
import { useConstructTableOfcontents } from "./hooks/use-construct-table-of-contents";
import { useListenGiscus } from "./hooks/use-listen-giscus";

import { type ArticleDetail } from "./types";

type Props = Pick<ArticleDetail, "coverIMG"> & {
  article: Article;
};

export function ArticleDetail({ article, coverIMG }: Props) {
  const giscusData = useListenGiscus();
  const { totalView } = useGetTotalView({ slug: article.slug });
  const tocData = useConstructTableOfcontents({ article });

  return (
    <>
      <Header coverIMG={coverIMG} article={article} />
      <main className="grid grid-cols-12 gap-4 lg:max-w-5xl lg:mx-auto px-4 lg:px-6 py-8">
        <article className="text-mystic-text-primary/85 lg:pr-2.5 lg:px-0 col-start-1 col-end-13 lg:col-end-11">
          <SubHeader
            article={article}
            totalDiscussion={giscusData.discussion}
            totalReaction={giscusData.reaction}
            totalView={totalView}
          />

          <hr className="w-full col-start-1 col-end-13 mb-14 border-mystic-purple-soft" />

          <Markdown
            options={{ overrides: MarkdownParser({ article }) }}
            children={article.content.replace(/^\s*\\\s*$/gm, "  ")}
            className="mb-32"
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

        <div className="hidden lg:block col-start-11 col-end-12">
          <TableOfContents
            tocItems={tocData.tocItems}
            activeId={tocData.activeId}
            minLevelToc={tocData.minLevelToc}
          />
        </div>
      </main>
    </>
  );
}
