import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import proj1 from "../../assets/images/proj1.png";
import proj2 from "../../assets/images/proj3.png";
import proj3 from "../../assets/images/proj4.png";
import proj4 from "../../assets/images/proj5.png";
import proj5 from "../../assets/images/proj6.png";


const Projects = () => {
  const projects = [
    {
      title: "LedgerVote",
      description:
        "secure blockchain-powered voting platform ensuring transparency, anonymity, and integrity in elections",
      image:
        proj1,
      technologies: ["React", "Spring Boot", "MySQL", "Solidity"],
      github: "https://github.com/LedgerVote",
      demo: "https://www.linkedin.com/posts/dinuka-gimhana-4746a329b_capstoneproject-blockchainvoting-smartcontracts-activity-7353803689339314176-KZMM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiJ-NgBphlxQiAWOnXbfFoFVGO5q7qbjig",
    },
    {
      title: "Inventory Management System",
      description:
        "Engineered a Dockerized inventory app with a secure API, transaction ledgers, and role-based access control using React and Node.js.",
      image:
        proj2,
      technologies: ["React.js","Node.js", "Express.js", "Tailwindcss", "PostgreSQL"],
      github: "https://github.com/Dinuka0704/inventory-management-system",
      demo: "#",
    },
    {
      title: "Sport Center Management System",
      description:
        "Developed a Laravel-based application to manage sports equipment, featuring student ID borrowing, automated fine tracking, and detailed inventory categorization (usable vs. broken).",
      image:
        proj3,
      technologies: ["Laravel", "MySQL", "Boostrap"],
      github: "https://github.com/yehandinuka/portfolio-builder",
      demo: "#",
    },
    {
      title: "Kolonna Store Track",
      description:
        " A web-based Store Management System developed for the Kolonna Divisional Secretariat to automate operations and manage inventory efficiently",
      image:
        proj4,
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/yehandinuka/social-dashboard",
      demo: "#",
    },
    {
      title: "Movie Hub",
      description:
        "A responsive movie discovery app built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, utilizing the TMDb API for real-time data fetching.",
      image:
        proj5,
      technologies: ["Next.js", "TMDB API", "Tailwindcss"],
      github: "https://github.com/Dinuka0704/movie_hub",
      demo: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-responsive fitness app for tracking workouts, nutrition, progress with data visualization and goal setting.",
      image:
        "https://via.placeholder.com/600x400/10b981/ffffff?text=Fitness+Tracker",
      technologies: ["React Native", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/yehandinuka/fitness-tracker",
      demo: "#",
    },    
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Showcasing my latest work and contributions</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta" data-aos="fade-up">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/Dinuka0704"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
