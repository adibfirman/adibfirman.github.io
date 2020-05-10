import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { IS_MOBILE, IS_TABLET } from 'configs/constants'

export const globalStyle = css`
  body {
    background-color: #c4c2f161;
  }
`

export const ContentWrapper = styled.div`
  width: 58%;
  margin: 0 auto;

  @media ${IS_TABLET} {
    width: 80%;
  }

  @media ${IS_MOBILE} {
    width: 97%;
  }
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

const fontPost = `
  font-size: 1.1em;
  line-height: 32px;
  letter-spacing: -0.003em;
  color: rgba(0, 0, 0, 0.84);
  word-break: break-word;
  font-weight: 400;
`
export const Content = styled.div`
  padding-top: 2em;

  p {
    ${fontPost}
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

  a:not([aria-label]) {
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

  ul,
  ol {
    list-style: disc;
    list-style-image: none;
    padding-left: 28px;

    li {
      ${fontPost}
      margin: 5px 0;
    }
  }

  hr {
    height: fit-content;
    padding: 0;
    border: none;
    margin-top: -50px;

    &::after {
      content: '...';
      font-size: 5em;
      color: #9595e082;
      display: block;
      text-align: center;
      letter-spacing: 5px;
    }
  }

  .language-text {
    color: #fff !important;
    background: #515a6b;
    padding: 3px;
    border-radius: 5px;
  }

  .gatsby-highlight {
    border-radius: 10px;
    background: #282c34;
    overflow: auto;
    margin: 1em -1.5em;
  }

  pre[class*='language-'] {
    padding: 0 1.312rem;
    float: left;
  }

  code[class*='language-'] {
    font-family: 'InputMono-Medium';
    font-size: 12.5px;
    color: #e06a62;
  }

  .token.comment {
    color: #7f848e;
    font-style: italic;
  }

  .token.number {
    color: #a27a5a;
  }

  .token.tag {
    color: rgb(138, 89, 157);
  }

  .token.attr-value {
    color: #98c36e;
  }

  .token.plain-text {
    color: #abada9;
  }

  .token.keyword {
    color: #c678dd;
  }

  .token.operator {
    color: rgb(71, 138, 149);
  }

  .token.punctuation {
    color: #8aa1ba;
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
    border-left: 0.25em solid #b28cf7;
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
    margin: 1.3em auto;
  }

  .token .boolean {
    color: #457dff;
  }

  blockquote {
    margin-left: -28px;
    color: inherit;
    font-style: italic;
    border-left: 0.32813rem solid #9595e0;
    padding-left: 24px;
    font-size: inherit;
  }

  em {
    font-weight: bold;
    text-decoration: underline;
  }

  .token.class-name {
    color: #e5c074;
  }
`

export const BaseImage = styled.div`
  margin: 0 -24px;
`

export const AuthorText = styled.div`
  font-size: 0.9em;
  text-transform: capitalize;
  color: #9e9e9e;
  display: block;
  text-align: center;
  padding: 7px 24px;
`
