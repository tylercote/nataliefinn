/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"
import headshot from '../images/headshot.jpg';

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
      <div className={'root'}>
        <header>
          <div className={'name-container tracking-in-expand'}>
            <span className={'first-name'}>NATALIE</span>
            <span className={'last-name'}>FINN</span>
          </div>
          <div className={'links-container'}>
            <span className="nav-button">
              <Link className="nav-link" to="/" activeClassName={'active'}>About Me</Link>
            </span>
            <span className="nav-button">
              <Link className="nav-link" to="/education" activeClassName={'active'}>Education</Link>
            </span>
            <span className="nav-button">
              <Link className="nav-link" to="/work-experience" activeClassName={'active'}>Experience</Link>
            </span>
            <span className="nav-button">
              <Link className="nav-link" to="/quality-initiatives" activeClassName={'active'}>Quality Initiatives</Link>
            </span>
          </div>
        </header>
        <div
          className={'layout'}
          style={{
          }}
        >
          <div className={'bio'}>
            <div className={'headshot-container'}>
              <img className={'headshot'} src={headshot} alt={''}/>
            </div>
          </div>
          <main>
            <div className={'tab-content slide-in-fwd-center'}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
