import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const Header = (props) => {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "/home";

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <SeoHeader />
      <header className="header">
        {/* Logo */}
        <NavLink to={link} className="logo">
          <span className="logo-name">Deepika M</span>
        </NavLink>

        {/* Hamburger Icon */}
        <div
          className={`menu-icon ${isMenuOpen ? "menu-icon-open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`menu ${isMenuOpen ? "menu-open" : ""}`}
          style={{ backgroundColor: theme.body }}
        >
          <li>
            <NavLink to="/home" style={{ color: theme.text }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/business-details" style={{ color: theme.text }}>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" style={{ color: theme.text }}>
              Academics
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" style={{ color: theme.text }}>
              Career Track
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={{ color: theme.text }}>
              Journey Highlights
            </NavLink>
          </li>
          <li>
            <NavLink to="/opensource" style={{ color: theme.text }}>
              Travel Diaries
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ color: theme.text }}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
