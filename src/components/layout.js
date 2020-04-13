/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Layout = ({children, headshot}) => {


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
        >
          <div className={'bio'}>
            <div className={'headshot-container'}>
              <Img className={'headshot'} fixed={headshot.childImageSharp.fixed}/>
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

export default Layout
