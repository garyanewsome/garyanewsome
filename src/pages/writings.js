import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import '../assets/css/writings.css'

import Layout from '../components/Layout'
import Header from '../components/Header'

class WritingIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle} | Writings`}
        />
        <Header location={this.props.location} />
        <div className="writings-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link
                className="writings-block"
                to={node.fields.slug}
                key={node.fields.slug}
              >
                <div className="writings">
                  <h3 className="writings-title">{title}</h3>
                  <p className="writings-date">{node.frontmatter.date}</p>
                  <p
                    className="writings-preview"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
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
