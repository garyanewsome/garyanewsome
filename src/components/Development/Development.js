import React from 'react'

import { Link } from 'gatsby'

import developmentStyles from './development.module.css'

const Development = ({ height }) => {
  return (
    <div className={developmentStyles.development} style={{ height: `${height - 64 - 64}px` }}>
      <div className={developmentStyles.content}>
        <div className={developmentStyles.heading}>
          Developer at
          <br />
          <a
            href="https://www.robotsandpencils.com/"
            className={[developmentStyles.rnpLink, developmentStyles.link].join(' ')}
            rel="noopener noreferrer"
            target="_blank"
          >
            Robots & Pencils
          </a>
        </div>
        <div className={developmentStyles.subheadings}>
          Formerly,
          <br />
          <a
            href="https://www.industryweapon.com/"
            className={[developmentStyles.iwLink, developmentStyles.link].join(' ')}
            rel="noopener noreferrer"
            target="_blank"
          >
            Industry Weapon
          </a>
          <br />
          <span className={developmentStyles.savvyLink}>SavvySoftWorks, LLC</span>
        </div>
        <div>Open Source Contributor</div>
        <div>
          <a
            href="https://github.com/garyanewsome/me/blob/main/Gary%20A.%20Newsome%20Resume%202020.pdf"
            className={[developmentStyles.link, developmentStyles.linkLight].join(' ')}
            rel="noopener noreferrer"
            target="_blank"
          >
            My Resume can be found here.
          </a>
        </div>
        <br />
        <hr />
        <br />
        <div>
          I don't often ( read: almost never ) blog, but those occasional moments can be found on the{' '}
          <Link
            to="/development/writings"
            className={[developmentStyles.link, developmentStyles.linkStandard].join(' ')}
          >
            writings
          </Link>{' '}
          page.
        </div>
      </div>
    </div>
  )
}

export default Development
