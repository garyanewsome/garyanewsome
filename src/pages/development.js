import React from 'react'
import { graphql } from 'gatsby'

// custom typefaces
import 'typeface-crushed'
import 'typeface-raleway'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Development from '../components/Development/Development'
import Contact from '../components/Contact'

import '../assets/css/index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Development" />
      <Nav location={location} theme="light" />
      <Header location={location} showName={true} theme="light" color="" />
      <Development />
      <Contact page="development" theme="light" size={40} showAll={false} />
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
