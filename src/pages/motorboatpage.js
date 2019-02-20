import React from 'react'
import Layout from '../components/layout'
import SelectiveBoats from '../components/SelectiveBoats'
import { graphql } from 'gatsby'
import styles from '../styles/pages/naslovna.module.css'


const MotorboatPage = ({data}) => (
  <Layout>
    <h1 className={styles.fleet}>
     Motorboat fleet
    </h1>
    {/* <h4>
      Select the destination and choose from the available boats the one that
      fits you the most
    </h4>
    <p>POPULAR DESTINATIONS -> Neki mini slideshow opet</p>
    <p>Filter za odabrat destinaciju</p> */}
    <div className={styles.boatQuery}>
    <SelectiveBoats className={styles.allBoats} data={data}></SelectiveBoats>
    </div>
  </Layout>
)

export default MotorboatPage


export const query = graphql`
  query MotorboatQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "Motorboat" } } }) {
      edges {
        node {
          frontmatter {
            type
            name
            path
            image{
              publicURL
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`