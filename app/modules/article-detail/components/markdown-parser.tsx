import type { MarkdownToJSX } from "markdown-to-jsx";
import React from "react";

import { type Article } from "@/utils/articles";

import { Admonition } from "./markdown-parser-custom/admonition.client";
import { Code } from "./markdown-parser-custom/code.client";
import { Heading } from "./markdown-parser-custom/heading";

type Props = {
  article: Article;
};

export function MarkdownParser({ article }: Props) {
  return {
    // Headings
    h1(props) {
      return (
        <Heading.Base
          type="h1"
          className="text-4xl font-extrabold mt-10 mb-8 leading-tight"
          text={props.children}
        >
          {(data) => (
            <>
              <Heading.IconLink isIconShown={data.isHovered} />
              <Heading.Anchor text={props.children} id={data.id} />
            </>
          )}
        </Heading.Base>
      );
    },
    h2(props) {
      return (
        <Heading.Base
          type="h2"
          className="text-3xl font-bold mt-10 mb-8"
          text={props.children}
        >
          {(data) => (
            <>
              <Heading.IconLink size={20} isIconShown={data.isHovered} />
              <Heading.Anchor text={props.children} id={data.id} />
            </>
          )}
        </Heading.Base>
      );
    },
    h3(props) {
      return (
        <Heading.Base
          type="h3"
          className="text-xl font-bold mt-5 mb-2"
          text={props.children}
        >
          {(data) => (
            <>
              <Heading.IconLink size={15} isIconShown={data.isHovered} />
              <Heading.Anchor text={props.children} id={data.id} />
            </>
          )}
        </Heading.Base>
      );
    },
    h6(props) {
      return (
        <Heading.Base
          type="h6"
          className="text-xs font-bold mt-5 mb-2 text-mystic-purple-surface/60"
          text={props.children}
        >
          {(data) => (
            <>
              <Heading.IconLink size={12} isIconShown={data.isHovered} />
              <Heading.Anchor text={props.children} id={data.id} />
            </>
          )}
        </Heading.Base>
      );
    },

    // Paragraph
    p(props) {
      return (
        <p {...props} className="text-lg leading-7 text-mystic-text-contrast" />
      );
    },

    // Links
    a(props) {
      return (
        <a
          {...props}
          className="font-semibold decoration-2 underline hover:no-underline decoration-mystic-purple-bg inline-block w-max"
          rel="nofollow ugc noopener"
        >
          ‘{props.children}’
        </a>
      );
    },

    // Lists
    ul(props) {
      return (
        <ul
          {...props}
          className="list-disc pl-10 my-4 space-y-1 text-lg leading-7"
        />
      );
    },

    ol(props) {
      return (
        <ol
          {...props}
          className="list-decimal pl-10 my-4 space-y-1 text-lg leading-7"
        />
      );
    },

    li(props) {
      return <li {...props} className="my-1 text-lg leading-7" />;
    },

    // Blockquote
    blockquote(props) {
      return (
        <blockquote
          {...props}
          className="border-l-4 border-slate-700 pl-4 text-slate-300 bg-slate-900/30 rounded-md py-2 my-5"
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

    code: Code,

    hr(props) {
      return (
        <hr
          {...props}
          className="h-1 my-4 bg-mystic-soft/50 rounded-sm border-0 px-4"
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
      const src = isPreservedImg
        ? props.src
        : `/api/get-image-article?path=${article.articlePath}/${props.src}`;

      return (
        <img
          {...props}
          src={src}
          className="rounded-md shadow-sm my-7 mx-auto max-w-10/12"
        />
      );
    },

    // custom component
    Admonition,
    // ---
  } as MarkdownToJSX.Overrides;
}
