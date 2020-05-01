const path = require('path')

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
