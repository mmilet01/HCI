import React from 'react'
import Layout from '../components/layout'
/* import { graphql } from 'gatsby'
 */ import BlogPosts from '../components/BlogPosts'

const BlogPage = () => (
  <Layout>
    <h1>Top destinations and recommendations by users</h1>
    <BlogPosts />
  </Layout>
)

export default BlogPage
