import React, { useState, useEffect, useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">
            <div className="logo-container">
              <span className="logo-bracket">{"<"}</span>
              <span className="logo-text">Yehan Dinuka</span>
              <span className="logo-bracket">{"/>"}</span>
            </div>
          </a>

          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeMobileMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#extracurricular" onClick={closeMobileMenu}>
                Activities
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMobileMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
