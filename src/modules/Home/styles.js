import styled from '@emotion/styled'

import { IS_MOBILE } from '../../configs/constants'

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BaseContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3rem;
`

export const BaseContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`

export const BaseListContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
