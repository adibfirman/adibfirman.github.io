import type { MarkdownToJSX } from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArrowSquareOut } from "phosphor-react";
import React from "react";

import { type Article, createHashArticleFromTitle } from "@/utils/articles";

import { Admonition } from "./markdown-parser-custom/admonition.client";

type Props = {
  article: Article;
};

export function MarkdownParser({ article }: Props) {
  return {
    // Headings
    h1(props) {
      return (
        <h1
          {...props}
          id={createHashArticleFromTitle(props.children[0])}
          className={`${props.className} text-4xl font-extrabold mt-10 mb-8 leading-tight text-mystic-purple-surface font-heading`}
        />
      );
    },

    h2(props) {
      return (
        <h2
          {...props}
          id={createHashArticleFromTitle(props.children[0])}
          className={`${props.className} text-3xl font-bold mt-10 mb-8 text-mystic-purple-surface font-heading`}
        />
      );
    },
    h3(props) {
      return (
        <h3
          {...props}
          id={createHashArticleFromTitle(props.children[0])}
          className={`${props.className} text-xl font-bold mt-5 mb-2 text-mystic-purple-surface font-heading`}
        />
      );
    },
    h6(props) {
      return (
        <h6
          {...props}
          id={createHashArticleFromTitle(props.children[0])}
          className={`${props.className} text-xs font-bold mt-5 mb-2 text-mystic-purple-surface/60 font-heading`}
        />
      );
    },

    // Paragraph
    p(props) {
      return (
        <p
          {...props}
          className={`${props.children} text-lg leading-7 text-justify lg:text-left`}
        />
      );
    },

    // Links
    a(props) {
      return (
        <a
          {...props}
          className={`${props.className} font-semibold decoration-2 underline hover:no-underline decoration-mystic-purple-bg inline-block w-max`}
        >
          {props.children}
          <ArrowSquareOut
            size={16}
            className="inline relative ml-0.5 -top-1.5"
          />
        </a>
      );
    },

    // Lists
    ul(props) {
      return (
        <ul
          {...props}
          className={`${props.className} list-disc pl-10 my-4 space-y-1 text-lg leading-7`}
        />
      );
    },

    ol(props) {
      return (
        <ol
          {...props}
          className={`${props.className} list-decimal pl-10 my-4 space-y-1 text-lg leading-7`}
        />
      );
    },

    li(props) {
      return (
        <li
          {...props}
          className={`${props.className} my-1 text-lg leading-7`}
        />
      );
    },

    // Blockquote
    blockquote(props) {
      return (
        <blockquote
          {...props}
          className={`${props.className || ""} border-l-4 border-slate-700 pl-4 text-slate-300 bg-slate-900/30 rounded-md py-2 my-5`}
        />
      );
    },

    // Code blocks and inline code
    pre(props) {
      const child = React.Children.only(props.children);
      return React.createElement(child.type, {
        ...child.props,
        className: child.props.className || "lang-bash",
      });
    },

    code(props) {
      const match = /lang-(\w+)/.exec(props.className || "");
      if (match) {
        return (
          <SyntaxHighlighter
            style={oneDark}
            customStyle={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-base)",
              margin: "21px 0",
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
            {String(props.children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        );
      }

      return (
        <code
          {...props}
          className={`${props.className} rounded-sm bg-mystic-surface/40 border border-slate-800 font-mono text-sm font-semibold`}
        >
          `{props.children}`
        </code>
      );
    },

    hr(props) {
      return (
        <hr
          {...props}
          className="h-1 my-4 bg-mystic-soft/50 rounded-sm border-0"
        />
      );
    },

    // Tables (remark-gfm)
    table(props) {
      return (
        <div className="overflow-auto">
          <table {...props} className="w-full table-auto text-sm mt-3">
            {props.children}
          </table>
        </div>
      );
    },
    th(props) {
      return (
        <th
          {...props}
          className="text-lg text-left font-semibold border-b border-slate-700 pb-2"
        />
      );
    },
    td(props) {
      return (
        <td {...props} className="text-lg border-b border-slate-800 py-2" />
      );
    },

    // Images
    img(props) {
      const isPreservedImg = props.src.match(/https/i);
      const src = isPreservedImg ? props.src : `${article.slug}/${props.src}`;

      return (
        <img
          {...props}
          src={src}
          className={`${props.className} rounded-md shadow-sm my-7 mx-auto max-w-10/12`}
        />
      );
    },

    // custom component
    Admonition,
    // ---
  } as MarkdownToJSX.Overrides;
}
