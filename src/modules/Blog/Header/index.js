import React from 'react'

import { Wrapper, Line, Title, BaseBigHeader } from './styles'

function Header() {
  return (
    <Wrapper>
      <BaseBigHeader>
        <Line />
        <Title className="font-sniglet">Adib Firman</Title>
        <p>
          <i>Web developer and some study note by me</i>
        </p>
      </BaseBigHeader>
    </Wrapper>
  )
}

export default Header
