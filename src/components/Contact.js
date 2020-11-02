import React from 'react'

import { LinkedIn } from './Social/LinkedIn'
import { GitHub } from './Social/GitHub'
import { Twitter } from './Social/Twitter'
import { Spotify } from './Social/Spotify'
import { SoundCloud } from './Social/SoundCloud'

import contactStyles from './contact.module.css'

const Contact = ({ page, theme, size, showAll = false }) => {
  return (
    <div className={contactStyles.contact} style={{ backgroundColor: theme === 'light' ? '#fdfdfd' : '#0f001a' }}>
      <div className={contactStyles.iconContainer}>
        <a href="https://twitter.com/garyanewsome" rel="noopener noreferrer" target="_blank">
          <Twitter theme={theme} size={size} />
        </a>
      </div>

      {(page === 'development' || showAll) && (
        <div className={contactStyles.iconContainer}>
          <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
            <GitHub theme={theme} size={size} />
          </a>
        </div>
      )}

      {(page === 'development' || showAll) && (
        <div className={contactStyles.iconContainer}>
          <a href="https://www.linkedin.com/in/garyanewsome" rel="noopener noreferrer" target="_blank">
            <LinkedIn theme={theme} size={size} />
          </a>
        </div>
      )}

      {(page === 'music' || showAll) && (
        <div className={contactStyles.iconContainer}>
          <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
            <SoundCloud theme={theme} size={size} />
          </a>
        </div>
      )}

      {(page === 'music' || showAll) && (
        <div className={contactStyles.iconContainer}>
          <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
            <Spotify theme={theme} size={size} />
          </a>
        </div>
      )}
    </div>
  )
}

export default Contact
