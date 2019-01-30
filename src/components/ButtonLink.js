import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const ButtonLink = ({ children, ...props }) => (
  <div css={styles.wrapper}>
    <Link {...props} css={styles.btnLink}>
      {children}
    </Link>
  </div>
)

const styles = {
  wrapper: css`
    border: 2px black solid;
    border-radius: 5px;
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  btnLink: css`
    color: unset;
    text-decoration: none;
  `,
}

export default ButtonLink
