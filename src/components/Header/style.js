import { css } from '@emotion/core'

import { MIN_WIDTH_MOBILE, MIN_WIDTH_PC } from '../../configs/constants'

export const headerWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-portofolio);
  font-size: 15px;
  color: #212121;
  font-weight: bolder;
  letter-spacing: 2.5px;

  @media (min-width: ${MIN_WIDTH_MOBILE}) {
    padding: 2vh 1.5vh;
  }

  @media (min-width: ${MIN_WIDTH_PC}) {
    padding: 5vh 10vh;
  }

  a {
    font-weight: 600;
  }
`
