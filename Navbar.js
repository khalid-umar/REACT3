// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav>
      <img src="your-image-url-here" alt="Your Alt Text" role="img" />
      {/* Rest of your Navbar code */}
        <div className="navbar">
          <h2>NFTium</h2>
          <ul>
            <li>Collection</li>
            <li>Prices</li>
            <li>Support</li>
          </ul>
        </div>
      );
    }

export default Navbar;
