import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectBanner = ({ projects }) => {

  return (
    <>
      <ul className="flex flex-wrap" >
        {projects.map(({ node }) => {
            const { id, excerpt } = node
            const { slug } = node.fields
            const { title, date} = node.frontmatter
            const featuredImgFluid = node.frontmatter.featuredImage && node.frontmatter.featuredImage.childImageSharp.fluid
            return (
              <li key={id} className="block w-1/3 md:w-1/6">
                <span className="">
                  {date}
                </span>
                <Link to={slug} className="">
                  {featuredImgFluid && <Img fluid={featuredImgFluid} />}
                  <h3 className="inline text-lg mr-2">
                    {title}
                  </h3>
                  <p className="inline text-gray-900">
                    {excerpt}
                  </p>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

ProjectBanner.propTypes = {
  projects: PropTypes.arrayOf(
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
  )
}

ProjectBanner.defaultProps = {
  projects: []
}

export default ProjectBanner
