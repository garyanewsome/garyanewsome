import React from 'react'
import { Link, graphql } from 'gatsby'

import writingsStyles from './writings.module.css'

import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const WritingIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Writings" />
      <Header location={location} />
      <div className={writingsStyles.container}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link className={writingsStyles.block} to={node.fields.slug} key={node.fields.slug}>
              <div className={writingsStyles.writings}>
                <h3 className={writingsStyles.title}>{title}</h3>
                <p className={writingsStyles.date}>{node.frontmatter.date}</p>
                <p className={writingsStyles.preview} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default WritingIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
