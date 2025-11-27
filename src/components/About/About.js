import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiTailwindcss,
  SiPostman,
  SiVisualstudiocode,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";
import "./About.css";
import aboutImage from "../../assets/images/hero-img.png";

const About = () => {
  const programmingLanguages = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Java", icon: <FaJava /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  const frameworks = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
  ];

  const databases = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know more about my skills and expertise</p>
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <div className="image-container">
              <img src={aboutImage} alt="About Yehan Dinuka" />
            </div>
          </div>

          <div className="about-text" data-aos="fade-left">
            <h3>User Interface And User Experience App Editing</h3>
            <p>
              I'm a passionate Fullstack Developer and UI/UX Designer with
              expertise in building modern web applications. I specialize in
              creating seamless user experiences and scalable backend solutions.
              With a strong foundation in both design and development, I bring
              ideas to life through clean code and intuitive interfaces.
            </p>
            <p>
              My journey in software development has equipped me with a diverse
              skill set, allowing me to handle projects from concept to
              deployment. I'm constantly learning and adapting to new
              technologies to deliver the best solutions.
            </p>
            <a
              href="/Dinuka Gimhana_CV.pdf"
              download="Dinuka Gimhana_CV.pdf"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          {/* Programming Languages */}
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="category-title">
              {/* <span className="icon-wrapper">💻</span> */}
              Programming Languages
            </h3>
            <div className="skills-grid">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="category-title">
              {/* <span className="icon-wrapper">🚀</span> */}
              Frameworks & Libraries
            </h3>
            <div className="skills-grid">
              {frameworks.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="category-title">
              {/* <span className="icon-wrapper">🛠️</span> */}
              Tools & Technologies
            </h3>
            <div className="skills-grid">
              {tools.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="category-title">
              {/* <span className="icon-wrapper">🗄️</span> */}
              Databases
            </h3>
            <div className="skills-grid">
              {databases.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <h3 className="category-title ">
          {/* <span className="icon-wrapper">🗄️</span> */}
          Design Tools Experience
        </h3>
        <div className="experience-section" data-aos="fade-up">
          <div className="experience-card">
            <div className="exp-icon">
              <FaFigma />
            </div>
            <h3>100%</h3>
            <p>Figma</p>
          </div>
          <div className="experience-card">
            <div className="exp-icon">
              <SiAdobexd />
            </div>
            <h3>75%</h3>
            <p>Adobe XD</p>
          </div>
          <div className="experience-card">
            <div className="exp-icon">
              <SiAdobephotoshop />
            </div>
            <h3>90%</h3>
            <p>Adobe Photoshop</p>
          </div>
          <div className="experience-card">
            <div className="exp-icon">
              <SiAdobeillustrator />
            </div>
            <h3>60%</h3>
            <p>Adobe Illustrator</p>
          </div>
          <div className="experience-card">
            <div className="exp-icon">
              <SiAdobepremierepro />
            </div>
            <h3>85%</h3>
            <p>Adobe Premiere</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
