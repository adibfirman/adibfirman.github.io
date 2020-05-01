import React from 'react'
import { graphql } from 'gatsby'

import BlogPostModule from 'modules/BlogPost'

export default function BlogTemplate(props) {
  return <BlogPostModule {...props} />
}

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "DD MMM YYYY")
        title
        spoiler
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
