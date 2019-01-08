import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image1 from '../components/Slideshow/image1'


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>This should be boat template {post.frontmatter.title}</h1>
      <h4>This is the thing that should be written on every post</h4>
      <Image1></Image1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`