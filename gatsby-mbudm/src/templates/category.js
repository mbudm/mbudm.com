import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PostList from "../components/postList"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category, categoryTitle, categoryDescription } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title={category} />
      <PageBody pageTitle={category} subTitle={categoryTitle} >
        {categoryDescription && <div dangerouslySetInnerHTML={{ __html: categoryDescription }} />}
      </PageBody>
      <PostList posts={edges} label={category}/>
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
    }),
  }),
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
