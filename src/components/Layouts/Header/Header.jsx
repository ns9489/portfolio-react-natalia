import React from 'react';
import './Navbar.css'

export const Header = () => {
  return (
    <header>
    
      <nav className="navbar">
        <h2>Natalia <span>Sierra</span></h2>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#AboutMe">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#Education">Education</a>
          </li>
          <li className="navbar-item">
            <a href="#Project">Project</a>
          </li>
          <li className="navbar-item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}