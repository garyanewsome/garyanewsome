import React from 'react'

import { Link } from 'gatsby'

import navStyles from './nav.module.css'

import { LinkedIn } from './Social/LinkedIn'
import { GitHub } from './Social/GitHub'
import { Twitter } from './Social/Twitter'
import { Spotify } from './Social/Spotify'
import { SoundCloud } from './Social/SoundCloud'

const Nav = ({ location, theme }) => {
  const [showNav, setShowNav] = React.useState(false)

  const containerRef = React.useRef(null)

  const toggleShowNav = () => {
    setShowNav(!showNav)

    if (showNav) {
      containerRef.current.classList.remove(navStyles.in)
      containerRef.current.classList.add(navStyles.out)
    } else {
      containerRef.current.classList.remove(navStyles.out)
      containerRef.current.classList.add(navStyles.in)
    }
  }

  const iconTheme = 'site'
  const size = 40

  return (
    <div role="navigation">
      <div className={navStyles.trigger} onClick={() => toggleShowNav()} role="navigation">
        <div>
          <div
            className={[
              navStyles.navIcon,
              theme === 'dark' ? navStyles.navIconDark : navStyles.navIconLight,
              showNav ? navStyles.open : null,
            ].join(' ')}
            onClick={() => toggleShowNav()}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div ref={containerRef} className={navStyles.navContainer}>
        <nav className={navStyles.nav}>
          <div className={navStyles.container}>
            {location.pathname !== '/' && (
              <Link to="/" className={navStyles.link}>
                Home
              </Link>
            )}
            <Link to="/development" className={navStyles.link}>
              Development
            </Link>
            <Link to="/development/writings" className={[navStyles.link, navStyles.subLink].join(' ')}>
              Writings
            </Link>
            <Link to="/music" className={navStyles.link}>
              Music
            </Link>
            <Link to="/music/releases" className={[navStyles.link, navStyles.subLink].join(' ')}>
              Releases
            </Link>
            <div className={navStyles.socialRow}>
              <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
                <SoundCloud theme={iconTheme} size={size} />
              </a>

              <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
                <Spotify theme={iconTheme} size={size} />
              </a>

              <a href="https://twitter.com/garyanewsome" rel="noopener noreferrer" target="_blank">
                <Twitter theme={iconTheme} size={size} />
              </a>

              <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
                <GitHub theme={iconTheme} size={size} />
              </a>

              <a href="https://www.linkedin.com/in/garyanewsome" rel="noopener noreferrer" target="_blank">
                <LinkedIn theme={iconTheme} size={size} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
