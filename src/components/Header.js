import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.css'

const Header = ({ location, showName = true, theme = 'light', color = 'transparent' }) => {
  return (
    <>
      <div
        className={headerStyles.container}
        style={{
          backgroundColor: theme === 'light' ? '#fdfdfd' : color,
        }}
      >
        <div className={headerStyles.header}>
          <div>
            {showName && (
              <Link to="/" style={{ color: theme === 'light' ? '#4d1584' : '#FFFFFF' }}>
                <h1>Gary A. Newsome</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
