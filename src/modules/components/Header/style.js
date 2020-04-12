import { css } from '@emotion/core'

import { IS_MOBILE } from '../../../configs/constants'

export const headerWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-portofolio);
  font-size: 15px;
  color: #212121;
  font-weight: bolder;
  letter-spacing: 2.5px;
  padding: 5vh 10vh;

  @media ${IS_MOBILE} {
    padding: 2vh 1.5vh;
  }

  a {
    font-weight: 600;
  }
`

export const containerBtnLink = css`
  border: 2px black solid;
  border-radius: 5px;
  padding: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const containerListBtn = css`
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-column-gap: 1em;
`
