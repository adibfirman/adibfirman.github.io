import type { Article, TreeArticlesStructure } from "@/utils/articles";
import { SubHeader } from "@/components";

import { ArticleSection } from "./components/articles-section";
import { ShowcaseSection } from "./components/showcase-section";
import { TreeTags } from "./components/tree-tags";

interface HomeProps {
  articles: Article[];
  restOfArticles: Article[];
  totalArticle: number;
  treeStructureArticles: TreeArticlesStructure;
}

export function Home({
  articles,
  restOfArticles,
  treeStructureArticles,
  totalArticle,
}: HomeProps) {
  return (
    <>
      <SubHeader className="min-h-[60vh] lg:min-h-[50svh]" />
      <main className="text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <ArticleSection
                  totalArticle={totalArticle}
                  mainArticles={articles}
                  restOfArticles={restOfArticles}
                />
              </div>
            </div>

            {/* Right sidebar */}
            <div className="hidden lg:block lg:col-span-1 space-y-8 sticky top-24 h-max pb-14">
              {/* Folder Structure Tree */}
              <TreeTags folderStructure={treeStructureArticles} />
            </div>
          </div>

          <ShowcaseSection />
        </div>
      </main>
    </>
  );
}
