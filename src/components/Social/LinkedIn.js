import React from 'react'

const outerColor = (theme) => {
  if (theme === 'light') return '#006087'

  return '#FFFFFF'
}

const innerColor = (theme) => {
  if (theme === 'light') {
    return '#fdfdfd'
  } else if (theme === 'dark') {
    return '#006087'
  } else {
    return '#0f001a'
  }
}

export const LinkedIn = ({ theme, size }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M119.984 0H9.56332C4.28675 0 0 4.18238 0 9.33928V120.225C0 125.386 4.28675 129.575 9.56332 129.575H119.984C125.27 129.575 129.576 125.386 129.576 120.225V9.33928C129.576 4.18238 125.27 0 119.984 0Z"
      fill={outerColor(theme)}
    />
    <path
      d="M28.8241 17.839C34.9699 17.839 39.9621 22.8321 39.9621 28.9788C39.9621 35.13 34.9699 40.125 28.8241 40.125C22.6657 40.125 17.6797 35.13 17.6797 28.9788C17.6797 22.8321 22.6657 17.839 28.8241 17.839ZM19.2112 48.5779H38.4297V110.415H19.2112V48.5779Z"
      fill={innerColor(theme)}
    />
    <path
      d="M50.4838 48.5779H68.9203V57.0264H69.1758C71.7403 52.1655 78.0103 47.0392 87.3595 47.0392C106.821 47.0392 110.414 59.8464 110.414 76.4959V110.415H91.2089V80.3435C91.2089 73.1692 91.0766 63.946 81.2218 63.946C71.2202 63.946 69.6887 71.7583 69.6887 79.8243V110.415H50.4838V48.5779Z"
      fill={innerColor(theme)}
    />
  </svg>
)
