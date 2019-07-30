import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="font-display py-2 md:flex text-3xl md:text-4xl lg:text-5xl">
    <hgroup className="md:w-1/3 px-2 md:pr-4">
      <h1 className="md:text-right">
        <Link to="/" className="text-gray-900 font-semibold">{siteTitle}</Link>
      </h1>
    </hgroup>
    <nav id="access" role="navigation" className="md:w-2/3 text-gray-600 px-2 md:pl-4 font-thin">
      <Link className="nav-header-item" activeClassName="nav-header-item--active" to="/category/strategy/">Strategy</Link>,
      {` `}
      <Link className="nav-header-item" activeClassName="nav-header-item--active" to="/category/design/">Design</Link>
      {` `}&amp;{` `}
      <Link className="nav-header-item" activeClassName="nav-header-item--active" to="/category/development/">Development</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
