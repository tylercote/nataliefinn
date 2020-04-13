import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import download_resume from '../downloads/NatalieFinn_Resume.pdf';
import styles from './index.module.css';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faFile, faFolderOpen, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { graphql } from 'gatsby'
config.autoAddCss = false
library.add(faFile)

const IndexPage = (props) => (
  <Layout headshot={props.data.headshot}>
    <SEO title="About Me" />
    <h1><span className={'accent'}><span className={'hi'}>Hi,</span> I'm Natalie Finn...</span></h1>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;The summer before my senior year in high school I accepted a volunteer position at Boston Children’s Hospital. It was through this work that I experienced first hand the intimate relationship between nurses, patients, and families.
      It seemed second nature for these nurses to guide families with knowledge, humor, and confidence. I was deeply moved to see the joy parents felt when they were able to take their children home.
      The job of a nurse is to care for the physical and emotional needs of humans. I had found a career that I was passionate about and began applying to nursing programs that fall.
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;
      Further on in my nursing education, I gained the words to describe the feeling I had during that discharge; patient-centered care. The scientist in me is intrigued by the pathophysiology of the illnesses I will care for but I am most concerned with holistically caring for my patients. This comes from listening to their needs that expand beyond the physical ailments that brought a patient to the hospital. Throughout all my clinical experiences, the greatest satisfaction I have felt is from empowering patients in their ability to heal. The nurses supported that mother as she was about to care for her newborn outside of the hospital setting. I have helped patients walk for the first time after a lung transplant and enabled them to breathe better than they have their whole life. My ability to connect with the patients emotionally and tend to their health concerns is what will serve me in my future nursing practice.
    </p>
    <div className={styles.linkBar}>
      <a className={styles.linkButton} href={'mailto:natalie.finn97@gmail.com'}>
        <FontAwesomeIcon className={styles.icon} size={'lg'} icon={faEnvelope}/>
        natalie.finn97@gmail.com
      </a>
      <a className={styles.linkButton} href={download_resume} target={'_blank'}>
        <FontAwesomeIcon className={styles.icon} size={'lg'} icon={faFile}/>
        Resume
      </a>
      {/*<a className={styles.linkButton} href={'#'} target={'_blank'}>*/}
      {/*  <FontAwesomeIcon className={styles.icon} size={'lg'} icon={faFolderOpen}/>*/}
      {/*  Portfolio*/}
      {/*</a>*/}
      <a className={styles.linkButton} href={'https://www.linkedin.com/in/natalie-finn-7b63a4152/'} target={'_blank'}>
        <FontAwesomeIcon className={styles.icon} size={'lg'} icon={faLinkedin}/>
        LinkedIn
      </a>
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

export default IndexPage
