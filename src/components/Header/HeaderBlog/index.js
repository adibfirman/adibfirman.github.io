import React from 'react'
import { Link } from 'gatsby'

import * as styles from './styles'
import { Contact } from '../../Contact'

export function HeaderBlog({ hideImage, customText, className }) {
  return (
    <div css={styles.container}>
      <div css={styles.nameContainer}>
        <Link css={styles.title} to="/">
          @adibfirman
        </Link>
        <Contact iconColor="#56b6c2" />
      </div>
      <div css={styles.jokes}>a man loving a cat</div>
      <div css={styles.imgContainer}>
        <img
          src="https://i.pinimg.com/originals/32/23/77/322377b211e0653efc8c3513a3769f3d.jpg"
          alt="perry-platypus"
          css={styles.profleImg}
        />
      </div>
    </div>
  )
}

HeaderBlog.defaultProps = {
  hideImage: false,
}
