import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import PostList from "../components/postList"
import ProjectBanner from "../components/projectBanner"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.group.find((g) => g.fieldValue === "posts")
  const postsEdges = posts && posts.edges
  const projects = data.allMarkdownRemark.group.find((g) => g.fieldValue === "projects")
  const projectsEdges = projects && projects.edges
  const hasMorePosts = postsEdges.length > 5
  const postsToRender = hasMorePosts ? postsEdges.slice(0,5) : postsEdges
  const projectsToRender = projectsEdges.slice(0, 6)

  return (
    <Layout>
      <SEO title="Home" />
      {projectsToRender && <ProjectBanner projects={projectsToRender} /> }
      {postsToRender && <h2 className="md:w-2/3 mb-2 md:text-center font-display text-gray-900 text-xl md:text-2xl lg:text-3xl px-2">Latest posts</h2>}
      {postsToRender && <PostList posts={postsToRender} />}
      {hasMorePosts && <div class="md:flex justify-end">
        <Link className="block md:w-2/3 mt-2 px-2 font-bold" to="/blog/" >More posts</Link>
      </div>}
    </Layout>
  )
}


IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      group: PropTypes.arrayOf(
        PropTypes.shape({
          edges: PropTypes.arrayOf(
            PropTypes.shape({
              node: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  title: PropTypes.string.isRequired,
                }),
                fields: PropTypes.shape({
                  slug: PropTypes.string.isRequired,
                }),
              }),
            }).isRequired
          ),
          fieldValue: PropTypes.string.isRequired,
        })
      ),
    }),
  }),
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: {collection: {regex: "/(posts|projects)/"}}
      }
    ) {
      totalCount
      group(field: fields___collection) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight:600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
        fieldValue
      }
    }
  }
`

export default IndexPage
