import styled from '@emotion/styled'

const baseHeight = 'height: 300px;'

export const Wrapper = styled.header`
  ${baseHeight}
  display: flex;
  background-color: #c0c0e2;
`

export const Title = styled.h1`
  letter-spacing: 1px;
  font-size: 3em;
`

export const BaseBigHeader = styled.div`
  ${baseHeight}
  display: flex;
  margin: auto;
  width: calc(100% - 21em);
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 6em;
  left: 0;
  right: 0;
`

export const Line = styled.div`
  background-color: #9595e0;
  width: 100px;
  height: 20px;
  margin-bottom: 12px;
  border-radius: 13px;

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
