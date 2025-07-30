// import { FaRocket } from 'react-icons/fa';
// import React, { useState } from 'react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo"><FaRocket /> CreateASaaS</div>
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//       <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
//         <li>Features</li>
//         <li>Pricing</li>
//         <li>Contact</li>
//       </ul>
//       <button className="cta-button">Get Started</button>
//     </nav>
//   );
// };

// export default Navbar;
import { FaRocket } from 'react-icons/fa';
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><FaRocket /> CreateASaaS</div>
       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
       </div>

      <ul className="nav-center">
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <button className="signin-btn">Sign In</button>
        <button className="cta-button">Create Account</button>
      </div>
    </nav>
  );
};

export default Navbar;

