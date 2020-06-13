import React from 'react'
import { Global } from '@emotion/core'
import Img from 'gatsby-image'

import Header from './Header'
import Footer from './Footer'
import SEO from '../components/seo'
import {
  globalStyle,
  TImeDesc,
  Title,
  BasePost,
  ContentWrapper,
  Content,
  BaseImage,
  AuthorText,
} from './styles'

export default function BlogPost({ data, pageContext }) {
  const { markdownRemark: post, site } = data
  const { siteMetadata } = site
  const { date, title } = post.frontmatter
  const imgMeta = post.coverImg.childImageSharp.fluid.src
  const readingTime = `${post.timeToRead} min read`

  return (
    <ContentWrapper>
      <SEO
        title={`${post.frontmatter.title} — ${siteMetadata.author}`}
        description={post.frontmatter.spoiler}
        slug={`/blog/${pageContext.pathName}`}
        image={siteMetadata.siteUrl + imgMeta}
        type="article"
        meta={[
          // -- twitter meta tag additional --
          {
            name: `twitter:imageAlt`,
            content: post.frontmatter.coverAuthor,
          },
          {
            name: `twitter:label1`,
            content: 'Written by',
          },
          {
            name: `twitter:data1`,
            content: siteMetadata.name,
          },
          {
            name: `twitter:label2`,
            content: 'Reading time',
          },
          {
            name: `twitter:data2`,
            content: readingTime,
          },
        ]}
      />
      <Global styles={globalStyle} />
      <Header />
      <BasePost>
        <Title className="font-sniglet">{title}</Title>
        <TImeDesc className="font-coustard">
          <span>Diterbitkan pada {date}</span>
          <span>{readingTime}</span>
        </TImeDesc>
        <BaseImage>
          <Img
            fluid={post.coverImg.childImageSharp.fluid}
            alt={post.frontmatter.coverAuthor}
          />
          <AuthorText>{post.frontmatter.coverAuthor}</AuthorText>
        </BaseImage>
        <Content
          className="font-merriweather"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </BasePost>
      <Footer pageContext={pageContext} />
    </ContentWrapper>
  )
}
