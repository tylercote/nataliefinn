import React from "react"
import styles from './education.module.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const EducationPage = (props) => (
  <Layout headshot={props.data.headshot}>
    <SEO title="Education" />
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <h2>Simmons University</h2>
        <h3><i>Boston, MA</i></h3>
        <ul>
          <li>Bachelor of Science in Nursing, anticipated May 2020</li>
          <li>RN Licensure, anticipated Summer 2020</li>
          <li>Minor: Healthcare Management</li>
          <li>GPA: 3.93</li>
          <li>Sigma Theta Tau International Honor Society of Nursing</li>
        </ul>

        <h2>Algonquin Regional High School</h2>
        <h3><i>Northborough, MA</i></h3>
        <ul>
          <li>Student Government, President (2016)</li>
          <li>Community Service Club, Founder and President</li>
          <li>Spanish Honors Society, Unified Olympics</li>
        </ul>
      </div>
      <div className={styles.rightCol}>
        <h2>Certifications</h2>
        <ul>
          <li>Basic Life Support</li>
          <li>End-of-Life Nursing Education Consortium</li>
          <li>Emergency and Natural Disaster Preparedness Certificate</li>
          <li>IHI Quality Improvement</li>
        </ul>

        <h2>Skills</h2>
        <ul>
          <li>Epic</li>
          <li>Microsoft Office Suite</li>
          <li>RedCap</li>
          <li>ERAS® Interactive Audit System - EIAS</li>
          <li>WordPress</li>
          <li>Vizient</li>
        </ul>
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

export default EducationPage
