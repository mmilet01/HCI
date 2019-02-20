import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlogPosts from "../components/BlogPosts";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges: cities } // Rename edges to posts
  }
}) => (
  <Layout>
    <h1>Top destinations and recommendations by users</h1>
    <BlogPosts cities={cities} />
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
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
