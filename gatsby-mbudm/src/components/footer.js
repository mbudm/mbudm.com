import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="p-2 w-full lg:flex lg:items-end text-gray-600">
    <table className="lg:w-1/3 my-2">
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
            <a href="https://twitter.com/mbudm" title="Follow Steve Roberts">
              @mbudm
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <nav className="lg:w-2/3 my-2 lg:ml-4">
        <Link className="mr-5" activeClassName="font-bold" to="/">Home</Link>
        <Link className="mr-5" activeClassName="font-bold" to="/category/small-clients/">Small Clients</Link>
        <Link className="mr-5" activeClassName="font-bold" to="/category/big-clients/">Big Clients</Link>
        <Link className="mr-5" activeClassName="font-bold" to="/category/startups/">Startups</Link>
        <Link className="mr-5" activeClassName="font-bold" to="/about/">About</Link>
        <Link activeClassName="font-bold" to="/blog/">Blog</Link>
    </nav>
  </footer>
)

export default Footer
