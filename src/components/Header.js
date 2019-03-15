import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import ButtonLink from './ButtonLink'

const Header = () => {
  return (
    <StaticQuery
      query={query}
      render={({ site }) => (
        <div className="header-wrapper">
          <Link className="link-header" to="/">
            {site.siteMetadata.author}
          </Link>
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

export default Header
