import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogView from 'modules/Blog'

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
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
          name
        }
      }
    }
  `)

  return <BlogView data={data} />
}
