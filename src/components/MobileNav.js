import React from 'react'

import { Link } from 'gatsby'

import linkedin from '../assets/images/sm-icons/linkedin-light.svg'
import github from '../assets/images/sm-icons/github-light.svg'
import twitter from '../assets/images/sm-icons/twitter-light.svg'

class MobileNav extends React.Component {
  render() {
    return (
      <nav className="mobile-nav">
        {this.props.location.pathname !== '/' && (
          <Link to="./" className="mobile-nav-link">
            Home
          </Link>
        )}
        <Link to="./writings" className="mobile-nav-link">
          Writings
        </Link>
        <div className="mobile-nav-social-row">
          <a href="https://www.linkedin.com/in/garyanewsome" target="_blank">
            <img
              className="sm-icon"
              src={linkedin}
              alt="https://www.linkedin.com/in/garyanewsome"
            />
          </a>

          <a href="https://www.github.com/garyanewsome" target="_blank">
            <img
              className="sm-icon"
              src={github}
              alt="GitHub.com/garyanewsome"
            />
          </a>

          <a href="https://twitter.com/garyanewsome" target="_blank">
            <img
              className="sm-icon"
              src={twitter}
              alt="https://twitter.com/garyanewsome"
            />
          </a>
        </div>
      </nav>
    )
  }
}

export default MobileNav
