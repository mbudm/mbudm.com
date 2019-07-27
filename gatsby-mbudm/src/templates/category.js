import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PostList from "../components/postList"
import ProjectBanner from "../components/projectBanner"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category, categoryTitle, categoryDescription } = pageContext

  const postsEdges = data.allMarkdownRemark.group.find((g) => g.fieldValue === "posts").edges
  const projectsEdges = data.allMarkdownRemark.group.find((g) => g.fieldValue === "projects").edges

  return (
    <Layout>
      <SEO title={category} />
      <ProjectBanner projects={projectsEdges} />
      <PageBody pageTitle={category} subTitle={categoryTitle} >
        {categoryDescription && <div dangerouslySetInnerHTML={{ __html: categoryDescription }} />}
      </PageBody>
      <PostList posts={postsEdges} label={categoryDescription && category}/>
    </Layout>
  )
}

Category.propTypes = {
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

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { in: [$category] } }
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
