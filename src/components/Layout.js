import React from 'react'

import '../assets/css/index.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <div className="layout">{children}</div>
  }
}

export default Layout
