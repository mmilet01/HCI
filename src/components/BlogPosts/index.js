import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./styles.module.css";
import { Link } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date
                image
              }
              excerpt(pruneLength: 300)
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        {data.allMarkdownRemark.edges.map(posts => (
          <div key={posts.node.id} className={styles.post}>
            <h1 className={styles.title}>{posts.node.frontmatter.title}</h1>
            <h4>{posts.node.frontmatter.date}</h4>
            <p>{posts.node.excerpt}</p>
            <img
              src={posts.node.frontmatter.image}
              className={styles.postImage}
              alt="Destination"
            />
            <div className={styles.divbutton}>
              <Link className={styles.links} to={posts.node.frontmatter.path}>
                <button type="button" className={styles.button}>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )}
  />
);
