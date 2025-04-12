import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
    backgroundColor: '#3447AA',
    color: '#fff',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
    filter: 'brightness(0) invert(1)', // ensures white icons on dark background
    transition: 'transform 0.3s ease',
  },
  
};

const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={styles.homepage}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>ObankSystem</div>
        <ul style={styles.navLinks}>
  <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
  <li style={styles.navItem}>
    <span
      onClick={() => {
        const servicesSection = document.getElementById('services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{ ...styles.link, cursor: 'pointer' }}
    >
      Services
    </span>
  </li>
  <li style={styles.navItem}>
    <span
      onClick={() => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{ ...styles.link, cursor: 'pointer' }}
    >
      About
    </span>
  </li>


  <li style={styles.navItem}>
  
      <span
      onClick={() => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{ ...styles.link, cursor: 'pointer' }}
    > Contact   
    </span>
  </li>

  <li
    style={{ ...styles.navItem, position: 'relative' }}
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
        <h2> “One donation can save up to 8 lives. Join the Obank movement today!”</h2>
        <h3>Your Trusted Organ Donation & Availability Network</h3>
        <h3> Search Available Organs Instantly</h3>
        <p>Find the required organs across verified hospitals and donors in real-time.</p>
        <h3> Connect with Donors & Hospitals</h3>
        <p>Seamlessly connect with verified donors and hospitals for organ availability.</p>
        <h3> Live Organ Availability Dashboard</h3>
        <p>Stay updated with the latest organ availability status across locations.</p>
        <h3> Awareness & Support</h3>
        <p>Learn more about organ donation, eligibility, and how you can help save lives.</p>
        <h3> Secure & Confidential</h3>
        <p>All your data is protected with top-level encryption and privacy standards.</p>
        <h3> Lets Stretch Our Hands to Join the Movement</h3>
      </section>

      
                
      {/* Footer */}

     

      
    </div>

          

  );
};

export default Homepage;                                                                                                         