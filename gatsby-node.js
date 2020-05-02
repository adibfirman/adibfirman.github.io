const path = require('path')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      coverImg: File @link(from: "coverImg___NODE")
    }
    type Frontmatter {
      title: String!
      coverImg: String
      coverAuthor: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.frontmatter.coverImg !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.coverImg,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    })
    if (fileNode) node.coverImg___NODE = fileNode.id
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw new Error(result.errors)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { fileAbsolutePath, id } = node
      const splitFilePath = fileAbsolutePath.split('/')
      const pathName = splitFilePath[splitFilePath.length - 2]

      createPage({
        path: `blog/${pathName}`,
        component: blogPostTemplate,
        context: { pathName, id },
      })
    })
  })
}
