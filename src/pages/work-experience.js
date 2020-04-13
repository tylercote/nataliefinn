import React from "react"
import styles from './work-experience.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const WorkExperiencePage = (props) => (
  <Layout headshot={props.data.headshot}>
    <SEO title="Experience" />
    <div className={styles.expContainer}>
      <div className={styles.headerRow}>
        <div className={styles.hrWrapper}>
          <hr/>
        </div>
        <h2 className={styles.header}>Clinical Experience</h2>
        <div className={styles.hrWrapper}>
          <hr/>
        </div>
      </div>
      <div className={styles.bodyRow}>
        <table className={styles.clinicalTable}>
          <tbody>
          <tr>
            <td className={styles.descCol}>Preceptorship: Thoracic/Vascular Surgery</td>
            <td className={styles.locCol}>Massachusetts General Hospital, Boston MA</td>
            <td className={styles.dateCol}>Spring 2020</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Psychiatric Nursing</td>
            <td className={styles.locCol}>Massachusetts General Hospital, Boston MA</td>
            <td className={styles.dateCol}>Fall 2019</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Community-Based Nursing</td>
            <td className={styles.locCol}>The Rogerson House, Jamaica Plain MA</td>
            <td className={styles.dateCol}>Fall 2019</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Maternity: Postpartum and L&D</td>
            <td className={styles.locCol}>Beth Israel Deaconess Medical Center</td>
            <td className={styles.dateCol}>Spring 2019</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Pediatric Nursing</td>
            <td className={styles.locCol}>Fransiscan Childrens, Brighton MA</td>
            <td className={styles.dateCol}>Spring 2019</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Medical/Surgical: Cardiac Floor</td>
            <td className={styles.locCol}>St. Elizabeth's Medical Center, Brighton MA</td>
            <td className={styles.dateCol}>Fall 2018</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Medical/Surgical: Medical Intermediate</td>
            <td className={styles.locCol}>Brigham and Women's Hospital</td>
            <td className={styles.dateCol}>Spring 2018</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.headerRow}>
        <div className={styles.hrWrapper}>
          <hr/>
        </div>
        <h2 className={styles.header}>Patient Care Associate</h2>
        <div className={styles.hrWrapper}>
          <hr/>
        </div>
      </div>
      <div className={styles.bodyRow}>
        <table className={styles.clinicalTable}>
          <tbody>
          <tr>
            <td className={styles.descCol}>Newborn Family Unit: Blake 13/Ellison 13</td>
            <td className={styles.locCol}>Massachusetts General Hospital, Boston MA</td>
            <td className={styles.dateCol}>May 2019 - Present</td>
          </tr>
          <tr>
            <td className={styles.descCol}>Thoracic Medical/Surgical: 11ABD</td>
            <td className={styles.locCol}>Brigham and Women's Hospital, Boston MA</td>
            <td className={styles.dateCol}>July 2018 - April 2019</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.headerRow}>
        <div className={styles.hrWrapper}>
          <hr/>
        </div>
        <h2 className={styles.header}>Student Internship</h2>
        <div className={styles.hrWrapper}>
          <hr/>
        </div>
      </div>
      <div className={styles.bodyRow}>
        <table className={styles.clinicalTable}>
          <tbody>
          <tr>
            <td className={styles.descCol}>Department of Quality and Safety</td>
            <td className={styles.locCol}>Brigham and Women's Hospital, Boston MA</td>
            <td className={styles.dateCol}>Summers 2016 - 2019</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fixed(width: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default WorkExperiencePage
