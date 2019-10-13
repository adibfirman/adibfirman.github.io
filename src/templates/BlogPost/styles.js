import { css } from '@emotion/core'

import { IS_MOBILE } from '../../configs/constants'

export const containerHeader = css`
  small {
    font-size: 0.8em;
  }

  @media ${IS_MOBILE} {
    text-align: center;
  }
`

export const headerTitle = css`
  font-size: 1.3em;
  margin-bottom: -7px;
`

export const contentBlogPost = css`
  font-size: 18px;
  line-height: 1.3;

  @media ${IS_MOBILE} {
    p {
      text-align: justify;
    }
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: #d7dae0;
    border: none;
    height: 1px;
  }

  .language-text {
    font-family: var(--font-blog);
    background: #515a6b;
    padding: 3px;
    font-size: 15px;
    border-radius: 5px;
  }

  .gatsby-highlight {
    border-radius: 10px;
    background: #212328;
    overflow: auto;
    margin-left: -1.18em;
    margin-right: -1.18em;

    @media ${IS_MOBILE} {
      margin-left: -1em;
      margin-right: -0.9em;
    }
  }

  pre[class*='language-'] {
    padding: 0 1.312rem;
    float: left;
  }

  code[class*='language-'] {
    font-family: 'InputMono-Medium';
    font-size: 12.5px;
  }

  .token.comment {
    color: #809393;
    font-style: italic;
  }

  .token.number {
    color: #a27a5a;
  }

  .token.keyword,
  .token.operator,
  .token.tag {
    color: var(--primary-color);
  }

  .token .punctuation {
    color: var(--color-blog);
  }

  .token .attr-name {
    color: #e5c07b;
    font-style: italic;
  }

  .token.string,
  .token.url {
    color: #98c379;
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: #61afef;
  }

  .gatsby-highlight-code-line {
    background-color: #333538;
    display: block;
    border-left: 0.25em solid #56b6c2;
    padding: 3px 1.25em 3px 1.4em;
  }

  .gatsby-highlight-code-line {
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
  }

  img {
    max-width: 100%;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    position: relative;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .token .boolean {
    color: #457dff;
  }

  blockquote {
    margin-left: -1.75rem;
    margin-right: 1.75rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.42188rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.20112rem;
    line-height: 1.75rem;
    color: inherit;
    font-style: italic;
    border-left: 0.32813rem solid hsla(0, 0%, 0%, 0.9);
    border-left-color: inherit;
    opacity: 0.8;
  }

  em {
    font-weight: bold;
    text-decoration: underline;
  }
`

export const wrapperContent = css`
  @media ${IS_MOBILE} {
    width: 95%;
  }
`
