import React from 'react'
import { graphql } from 'gatsby'
import BlogView from 'modules/Blog'

export default function Blog(props) {
  return <BlogView {...props} />
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
      }
    }
  }
`
