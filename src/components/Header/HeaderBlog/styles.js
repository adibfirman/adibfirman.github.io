import { css } from '@emotion/core'

import { MIN_WIDTH_MOBILE, MIN_WIDTH_PC } from '../../../configs/constants'

export const container = css`
  display: flex;
`

export const nameContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 26vh;
  justify-content: center;
`

export const jokes = css`
  flex: 1;
  align-items: center;
  font-size: 22px;
  margin-left: 10pt;

  @media (${MIN_WIDTH_MOBILE}) {
    display: none;
  }

  @media (${MIN_WIDTH_PC}) {
    display: flex;
  }
`

export const imgContainer = css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export const profleImg = css`
  width: var(--profile-size);
  height: var(--profile-size);
  border-radius: 50%;
`

export const title = css`
  font-size: 25px;
  color: var(--primary-color);
`
