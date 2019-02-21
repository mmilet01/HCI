import React from "react";
import Layout from "../components/Layout";
import SelectiveBoats from "../components/SelectiveBoats";
import { graphql } from "gatsby";
import styles from "../styles/pages/naslovna.module.css";

const MonohullPage = ({ data }) => (
  <Layout>
    <h1 className={styles.fleet}>Monohull fleet</h1>
    <div className={styles.boatQuery}>
      <SelectiveBoats data={data} />
    </div>
  </Layout>
);

export default MonohullPage;

export const query = graphql`
  query MonohullQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "Monohull" } } }) {
      edges {
        node {
          frontmatter {
            type
            name
            path
            capacity
            price
            yearOfProduction
            image {
              publicURL
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
