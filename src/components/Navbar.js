import { FaRocket } from 'react-icons/fa';
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><FaRocket /> CreateASaaS</div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <button className="cta-button">Get Started</button>
    </nav>
  );
};

export default Navbar;

