import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

import releasesStyles from './releases.module.css'

const ReleasesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const releases = data.allMarkdownRemark.edges
  const images = data.allFile.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Releases" />
      <Nav location={location} theme="dark" />
      <Header location={location} showName={true} theme="dark" color="#0f001a" />
      <div className={releasesStyles.container}>
        {releases.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const image = images.find((img) => img.node.name === node.frontmatter.coverImg)?.node
          return (
            <Link className={releasesStyles.block} to={`/music/releases${node.fields.slug}`} key={node.fields.slug}>
              <Img className={releasesStyles.img} fluid={image.childImageSharp.fluid} alt="Album Art" />
              <div className={releasesStyles.content}>
                <h3 className={releasesStyles.title}>{title}</h3>
                <p className={releasesStyles.date}>
                  {node.frontmatter.releaseDate} - {node.frontmatter.albumType}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default ReleasesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fileAbsolutePath: { regex: "music/releases/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            releaseDate
            title
            coverImg
            albumType
            tracks
          }
        }
      }
    }
    allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, sourceInstanceName: { eq: "releaseImages" } }) {
      edges {
        node {
          id
          name
          extension
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
