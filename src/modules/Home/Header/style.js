import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #212121;
  font-weight: bolder;
  letter-spacing: 2.5px;
  padding: 1em 2em;
`

export const ButtonLink = styled(Link)`
  border: 2px black solid;
  border-radius: 5px;
  padding: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BaseLinkBtn = styled.div`
  display: flex;

  > :nth-of-type(1) {
    margin-right: 1em;
  }
`
