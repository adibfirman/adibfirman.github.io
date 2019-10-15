import { css } from '@emotion/core'

import { IS_MOBILE } from '../../configs/constants'

export const layoutHome = css`
  display: flex;
  font-family: var(--font-portofolio);
  flex-direction: column;
  min-height: 75vh;
  padding: 1em 10vh;

  @media ${IS_MOBILE} {
    padding: 0 1.5vh;
  }

  .title {
    font-size: 50px;
    margin: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  @media ${IS_MOBILE} {
    .title {
      font-size: 30px;
      margin: 0 0 10px 0;
    }
  }
`

export const contactContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const contact = css`
  width: 40vh;
`

export const wrapperList = css`
  list-style-type: cjk-ideographic;
  padding-left: 2em;
`

export const theTalk = css`
  padding-left: 0.3em;
`

export const date = css`
  opacity: 0.75;
  word-spacing: 3px;
  font-size: 0.98em;

  &::after {
    content: '——';
    margin: 0 0.5em;
  }
`

export const title = css`
  font-weight: bold;
  font-size: 1.05em;

  &::after {
    content: 'at';
    margin: 0 0.5em;
    font-weight: normal;
  }
`
