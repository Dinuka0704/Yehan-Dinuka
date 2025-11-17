import React from "react";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import "./Education.css";
import cert1 from "../../assets/images/cert1.jpg";
import cert2 from "../../assets/images/cert2.jpg";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Sabaragamuwa University of Sri Lanka",
      period: "Reading",
      description:
        "Specialized in Software Engineering and Web Development. Completed major projects in full-stack development and UI/UX design.",
      achievements: ["GPA: 3.6/4.0"],
    },
    {
      degree: "Advanced Level - Physical Science",
      institution: "St.Joseph Vaz College Wennappuwa",
      period: "2019 - 2021",
      description:
        "Focused on Mathematics, Physics, and Chemistry with strong analytical and problem-solving skills.",
      achievements: ["C grades in all subjects"],
    },
    {
      degree: "Ordinary Level",
      institution: "St.Joseph Vaz College Wennappuwa",
      period: "2016 - 2017",
      description:
        "Completed with excellent results in Mathematics, Science, and Technology subjects.",
      achievements: ["8 A 1 B grades", "Participant - Science Olympiad"],
    },
  ];

  const certifications = [
    {
      name: "CSS and Bootstrap and Javascript and PHP Programming all in one complete course",
      issuer: "Udemy",
      year: "2024",
      image:
        cert1,
    },
    {
      name: "Mastering Solidity, the Ethereum Programming Language",
      issuer: "Udemy",
      year: "2025",
      image:
        cert2,
    },
    // {
    //   name: "AWS Certified Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   year: "2022",
    //   image:
    //     "https://via.placeholder.com/400x300/059669/ffffff?text=AWS+Certificate",
    // },
    // {
    //   name: "React Advanced Patterns",
    //   issuer: "Udemy",
    //   year: "2022",
    //   image:
    //     "https://via.placeholder.com/400x300/10b981/ffffff?text=React+Certificate",
    // },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Education</h2>
          <p>My academic journey and qualifications</p>
        </div>

        <div className="education-content">
          {/* Timeline */}
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-period">
                      <FaCalendarAlt /> {edu.period}
                    </span>
                  </div>
                  <div className="timeline-institution">
                    <FaUniversity /> {edu.institution}
                  </div>
                  <p className="timeline-description">{edu.description}</p>
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certifications-section" data-aos="fade-up">
            <h3 className="cert-title">
              {/* <span className="icon-wrapper">🏆</span> */}
              Certifications & Courses
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="cert-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="cert-image">
                    <img src={cert.image} alt={cert.name} />
                    <div className="cert-overlay">
                      <div className="cert-icon">
                        <FaGraduationCap />
                      </div>
                    </div>
                  </div>
                  <div className="cert-details">
                    <h4>{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
