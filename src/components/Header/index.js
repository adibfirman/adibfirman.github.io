import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import ButtonLink from '../ButtonLink'
import * as styles from './style'

export function Header() {
  return (
    <StaticQuery
      query={query}
      render={({ site }) => (
        <div css={styles.headerWrapper}>
          <Link to="/">{site.siteMetadata.author}</Link>
          <ButtonLink to="/blog">BLOG</ButtonLink>
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
