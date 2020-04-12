import React from 'react'
import LogoHeart from 'react-ionicons/lib/IosHeart'

import { Wrapper, Icon } from './styles'

const gatsbyIcon = require('media/gatsby-icon.png')

function Footer() {
  const YEAR = new Date().getFullYear()

  return (
    <Wrapper>
      <div className="font-coustard">
        &copy; {YEAR} Made With <LogoHeart fontSize="15" /> And{' '}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={gatsbyIcon} alt="logo gatsby" />
        </a>
      </div>
    </Wrapper>
  )
}

export default Footer
