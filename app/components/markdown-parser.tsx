import type { Article } from "@/utils/articles";
import { type Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  article: Article;
};

export function MarkdownParser({ article }: Props) {
  return {
    // Headings
    h1: ({ node, ...props }) => (
      <h1
        {...props}
        className="text-4xl font-extrabold mt-2 mb-4 leading-tight text-mystic-purple-surface font-heading"
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        {...props}
        className="text-3xl font-bold mt-10 mb-8 text-mystic-purple-surface font-heading"
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        {...props}
        className="text-xl font-bold mt-5 mb-2 text-mystic-purple-surface font-heading"
      />
    ),
    h6: ({ node, ...props }) => (
      <h6
        {...props}
        className="text-xs font-bold mt-5 mb-2 text-mystic-purple-surface/60 font-heading"
      />
    ),

    // Paragraph
    p: ({ node, ...props }) => <p {...props} className="text-lg leading-7" />,

    // Links
    a: ({ node, ...props }) => (
      <a
        {...props}
        className="font-semibold decoration-2 underline hover:no-underline decoration-mystic-purple-bg inline-block w-max"
      />
    ),

    // Lists
    ul: ({ node, ...props }) => (
      <ul {...props} className="list-disc pl-6 space-y-1 text-lg leading-7" />
    ),
    ol: ({ node, ...props }) => (
      <ol
        {...props}
        className="list-decimal pl-6 space-y-1 text-lg leading-7"
      />
    ),
    li: ({ node, ...props }) => (
      <li {...props} className="my-1 text-lg leading-7" />
    ),

    // Blockquote
    blockquote: ({ node, children, ...props }) => (
      <blockquote
        {...props}
        children={children}
        className="border-l-4 border-slate-700 pl-4 text-slate-300 bg-slate-900/30 rounded-md py-2"
      />
    ),

    // Code blocks and inline code
    code({ node, className: codeClass, children, ...props }) {
      const match = /language-(\w+)/.exec(codeClass || "");
      if (match) {
        return (
          <SyntaxHighlighter
            // @ts-expect-error
            style={oneDark}
            customStyle={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-base)",
            }}
            codeTagProps={{
              style: {
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-base)",
              },
            }}
            PreTag="div"
            language={match[1] || "javascript"}
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        );
      }

      return (
        <code
          {...props}
          className="rounded-sm bg-mystic-surface/40 border border-slate-800 font-mono text-sm font-semibold"
        >
          `{children}`
        </code>
      );
    },

    hr: ({ node, ...props }) => (
      <hr
        {...props}
        className="h-1 my-4 bg-mystic-soft/50 rounded-sm border-0"
      />
    ),

    // Tables (remark-gfm)
    table: ({ node, ...props }) => (
      <div className="overflow-auto">
        <table {...props} className="w-full table-auto text-sm mt-3">
          {props.children}
        </table>
      </div>
    ),
    th: ({ node, ...props }) => (
      <th
        {...props}
        className="text-lg text-left font-semibold border-b border-slate-700 pb-2"
      />
    ),
    td: ({ node, ...props }) => (
      <td {...props} className="text-lg border-b border-slate-800 py-2" />
    ),

    // Images
    img: ({ node, ...props }) => (
      <img
        {...props}
        src={`${article.slug}/${props.src}`}
        className="max-w-full rounded-md shadow-sm my-7 mx-auto"
      />
    ),
  } as Components;
}
