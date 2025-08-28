import type { Article } from "@/utils/articles";
import { SubHeader } from "@/components";

interface HomeProps {
  articles: Article[];
}

export function Home({ articles }: HomeProps) {
  // Extract unique tags from articles
  const allTags = articles.flatMap((article) => article.tags);
  const uniqueTags = Array.from(new Set(allTags)).sort();

  // Get popular articles (by recent date for now)
  const popularArticles = articles.slice(0, 3);

  return (
    <>
      <SubHeader />
      <main className="bg-gray-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left side - Latest writings */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 font-body">
                  Latest writings ✍️
                </h1>

                <div className="space-y-6">
                  {articles.map((article, index) => (
                    <article key={article.slug} className="relative">
                      {/* Vertical line connector */}
                      {index < articles.length - 1 && (
                        <div className="absolute left-0 top-0 h-full w-px bg-gray-700 ml-2"></div>
                      )}

                      {/* Timeline dot */}
                      <div className="absolute left-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>

                      {/* Article content */}
                      <div className="pl-8 pb-6">
                        <h2 className="text-xl font-semibold mb-3 hover:text-blue-400 transition-colors font-body">
                          <a href={`/articles/${article.slug}`}>
                            {article.title}
                          </a>
                        </h2>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 font-body">
                          <time>
                            {new Date(article.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </time>
                          <span className="font-body">• 5 min read ⏱️</span>
                          <span className="bg-purple-600 text-purple-200 px-2 py-1 rounded text-xs font-body">
                            {article.tags[0] || "general"}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed font-body">
                          {article.excerpt}
                        </p>

                        <a
                          href={`/articles/${article.slug}`}
                          className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 font-body"
                        >
                          Read more →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Popular Articles */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200 font-body">
                  Popular Articles
                </h3>
                <div className="space-y-3">
                  {popularArticles.map((article) => (
                    <div key={`popular-${article.slug}`} className="group">
                      <a
                        href={`/articles/${article.slug}`}
                        className="block text-sm text-gray-300 hover:text-white transition-colors leading-snug font-body"
                      >
                        {article.title}
                      </a>
                      <time className="text-xs text-gray-500 mt-1 block font-body">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded hover:bg-gray-700 cursor-pointer transition-colors font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
