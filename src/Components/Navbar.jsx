import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><div className='allnav'>
      <div className='logo'>
        Manuri &copy;
      </div>
      <div>
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="hamburger">
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
      </button>

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-backdrop"></div>
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="link-text">Home</span>
              <span className="link-dot"></span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="link-text">About</span>
              <span className="link-dot"></span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="link-text">Projects</span>
              <span className="link-dot"></span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="link-text">Contact</span>
              <span className="link-dot"></span>
            </a>
          </li>
        </ul>
        
      </nav> </div></div>
    </>
  );
};

export default Navbar;