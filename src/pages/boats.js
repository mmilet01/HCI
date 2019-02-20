import React from 'react'
import Layout from '../components/layout'
import BoatOffer from '../components/BoatOffer'
import Boats from '../components/Boats'
import { graphql } from 'gatsby'
import styles from '../styles/pages/naslovna.module.css'

export default ({ data }) => (
  <Layout>
    <BoatOffer />
  {/*   <br/>
    <br/>
    <h1>Top choices selected by users</h1>
    <br/>
    <div className={styles.boatQuery}>
      <Boats data={data} />
    </div> */}
  </Layout>
)

export const query = graphql`
  query TeamsQuery {
    allMarkdownRemark(filter: { frontmatter: { topChoice: { eq: "yes" } } }) {
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
