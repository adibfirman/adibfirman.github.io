import { useLoaderData } from "react-router";
import { useMemo } from "react";
import type { Route } from "./+types/article";
import { getArticles, type Article } from "../utils/articles";
import { SubHeader } from "@/components";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export async function loader({ params }: Route.LoaderArgs) {
  const articles = getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    throw new Response("Article not found", { status: 404 });
  }

  return { article };
}

export default function ArticleDetail() {
  const { article } = useLoaderData<typeof loader>();

  const readingTime = useMemo(() => {
    if (!article) return 0;
    const wordsPerMinute = 200;
    const wordCount = article.content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [article]);

  const tocItems = useMemo(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(article.content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      items.push({
        id,
        title,
        level,
      });
    }

    return items;
  }, [article.content]);

  const renderContent = () => {
    let content = article.content;

    // Convert markdown headings to HTML with ids for navigation
    content = content.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, title) => {
      const level = hashes.length;
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `<h${level} id="${id}">${title}</h${level}>`;
    });

    // Convert markdown links
    content = content.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2">$1</a>',
    );

    // Convert markdown bold
    content = content.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // Convert markdown italic
    content = content.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    // Convert markdown code blocks
    content = content.replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre><code class="language-$1">$2</code></pre>',
    );

    // Convert inline code
    content = content.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Convert markdown paragraphs
    content = content
      .split("\n\n")
      .map((paragraph) => {
        if (
          paragraph.trim().startsWith("<h") ||
          paragraph.trim().startsWith("<pre")
        ) {
          return paragraph;
        }
        if (paragraph.trim()) {
          return `<p>${paragraph.trim()}</p>`;
        }
        return "";
      })
      .join("\n");

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <>
      <SubHeader />

      <main className="bg-gray-900 text-mystic-text-primary min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight font-heading">
                {article.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-mystic-text-secondary mb-6 font-body">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <span>
                    Created: {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <span>
                    Updated: {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">⏱️</span>
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600 text-purple-200 rounded text-sm font-body hover:bg-purple-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {tocItems.length > 0 && (
              <div className="bg-mystic-surface border border-mystic-mid rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-mystic-text-primary mb-4 flex items-center gap-2 font-heading">
                  <span className="text-xl">📋</span>
                  Table of Contents
                </h2>
                <nav>
                  <ul className="space-y-2">
                    {tocItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.id}`}
                          className="text-mystic-accent hover:text-mystic-accent-hover hover:underline transition-colors block py-1 font-body"
                          style={{
                            paddingLeft: `${(item.level - 1) * 1.5}rem`,
                            fontSize: item.level === 1 ? "1rem" : "0.9rem",
                            fontWeight: item.level === 1 ? "600" : "400",
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

            <div className="prose prose-lg max-w-none">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                  color: var(--color-mystic-text-primary);
                  font-family: var(--font-heading);
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  font-weight: 600;
                  line-height: 1.25;
                }
                .prose h1 { font-size: 2rem; }
                .prose h2 { font-size: 1.75rem; }
                .prose h3 { font-size: 1.5rem; }
                .prose h4 { font-size: 1.25rem; }
                .prose h5 { font-size: 1.125rem; }
                .prose h6 { font-size: 1rem; }
                .prose p {
                  color: var(--color-mystic-text-secondary);
                  font-family: var(--font-body);
                  margin-bottom: 1.5rem;
                  line-height: 1.7;
                }
                .prose pre {
                  background-color: var(--color-mystic-dark);
                  color: var(--color-mystic-text-primary);
                  border-radius: 0.5rem;
                  padding: 1.5rem;
                  margin: 1.5rem 0;
                  overflow-x: auto;
                  font-family: var(--font-mono);
                }
                .prose code {
                  background-color: var(--color-mystic-surface);
                  color: var(--color-mystic-accent);
                  padding: 0.25rem 0.375rem;
                  border-radius: 0.25rem;
                  font-size: 0.875em;
                  font-family: var(--font-mono);
                }
                .prose pre code {
                  background-color: transparent;
                  color: inherit;
                  padding: 0;
                  border-radius: 0;
                }
                .prose a {
                  color: var(--color-mystic-accent);
                  text-decoration: underline;
                }
                .prose a:hover {
                  color: var(--color-mystic-accent-hover);
                }
                .prose strong {
                  color: var(--color-mystic-text-primary);
                  font-weight: 600;
                }
                .prose em {
                  color: var(--color-mystic-text-secondary);
                  font-style: italic;
                }
              `,
                }}
              />
              {renderContent()}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

