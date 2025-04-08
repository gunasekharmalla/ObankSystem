import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';
<<<<<<< HEAD
import './home.css'; // Make sure this import is correct

const Homepage = () => {
  return (
    <div className="home-container">
      
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="logo">ObankSystem</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Patientlogin">Patient</Link></li>
            <li><Link to="/Doctorlogin">Doctor</Link></li>
            <li><Link to="/organlist">Organ List</Link></li>
          </ul>
        </div>
      </nav>
=======
import Navbar from './Navbar';
import App from '../App';
import RecipientRecommendations from './Recommendation.jsx';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
       <nav style={styles.navbar}>
            <h2 style={styles.logo}>My Blog</h2>
            <ul style={styles.navLinks}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/about" style={styles.link}>About</Link></li>
              <li><Link to="/contact" style={styles.link}>Contact</Link></li>
              <li><Link to="/Patientlogin" style={styles.link}>Patient</Link></li>
              <li><Link to="/Doctorlogin" style={styles.link}>Doctor</Link></li>
              <li><Link to="/RecipientRecommendations"style={styles.link}>Recommendation</Link> </li>
            </ul>
          </nav>
>>>>>>> 8fceb2dfae43d9611b9a2cad4bbcc6ea0c9233bb

      {/* ---------- MAIN SECTION ---------- */}
      <main className="main-content">
        <h2 className="main-title">Welcome to ObankSystem</h2>
        <p className="main-description">
          A platform to manage organ donations, connect patients and doctors, and integrate AI-driven support for medical needs.
        </p>

        <div className="card-grid">
          <div className="card">
            <img src="https://source.unsplash.com/300x200/?doctor" alt="Doctor" className="card-img" />
            <h3 className="card-title">Connect with Doctors</h3>
            <p className="card-text">Find expert medical professionals to guide and treat patients in need.</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/300x200/?hospital" alt="Hospital" className="card-img" />
            <h3 className="card-title">Hospital Access</h3>
            <p className="card-text">Seamlessly integrate hospital data for organ availability and patient history.</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/300x200/?ai,health" alt="AI Integration" className="card-img" />
            <h3 className="card-title">AI Integration</h3>
            <p className="card-text">Leverage AI tools to make better health predictions and match organ donors.</p>
          </div>
        </div>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left side text */}
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} ObankSystem. All rights reserved.</p>
            <p>Powered by React & Express | Designed with 💙</p>
          </div>

          {/* Right-aligned social icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100069855804824" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="https://x.com/CharanBehara3" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="icon" />
            </a>
            <a href="https://www.instagram.com/cherry_b45/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="icon" />
            </a>
            <a href="https://web.telegram.org/a/#5082494190" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className="icon" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Homepage;