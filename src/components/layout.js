/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from './layout.module.css';

const Layout = ({children, headshot}) => {


  return (
    <>
      <div className={styles.root}>
        <header>
          <div className={styles.nameContainer}>
            <span className={styles.firstName}>NATALIE</span>
            <span className={styles.lastName}>FINN</span>
          </div>
          <div className={styles.linksContainer}>
            <span className={styles.navButton}>
              <Link className={styles.navLink} to="/" activeClassName={styles.active}>About Me</Link>
            </span>
            <span className={styles.navButton}>
              <Link className={styles.navLink} to="/education" activeClassName={styles.active}>Education</Link>
            </span>
            <span className={styles.navButton}>
              <Link className={styles.navLink} to="/work-experience" activeClassName={styles.active}>Experience</Link>
            </span>
            <span className={styles.navButton}>
              <Link className={styles.navLink} to="/quality-initiatives" activeClassName={styles.active}>Quality Initiatives</Link>
            </span>
          </div>
        </header>
        <div
          className={styles.layout}
        >
          <div className={styles.bio}>
            <div className={styles.headshotContainer}>
              <Img className={styles.headshot} fixed={headshot.childImageSharp.fixed}/>
            </div>
          </div>
          <main>
            <div className={[styles.tabContent, styles.slideInFwdCenter]}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
