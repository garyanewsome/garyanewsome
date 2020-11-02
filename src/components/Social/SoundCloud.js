import React from 'react'

const color = (theme, first) => {
  if (theme === 'light' && first) {
    return '#F79810'
  } else if (theme === 'light' && !first) {
    return '#F8310E'
  } else {
    return '#FFFFFF'
  }
}

// 360 206
export const SoundCloud = ({ theme, size }) => (
  <svg
    width={`${size * 1.7475}px`}
    height={`${size}px`}
    viewBox="0 0 360 206"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 93.5C3.2 93.5 2.7 94.1 2.6 94.9L0 114.9L2.6 134.6C2.7 135.4 3.3 136 4 136C4.7 136 5.3 135.4 5.4 134.6L8.5 114.9L5.4 94.9C5.3 94.1 4.7 93.5 4 93.5ZM18.8 82.6C18.7 81.7 18.1 81.1 17.3 81.1C16.5 81.1 15.9 81.7 15.8 82.6L12.3 114.9L15.8 146.5C15.9 147.3 16.5 148 17.3 148C18.1 148 18.7 147.4 18.8 146.5L22.8 114.9L18.8 82.6ZM74.5 52.7C73 52.7 71.8 53.9 71.8 55.4L69 114.9L71.8 153.3C71.9 154.8 73.1 156 74.5 156C75.9 156 77.1 154.8 77.2 153.3L80.4 114.9L77.2 55.4C77.2 53.9 76 52.7 74.5 52.7ZM45.7 73.4C44.6 73.4 43.7 74.3 43.6 75.5L40.4 114.9L43.6 153C43.7 154.2 44.6 155.1 45.7 155.1C46.8 155.1 47.7 154.2 47.8 153L51.4 114.9L47.8 75.5C47.7 74.3 46.8 73.4 45.7 73.4ZM103.9 156.1C105.7 156.1 107.2 154.6 107.2 152.8L110 115L107.2 35.8C107.1 33.9 105.7 32.5 103.9 32.5C102.1 32.5 100.6 34 100.6 35.8L98.1 115L100.6 152.8C100.6 154.6 102.1 156.1 103.9 156.1ZM163.9 156.2C166.4 156.2 168.4 154.2 168.5 151.7L170.4 115L168.5 23.5C168.5 21 166.4 19 163.9 19C161.4 19 159.4 21 159.3 23.6L157.6 115C157.6 115.1 159.3 151.8 159.3 151.8C159.4 154.2 161.4 156.2 163.9 156.2ZM133.7 156.1C135.9 156.1 137.6 154.4 137.7 152.2L140 115L137.7 35.2C137.6 33 135.9 31.3 133.7 31.3C131.5 31.3 129.8 33 129.7 35.2L127.6 115L129.7 152.2C129.8 154.4 131.5 156.1 133.7 156.1ZM60.1 155.7C61.4 155.7 62.4 154.7 62.5 153.3L65.9 114.9L62.5 78.3C62.4 76.9 61.4 75.9 60.1 75.9C58.8 75.9 57.8 76.9 57.7 78.3L54.7 114.9L57.7 153.3C57.7 154.7 58.8 155.7 60.1 155.7ZM31.4 153.6C32.3 153.6 33.1 152.9 33.2 151.8L37 114.8L33.2 76.4C33.1 75.4 32.3 74.6 31.4 74.6C30.5 74.6 29.7 75.3 29.6 76.4L26.2 114.8L29.6 151.8C29.7 152.9 30.5 153.6 31.4 153.6ZM148.7 33.9C146.4 33.9 144.5 35.8 144.4 38.1L142.5 115L144.4 152C144.4 154.4 146.3 156.2 148.7 156.2C151 156.2 152.9 154.3 153 152L155.1 115L153 38.1C152.9 35.7 151.1 33.9 148.7 33.9ZM89.2 156.1C90.8 156.1 92.2 154.8 92.2 153.1L95.2 114.9L92.2 41.8C92.1 40.1 90.8 38.8 89.2 38.8C87.6 38.8 86.2 40.1 86.2 41.8L83.6 114.9L86.2 153.1C86.2 154.8 87.5 156.1 89.2 156.1ZM122.4 152.5L125 114.9L122.4 33C122.3 31 120.7 29.4 118.8 29.4C116.8 29.4 115.2 31 115.2 33L112.9 114.9L115.2 152.5C115.3 154.5 116.9 156.1 118.8 156.1C120.7 156.1 122.3 154.5 122.4 152.5ZM315.6 67.8C309.5 67.8 303.7 69 298.5 71.2C295 31.3 261.5 0 220.7 0C210.7 0 201 2 192.4 5.3C189.1 6.6 188.2 7.9 188.1 10.5V151C188.1 153.7 190.2 156 192.9 156.2C193 156.2 314.9 156.3 315.6 156.3C340.1 156.3 359.9 136.5 359.9 112C359.9 87.6 340.1 67.8 315.6 67.8ZM179 10.4C176.3 10.4 174.2 12.6 174.1 15.3L172.1 115.1L174.1 151.3C174.1 153.9 176.3 156.1 179 156.1C181.7 156.1 183.8 153.9 183.9 151.2L186.1 115L183.9 15.2C183.9 12.6 181.7 10.4 179 10.4ZM35.7 184.5C30.5 183.3 29 182.6 29 180.5C29 179 30.2 177.5 33.7 177.5C36.7 177.5 39.1 178.7 41.2 180.9L46 176.3C42.9 173 39.1 171.1 34 171.1C27.5 171.1 22.2 174.8 22.2 180.8C22.2 187.3 26.5 189.2 32.5 190.7C38.7 192.1 39.9 193.1 39.9 195.2C39.9 197.7 38.1 198.8 34.1 198.8C30.9 198.8 28 197.7 25.6 195L20.8 199.3C23.3 203 28.1 205.3 33.6 205.3C42.6 205.3 46.6 201.1 46.6 194.8C46.7 187.5 40.9 185.7 35.7 184.5ZM66.1 171.1C57.1 171.1 51.8 178.1 51.8 188.1C51.8 198.2 57.1 205.1 66.1 205.1C75.1 205.1 80.5 198.1 80.5 188.1C80.4 178.1 75.1 171.1 66.1 171.1ZM66.1 198.7C60.8 198.7 58.5 194.1 58.5 188.2C58.5 182.3 60.7 177.7 66.1 177.7C71.4 177.7 73.7 182.3 73.7 188.2C73.6 194.1 71.4 198.7 66.1 198.7ZM107.1 190.2C107.1 195.5 104.5 198.7 100.3 198.7C96.1 198.7 93.6 195.3 93.6 190.1V171.6H86.9V190.2C86.9 199.8 92.3 205.2 100.3 205.2C108.7 205.2 113.7 199.7 113.7 190.1V171.6H107.1V190.2ZM142.2 185.6C142.2 187.4 142.3 191.6 142.3 192.8C141.9 191.9 140.8 190.3 140 189.1L128.3 171.6H122V204.6H128.5V190.1C128.5 188.3 128.4 184.1 128.4 182.9C128.8 183.7 129.9 185.4 130.7 186.6L142.8 204.6H148.7V171.6H142.2V185.6ZM167.6 171.6H157.3V204.6H167.2C175.7 204.6 184.1 199.7 184.1 188.1C184 176.1 177 171.6 167.6 171.6ZM167.1 198.3H163.8V178.1H167.3C174.3 178.1 177.2 181.4 177.2 188.2C177.2 194.2 174 198.3 167.1 198.3ZM204.4 177.7C207.4 177.7 209.3 179 210.4 181.3L216.5 178.5C214.4 174.2 210.6 171.2 204.4 171.2C195.8 171.2 189.7 178.2 189.7 188.2C189.7 198.6 195.5 205.2 204.1 205.2C210.1 205.2 214.1 202.4 216.3 197.7L210.7 194.4C209 197.3 207.2 198.6 204.2 198.6C199.2 198.6 196.4 194.1 196.4 188.1C196.6 182 199.5 177.7 204.4 177.7ZM228.9 171.6H222.3V204.6H242.2V198.1H228.9V171.6ZM259.6 171.1C250.6 171.1 245.2 178.1 245.2 188.1C245.2 198.2 250.5 205.1 259.6 205.1C268.6 205.1 273.9 198.1 273.9 188.1C273.9 178.1 268.6 171.1 259.6 171.1ZM259.6 198.7C254.3 198.7 252 194.1 252 188.2C252 182.3 254.2 177.7 259.6 177.7C264.9 177.7 267.1 182.3 267.1 188.2C267.1 194.1 264.9 198.7 259.6 198.7ZM300.6 190.2C300.6 195.5 298 198.7 293.8 198.7C289.6 198.7 287 195.3 287 190.1V171.6H280.4V190.2C280.4 199.8 285.8 205.2 293.8 205.2C302.2 205.2 307.2 199.7 307.2 190.1V171.6H300.6V190.2ZM325.8 171.6H315.5V204.6H325.4C333.9 204.6 342.3 199.7 342.3 188.1C342.2 176.1 335.3 171.6 325.8 171.6ZM325.3 198.3H322V178.1H325.5C332.5 178.1 335.4 181.4 335.4 188.2C335.4 194.2 332.3 198.3 325.3 198.3Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="179.9" y1="-0.0088" x2="179.9" y2="205.209" gradientUnits="userSpaceOnUse">
        <stop stopColor={color(theme, true)} />
        <stop offset="1" stopColor={color(theme, false)} />
      </linearGradient>
    </defs>
  </svg>
)
