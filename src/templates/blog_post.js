import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "./styles.module.css";
import { Link } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h1 className={styles.postTitle}>{post.frontmatter.title}</h1>
      <div className={styles.mdContent}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={styles.backButton}>
          <Link to="/blog">
            <button className={styles.button}>Back</button>
          </Link>
          <h4 className={styles.postedBy}>
            Posted by {post.frontmatter.name} on {post.frontmatter.date}
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export const postQurty = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
        path
        name
      }
    }
  }
`;
