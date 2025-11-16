import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
      image:
        "https://via.placeholder.com/600x400/059669/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yehandinuka/ecommerce-platform",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
      image:
        "https://via.placeholder.com/600x400/10b981/ffffff?text=Task+Manager",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/yehandinuka/task-management",
      demo: "#",
    },
    {
      title: "Portfolio Website Builder",
      description:
        "A drag-and-drop portfolio website builder with customizable templates, real-time preview, and hosting capabilities.",
      image:
        "https://via.placeholder.com/600x400/059669/ffffff?text=Portfolio+Builder",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/yehandinuka/portfolio-builder",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.",
      image:
        "https://via.placeholder.com/600x400/10b981/ffffff?text=Social+Dashboard",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/yehandinuka/social-dashboard",
      demo: "#",
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "A platform for sharing and discovering recipes with user profiles, ratings, comments, and recipe collections.",
      image:
        "https://via.placeholder.com/600x400/059669/ffffff?text=Recipe+Platform",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3"],
      github: "https://github.com/yehandinuka/recipe-platform",
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
    {
      title: "Real Estate Marketplace",
      description:
        "Property listing platform with advanced search, virtual tours, agent profiles, and inquiry management system.",
      image:
        "https://via.placeholder.com/600x400/059669/ffffff?text=Real+Estate",
      technologies: ["React", "Spring Boot", "MySQL", "Google Maps API"],
      github: "https://github.com/yehandinuka/real-estate-marketplace",
      demo: "#",
    },
    {
      title: "Online Learning Platform",
      description:
        "Educational platform with course management, video streaming, quizzes, certificates, and progress tracking.",
      image:
        "https://via.placeholder.com/600x400/10b981/ffffff?text=Learning+Platform",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yehandinuka/learning-platform",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "Weather application with real-time updates, 7-day forecast, location-based weather alerts, and interactive maps.",
      image:
        "https://via.placeholder.com/600x400/059669/ffffff?text=Weather+App",
      technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
      github: "https://github.com/yehandinuka/weather-app",
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
            href="https://github.com/yehandinuka"
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
