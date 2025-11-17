import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";
// import contact from "../../assets/images/Photo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with your Web3Forms Access Key
    const accessKey = "db07d7c2-ecb7-4242-be44-cf2403ca0757";

    const formDataToSend = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again or email me directly.");
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      alert("Failed to send message. Please try again or email me directly.");
      console.error("Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Me</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            {/* <div className="contact-image">
              <img
                src={contact}
                alt="Contact"
              />
            </div> */}

            <div className="contact-details">
              <h3>Get In Touch</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <a href="mailto:dinuka.gimhana2001@gmail.com">
                      dinuka.gimhana2001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <a href="tel:+94766287531">+94 766 287 531</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <p>Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSending}
              >
                <FaPaperPlane />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
