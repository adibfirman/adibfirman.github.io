import React from 'react'
import { css } from '@emotion/core'
import { graphql, StaticQuery, Link } from 'gatsby'

import ButtonLink from './ButtonLink'

const Header = () => {
  return (
    <StaticQuery
      query={query}
      render={({ site }) => (
        <div css={styles.wrapper}>
          <Link css={styles.header} to="/">
            {site.siteMetadata.author}
          </Link>
          <ButtonLink to="/blog">BLOG</ButtonLink>
        </div>
      )}
    />
  )
}

const styles = {
  wrapper: css`
    @media (max-width: 498px) {
      padding: 1vh 0;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5vh 10vh;
    font-family: 'Coustard', serif;
    font-size: 15px;
    color: #212121;
    font-weight: bolder;
    letter-spacing: 2.5px;
  `,
  header: css`
    font-weight: 600;
    color: unset;
    text-decoration: none;
  `,
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
