import { css } from '@emotion/core'

import { MIN_WIDTH_MOBILE, MIN_WIDTH_PC } from '../../../configs/constants'

export const container = css`
  @media (${MIN_WIDTH_PC}) {
    display: flex;
  }
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
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 22px;

  @media (${MIN_WIDTH_MOBILE}) {
    margin: 6px 0 -6px 0;
  }

  @media (${MIN_WIDTH_PC}) {
    margin: unset;
    margin-left: 10pt;
  }
`

export const imgContainer = css`
  display: flex;
  justify-content: flex-end;

  @media (${MIN_WIDTH_MOBILE}) {
    position: absolute;
    top: 2em;
    right: 5px;
  }

  @media (${MIN_WIDTH_PC}) {
    position: unset;
  }
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
