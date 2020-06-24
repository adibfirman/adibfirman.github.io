import styled from '@emotion/styled'

import { IS_TABLET, IS_MOBILE } from 'configs/constants'

export const Wrapper = styled.header`
  height: 45vh;
  display: flex;
  background-color: #c0c0e2;

  @media ${IS_MOBILE} {
    height: 13em;
  }
`

export const Title = styled.h1`
  letter-spacing: 1px;
  font-size: 3em;
`

export const BaseBigHeader = styled.div`
  display: flex;
  margin: 0 auto;
  height: fit-content;
  margin-top: 7%;
  width: calc(100% - 21em);
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 6em;
  left: 0;
  right: 0;
  text-align: unset;

  @media ${IS_TABLET} {
    text-align: center;
    width: calc(100% - 3em);
    margin-top: 10%;
  }
`

export const Line = styled.div`
  background-color: #9595e0;
  width: 100px;
  height: 20px;
  margin-bottom: 12px;
  border-radius: 13px;
  visibility: visible;

  @media ${IS_TABLET} {
    visibility: hidden;
  }

  &.text-shadow {
    position: absolute;
    right: 0;

    &:nth-of-type(2) {
      right: 10em;
    }

    &:nth-of-type(4) {
      top: 2em;
      right: 3em;
    }

    &:nth-of-type(5) {
      top: 4em;
      right: 9em;
    }

    &:nth-of-type(6) {
      top: 4em;
      right: 1em;
    }

    &:nth-of-type(7) {
      top: 6em;
      right: 5em;
    }
  }
`
