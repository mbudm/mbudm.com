import PropTypes from "prop-types"
import React from "react"

const PageTitle = ({ pageTitle }) => (
  <header >
    <h1 className="md:w-2/3 text-center font-display text-2xl md:text-3xl lg:text-4xl">{pageTitle}</h1>
  </header>
)

PageTitle.propTypes = {
  pageTitle: PropTypes.string,
}

PageTitle.defaultProps = {
  pageTitle: ``,
}

export default PageTitle
