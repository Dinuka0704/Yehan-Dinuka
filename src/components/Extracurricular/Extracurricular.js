import React from "react";
import "./Extracurricular.css";
import activity1 from "../../assets/images/activity1.jpg";
import activity3 from "../../assets/images/activity3.jpeg";
import activity4 from "../../assets/images/activity4.jpg";
import activity5 from "../../assets/images/activity5.jpg";
import activity6 from "../../assets/images/activity6.jpg";
import activity8 from "../../assets/images/activity8.png";

const Extracurricular = () => {
  const activities = [
    {
      title: "Participant",
      organization: "EXE- Flagship Game Development Competition",
      period: "2025",
      description:
        "Led the university cricket team to regional championship victory. Organized inter-university tournaments and training sessions.",
      image: activity1,
      skills: ["Team Work", "Team Management", "Strategy"],
    },
    {
      title: "SLUG XV Gold Medal Winner",
      organization: "Sri Lanka University Games 2025",
      period: "2025",
      description:
        "Organized hackathons, coding workshops, and tech talks. Managed a team of 50+ members and collaborated with industry partners.",
      image: activity3,
      skills: ["Event Management", "Public Speaking", "Networking"],
    },
    {
      title: "Technical Volunteer",
      organization: "ICARC 2025",
      period: "2025",
      description:
        "Coordinated community service projects including teaching programming to underprivileged students and organizing donation drives.",
      image: activity4,
      skills: ["Social Impact", "Coordination", "Mentoring"],
    },
    {
      title: "Video Editing Team Lead",
      organization: "InspireIEEE 2025",
      period: "2025",
      description:
        "Competed in national debate competitions. Won Best Speaker award in 2021. Enhanced critical thinking and communication skills.",
      image: activity5,
      skills: ["Communication", "Critical Thinking", "Research"],
    },
    {
      title: "Bronz Medalist",
      organization: "Inter University Games 2024",
      period: "2024",
      description:
        "Lead guitarist and vocalist for university band. Performed at multiple university events and inter-college festivals.",
      image: activity6,
      skills: ["Creativity", "Collaboration", "Performance"],
    },
    {
      title: "Active Member",
      organization: "Lumetrix Media",
      period: "2024-Present",
      description:
        "Participated in tree planting campaigns, beach cleanups, and sustainability awareness programs across campus.",
      image:
        activity8,
      skills: ["Environmental Awareness", "Teamwork", "Initiative"],
    },
  ];

  return (
    <section id="extracurricular" className="extracurricular">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Extracurricular Activities</h2>
          <p>
            Beyond academics - leadership, creativity, and community engagement
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="activity-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <div className="activity-overlay">
                  <span className="activity-period">{activity.period}</span>
                </div>
              </div>

              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p className="activity-org">
                  <span className="org-icon">🏛️</span>
                  {activity.organization}
                </p>
                {/* <p className="activity-description">{activity.description}</p> */}

                {/* <div className="activity-skills">
                  {activity.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="activities-summary" data-aos="fade-up">
          <div className="summary-item">
            <div className="summary-icon">🏆</div>
            <h4>10+</h4>
            <p>Awards & Honors</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">👥</div>
            <h4>5+</h4>
            <p>Leadership Roles</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🎯</div>
            <h4>20+</h4>
            <p>Events Organized</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🤝</div>
            <h4>100+</h4>
            <p>Community Hours</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Extracurricular;
