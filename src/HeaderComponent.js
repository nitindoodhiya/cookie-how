// HeaderComponent.js
import React from 'react';
import './HeaderComponent.css'; // Create a corresponding CSS file for styling

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="./logo.jpeg" // Replace with the path to your logo image
          alt="Cookie How Logo"
          className="logo"
        />
        {/* <h1 className="company-name">Cookie How</h1> */}
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
