/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql}) => {

    const result = await graphql(`{
        allSanityPost {
          edges{
            node {
            slug {
              current
            }
          }
        }
        }
      }`);

      const post = result.data.allSanityPost.edges.map(({node}) => node);

      post.forEach(post => {
          actions.createPage({
              path: post.slug.current,
              component: path.resolve('./src/templates/post.js'),//???
              context: {
                  slug: post.slug.current
              }
          })
      })


}