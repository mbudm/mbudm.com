const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // add the source filesystem name as a collection field, for queries
    // https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348
    const parent = getNode(_.get(node, 'parent'))
    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, 'sourceInstanceName'),
    })
  }
}

const createPosts = (graphql, createPage) => {
    graphql(`
    {
      allMarkdownRemark(
        filter: {fields: {collection: {eq: "posts"}}}
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}


const createProjects = (graphql, createPage) => {
  graphql(`
  {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "projects"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`).then(result => {
  if (result.errors) {
    return Promise.reject(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
})
}

const createTagPages = (graphql, createPage) => {

  const tagTemplate = path.resolve("src/templates/tag.js")

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: {collection: {regex: "/(posts|projects)/"}}}
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}

const createCategoryPages = (graphql, createPage) => {

  const categoryTemplate = path.resolve("src/templates/category.js")

  return graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]},
        limit: 1000
      ) {
        group(field: fields___collection) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
              html
            }
          }
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.group.find((g) => g.fieldValue === "posts").edges
    const projects = result.data.allMarkdownRemark.group.find((g) => g.fieldValue === "projects").edges
    const categoriesMetadata = result.data.allMarkdownRemark.group.find((g) => g.fieldValue === "categories").edges

    // Category pages:
    let categories = []
    // Iterate through each post & project, putting all found categories into `categories`
    posts.concat(projects).forEach((edge) => {
      if (_.get(edge, "node.frontmatter.categories")) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })
    // Eliminate duplicate categories
    categories = _.uniq(categories)

    // Make category pages
    categories.forEach(category => {
      // get the category title and description
      const catKebabCase = _.kebabCase(category)
      const catMetaEdge = categoriesMetadata.find(edge => {
        return _.get(edge, "node.fields.slug") &&
          edge.node.fields.slug.split('/').includes(catKebabCase)
      })
      createPage({
        path: `/category/${catKebabCase}/`,
        component: categoryTemplate,
        context: {
          category,
          categoryTitle: catMetaEdge && catMetaEdge.node.frontmatter.title,
          categoryDescription: catMetaEdge && catMetaEdge.node.html
        },
      })
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return Promise.all([
    createPosts(graphql, createPage),
    createProjects(graphql, createPage),
    createTagPages(graphql, createPage),
    createCategoryPages(graphql, createPage)
  ])
  .then(results => [].concat(...results)); // until node 12 is LTS and array.flat is available
}
