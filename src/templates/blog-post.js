import React from 'react'
import { graphql } from 'gatsby'

import HeaderBlog from '../components/HeaderBlog'
import SEO from '../components/seo'

export default function BlogTemplate({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data

  const Title = () => {
    const { date, title } = post.frontmatter

    return (
      <div className="header-detail-blog">
        <div className="title">{title}</div>
        <small>
          <strong>{date}</strong> | {post.timeToRead} min read
        </small>
      </div>
    )
  }

  document.querySelector('html').setAttribute('class', 'layout-blog')
  return (
    <div className="container container-blog container-detail-blog">
      <SEO
        title={`${post.frontmatter.title} — @adibfirman`}
        description={post.frontmatter.spoiler}
      />
      <HeaderBlog hideImage customText={<Title />} />
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
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
  }
`
