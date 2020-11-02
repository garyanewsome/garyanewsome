import React from 'react'
import { Link, graphql } from 'gatsby'

import releaseStyle from './release.module.css'

import Nav from '../components/Nav'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ReleaseTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <Nav location={location} theme="dark" />
      <Header location={location} showName={true} theme="dark" color="#0f001a" />
      <div className={releaseStyle.container}>
        <h1 className={releaseStyle.title}>{post.frontmatter.title}</h1>
        <p className={releaseStyle.date}>
          {post.frontmatter.date} - {post.frontmatter.albumType}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={releaseStyle.linkContainer}>
          <div>
            Available on{' '}
            <Link
              className={releaseStyle.musicLink}
              to="https://open.spotify.com/artist/5tWnRXHI8g2I0adOEzNh7X?si=ikiZqJVGQDW_n1UVQvEUtA"
              target="_blank"
            >
              Spotify
            </Link>
          </div>
          <div>
            Or find it on my{' '}
            <Link className={releaseStyle.musicLink} to="https://soundcloud.com/garyanewsome" target="_blank">
              Soundcloud
            </Link>
          </div>
          <div>
            <Link className={releaseStyle.musicLink} to={'/music/releases'}>
              Return to Releases Page
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReleaseTemplate

export const pageQuery = graphql`
  query ReleasePostBySlug($slug: String!) {
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
        albumType
      }
    }
  }
`
