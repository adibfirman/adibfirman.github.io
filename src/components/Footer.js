import React from 'react'
import { css } from '@emotion/core'
import LogoHeart from 'react-ionicons/lib/IosHeart'

const YEAR = new Date().getFullYear()
const gatsbyIcon = require('../images/gatsby-icon.png')
const Footer = () => (
  <div css={styles.container}>
    <span>
      &copy; {YEAR} Made With <LogoHeart fontSize="15" /> And{' '}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gatsbyIcon} css={styles.gatsbyIcon} alt="gatsby-icon" />
      </a>
    </span>
  </div>
)

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    font-family: 'Coustard', Tahoma, Geneva, Verdana, sans-serif;
  `,
  gatsbyIcon: css`
    position: relative;
    width: 15px;
  `,
}

export default Footer
