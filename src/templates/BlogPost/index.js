import React from 'react'
import { graphql } from 'gatsby'

import { HeaderBlog } from '../../components/Header/HeaderBlog'
import SEO from '../../components/seo'
import * as styles from './styles'

export default function BlogTemplate({ data, pageContext }) {
  const { markdownRemark: post, site } = data
  const { siteMetadata } = site

  const Title = () => {
    const { date, title } = post.frontmatter

    return (
      <div css={styles.containerHeader}>
        <div css={styles.headerTitle}>{title}</div>
        <small>
          <strong>{date}</strong> | {post.timeToRead} min read
        </small>
      </div>
    )
  }

  React.useEffect(() => {
    document.querySelector('html').setAttribute('class', 'layout-blog')
  }, [])

  return (
    <div className="container">
      <SEO
        title={`${post.frontmatter.title} — ${siteMetadata.author}`}
        description={post.frontmatter.spoiler}
        slug={`blog/${pageContext.pathName}`}
      />
      <HeaderBlog hideImage customText={<Title />} />
      <div
        css={styles.contentBlogPost}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
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
