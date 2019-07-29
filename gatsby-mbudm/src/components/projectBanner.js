import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"

const shorten = (str) => str.length > 45 ?
  `${str.substring(0,40)}...` :
  str

const classNamesDictionary = {
  1:{
    label: "hidden md:block md:w-1/3 lg:w-1/4 xl:w-1/6",
    grid: "w-full md:2/3 lg:3/4 xl:5/6",
    gridItem: "w-1/4 lg:w-1/6 text-sm ",
  },
  default: {
    label: "hidden md:block md:1/3 lg:1/4 xl:1/6",
    grid: "w-full md:2/3 lg:3/4 xl:5/6",
    gridItem: "w-1/4 lg:w-1/6 xl:w-1/8 text-xs"
  }
}

const ProjectBanner = ({ category, projects }) => {
  const numRows = Math.ceil(projects.length / 8)
  const {
    label:labelClassNames,
    gridItem:gridItemClassNames,
    grid:gridClassNames
  } = classNamesDictionary[numRows] ?
    classNamesDictionary[numRows] :
    classNamesDictionary.default

  return (
    <>
      <div className="flex items-center bg-gray-600 pl-2 pt-2">
        <div className={`${labelClassNames} overflow-visible text-gray-500 font-display font-extrabold opacity-50 text-7xl leading-none`}>
          Projects/<br /><span className="whitespace-no-wrap">{category}</span>
        </div>
        <ul className={`${gridClassNames} flex flex-wrap justify-end`} >
          {projects.map(({ node }) => {
              const { id } = node
              const { slug } = node.fields
              const { title } = node.frontmatter
              const featuredImgFluid = node.frontmatter.featuredImage &&
                node.frontmatter.featuredImage.childImageSharp &&
                node.frontmatter.featuredImage.childImageSharp.fluid
              return (
                <li key={id} className={`${gridItemClassNames} block relative overflow-hidden pr-2 pb-2`}>
                  <Link to={slug} classNames="overflow-hidden">
                    <h3 className="absolute w-full h-full max-h-full flex items-center h-full">
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
      </div>
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
  ),
  category: PropTypes.string
}

ProjectBanner.defaultProps = {
  projects: [],
  category: ''
}

export default ProjectBanner
