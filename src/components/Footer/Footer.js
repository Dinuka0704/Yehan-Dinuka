import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMedium,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-bracket">{"<"}</span>
              <span className="logo-text">Yehan Dinuka</span>
              <span className="logo-bracket">{"/>"}</span>
            </div>
            <p className="footer-description">
              Fullstack Developer & UI/UX Designer passionate about creating
              innovative and user-friendly digital experiences.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-info">
              <li>Email: dinuka.gimhana2001@gmail.com</li>
              <li>Phone: +94 76 628 7531</li>
              <li>Location: Colombo, Sri Lanka</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="footer-social">
              <a
                href="https://github.com/Dinuka0704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/Dinuka-gimhana-4746a329b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/0766287531"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://medium.com/@yehandinuka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Yehan Dinuka.
          </p>
          <p className="footer-rights">All rights reserved.</p>
        </div>

        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
