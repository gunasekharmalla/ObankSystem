import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';
import Navbar from './Navbar';
import App from '../App';

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
            </ul>
          </nav>

          <main className="main-content">
        <h2 className="main-title">Welcome to ObankSystem</h2>
        <p className="main-description">
          A platform to manage organ donations, connect patients and doctors, and integrate AI-driven support for medical needs.
        </p>
        </main>
{/*<
        //cards 
        <div className="card-grid">
          <div className="card">
            <img src={sample1} alt="Sample 1" className="card-img" />
            <h3 className="card-title">Organ Match</h3>
            <p className="card-text">AI assisted organ match and suggestions for doctors.</p>
          </div>
          <div className="card">
            <img src={sample2} alt="Sample 2" className="card-img" />
            <h3 className="card-title">Patient Record</h3>
            <p className="card-text">Easy to track and update patient history and reports.</p>
          </div>
          <div className="card">
            <img src={sample3} alt="Sample 3" className="card-img" />
            <h3 className="card-title">Secure Requests</h3>
            <p className="card-text">Secure and authorized organ requests and approvals.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} ObankSystem. All rights reserved.</p>
            <p>Powered by React & Express | Designed with 💙</p>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="icon" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
    navbar: {
      background: "rgba(87, 192, 237, 0.8)",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    logo: {
      margin: "2px"
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      margin: "0",
      padding: "0"
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold"
    },
    footer: {
      background: "rgba(87, 192, 237, 0.8)",
      color: "white",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0",
      marginTop: "auto",
    },
  };

export default Homepage;
