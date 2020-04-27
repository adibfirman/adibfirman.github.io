import React from 'react'
import { Global } from '@emotion/core'

import Header from './Header'
import { globalStyle, ContentWrapper } from './styles'

export default function BlogPost({ data, pageContext }) {
  // const { markdownRemark: post, site } = data
  // const { siteMetadata } = site

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
  return (
    <ContentWrapper>
      <Global styles={globalStyle} />
      <Header />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
        doloremque placeat eum mollitia iusto a omnis quas odio ea consectetur
        voluptas blanditiis saepe recusandae quos, reiciendis distinctio. Amet,
        temporibus!
      </div>
    </ContentWrapper>
  )
}
