import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { type Article } from "@/utils/articles";
import { SubHeader } from "@/components";

type Props = {
  article: Article;
};

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function ArticleDetail({ article }: Props) {
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
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => {
            const id = typeof props.children === 'string' 
              ? props.children.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              : String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return <h1 id={id} {...props} />;
          },
          h2: ({ node, ...props }) => {
            const id = typeof props.children === 'string' 
              ? props.children.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              : String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return <h2 id={id} {...props} />;
          },
          h3: ({ node, ...props }) => {
            const id = typeof props.children === 'string' 
              ? props.children.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              : String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return <h3 id={id} {...props} />;
          },
          h4: ({ node, ...props }) => {
            const id = typeof props.children === 'string' 
              ? props.children.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              : String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return <h4 id={id} {...props} />;
          },
          h5: ({ node, ...props }) => {
            const id = typeof props.children === 'string' 
              ? props.children.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              : String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return <h5 id={id} {...props} />;
          },
          h6: ({ node, ...props }) => {
            const id = typeof props.children === 'string' 
              ? props.children.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              : String(props.children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return <h6 id={id} {...props} />;
          },
        }}
      >
        {article.content}
      </ReactMarkdown>
    );
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
                .prose ul, .prose ol {
                  color: var(--color-mystic-text-secondary);
                  font-family: var(--font-body);
                }
                .prose li {
                  margin-bottom: 0.5rem;
                }
                .prose blockquote {
                  border-left: 4px solid var(--color-mystic-accent);
                  padding-left: 1rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: var(--color-mystic-text-secondary);
                }
                .prose table {
                  border-collapse: collapse;
                  margin: 1.5rem 0;
                }
                .prose th, .prose td {
                  border: 1px solid var(--color-mystic-mid);
                  padding: 0.75rem;
                  text-align: left;
                }
                .prose th {
                  background-color: var(--color-mystic-surface);
                  font-weight: 600;
                  color: var(--color-mystic-text-primary);
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
