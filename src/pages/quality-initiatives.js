import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const QualityInitiativesPage = (props) => (
  <Layout headshot={props.data.headshot}>
    <SEO title="Quality Initiatives" />
    <h1>Coming soon...</h1>
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

export default QualityInitiativesPage
