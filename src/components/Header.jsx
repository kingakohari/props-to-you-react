import React from 'react'

function Header(props) {

  return (
  <div className="header">
    <div className="logo">
      <h1>{props.logo}</h1>
    </div>
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </div>
  </div>
  )
  
  
}

export default Header;