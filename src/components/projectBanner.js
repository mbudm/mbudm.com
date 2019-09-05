import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"

const shorten = (str) => str.length > 45 ?
  `${str.substring(0,40)}...` :
  str

const ProjectBanner = ({ projects }) => {
  const gridItemClasses = projects.length <= 8 ?
    "w-1/4 sm:w-1/6 md:w-1/6 xl:w-1/8 " : // make a small row bigger
    "w-1/4 sm:w-1/6 md:w-1/8 xl:w-1/12 "
  return (
    <>
      <ul className="flex flex-wrap justify-center bg-gray-600 pl-2 pt-2" >
        {projects.map(({ node }) => {
            const { id } = node
            const { slug } = node.fields
            const { title } = node.frontmatter
            const featuredImgFluid = node.frontmatter.featuredImage &&
              node.frontmatter.featuredImage.childImageSharp &&
              node.frontmatter.featuredImage.childImageSharp.fluid
            return (
              <li key={id} className={`${gridItemClasses} text-xs block relative overflow-hidden pr-2 pb-2`}>
                <Link to={slug} classNames="overflow-hidden">
                  <h3 className="absolute max-h-full h-full flex items-center ">
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
