import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"

const PostList = ({ posts, label }) => {
  const listHeader = `Post${
    posts.length === 1 ? "" : "s"
  } related to ${label}`

  return (
    <>
      <h2 className="md:w-2/3 mb-2 md:text-center font-display text-gray-900 text-xl md:text-2xl lg:text-3xl">{listHeader}</h2>
      <ul>
        {posts.map(({ node }) => {
            const { id, excerpt } = node
            const { slug } = node.fields
            const { title, date } = node.frontmatter
            return (
              <li className="md:flex mb-2" key={id}>
                <span className="block md:w-1/3 md:text-right text-sm text-gray-500 px-2 py-1">
                  {date}
                </span>
                <Link to={slug} className="block md:w-1/2 px-2">
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

PostList.propTypes = {
  posts: PropTypes.array,
  label: PropTypes.string
}

PostList.defaultProps = {
  posts: [],
  label: ''
}

export default PostList
