import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../../components/seo'
import { HeaderBlog } from '../../components/Header/HeaderBlog'
import * as styles from '../../styles/pages/blog'

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

function ItemPost({ frontmatter, timeToRead, fileAbsolutePath }) {
  const { title, spoiler, date } = frontmatter
  const splitFilePath = fileAbsolutePath.split('/')
  const path = splitFilePath[splitFilePath.length - 2]

  return (
    <React.Fragment>
      <h3 css={styles.title}>
        <Link to={`/blog/${path}`}>{title}</Link>
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
          fileAbsolutePath
          frontmatter {
            title
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
