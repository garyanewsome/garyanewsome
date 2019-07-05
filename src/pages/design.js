import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import '../assets/css/default.css'

class DesignIndex extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'Gary A. Newsome', content: siteDescription }]}
          title={`${siteTitle} | Design`}
        />
        <div>Coming Soon... ish</div>
      </Layout>
    )
  }
}

export default DesignIndex
