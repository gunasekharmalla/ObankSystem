import React, { useEffect } from 'react';
import './about.css';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';



const team = [
  {
    name: 'Yamuna',
    img: '/images/yamuna.jpeg',
    link: 'https://www.linkedin.com/in/yamuna-mapadini-739111295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    bio: 'Frontend Developer passionate about React and UX.',
  },
  {
    name: 'Preethi',
    img: '/images/preethi.jpeg', // ✅ Fixed this one
    link: 'https://www.linkedin.com/in/puppala-sasi-preethi-5746a4306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    bio: 'AI/ML Engineer working on healthcare analytics.',
  },
  {
    name: 'BLS Charan',
    img: '/images/charan.jpeg',
    link: 'https://www.linkedin.com/in/behara-lakshmi-sai-charan-b5b25a2b8/',
    bio: 'Backend Engineer focused on Node.js and security.',
  },
  {
    name: 'M Guna Sekhar',
    img: '/images/gunasekhar.jpeg',
    link: 'https://www.linkedin.com/in/malla-guna-sekhar-5a2959288/',
    bio: 'UI Designer creating beautiful interfaces.',
  },
];


const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="about" className="about-section" style={{ backgroundColor: 'white' }}>
      <div className="about-container">
         <h2 className="about-title hidden" style={{ transitionDelay: '0.1s' }}>
              About ObankSystem
          </h2>
          <p className="about-text hidden" style={{ transitionDelay: '0.2s' }}>
            ObankSystem is a modern and secure digital organ bank management platform that bridges the gap between donors, recipients, and healthcare professionals.
          </p>

        {/*
        <div className="about-cards">
          <div className="about-card hidden">
            <h3>🩺 Mission</h3>
            <p>
              To create a reliable, transparent, and fast organ management system that prioritizes patient care and ethical practices.
            </p>
          </div>
          <div className="about-card hidden">
            <h3>💡 Vision</h3>
            <p>
              To be the leading platform that connects hospitals, doctors, and organ donors globally using AI-powered tools and analytics.
            </p>
          </div>
          <div className="about-card hidden">
            <h3>🤝 Team</h3>
            <p>
              Our team consists of passionate developers, medical advisors, and AI specialists working together for social impact and innovation.
            </p>
          </div>
        </div>
              */}


            <div className="about-cards">
            <div className="about-card hidden" style={{ transitionDelay: '0.3s' }}>
              <h3>🩺 Mission</h3>
              <p>To create a reliable, transparent, and fast organ management system...</p>
            </div>
            <div className="about-card hidden" style={{ transitionDelay: '0.4s' }}>
              <h3>💡 Vision</h3>
              <p>To be the leading platform that connects hospitals, doctors, and organ donors...</p>
            </div>
            <div className="about-card hidden" style={{ transitionDelay: '0.5s' }}>
              <h3>🤝 Team</h3>
              <p>Our team consists of passionate developers, medical advisors, and AI specialists...</p>
            </div>
          </div>


        <div className="obank-intro">
        <div className="obank-feature hidden" style={{ transitionDelay: '0.6s' }}>
            <img src="/images/easy.jpeg" alt="Organ Donation" className="obank-img" />
            <div className="obank-text">
              <h3>Organ Matching Made Easy</h3>
              <p>
                Our intelligent system matches organ donors with recipients in real-time using advanced AI algorithms. This reduces waiting time and improves transplant success rates.
              </p>
            </div>
          </div>

          <div className="obank-feature hidden" style={{ transitionDelay: '0.8s' }}>
            <img src="/images/security.jpeg" alt="Secure System" className="obank-img" />
            <div className="obank-text">
              <h3>Secure & Transparent Process</h3>
              <p>
                With blockchain-enabled records and role-based access, every activity in ObankSystem is logged for complete transparency and patient safety.
              </p>
            </div>
          </div>
        </div>

        <h3 className="team-title hidden" style={{textAlign:'center'}}>Meet Our Team </h3>
        <h2>Meet Our Team </h2>
        <div className="team-members">
          {team.map((member, index) => (
            <a
              key={index}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card hidden"
            >
              <div className="photo-container">
                <img src={member.img} alt={member.name} className="team-photo" />
                <div className="bio-overlay">{member.bio}</div>
              </div>
              <p className="team-name">{member.name}</p>
            </a>
          ))}
        </div>
      </div>  {/*team member div end */}

          <footer className="footer">
      <div className="footer-container">
        <p>Helping save lives through organ donation and awareness.</p>
        <p>© 2025 ObankSystem. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="footer-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>



    </section>
  );
};

export default About;
