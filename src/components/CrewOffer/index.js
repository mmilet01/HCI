import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './styles.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        Image1: file(relativePath: { eq: "a.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 350
              maxHeight: 260
              cropFocus: NORTH
              traceSVG: { color: "#663399" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        Image2: file(relativePath: { eq: "asd.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 350
              maxHeight: 260
              cropFocus: NORTH
              traceSVG: { color: "#663399" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        Image3: file(relativePath: { eq: "c.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 350
              maxHeight: 260
              cropFocus: NORTH
              traceSVG: { color: "#663399" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1 className={styles.crewOffer}>Crew Offer</h1>

        <div className={styles.ImageContainer}>
          <div className={styles.singleImage}>
            <p className={styles.crewName}>Skipper</p>
            <Img fluid={data.Image1.childImageSharp.fluid} />
          </div>
          <div className={styles.singleImage}>
            <p className={styles.crewName}>Hostess</p>

            <Img fluid={data.Image2.childImageSharp.fluid} />
          </div>
          <div className={styles.singleImage}>
            <p className={styles.crewName}>Chef</p>

            <Img fluid={data.Image3.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    )}
  />
)

/* export default () => (
  <div>
    <h1 className={styles.crewOffer}>Crew Offer</h1>

    <div className={styles.ImageContainer}>
      <div className={styles.singleImage}>
        <p className={styles.crewName}>Skipper</p>
        <Image1 />
      </div>
      <div className={styles.singleImage}>
        <p className={styles.crewName}>Hostess</p>

        <Image2 />
      </div>
      <div className={styles.singleImage}>
        <p className={styles.crewName}>Chef</p>

        <Image3 />
      </div>
    </div>
  </div>
) */
