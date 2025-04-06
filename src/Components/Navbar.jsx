import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>My Blog</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/patientlogin" style={styles.link}>Patient</Link></li>
        <li><Link to="/doctorlogin" style={styles.link}>Doctor</Link></li>
      </ul>
    </nav>
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
  }
};

export default Navbar;
