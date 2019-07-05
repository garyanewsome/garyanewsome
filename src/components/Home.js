import React from "react"

import Header from "./Header"

import "../assets/css/home.css"

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="home-sub-headings">
            <h1>
              Developer at{" "}
              <a
                href="https://www.industryweapon.com/"
                className="iw-link home-link"
                target="_blank"
              >
                Industry Weapon
              </a>
            </h1>
            <h2>
              Formerly,{" "}
              <span className="savvy-link home-link">SavvySoftWorks, LLC</span>
            </h2>
            <h3>Open Source Contributor</h3>
            <h3>Creator, Musician, Artist ...</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
