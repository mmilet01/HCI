import React from "react";
import Layout from "../components/Layout";
import BoatOffer from "../components/BoatOffer";
import Boats from "../components/Boats";
import { graphql } from "gatsby";
import styles from "../styles/pages/naslovna.module.css";
import SelectiveBoats from "../components/SelectiveBoats";
import BoatFilter from "../components/BoatFilter";

export default ({ data }) => (
  <Layout>
    {/*     <BoatOffer />
     */}{" "}
    <h1 className={styles.fleet}>OUR ENTIRE FLEET</h1>
    <BoatFilter />
    <div className={styles.boatQuery}>
      <SelectiveBoats data={data} />
    </div>
    {/*   <br/>
    <br/>
    <h1>Top choices selected by users</h1>
    <br/>
    <div className={styles.boatQuery}>
      <Boats data={data} />
    </div> */}
  </Layout>
);

export const query = graphql`
  query TeamsQuery {
    allMarkdownRemark(filter: { frontmatter: { boat: { eq: "1" } } }) {
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
