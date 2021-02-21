/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
    <div className="container px-4 pb-10">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>

        <div className="flex w-full justify-end pt-9 pr-1">
          <a href="mailto:RabbitALStudio@gmail.com">
            <img width="30" height="30" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M458.667 85.333H53.333C23.936 85.333 0 109.269 0 138.667v234.667c0 29.397 23.936 53.333 53.333 53.333h405.333c29.397 0 53.333-23.936 53.333-53.333V138.667c.001-29.398-23.935-53.334-53.332-53.334zm32 288c0 17.643-14.357 32-32 32H53.333c-17.643 0-32-14.357-32-32V138.667c0-17.643 14.357-32 32-32h405.333c17.643 0 32 14.357 32 32v234.666z'/%3E%3Cpath d='M467.456 132.651c-3.307-4.864-9.941-6.08-14.827-2.773L277.675 249.579c-13.184 9.003-30.208 9.003-43.371 0L59.349 129.877c-4.885-3.349-11.52-2.091-14.827 2.773-3.307 4.864-2.069 11.499 2.795 14.827l174.955 119.701c10.24 7.019 21.995 10.517 33.728 10.517s23.488-3.499 33.728-10.517l174.955-119.701c4.864-3.328 6.101-9.962 2.773-14.826zM189.525 259.819c-3.776-4.501-10.517-5.12-15.04-1.365l-128 106.667c-4.523 3.776-5.141 10.517-1.365 15.04 2.112 2.539 5.141 3.84 8.213 3.84 2.411 0 4.843-.811 6.827-2.475l128-106.667c4.523-3.776 5.141-10.518 1.365-15.04zM465.515 365.12l-128-106.667c-4.544-3.755-11.264-3.136-15.04 1.365-3.776 4.544-3.157 11.264 1.365 15.04l128 106.667a10.639 10.639 0 006.827 2.475 10.69 10.69 0 008.213-3.84c3.776-4.544 3.157-11.264-1.365-15.04z'/%3E%3C/svg%3E" />
          </a>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
