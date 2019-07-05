import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Home from '../components/Home'

import '../assets/css/default.css'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        meta={[{ name: 'description', content: siteDescription }]}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'Gary A. Newsome', content: siteDescription }]}
          title={siteTitle}
        />
        <Header location={this.props.location} />
        <Home />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
