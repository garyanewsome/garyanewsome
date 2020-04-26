import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.css'
import MobileNav from './MobileNav'

const Header = ({ location }) => {
  const [showMobileNav, setShowMobileNav] = React.useState(false)

  const toggleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }

  return (
    <>
      {showMobileNav && <MobileNav location={location} />}
      <div className={headerStyles.container}>
        <div className={headerStyles.header}>
          <Link to="/" className={headerStyles.brand}>
            <h1>Gary A. Newsome</h1>
          </Link>
          <div>
            <div
              className={[headerStyles.navIcon, showMobileNav ? headerStyles.open : null].join(' ')}
              onClick={() => toggleShowMobileNav()}
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

export default Header
