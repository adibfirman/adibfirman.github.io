import React from 'react'
import { Global } from '@emotion/core'

import Header from './Header'
import SEO from '../components/seo'
import {
  globalStyle,
  TImeDesc,
  Title,
  BasePost,
  ContentWrapper,
  Content,
} from './styles'

export default function BlogPost({ data, pageContext }) {
  // const Title = () => {
  //   const { date, title } = post.frontmatter

  //   return (
  //     <div css={styles.containerHeader}>
  //       <div css={styles.headerTitle}>{title}</div>
  //       <small>
  //         <strong>{date}</strong> | {post.timeToRead} min read
  //       </small>
  //     </div>
  //   )
  // }

  // React.useEffect(() => {
  //   document.querySelector('html').setAttribute('class', 'layout-blog')
  // }, [])

  // return (
  //   <div css={styles.wrapperContent} className="container">
  //     <SEO
  //       title={`${post.frontmatter.title} — ${siteMetadata.author}`}
  //       description={post.frontmatter.spoiler}
  //       slug={`/blog/${pageContext.pathName}`}
  //     />
  //     <HeaderBlog hideImage customText={<Title />} />
  //     <div
  //       css={styles.contentBlogPost}
  //       dangerouslySetInnerHTML={{ __html: post.html }}
  //     />
  //   </div>
  // )
  const { markdownRemark: post, site } = data
  const { siteMetadata } = site
  const { date, title } = post.frontmatter

  return (
    <ContentWrapper>
      <SEO
        title={`${post.frontmatter.title} — ${siteMetadata.author}`}
        description={post.frontmatter.spoiler}
        slug={`/blog/${pageContext.pathName}`}
      />
      <Global styles={globalStyle} />
      <Header />
      <BasePost>
        <Title className="font-sniglet">{title}</Title>
        <TImeDesc className="font-coustard">
          <span>Diterbitkan pada {date}</span>
          <span>{post.timeToRead} min read</span>
        </TImeDesc>
        <Content
          className="font-merriweather"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </BasePost>
    </ContentWrapper>
  )
}
