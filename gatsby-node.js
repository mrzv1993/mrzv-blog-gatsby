const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    date
                    tags
                    description
                    summary
                    image
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path: `/blog/${path}`,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
            },
          })

          resolve()
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
