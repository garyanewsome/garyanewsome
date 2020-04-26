import React from 'react'

import homeStyles from './home.module.css'

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div className={homeStyles.subHeadings}>
        <h1>
          Developer at{' '}
          <a
            href="https://www.industryweapon.com/"
            className={[homeStyles.iwLink, homeStyles.link].join(' ')}
            rel="noopener noreferrer"
            target="_blank"
          >
            Industry Weapon
          </a>
        </h1>
        <h2>
          Formerly, <span className={[homeStyles.savvyLink, homeStyles.link].join(' ')}>SavvySoftWorks, LLC</span>
        </h2>
        <h3>Open Source Contributor</h3>
        <h3>Creator, Musician, Artist ...</h3>
      </div>
    </div>
  )
}

export default Home
