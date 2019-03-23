import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'

import SEO from '../../components/seo'
import { HeaderBlog } from '../../components/Header/HeaderBlog'

export default function Blog({ data }) {
  const { allMarkdownRemark: posts, site } = data
  const { siteMetadata } = site

  React.useEffect(() => {
    document.querySelector('html').setAttribute('class', 'layout-blog')
  }, [])

  return (
    <div className="container">
      <SEO
        title={`${siteMetadata.author} — A personal blog by Adib Firman`}
        description={siteMetadata.tagline}
      />
      <HeaderBlog />
      {posts.edges.map(({ node }) => (
        <ItemPost key={node.id} {...node} />
      ))}
    </div>
  )
}

function ItemPost({ frontmatter, timeToRead }) {
  const { title, path, spoiler, date } = frontmatter

  return (
    <React.Fragment>
      <h3 css={styles.title}>
        <Link to={path}>{title}</Link>
      </h3>
      <small>
        <strong>{date}</strong> | {timeToRead} min read
      </small>
      <p css={styles.spoiler}>{spoiler}</p>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMM YYYY")
            spoiler
          }
          timeToRead
        }
      }
    }
    site {
      siteMetadata {
        author
        tagline
      }
    }
  }
`
const styles = {
  title: css`
    font-size: 30px;
    margin-bottom: 0.5rem;
    color: #43d0e1;
  `,
  spoiler: css`
    margin-top: 0;
  `,
}
