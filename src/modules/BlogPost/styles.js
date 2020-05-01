import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { IS_MOBILE } from 'configs/constants'

export const globalStyle = css`
  body {
    background-color: #c4c2f161;
  }
`

export const ContentWrapper = styled.div`
  width: 81%;
  margin: 0 auto;
`

export const BasePost = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 3px 7px 2px #88888885;
  padding: 3em 1.5em;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 3.5em;
  font-weight: 500;
  color: #9595e0;
`

export const TImeDesc = styled.div`
  font-size: small;
  text-align: center;
  padding: 1.5em 0;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  color: #a8a8d6;
`

export const Content = styled.div`
  padding-top: 2em;

  p {
    font-size: 1.1em;
    line-height: 32px;
    letter-spacing: -0.003em;
    color: rgba(0, 0, 0, 0.84);
    word-break: break-word;
    font-weight: 400;
  }

  svg {
    fill: #3f51b5;
  }

  h2,
  h3 {
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    letter-spacing: 1px;
  }

  h3 {
    letter-spacing: 1px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  a[target] {
    color: #9595e0;
    font-weight: bold;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.84) 100%,
      rgba(0, 0, 0, 0.84) 0
    );
    background-size: 1px 1px;
    background-position: 0 calc(1em + 1px);
    background-repeat: repeat-x;
    text-decoration: none;
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
