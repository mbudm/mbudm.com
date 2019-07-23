import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import PostList from "../components/postList"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <PageTitle title="Blog" />
    <PostList
      posts={data.allMarkdownRemark.edges}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {collection: {eq: "posts"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
