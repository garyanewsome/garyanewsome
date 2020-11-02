import React from 'react'

import homeStyles from './home.module.css'

const Home = () => {
  const [isVertical, setIsVertical] = React.useState(false)

  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (!containerRef.current) return

    const getLayoutDimensions = () => {
      const rect = containerRef.current.getBoundingClientRect()
      if (rect.height > rect.width) {
        setIsVertical(true)
      } else {
        setIsVertical(false)
      }
    }

    getLayoutDimensions()

    window.addEventListener('resize', getLayoutDimensions)
    return () => window.removeEventListener('resize', getLayoutDimensions)
  }, [containerRef, setIsVertical])

  return (
    <div ref={containerRef} className={homeStyles.home}>
      <div className={homeStyles.homeOverlay} />
      <div className={homeStyles.homeContent}>
        <h1>Gary A. Newsome</h1>
        <h2>Developer, Musician</h2>
        <h3>Creative type being...</h3>
      </div>
      <div className={isVertical ? homeStyles.buttonRowVertical : homeStyles.buttonRowHorizontal}>
        <a href="/development" className={homeStyles.linkButton}>
          Development
        </a>
        <a href="/music" className={homeStyles.linkButton}>
          Music
        </a>
      </div>
    </div>
  )
}

export default Home
