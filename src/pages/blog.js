import React from 'react'
import Layout from '../components/layout'
/* import { graphql } from 'gatsby'
 */ import BlogPosts from '../components/BlogPosts'

const BlogPage = () => (
  <Layout>
    <h1>My Blog Page</h1>
    <BlogPosts />
  </Layout>
)

export default BlogPage
