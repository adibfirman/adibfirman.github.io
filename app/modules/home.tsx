import type { Article, TreeArticlesStructure } from "@/utils/articles";
import { SubHeader, TreeTags } from "@/components";
import { Link } from "react-router";

interface HomeProps {
  articles: Article[];
  treeStructureArticles: TreeArticlesStructure;
}

export function Home({ articles, treeStructureArticles }: HomeProps) {
  return (
    <>
      <SubHeader className="min-h-[60vh] lg:min-h-[50svh]" />
      <main className="text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h1 className="text-base font-semibold mb-6 flex items-center gap-2 font-heading uppercase text-mystic-accent">
                  corner of thoughts 🧠
                </h1>

                <div className="space-y-6">
                  {articles.map((article) => (
                    <article key={article.slug}>
                      {/* Article content */}
                      <div className="pb-6">
                        {article.isRegional && (
                          <span className="text-xs font-semibold font-heading italic text-mystic-mid">
                            *Regional / (Indonesian Article)
                          </span>
                        )}
                        <h2 className="text-xl font-bold hover:underline hover:decoration-mystic-accent-hover font-body">
                          <Link to={`/articles/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>

                        <p className="text-gray-300 my-4 leading-relaxed font-body">
                          {article.excerpt}
                        </p>

                        <Link
                          to={`/articles/${article.slug}`}
                          className="text-base inline-flex items-center gap-1 font-body font-bold hover:underline hover:decoration-mystic-accent-hover"
                        >
                          Read more
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="hidden lg:block lg:col-span-1 space-y-8 sticky top-24 h-max">
              {/* Folder Structure Tree */}
              <TreeTags folderStructure={treeStructureArticles} />
            </div>
          </div>

          {articles.length === 0 && (
            <p className="text-gray-400 text-center">No articles found.</p>
          )}
        </div>
      </main>
    </>
  );
}
