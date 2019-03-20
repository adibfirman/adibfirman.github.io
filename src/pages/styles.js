import { css } from '@emotion/core'

import { MIN_WIDTH_MOBILE, MIN_WIDTH_PC } from '../configs/constants'

export const layoutHome = css`
  display: flex;
  font-family: var(--font-portofolio);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;
  text-align: center;

  @media (${MIN_WIDTH_MOBILE}) {
    .title {
      font-size: 30px;
      margin: 0 0 10px 0;
    }
  }

  @media (${MIN_WIDTH_PC}) {
    .title {
      font-size: 50px;
      margin: 0;
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
