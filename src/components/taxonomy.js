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
        <h4 className="mt-2 md:text-right font-display font-bold md:font-normal text-gray-800 text-lg md:text-xl lg:text-2xl">{title}</h4>
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
