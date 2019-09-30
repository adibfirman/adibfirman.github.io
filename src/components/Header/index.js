import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import * as styles from './style'

export function Header() {
  return (
    <StaticQuery
      query={query}
      render={({ site }) => (
        <div css={styles.headerWrapper}>
          <Link to="/">{site.siteMetadata.author}</Link>
          <div css={styles.containerListBtn}>
            <div css={styles.containerBtnLink}>
              <Link to="/blog">blog</Link>
            </div>
            <div css={styles.containerBtnLink}>
              <Link to="/talk">talk</Link>
            </div>
          </div>
        </div>
      )}
    />
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
