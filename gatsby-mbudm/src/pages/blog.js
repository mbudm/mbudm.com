import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hi I'm blog page</h1>
    <p>Welcome to the blog list</p>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link
            to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>{" "}
          <span>
            ({node.frontmatter.date})
          </span>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
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
