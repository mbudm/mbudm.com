import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  const draftFlag = post.frontmatter.draft ? " (DRAFT)" : "";
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PageBody
        subTitle={post.frontmatter.title + draftFlag}
        categories={post.frontmatter.categories}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageBody>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        date(formatString: "DD MMMM, YYYY")
        tags
        draft
      }
    }
  }
`
