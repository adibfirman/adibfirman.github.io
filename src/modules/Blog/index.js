import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import { Wrapper } from './styles'
import Header from './Header'

export default function Blog({ data }) {
  const { allMarkdownRemark: posts, site } = data
  const { siteMetadata } = site

  return (
    <Fragment>
      <SEO
        title={`${siteMetadata.author} — A personal blog by Adib Firman`}
        description={siteMetadata.tagline}
        slug="/blog"
      />
      <Wrapper>
        <Header />
      </Wrapper>
      {/* {posts.edges.map(({ node }) => (
        <ItemPost key={node.id} {...node} />
      ))} */}
    </Fragment>
  )
}

// function ItemPost({ frontmatter, timeToRead, fileAbsolutePath }) {
//   const { title, spoiler, date } = frontmatter
//   const splitFilePath = fileAbsolutePath.split('/')
//   const path = splitFilePath[splitFilePath.length - 2]

//   return (
//     <React.Fragment>
//       <h3 css={styles.title}>
//         <Link to={`/blog/${path}`}>{title}</Link>
//       </h3>
//       <small>
//         <strong>{date}</strong> | {timeToRead} min read
//       </small>
//       <p css={styles.spoiler}>{spoiler}</p>
//     </React.Fragment>
//   )
// }
