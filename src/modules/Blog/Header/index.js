import React from 'react'

import { Wrapper, Line, Title, BaseBigHeader } from './styles'

function Header() {
  const LINES = Array(6).fill()

  return (
    <Wrapper>
      <BaseBigHeader>
        <Line />
        <Title className="font-sniglet">Adib Firman</Title>
        <p>
          <i>In here you will read some study note by me.</i>
        </p>
        {LINES.map((_, i) => (
          <Line key={i} className="text-shadow" />
        ))}
      </BaseBigHeader>
    </Wrapper>
  )
}

export default Header
