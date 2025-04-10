import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Welcome to OrganBank</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At OrganBank, we aim to bridge the gap between patients and life-saving organ donors. 
          Our real-time web platform helps streamline the process of finding available organs 
          by connecting hospitals, donors, and recipients across the country.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Services</h2>
        <ul>
          <li>🔍 Real-time Organ Availability Search</li>
          <li>🏥 Hospital and Doctor Integration</li>
          <li>📊 Analytics and Organ Demand Dashboard</li>
          <li>📢 Urgent Organ Alerts & Notifications</li>
          <li>🔐 Secure and Verified Donor Registry</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Real-Time Access & Transparency</h2>
        <p>
          We believe in the power of transparency. With OrganBank, patients and doctors can view 
          the status of organ availability instantly, making life-saving decisions faster and easier.
        </p>
      </section>

      <section className="about-section">
        <h2>Connect With Us</h2>
        <p>
          Whether you're a donor, hospital, or patient in need — OrganBank is here to support you. 
          Together, we can save more lives. 💖
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default About;
