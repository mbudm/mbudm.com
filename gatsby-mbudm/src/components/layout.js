/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="font-body"
      >
        <main>{children}</main>
        <footer>
          <table>
            <tbody>
              <tr>
                <th>Phone:</th>
                <td>
                  <a href="tel:+610431224490" title="Call Steve Roberts">
                    +61 0431 224 490
                  </a>
                </td>
              </tr>
              <tr>
                <th>LinkedIn:</th>
                <td>
                  <a
                    href="http://www.linkedin.com/in/mbudm"
                    title="View Steve Roberts on LinkedIn"
                  >
                    linkedin.com/in/mbudm
                  </a>
                </td>
              </tr>
              <tr>
                <th>Twitter: </th>
                <td>
                  <a
                    href="https://twitter.com/mbudm"
                    title="Follow Steve Roberts"
                  >
                    @mbudm
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <nav>Home Small Clients Big Clients Startups About Blog</nav>
          <div>
            © {new Date().getFullYear()} Steve Roberts, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
