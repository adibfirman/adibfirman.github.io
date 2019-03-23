import { css } from '@emotion/core'

import { IS_MOBILE } from '../configs/constants'

export const layoutHome = css`
  display: flex;
  font-family: var(--font-portofolio);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;
  text-align: center;

  .title {
    font-size: 50px;
    margin: 0;
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
