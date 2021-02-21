/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Category pages
  const categories = await graphql(`
    {
      allContentfulCategory {
        edges {
          node {
            name
            slug
            projects {
              name
              slug
              coverPhoto {
                fixed(resizingBehavior: FILL, width: 600, height: 338, toFormat: JPG, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  const categoryEdges = categories.data.allContentfulCategory.edges
  categoryEdges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}/`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        name: node.name,
        projects: node.projects
      }
    })
  })

  // Project pages
  createRedirect({ fromPath: '/projects', toPath: '/', isPermanent: true })

  const projects = await graphql(`
    {
      allContentfulProject {
        edges {
          node {
            name
            longFormName
            slug
            category {
              name
              slug
            }
            projectType {
              projectType
            }
            productionInfo {
              productionInfo
            }
            blurb {
              raw
            }
            videoUrl {
              videoUrl
            }
            photoGallery {
              fixed(resizingBehavior: FILL, width: 1000, toFormat: JPG, quality: 90) {
                src
                width
                height
              }
            }
          }
        }
      }
    }
  `)
  const projectEdges = projects.data.allContentfulProject.edges
  projectEdges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.slug}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        name: node.name,
        longFormName: node.longFormName,
        category: node.category,
        projectType: node.projectType,
        productionInfo: node.productionInfo,
        blurb: node.blurb,
        videoUrl: node.videoUrl,
        photoGallery: node.photoGallery,
      }
    })
  })
}