import React from 'react'
import Layout from '../components/layout'
import SelectiveBoats from '../components/SelectiveBoats'
import { graphql } from 'gatsby'
import styles from '../styles/pages/naslovna.module.css'


const CatamaranPage = ({data}) => (
  <Layout>
    <h1>
      You choosed to go on the vacation with a Catamaran, Excellent choice !
    </h1>
    <h4>
      Select the destination and choose from the available boats the one that
      fits you the most
    </h4>
    <p>POPULAR DESTINATIONS -> Neki mini slideshow opet</p>
    <p>Filter za odabrat destinaciju</p>
    <div className={styles.boatQuery}>
    <SelectiveBoats data={data}></SelectiveBoats>
    </div>
  </Layout>
)

export default CatamaranPage


export const query = graphql`
  query CatamaranQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "Catamaran" } } }) {
      edges {
        node {
          frontmatter {
            type
            name
            path
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`