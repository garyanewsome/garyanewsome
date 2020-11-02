import React from 'react'
import { Link } from 'gatsby'

import musicStyles from './music.module.css'

const Music = () => {
  return (
    <div className={musicStyles.music}>
      <div className={musicStyles.container}>
        <div style={{ fontSize: '2rem' }} className={musicStyles.giveMeSpace}>
          Songwriter, perveyor of texture and noise.
        </div>
        <div style={{ fontSize: '2rem' }} className={musicStyles.giveMeSpace}>
          Music available for podcasts, video, TV, or movies. If you are interested in anything here, have something
          specific you are looking for, or wish to collaborate on a project please feel free to reach out.
        </div>
        <Link to="/music/releases" className={musicStyles.link}>
          <div style={{ fontSize: '1.5rem' }} className={musicStyles.giveMeSpace}>
            Click here to see the latest releases.
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Music
