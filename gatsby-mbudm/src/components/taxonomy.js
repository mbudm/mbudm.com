import PropTypes from "prop-types"
import React from "react"

import kebabCase from "lodash/kebabCase"

import { Link } from "gatsby"

const ItemLinks = ({items, slugPrefix}) => (
  <>
    {
      items.map((item, idx, arr) => (
        <>
          <Link to={`${slugPrefix}${kebabCase(item)}/`} >{item}</Link>
          {idx < arr.length - 1 && `, `}
        </>
        )
      )
    }
  </>
)

const Taxonomy = ({ title, items, slugPrefix}) => (
  <>
    { title ?
      <>
        <h4 className="md:text-right font-display text-gray-500 text-xl md:text-2xl lg:text-3xl">{title}</h4>
        <p className="md:text-right">
          <ItemLinks items={items} slugPrefix={slugPrefix}/>
        </p>
      </> :
      <ItemLinks items={items} slugPrefix={slugPrefix}/>
    }
  </>
)

Taxonomy.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

Taxonomy.defaultProps = {
  title: ``,
  items: []
}

export default Taxonomy
