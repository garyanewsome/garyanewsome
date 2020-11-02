import React from 'react'
import { Link, graphql } from 'gatsby'

import postStyles from './post.module.css'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const PostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <Nav location={location} theme="light" />
      <Header location={location} />
      <div className={postStyles.container}>
        <h1 className={postStyles.title}>{post.frontmatter.title}</h1>
        <p className={postStyles.date}>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/development/writings" className={postStyles.link}>
          Return to Writings Page
        </Link>
      </div>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
