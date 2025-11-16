import React from "react";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2020 - 2024",
      description:
        "Specialized in Software Engineering and Web Development. Completed major projects in full-stack development and UI/UX design.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List: 6 semesters",
        "Best Final Year Project Award",
      ],
    },
    {
      degree: "Advanced Level - Physical Science",
      institution: "Royal College",
      period: "2017 - 2019",
      description:
        "Focused on Mathematics, Physics, and Chemistry with strong analytical and problem-solving skills.",
      achievements: [
        "A grades in all subjects",
        "District Rank: Top 10",
        "Science Club President",
      ],
    },
    {
      degree: "Ordinary Level",
      institution: "Royal College",
      period: "2012 - 2016",
      description:
        "Completed with excellent results in Mathematics, Science, and Technology subjects.",
      achievements: [
        "9 A grades",
        "School Champion - Mathematics Olympiad",
        "IT Club Member",
      ],
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      year: "2023",
    },
    {
      name: "UI/UX Design Professional",
      issuer: "Google",
      year: "2023",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "React Advanced Patterns",
      issuer: "Udemy",
      year: "2022",
    },
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
                  <div className="cert-icon">
                    <FaGraduationCap />
                  </div>
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
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
