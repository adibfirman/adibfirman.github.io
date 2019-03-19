import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import HeaderBlog from '../components/HeaderBlog'

export default function Blog({ data }) {
  const { allMarkdownRemark: posts } = data

  React.useEffect(() => {
    document.querySelector('html').setAttribute('class', 'layout-blog')
  }, [])

  return (
    <div className="container container-blog">
      <SEO title="@adibfirman — A personal blog by Adib Firman" />
      <HeaderBlog />
      {posts.edges.map(({ node }) => (
        <ItemPost key={node.id} {...node} />
      ))}
    </div>
  )
}

function ItemPost({ frontmatter, timeToRead }) {
  const { title, path, spoiler, date } = frontmatter

  return (
    <div className="container-content">
      <h3 className="title">
        <Link to={path}>{title}</Link>
      </h3>
      <small>
        <strong>{date}</strong> | {timeToRead} min read
      </small>
      <div>{spoiler}</div>
    </div>
  )
}

export const query = graphql`
  query getListPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMM YYYY")
            spoiler
          }
          timeToRead
        }
      }
    }
  }
`
