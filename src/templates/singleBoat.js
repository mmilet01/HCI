import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from "./styles.module.css";


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1 className={styles.title}>{post.frontmatter.name}</h1>
      <div className={styles.singleBoat}>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className={styles.details}>
           <h4>Capacity: {post.frontmatter.capacity} people</h4>
           <h4>Air Conditioning: {post.frontmatter.airCond}</h4>
           <h4>Price: {post.frontmatter.price} €</h4>
           <h4>Year of production: {post.frontmatter.yearOfProduction}</h4>
           <h4>Number of cabins: {post.frontmatter.cabins}</h4>
           <button className={styles.button}>Book</button>
          </div>

      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BoatsQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        type
        name
        path
        capacity
        airCond
        price
        yearOfProduction
        cabins
      }
    }
  }
`