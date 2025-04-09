import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';
import './Home.css';

const Homepage = () => {
  const cardData = [
    { title: "Connect with Doctors", img: "doctor", text: "Find expert medical professionals." },
    { title: "Hospital Access", img: "hospital", text: "Integrate hospital data easily." },
    { title: "AI Integration", img: "ai,health", text: "Use AI for better health predictions." },
    { title: "Organ Donation Info", img: "organ donation", text: "Learn more about organ donations." },
    { title: "Secure Records", img: "records", text: "Blockchain-based secure data." },
    { title: "Live Updates", img: "monitoring", text: "Real-time organ availability." },
    { title: "Awareness Campaigns", img: "awareness", text: "Join organ donation drives." },
    { title: "User Dashboard", img: "dashboard", text: "Track your activity easily." },
    { title: "Health Tips", img: "health tips", text: "Daily health and wellness advice." }
  ];

  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">ObankSystem</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-content">
              <li><Link to="/Patientlogin">Patient</Link></li>
              <li><Link to="/Doctorlogin">Doctor</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Banner */}
      <div className="banner">
        <div className="banner-text">
          <h1>"Saving lives through connection and compassion"</h1>
        </div>
      </div>

      {/* Cards Section */}
      <section className="cards-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <img
                src={`https://source.unsplash.com/400x250/?${card.img}`}
                alt={card.title}
                className="card-img"
              />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} ObankSystem. All rights reserved.</p>
            <p>Address: Visakhapatnam, Andhra Pradesh, India</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100069855804824" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="https://x.com/CharanBehara3" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" className="icon" />
            </a>
            <a href="https://www.instagram.com/cherry_b45/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="icon" />
            </a>
            <a href="https://web.telegram.org/a/#5082494190" target="_blank" rel="noreferrer">
              <img src={telegramIcon} alt="Telegram" className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
