import PropTypes from "prop-types"
import React from "react"

const PageBody = ({ subTitle, children }) => (
  <section className="md:flex">
    <header className="md:w-1/3 p-2">
      <h2 className="md:text-right text-gray-600 font-display text-2xl md:text-3xl lg:text-4xl">{subTitle}</h2>
    </header>
    <article className="md:w-2/3 p-2">
      {children}
    </article>
  </section>
)

PageBody.propTypes = {
  subTitle: PropTypes.string,
}

PageBody.defaultProps = {
  subTitle: ``,
}

export default PageBody
