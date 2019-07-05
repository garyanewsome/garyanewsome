import React from 'react'
import { Link } from 'gatsby'

import MobileNav from './MobileNav'

import '../assets/css/header.css'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      showMobileNav: false,
    }
  }
  toggleShowMobileNav = () => {
    this.setState({ showMobileNav: !this.state.showMobileNav })
  }
  render() {
    return (
      <>
        {this.state.showMobileNav && (
          <MobileNav location={this.props.location} />
        )}
        <div className="header-container">
          <div className="header">
            <Link to="/" className="header-brand">
              <h1>Gary A. Newsome</h1>
            </Link>
            <div className="header-links">
              <div
                id="header-nav-icon"
                className={this.state.showMobileNav ? 'open' : ''}
                onClick={() => this.toggleShowMobileNav()}
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header
