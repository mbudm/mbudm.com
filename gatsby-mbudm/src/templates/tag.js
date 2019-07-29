import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout"
import PostList from "../components/postList"
import ProjectBanner from "../components/projectBanner"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext

  const posts = data.allMarkdownRemark.group.find((g) => g.fieldValue === "posts")
  const postsEdges = posts && posts.edges
  const projects = data.allMarkdownRemark.group.find((g) => g.fieldValue === "projects")
  const projectsEdges = projects && projects.edges

  return (
    <Layout>
      <SEO title={tag} />
      {projectsEdges && <ProjectBanner projects={projectsEdges} /> }
      <PostList posts={postsEdges} label={tag}/>
    </Layout>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            excerpt: PropTypes.string
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tag

export const pageQuery = graphql`
query($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {
      frontmatter: { tags: { in: [$tag] } }
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
