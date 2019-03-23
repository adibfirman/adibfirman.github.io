import { css } from '@emotion/core'

import { IS_MOBILE } from '../../../configs/constants'

export const container = css`
  display: flex;

  @media ${IS_MOBILE} {
    display: unset;
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
  margin: unset;
  margin-left: 10pt;

  @media ${IS_MOBILE} {
    margin: 6px 0 -6px 0;
  }
`

export const imgContainer = css`
  display: flex;
  justify-content: flex-end;
  position: unset;

  @media ${IS_MOBILE} {
    position: absolute;
    top: 2em;
    right: 5px;
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
