import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';

const styles = {
  homepage: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#34E0A1',
    color: '#fff',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '18px',
    padding: '8px 16px',
    display: 'inline-block',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '8px 16px',
    display: 'inline-block',
  },
  button: {
    backgroundColor: '#04AA6D',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '18px',
    marginLeft: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    color: '#007bff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    borderRadius: '4px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '120px',
  },
  dropdownItem: {
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#007bff',
    whiteSpace: 'nowrap',
  },
  banner: {
    backgroundColor: '#f0f4f8',
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  bannerText: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  cardsSection: {
    padding: '2rem',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '2rem',
  },
  cardGrid: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  footer: {
    backgroundColor: '#3447AA',
    color: '#fff',
    padding: '2rem',
    marginTop: 'auto',
    marginBottom: '0',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div style={styles.homepage}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>ObankSystem</div>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li>
                <span
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ ...styles.link, ...styles.navItem, cursor: 'pointer' }}
                >
                  Services
                </span>
            </li>
              <li>
            <span
                  onClick={() => {
                    const servicesSection = document.getElementById('about');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ ...styles.link, ...styles.navItem, cursor: 'pointer' }}
                >
                  About
                </span>
            </li>

          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          <li
            style={styles.navItem}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span style={styles.link}>Login</span>
            {isDropdownOpen && (
              <ul style={styles.dropdownContent}>
                <li><Link to="/Patientlogin" style={styles.dropdownItem}>Patient</Link></li>
                <li><Link to="/Doctorlogin" style={styles.dropdownItem}>Doctor</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Banner */}
      <section style={styles.banner}>
        <div style={styles.bannerText}>Welcome to ObankSystem</div>
      </section>

      {/* Cards Section 
      <section style={styles.cardsSection} id="new-services">
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <img src="https://source.unsplash.com/300x200/?doctor" alt="Doctor" style={styles.cardImg} />
            <h3 style={styles.cardTitle}>Connect with Doctors</h3>
            <p style={styles.cardText}>Find expert medical professionals to guide and treat patients in need.</p>
          </div>
          <div style={styles.card}>
            <img src="https://source.unsplash.com/300x200/?hospital" alt="Hospital" style={styles.cardImg} />
            <h3 style={styles.cardTitle}>Hospital Access</h3>
            <p style={styles.cardText}>Seamlessly integrate hospital data for organ availability and patient history.</p>
          </div>
          <div style={styles.card}>
            <img src="https://source.unsplash.com/300x200/?ai,health" alt="AI Integration" style={styles.cardImg} />
            <h3 style={styles.cardTitle}>AI Integration</h3>
            <p style={styles.cardText}>Leverage AI tools to make better health predictions and match organ donors.</p>
          </div>
        </div>
      </section>
                */}
      {/* Footer */}
      
    </div>
  );
};

export default Homepage;
