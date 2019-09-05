import PropTypes from "prop-types"
import React from "react"

import PageTitle from "./pageTitle"
import Taxonomy from "./taxonomy"

const PageBody = ({ subTitle, pageTitle, date, categories, tags, children }) => {
  const articleTopPadding = pageTitle ?
    "md:pt-3 lg:pt-5" :
    "md:pt-6 lg:pt-8"

  return (
    <>
      {pageTitle && <PageTitle title={pageTitle} />}
      <section className="md:flex">
        <header className="md:w-1/3 p-2 pr-4">
          {
            pageTitle ?
            <h2 className="md:text-right text-gray-900 font-display text-xl md:text-2xl lg:text-3xl">{subTitle}</h2> :
            <h1 className="md:text-right text-gray-500 font-display text-3xl md:text-4xl lg:text-5xl">{subTitle}</h1>
          }
          {
            categories &&
            <Taxonomy title="Categories" slugPrefix="/category/" items={categories} />
          }
          {
            tags &&
            <Taxonomy title="Tags" slugPrefix="/tag/" items={tags} />
          }
        </header>
        <article className={`md:w-1/2 p-2 md:pl-4 ${articleTopPadding}`}>
          {children}
          {
          (categories || tags) &&
            <p className="my-4 text-sm text-gray-600">
              { categories && <>Posted in <Taxonomy slugPrefix="/category/" items={categories} />. </>}
              { tags && <>Tagged with <Taxonomy slugPrefix="/tag/" items={tags} />. </> }
            </p>
          }
          { date &&
            <p className="my-4 text-sm text-gray-600">
              Published {date}
            </p>
          }
        </article>
      </section>
    </>
  )
}

PageBody.propTypes = {
  subTitle: PropTypes.string,
}

PageBody.defaultProps = {
  subTitle: ``,
}

export default PageBody
