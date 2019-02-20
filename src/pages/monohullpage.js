import React from 'react'
import Layout from '../components/layout'
import SelectiveBoats from '../components/SelectiveBoats'
import { graphql } from 'gatsby'
import styles from '../styles/pages/naslovna.module.css'


const MonohullPage = ({data}) => (
  <Layout>
    <h1 className={styles.fleet}>
      Monohull fleet
    </h1>
    <div className={styles.boatQuery}>
    <SelectiveBoats data={data}></SelectiveBoats>
    </div>
  </Layout>
)

export default MonohullPage


export const query = graphql`
  query MonohullQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "Monohull" } } }) {
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