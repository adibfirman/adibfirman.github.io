import React from 'react'
import { graphql } from 'gatsby'

import { HeaderBlog } from '../../components/Header/HeaderBlog'
import SEO from '../../components/seo'
import * as styles from './styles'

export default function BlogTemplate({ data }) {
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
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "DD MMM YYYY")
        path
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