import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import icon from 'public/icon.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="main-header">
      <div>
       {/* <Link to="/" className="logo">
          <img src="/icon.jpg" alt="icon" />
        </Link> */}

      <Link to="/" className="logo">Web Stories</Link></div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Desktop nav */}
      <ul className={`nav-items ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/electronic">Electronic</Link></li>
        <li><Link to="/fashion">Fashion</Link></li>
        <li><Link to="/techinfo">TechInfo</Link></li>
      </ul>
    </header>
  );
}

export default Header;
