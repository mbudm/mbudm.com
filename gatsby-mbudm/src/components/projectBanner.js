import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"

const shorten = (str) => str.length > 60 ?
  `${str.substring(0,60)}...` :
  str

const ProjectBanner = ({ projects }) => {
  const gridClassNames = projects.length <=6 ?
    "w-1/3 md:w-1/6 text-sm " :
    "w-1/6 md:w-1/12 text-xs"

  return (
    <>
      <ul className="flex flex-wrap pl-2 pt-2 bg-gray-600 " >
        {projects.map(({ node }) => {
            const { id } = node
            const { slug } = node.fields
            const { title } = node.frontmatter
            const featuredImgFluid = node.frontmatter.featuredImage && node.frontmatter.featuredImage.childImageSharp.fluid
            return (
              <li key={id} className={`${gridClassNames} block relative overflow-hidden pr-2 pb-2`}>
                <Link to={slug} >
                  <h3 className="absolute flex items-center h-full">
                    <span className="text-white block bg-gray-900 p-2 mr-2">
                      {shorten(title)}
                    </span>
                  </h3>
                  {featuredImgFluid && <Img fluid={featuredImgFluid} className="opacity-100 hover:opacity-25 bg-white"/>}
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
