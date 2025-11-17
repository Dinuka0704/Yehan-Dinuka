import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Hero.css";
// Import your image - replace 'hero-photo.jpg' with your actual filename
import heroPhoto from "../../assets/images/hero-img.png";

const Hero = () => {
  const heroRef = useRef(null);

  // useEffect(() => {
  //   const hero = heroRef.current;
  //   if (!hero) return;

  //   const handleMouseMove = (e) => {
  //     const rect = hero.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;

  //     const ripple = document.createElement("div");
  //     ripple.className = "liquid-ripple";
  //     ripple.style.left = `${x}px`;
  //     ripple.style.top = `${y}px`;

  //     hero.appendChild(ripple);

  //     setTimeout(() => {
  //       ripple.remove();
  //     }, 1000);
  //   };

  //   hero.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     hero.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting" data-aos="fade-down" data-aos-delay="100">
              Hi I am
            </p>
            <h1 className="name" data-aos="fade-right" data-aos-delay="200">
              Yehan Dinuka
            </h1>
            <div
              className="profession-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Videographer/Editor",
                  2000,
                  "Photographer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="profession"
                repeat={Infinity}
              />
            </div>

            <div
              className="social-links"
              data-aos="fade-right"
              data-aos-delay="400"
            >
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
                href="https://wa.me/+94766287531"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              {/* <a
                href="https://medium.com/@yehandinuka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium />
              </a> */}
            </div>

            <div
              className="hero-buttons"
              data-aos="fade-up"
              data-aos-delay="500"
            >
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
              <div className="image-bg"></div>
              <img src={heroPhoto} alt="Yehan Dinuka" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
