import React from "react";
import "./Extracurricular.css";

const Extracurricular = () => {
  const activities = [
    {
      title: "Sports Captain",
      organization: "University Sports Club",
      period: "2022 - 2023",
      description:
        "Led the university cricket team to regional championship victory. Organized inter-university tournaments and training sessions.",
      image: "https://via.placeholder.com/400x300/059669/ffffff?text=Sports",
      skills: ["Leadership", "Team Management", "Strategy"],
    },
    {
      title: "Tech Club President",
      organization: "University Technology Society",
      period: "2021 - 2023",
      description:
        "Organized hackathons, coding workshops, and tech talks. Managed a team of 50+ members and collaborated with industry partners.",
      image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Tech+Club",
      skills: ["Event Management", "Public Speaking", "Networking"],
    },
    {
      title: "Volunteer Coordinator",
      organization: "Community Development Initiative",
      period: "2020 - Present",
      description:
        "Coordinated community service projects including teaching programming to underprivileged students and organizing donation drives.",
      image: "https://via.placeholder.com/400x300/059669/ffffff?text=Volunteer",
      skills: ["Social Impact", "Coordination", "Mentoring"],
    },
    {
      title: "Debate Team Member",
      organization: "Inter-University Debate Society",
      period: "2019 - 2022",
      description:
        "Competed in national debate competitions. Won Best Speaker award in 2021. Enhanced critical thinking and communication skills.",
      image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Debate",
      skills: ["Communication", "Critical Thinking", "Research"],
    },
    {
      title: "Music Band Lead",
      organization: "University Music Society",
      period: "2020 - 2023",
      description:
        "Lead guitarist and vocalist for university band. Performed at multiple university events and inter-college festivals.",
      image: "https://via.placeholder.com/400x300/059669/ffffff?text=Music",
      skills: ["Creativity", "Collaboration", "Performance"],
    },
    {
      title: "Environmental Club Member",
      organization: "Green Campus Initiative",
      period: "2021 - Present",
      description:
        "Participated in tree planting campaigns, beach cleanups, and sustainability awareness programs across campus.",
      image:
        "https://via.placeholder.com/400x300/10b981/ffffff?text=Environment",
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
                <p className="activity-description">{activity.description}</p>

                <div className="activity-skills">
                  {activity.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="activities-summary" data-aos="fade-up">
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
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
