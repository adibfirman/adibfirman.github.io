import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import { BaseBlogs } from './styles'
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
      <Header />
      <BaseBlogs>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        accusantium exercitationem consectetur neque provident. Possimus
        corrupti reprehenderit dicta molestiae vero molestias sint, magnam,
        perferendis qui ducimus tempore quos voluptatibus vitae?
      </BaseBlogs>
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
