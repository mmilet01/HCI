const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blog_post.js')
  const boatTemplate = path.resolve('src/templates/singleBoat.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              boat             
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) =>
    {
      const {path, boat}=node.frontmatter;
      if(boat == "1"){
        createPage({
          path: node.frontmatter.path,
          component: boatTemplate,
        })
      }
      else
      {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      }
    })
  })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
