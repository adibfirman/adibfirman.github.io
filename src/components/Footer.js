import React from 'react'
import { css } from '@emotion/core'
import LogoHeart from 'react-ionicons/lib/IosHeart'

const YEAR = new Date().getFullYear()
const Footer = () => (
  <div css={styles.container}>
    <span>
      &copy; {YEAR} Made With <LogoHeart fontSize="15" /> From Indonesia
    </span>
  </div>
)

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    font-family: 'Coustard', Tahoma, Geneva, Verdana, sans-serif;
  `,
}

export default Footer
