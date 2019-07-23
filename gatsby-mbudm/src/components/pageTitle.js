import PropTypes from "prop-types"
import React from "react"

const PageTitle = ({ title }) => (
  <header >
    <h1 className="md:w-2/3 px-2 md:text-center font-display text-gray-500 text-3xl md:text-4xl lg:text-5xl">{title}</h1>
  </header>
)

PageTitle.propTypes = {
  title: PropTypes.string,
}

PageTitle.defaultProps = {
  title: ``,
}

export default PageTitle
