import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import * as Styled from './style'

export function Header() {
  return (
    <StaticQuery
      query={query}
      render={({ site }) => (
        <Styled.Wrapper>
          <Link className="font-coustard" to="/">
            {site.siteMetadata.author}
          </Link>
          <Styled.BaseLinkBtn>
            <Styled.ButtonLink className="font-coustard" as="div" to="/blog">
              blog
            </Styled.ButtonLink>
            <Styled.ButtonLink className="font-coustard" as="div" to="/talk">
              talk
            </Styled.ButtonLink>
          </Styled.BaseLinkBtn>
        </Styled.Wrapper>
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
