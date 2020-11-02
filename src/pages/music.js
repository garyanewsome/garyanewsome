import React from 'react'
import { graphql } from 'gatsby'

// custom typefaces
import 'typeface-crushed'
import 'typeface-raleway'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Music from '../components/Music/Music'
import Contact from '../components/Contact'

import '../assets/css/index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Music" />
      <Header location={location} showName={true} theme="dark" color="#0f001a" />
      <Nav location={location} theme="dark" />
      <Music />
      <Contact page="music" theme="dark" size={40} showAll={false} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
