import PropTypes from "prop-types"
import React from "react"


import PageTitle from "./pageTitle"

const PageBody = ({ subTitle, pageTitle, children }) => (
  <>
    {pageTitle && <PageTitle title={pageTitle} />}
    <section className="md:flex">
      <header className="md:w-1/3 p-2">
        {
          pageTitle ?
          <h2 className="md:text-right text-gray-900 font-display text-xl md:text-2xl lg:text-3xl">{subTitle}</h2> :
          <h1 className="md:text-right text-gray-500 font-display text-3xl md:text-4xl lg:text-5xl">{subTitle}</h1>
        }
      </header>
      <article className="md:w-1/2 p-2">
        {children}
      </article>
    </section>
  </>
)

PageBody.propTypes = {
  subTitle: PropTypes.string,
}

PageBody.defaultProps = {
  subTitle: ``,
}

export default PageBody
