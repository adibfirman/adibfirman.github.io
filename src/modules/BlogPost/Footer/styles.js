import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const BaseFooter = styled.div`
  display: flex;
  margin: 2em 0;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }
`

export const BaseDesc = styled.div`
  margin-bottom: 5px;
`

export const BaseNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`

export const Navigation = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1em;
  color: #673ab79c;
  font-size: 1.1em;
`
