import React from 'react'
import { graphql } from 'gatsby'

// custom typefaces
import 'typeface-crushed'
import 'typeface-raleway'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Home from '../components/Home/Home'
import Nav from '../components/Nav'

import '../assets/css/index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <Nav location={location} theme="dark" />
      <Header location={location} showName={false} theme="transparent" color="transparent" />
      <Home />
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
