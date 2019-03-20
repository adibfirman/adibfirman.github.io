import React from 'react'
import LogoHeart from 'react-ionicons/lib/IosHeart'

import * as styles from './styles'

const YEAR = new Date().getFullYear()
const gatsbyIcon = require('../../images/gatsby-icon.png')
export function Footer() {
  return (
    <div css={styles.container}>
      <span>
        &copy; {YEAR} Made With <LogoHeart fontSize="15" /> And{' '}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gatsbyIcon} className="gatsby-icon" alt="gatsby-icon" />
        </a>
      </span>
    </div>
  )
}
