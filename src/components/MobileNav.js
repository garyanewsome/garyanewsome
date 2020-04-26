import React from 'react'

import { Link } from 'gatsby'

import mobileNavStyles from './mobileNav.module.css'

import linkedin from '../assets/images/sm-icons/linkedin-light.svg'
import github from '../assets/images/sm-icons/github-light.svg'
import twitter from '../assets/images/sm-icons/twitter-light.svg'

const MobileNav = ({ location }) => {
  return (
    <nav className={mobileNavStyles.mobileNav}>
      {location.pathname !== '/' && (
        <Link to="./" className={mobileNavStyles.link}>
          Home
        </Link>
      )}
      <Link to="./writings" className={mobileNavStyles.link}>
        Writings
      </Link>
      <div className={mobileNavStyles.socialRow}>
        <a href="https://www.linkedin.com/in/garyanewsome" rel="noopener noreferrer" target="_blank">
          <img className={mobileNavStyles.smIcon} src={linkedin} alt="https://www.linkedin.com/in/garyanewsome" />
        </a>

        <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
          <img className={mobileNavStyles.smIcon} src={github} alt="GitHub.com/garyanewsome" />
        </a>

        <a href="https://twitter.com/garyanewsome" rel="noopener noreferrer" target="_blank">
          <img className={mobileNavStyles.smIcon} src={twitter} alt="https://twitter.com/garyanewsome" />
        </a>
      </div>
    </nav>
  )
}

export default MobileNav
