import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaWhatsapp, FaMedium } from "react-icons/fa";
import "./Hero.css";
// Import your image - replace 'hero-photo.jpg' with your actual filename
import heroPhoto from "../../assets/images/Photo.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <p className="greeting">Hi I am</p>
            <h1 className="name">Yehan Dinuka</h1>
            <div className="profession-container">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Videographer/Editor",
                    2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="profession"
                repeat={Infinity}
              />
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Dinuka0704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dinuka-gimhana-4746a329b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
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

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Hire Me
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>

            {/* <div className="stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>

          <div className="hero-image" data-aos="fade-left">
            <div className="image-wrapper">
              {/* <div className="image-bg"></div> */}
              <img src={heroPhoto} alt="Yehan Dinuka" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
