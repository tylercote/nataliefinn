import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './work-experience.css'

const WorkExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <div className={'exp-container'}>
      <div className={'header-row'}>
        <div className={'hr-wrapper'}>
          <hr/>
        </div>
        <h2 className={'header'}>Clinical Experience</h2>
        <div className={'hr-wrapper'}>
          <hr/>
        </div>
      </div>
      <div className={'body-row'}>
        <table className={'clinical-table'}>
          <tbody>
          <tr>
            <td className={'desc-col'}>Preceptorship: Thoracic/Vascular Surgery</td>
            <td className={'loc-col'}>Massachusetts General Hospital, Boston MA</td>
            <td className={'date-col'}>Spring 2020</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Psychiatric Nursing</td>
            <td className={'loc-col'}>Massachusetts General Hospital, Boston MA</td>
            <td className={'date-col'}>Fall 2019</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Community-Based Nursing</td>
            <td className={'loc-col'}>The Rogerson House, Jamaica Plain MA</td>
            <td className={'date-col'}>Fall 2019</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Maternity: Postpartum and L&D</td>
            <td className={'loc-col'}>Beth Israel Deaconess Medical Center</td>
            <td className={'date-col'}>Spring 2019</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Pediatric Nursing</td>
            <td className={'loc-col'}>Fransiscan Childrens, Brighton MA</td>
            <td className={'date-col'}>Spring 2019</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Medical/Surgical: Cardiac Floor</td>
            <td className={'loc-col'}>St. Elizabeth's Medical Center, Brighton MA</td>
            <td className={'date-col'}>Fall 2018</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Medical/Surgical: Medical Intermediate</td>
            <td className={'loc-col'}>Brigham and Women's Hospital</td>
            <td className={'date-col'}>Spring 2018</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className={'header-row'}>
        <div className={'hr-wrapper'}>
          <hr/>
        </div>
        <h2 className={'header'}>Patient Care Associate</h2>
        <div className={'hr-wrapper'}>
          <hr/>
        </div>
      </div>
      <div className={'body-row'}>
        <table className={'clinical-table'}>
          <tbody>
          <tr>
            <td className={'desc-col'}>Newborn Family Unit: Blake 13/Ellison 13</td>
            <td className={'loc-col'}>Massachusetts General Hospital, Boston MA</td>
            <td className={'date-col'}>May 2019 - Present</td>
          </tr>
          <tr>
            <td className={'desc-col'}>Thoracic Medical/Surgical: 11ABD</td>
            <td className={'loc-col'}>Brigham and Women's Hospital, Boston MA</td>
            <td className={'date-col'}>July 2018 - April 2019</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className={'header-row'}>
        <div className={'hr-wrapper'}>
          <hr/>
        </div>
        <h2 className={'header'}>Student Internship</h2>
        <div className={'hr-wrapper'}>
          <hr/>
        </div>
      </div>
      <div className={'body-row'}>
        <table className={'clinical-table'}>
          <tbody>
          <tr>
            <td className={'desc-col'}>Department of Quality and Safety</td>
            <td className={'loc-col'}>Brigham and Women's Hospital, Boston MA</td>
            <td className={'date-col'}>Summers 2016 - 2019</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
)

export default WorkExperiencePage
