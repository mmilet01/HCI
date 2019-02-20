import React from 'react'
import Layout from '../components/layout'
import SelectiveBoats from '../components/SelectiveBoats'
import { graphql } from 'gatsby'
import styles from '../styles/pages/naslovna.module.css'


const CatamaranPage = ({data}) => (
  <Layout>
    <h1 className={styles.fleet}>
      Catamaran fleet
    </h1>
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